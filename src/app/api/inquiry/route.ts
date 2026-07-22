import { NextResponse } from "next/server";

/**
 * Inquiry form endpoint.
 *
 * Spam protection:
 *  - Honeypot field ("company") — bots that fill it are silently accepted
 *    but the inquiry is discarded.
 *  - Server-side validation of required fields.
 *
 * TODO before launch — deliver the inquiry somewhere useful. Options:
 *  1. Email via Resend/SendGrid/SES (store the API key in an env var,
 *     e.g. process.env.RESEND_API_KEY — never commit keys).
 *  2. Forward to a Google Sheet / CRM webhook.
 *  3. Save to a database.
 * The handler below validates and returns success so the front-end flow
 * is complete; add your delivery integration where marked.
 */

const MAX_UPLOAD_BYTES = 10 * 1024 * 1024; // 10 MB

export async function POST(request: Request) {
  try {
    const data = await request.formData();

    // Honeypot: pretend success, do nothing.
    if (String(data.get("company") || "").trim() !== "") {
      return NextResponse.json({ ok: true });
    }

    const required = ["fullName", "mobile", "email", "location", "projectType"];
    for (const field of required) {
      if (String(data.get(field) || "").trim() === "") {
        return NextResponse.json(
          { ok: false, error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    if (!data.get("consent")) {
      return NextResponse.json(
        { ok: false, error: "Consent is required" },
        { status: 400 }
      );
    }

    const email = String(data.get("email"));
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { ok: false, error: "Invalid email address" },
        { status: 400 }
      );
    }

    const mobile = String(data.get("mobile")).replace(/[\s\-+]/g, "");
    if (!/^\d{10,13}$/.test(mobile)) {
      return NextResponse.json(
        { ok: false, error: "Invalid mobile number" },
        { status: 400 }
      );
    }

    const attachment = data.get("attachment");
    if (
      attachment instanceof File &&
      attachment.size > 0 &&
      attachment.size > MAX_UPLOAD_BYTES
    ) {
      return NextResponse.json(
        { ok: false, error: "Attachment exceeds 10 MB" },
        { status: 400 }
      );
    }

    const inquiry = {
      fullName: String(data.get("fullName")),
      mobile,
      email,
      location: String(data.get("location")),
      projectType: String(data.get("projectType")),
      plotSize: String(data.get("plotSize") || ""),
      budget: String(data.get("budget") || ""),
      timeline: String(data.get("timeline") || ""),
      message: String(data.get("message") || ""),
      hasAttachment: attachment instanceof File && attachment.size > 0,
      receivedAt: new Date().toISOString(),
    };

    // ── DELIVERY INTEGRATION GOES HERE ──────────────────────────
    // e.g. await sendInquiryEmail(inquiry, attachment);
    console.log("New inquiry received:", inquiry);
    // ────────────────────────────────────────────────────────────

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Unexpected server error" },
      { status: 500 }
    );
  }
}

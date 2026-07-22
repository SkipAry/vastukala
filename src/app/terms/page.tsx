import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms of Use | Vastukala Associates",
  description: "Terms of use for the Vastukala Associates website.",
  alternates: { canonical: `${site.url}/terms` },
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <Link href="/" className="text-sm font-semibold text-brand-red">
        ← Back to home
      </Link>
      <h1 className="mt-6 font-heading text-3xl font-bold text-brand-charcoal">
        Terms of Use
      </h1>
      <div className="mt-8 space-y-6 text-base leading-relaxed text-brand-ink/85">
        <p>
          The content on this website — including project visualizations,
          images, text and the Vastukala Associates logo — is the property of
          Vastukala Associates and may not be reproduced without written
          permission.
        </p>
        <p>
          Project images shown on this website are design visualizations
          prepared by our studio for client projects. They illustrate design
          intent; the completed buildings may differ in detail.
        </p>
        <p>
          Information on this website is provided in good faith for general
          understanding of our services. It does not constitute a contractual
          offer, and approval or project timelines depend on the specifics of
          each engagement and the relevant authorities.
        </p>
        <p>
          For any questions about these terms, contact us at{" "}
          {site.phoneDisplay}.
        </p>
      </div>
    </main>
  );
}

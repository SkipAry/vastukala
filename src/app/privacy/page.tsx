import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy | Vastukala Associates",
  description:
    "How Vastukala Associates collects and uses the information you share through this website.",
  alternates: { canonical: `${site.url}/privacy` },
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <Link href="/" className="text-sm font-semibold text-brand-red">
        ← Back to home
      </Link>
      <h1 className="mt-6 font-heading text-3xl font-bold text-brand-charcoal">
        Privacy Policy
      </h1>
      <div className="mt-8 space-y-6 text-base leading-relaxed text-brand-ink/85">
        <p>
          Vastukala Associates collects the information you submit through the
          inquiry form on this website — such as your name, contact details and
          project information — solely to respond to your inquiry and discuss
          your project with you.
        </p>
        <p>
          We do not sell, rent or share your personal information with third
          parties for marketing purposes. Information you share with us is
          retained only as long as needed to serve your inquiry or an ongoing
          engagement.
        </p>
        <p>
          If you would like your information removed from our records, contact
          us at {site.phoneDisplay} and we will act on your request.
        </p>
        <p>
          This website may use basic analytics to understand how visitors use
          the site. Analytics data is aggregated and does not personally
          identify you.
        </p>
      </div>
    </main>
  );
}

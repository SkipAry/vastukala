import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { faqs, site } from "@/data/site";
import "./globals.css";

/* Google Sans (open-sourced on Google Fonts, SIL OFL) — self-hosted
   variable font, weights 400–700, used for headings and body alike.
   "Google Sans Text" is not published as a separate family; Google Sans
   covers both display and text roles. */
const googleSans = localFont({
  src: "../fonts/google-sans-latin.woff2",
  weight: "400 700",
  variable: "--font-google-sans",
  display: "swap",
  fallback: ["system-ui", "Segoe UI", "Roboto", "sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Vastukala Associates | Architects & Interior Designers in Pune",
  description:
    "Vastukala Associates provides architectural planning, interior design, 3D visualization, PMRDA sanctioning and NA layout services in Pune and across India.",
  keywords: [
    "Architect in Pune",
    "Architect in Shikrapur",
    "Architectural design services Pune",
    "Bungalow designer Pune",
    "Interior designer Pune",
    "3D architectural rendering services",
    "PMRDA sanctioning consultant",
    "NA layout planning",
    "Commercial architect Maharashtra",
  ],
  alternates: { canonical: site.url },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: "Vastukala Associates | Architects & Interior Designers in Pune",
    description:
      "Architecture, interiors, 3D visualization, PMRDA sanctioning and NA layouts — 1000+ projects delivered across India.",
    locale: "en_IN",
    images: [
      {
        url: "/projects/hero.webp",
        width: 2000,
        height: 1246,
        alt: "Luxury residence designed by Vastukala Associates",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vastukala Associates | Architects & Interior Designers in Pune",
    description:
      "Architecture, interiors, 3D visualization, PMRDA sanctioning and NA layouts — 1000+ projects delivered across India.",
    images: ["/projects/hero.webp"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#15181D",
};

/* Structured data: ProfessionalService (architecture firm) + FAQ */
const businessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${site.url}/#business`,
  name: site.name,
  description:
    "Multidisciplinary architecture and design firm providing architectural planning, interior design, 3D visualization, PMRDA sanctioning and NA layout services across India.",
  url: site.url,
  telephone: site.phoneE164,
  image: `${site.url}/projects/hero.webp`,
  logo: `${site.url}/logo.png`,
  founder: {
    "@type": "Person",
    name: site.founder.name,
    jobTitle: "Founder",
    alumniOf: "MIT Pune",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: `${site.address.line1}, ${site.address.line2}`,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    postalCode: site.address.pincode,
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: site.geo.lat,
    longitude: site.geo.lng,
  },
  areaServed: ["Pune", "Maharashtra", "India"],
  knowsAbout: [
    "Architectural Design",
    "Interior Design",
    "3D Visualization",
    "PMRDA Sanctioning",
    "NA Layout Planning",
  ],
  sameAs: [site.social.instagram, site.social.facebook].filter(Boolean),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={googleSans.variable}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </body>
    </html>
  );
}

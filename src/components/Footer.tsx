import Image from "next/image";
import { mapsLink, services, site, telLink } from "@/data/site";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const socials = [
    { label: "YouTube", href: site.social.youtube },
    { label: "LinkedIn", href: site.social.linkedin },
  ].filter((s) => s.href);

  return (
    <footer className="bg-brand-charcoal pb-24 pt-16 text-white md:pb-16">
      <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Vastukala Associates logo"
                width={44}
                height={44}
                className="h-11 w-11"
              />
              <div className="leading-tight">
                <p className="font-heading text-base font-bold tracking-wide">
                  VASTUKALA
                </p>
                <p className="text-[10px] uppercase tracking-caps text-white/60">
                  Associates
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">
              Creating meaningful spaces through design excellence, innovation
              and integrity.
            </p>
            {socials.length > 0 ? (
              <ul className="mt-6 flex gap-5">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-white/60 transition-colors hover:text-white"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          {/* Navigation */}
          <nav aria-label="Footer">
            <h3 className="text-[11px] font-semibold uppercase tracking-caps text-white/50">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/75 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-caps text-white/50">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5">
              {services.map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    className="text-sm text-white/75 transition-colors hover:text-white"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-caps text-white/50">
              Contact
            </h3>
            <address className="mt-4 space-y-3 text-sm not-italic leading-relaxed text-white/75">
              <p>
                {site.address.line1},<br />
                {site.address.line2},<br />
                {site.address.city}, {site.address.state} {site.address.pincode}
              </p>
              <p>
                <a href={telLink} className="font-semibold text-white hover:text-brand-red">
                  {site.phoneDisplay}
                </a>
              </p>
              <p>
                <a
                  href={mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/75 underline underline-offset-4 hover:text-white"
                >
                  View on Google Maps
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-7 text-xs text-white/50 sm:flex-row sm:items-center">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <ul className="flex gap-6">
            <li>
              <a href="/privacy" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:text-white">
                Terms
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

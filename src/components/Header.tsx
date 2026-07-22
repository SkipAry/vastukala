"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { site, telLink, whatsappLink } from "@/data/site";
import { trackEvent } from "@/lib/analytics";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close on Escape; lock body scroll while the menu is open
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  const solid = scrolled || menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid
          ? "bg-white/95 shadow-[0_1px_0_0_#E5E5E5] backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-site items-center justify-between px-4 sm:px-6 md:h-20 lg:px-8">
        <Link
          href="#home"
          className="flex items-center gap-3"
          aria-label="Vastukala Associates — back to top"
          onClick={closeMenu}
        >
          <Image
            src="/logo.png"
            alt="Vastukala Associates logo"
            width={44}
            height={44}
            priority
            className="h-10 w-10 md:h-11 md:w-11"
          />
          <span className="flex flex-col leading-tight">
            <span
              className={`font-heading text-base font-bold tracking-wide md:text-lg ${
                solid ? "text-brand-charcoal" : "text-white"
              }`}
            >
              VASTUKALA
            </span>
            <span
              className={`text-[10px] uppercase tracking-caps ${
                solid ? "text-brand-grey" : "text-white/80"
              }`}
            >
              Associates
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-brand-red ${
                solid ? "text-brand-ink" : "text-white/90"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => trackEvent("cta_book_consultation", { placement: "header" })}
            className="rounded-sm bg-brand-red px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-redDark"
          >
            Book a Consultation
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          ref={toggleRef}
          type="button"
          className="flex h-11 w-11 items-center justify-center lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="relative block h-4 w-6">
            <span
              className={`absolute left-0 top-0 h-0.5 w-6 transition-transform ${
                solid ? "bg-brand-charcoal" : "bg-white"
              } ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span
              className={`absolute left-0 top-[7px] h-0.5 w-6 transition-opacity ${
                solid ? "bg-brand-charcoal" : "bg-white"
              } ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`absolute left-0 top-[14px] h-0.5 w-6 transition-transform ${
                solid ? "bg-brand-charcoal" : "bg-white"
              } ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        ref={menuRef}
        className={`lg:hidden ${menuOpen ? "block" : "hidden"} max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-brand-border bg-white`}
      >
        <nav aria-label="Mobile" className="flex flex-col px-4 py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="border-b border-brand-border/60 py-4 text-base font-medium text-brand-ink"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => {
              closeMenu();
              trackEvent("cta_book_consultation", { placement: "mobile_menu" });
            }}
            className="mt-4 rounded-sm bg-brand-red px-5 py-3.5 text-center text-base font-semibold text-white"
          >
            Book a Consultation
          </a>
          <div className="mt-3 grid grid-cols-2 gap-3">
            <a
              href={telLink}
              onClick={() => trackEvent("cta_call", { placement: "mobile_menu" })}
              className="rounded-sm border border-brand-border px-4 py-3 text-center text-sm font-semibold text-brand-charcoal"
            >
              Call {site.phoneDisplay}
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("cta_whatsapp", { placement: "mobile_menu" })}
              className="rounded-sm border border-brand-border px-4 py-3 text-center text-sm font-semibold text-brand-charcoal"
            >
              WhatsApp
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

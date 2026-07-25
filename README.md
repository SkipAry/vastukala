# Vastukala Associates — Website

Premium, conversion-focused landing page for Vastukala Associates
(Architecture | Interior Design | Structural Design), built with
Next.js (App Router), TypeScript, Tailwind CSS and Framer Motion.

## Quick start

```bash
npm install
npm run dev      # develop at http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Editing content

**Everything editable lives in `src/data/site.ts`** — phone number,
address, WhatsApp message, social links, services, projects, FAQs,
process steps and statistics. No component edits needed for content
changes.

Project images live in `public/projects/` (WebP, extracted from the
official Vastukala portfolio book).

## Before launch checklist

1. **Form delivery** — the contact form submits directly to Formspree
   (`site.formEndpoint` in `site.ts`), since this site is statically
   exported (`output: "export"` in `next.config.ts`) and can't run
   Next.js API routes. Manage submissions/notification email at
   formspree.io. If the Formspree free tier's monthly submission limit
   becomes a problem, upgrade the plan or switch providers.
2. **Testimonials** — the section is CMS-ready but intentionally empty.
   Add only genuine, verified client testimonials in `src/data/site.ts`
   (`testimonials` array). The section appears automatically once
   entries exist.
3. **Business hours** — confirm the placeholder hours in `site.ts`.
4. **Email address** — add the official email in `site.ts` when available.
5. **Map pin** — verify the `geo` coordinates in `site.ts` against the
   actual Google Maps listing.
6. **Social links** — confirm Instagram/Facebook URLs; add YouTube and
   LinkedIn if available.
7. **Analytics** — CTA clicks and form submissions already push events
   to `window.dataLayer` (see `src/lib/analytics.ts`). Add your GTM/GA4
   snippet in `src/app/layout.tsx` to collect them.
8. **Domain** — the canonical URL is set to `https://vastukalaassociates.in`
   in `site.ts`; update if the domain changes.

## Content integrity notes

- All project imagery comes from the official Vastukala portfolio and is
  labelled as design visualization.
- Client names in the trust strip are from the company's own portfolio
  book ("Our Clients" page). Remove any name if display permission is
  not confirmed.
- No fabricated testimonials, awards, ratings or statistics are included.

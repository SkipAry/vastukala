/**
 * Analytics event hooks.
 * Wire these to GA4 / GTM / Meta Pixel by adding the relevant snippet
 * in src/app/layout.tsx. Events are pushed to window.dataLayer when it
 * exists and are safe no-ops otherwise.
 */

type AnalyticsEvent =
  | "cta_book_consultation"
  | "cta_call"
  | "cta_whatsapp"
  | "cta_directions"
  | "cta_view_projects"
  | "project_filter"
  | "project_open"
  | "form_submit_success"
  | "form_submit_error";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function trackEvent(
  event: AnalyticsEvent,
  data: Record<string, unknown> = {}
): void {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...data });
}

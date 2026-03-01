// PostHog client-side utilities
// Setup: Add NEXT_PUBLIC_POSTHOG_KEY and NEXT_PUBLIC_POSTHOG_HOST to .env.local

export const POSTHOG_EVENTS = {
  WAITLIST_SIGNUP: "waitlist_signup",
  CTA_CLICK: "cta_click",
  FAQ_TOGGLE: "faq_toggle",
} as const;

declare global {
  interface Window {
    posthog?: {
      capture: (eventName: string, properties?: Record<string, unknown>) => void;
      identify: (userId: string, traits?: Record<string, unknown>) => void;
    };
  }
}

export function trackEvent(eventName: string, properties?: Record<string, unknown>) {
  if (typeof window !== "undefined" && window.posthog) {
    window.posthog.capture(eventName, properties);
  }
}

export function identifyUser(userId: string, traits?: Record<string, unknown>) {
  if (typeof window !== "undefined" && window.posthog) {
    window.posthog.identify(userId, traits);
  }
}

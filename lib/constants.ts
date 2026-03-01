// App constants
export const APP_NAME = "Chasistem";
export const APP_TAGLINE = "AI Customer Support That Sets Itself Up";
export const APP_DESCRIPTION =
  "The only 3-way AI support platform for small businesses. No technical setup required.";

// Pricing
export const PRICING_TIERS = {
  starter: {
    name: "Starter",
    price: 29,
    features: [
      "1,000 AI conversations/mo",
      "1 support agent",
      "Basic FAQ handling",
      "Email support",
    ],
  },
  growth: {
    name: "Growth",
    price: 79,
    features: [
      "5,000 AI conversations/mo",
      "5 support agents",
      "Advanced AI drafts",
      "Priority support",
      "Analytics dashboard",
    ],
  },
  scale: {
    name: "Scale",
    price: 199,
    features: [
      "Unlimited conversations",
      "Unlimited agents",
      "Custom AI training",
      "Dedicated support",
      "API access",
      "Custom integrations",
    ],
  },
} as const;

// Waitlist
export const WAITLIST_MIN_DISPLAY_COUNT = 50;
export const WAITLIST_MAX_DISPLAY_COUNT = 100;

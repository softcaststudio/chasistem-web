// App constants
export const APP_NAME = "Chasistem";
export const APP_TAGLINE = "AI Support You Can Actually Improve";
export const APP_DESCRIPTION =
  "Upload your docs. Our AI shows you exactly how to make it better. Clear guidance on what's missing, what to fix, and how to get great results—not just a chatbot that hallucinates.";

// Pricing
export const PRICING_TIERS = {
  starter: {
    name: "Starter",
    price: 19,
    features: [
      "1,000 AI conversations/mo",
      "1 support agent seat",
      "Customer chatbot included",
      "Basic knowledge base",
      "Email support",
    ],
  },
  growth: {
    name: "Growth",
    price: 49,
    features: [
      "5,000 AI conversations/mo",
      "5 support agent seats",
      "Agent copilot with AI drafts",
      "Gap detection & recommendations",
      "Priority email support",
      "Analytics dashboard",
    ],
  },
  scale: {
    name: "Scale",
    price: 99,
    features: [
      "Unlimited AI conversations",
      "Unlimited agent seats",
      "Custom AI training",
      "API access",
      "Custom integrations",
      "Dedicated support",
    ],
  },
} as const;

// Waitlist
export const WAITLIST_MIN_DISPLAY_COUNT = 50;
export const WAITLIST_MAX_DISPLAY_COUNT = 100;

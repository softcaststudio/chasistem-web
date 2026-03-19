# Sub-Processors

This file is the source of truth for all third-party services that touch user data.
The Privacy Policy at `app/privacy/page.tsx` must reflect this list at all times.

## Current Approved Sub-Processors

| Service | Role | Data touched | Location |
|---|---|---|---|
| OpenAI | AI language model (chat, drafts, embeddings) | Conversation content (in transit) | United States |
| Anthropic | AI language model (analysis/reasoning) | Conversation content (in transit) | United States |
| Supabase | Database & authentication | Account data, conversations, knowledge base | United States (AWS) |
| Stripe | Payment processing | Billing and payment info | United States |
| Resend | Transactional email delivery | Account email addresses, email content | United States |

## Rules

Whenever you add a new third-party service that touches user data:
1. Add it to the table above
2. Update the sub-processor list in `app/privacy/page.tsx`

**Examples that require an update:**
- Error tracking (e.g., Sentry) — may capture stack traces containing user data
- Analytics (e.g., Mixpanel, PostHog) — captures usage/session data
- Email provider (e.g., Resend, SendGrid) — handles account email addresses
- Any new AI provider — receives conversation content

If unsure whether a service qualifies, err on the side of adding it.

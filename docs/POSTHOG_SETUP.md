# PostHog Setup Guide

This guide explains how to set up PostHog analytics for Chasistem.

## Prerequisites

- A PostHog account (sign up at https://posthog.com)
- A PostHog project API key

## Step 1: Get Your API Key

1. Log in to your PostHog dashboard
2. Go to Project Settings > API Keys
3. Copy your "Project API Key" (not the personal API key)

## Step 2: Add Environment Variables

Add these to your `.env.local` file:

```env
NEXT_PUBLIC_POSTHOG_KEY=your_api_key_here
NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com
```

For self-hosted PostHog, change the HOST to your instance URL.

## Step 3: Add PostHog Script (Optional)

For full PostHog functionality, add the PostHog script to `app/layout.tsx` in the `<head>` section:

```tsx
<script
  dangerouslySetInnerHTML={{
    __html: `
      !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags getFeatureFlag getFeatureFlagPayload reloadFeatureFlags group updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures getActiveMatchingSurveys getSurveys".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
      posthog.init('${process.env.NEXT_PUBLIC_POSTHOG_KEY}', {
        api_host: '${process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://app.posthog.com"}',
        capture_pageview: true,
        capture_pageleave: true,
      })
    `,
  }}
/>
```

## Step 4: Use in Components

Import and use the tracking functions:

```tsx
import { trackEvent, POSTHOG_EVENTS } from "@/lib/posthog";

// Track waitlist signup
trackEvent(POSTHOG_EVENTS.WAITLIST_SIGNUP, { email });

// Track CTA clicks
trackEvent(POSTHOG_EVENTS.CTA_CLICK, { button: "hero_cta" });
```

## Events Tracked

| Event Name        | Description                 | Properties           |
| ----------------- | --------------------------- | -------------------- |
| `waitlist_signup` | User joins waitlist         | `email`              |
| `cta_click`       | CTA button clicked          | `button`, `location` |
| `faq_toggle`      | FAQ item expanded/collapsed | `question`, `action` |

## Testing

1. Open browser DevTools > Network tab
2. Filter for "posthog"
3. Trigger events and verify requests are sent
4. Check PostHog dashboard for event data

## Troubleshooting

- **Events not appearing**: Check browser console for errors, verify API key is correct
- **CORS errors**: Ensure your domain is whitelisted in PostHog project settings
- **No data in dashboard**: Events may take a few minutes to appear

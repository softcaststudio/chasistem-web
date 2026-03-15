# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Chasistem** (Chat + Assist + System) - A 3-way AI customer support platform for small businesses (1-10 support agents). The key differentiator is AI #3 (Builder-Facing), which makes setup and maintenance easy for non-technical business owners.

### Three AI Components

| AI Component               | Purpose                               | Key Features                                    |
| -------------------------- | ------------------------------------- | ----------------------------------------------- |
| **AI #1: Customer-Facing** | Chat widget for end users             | FAQ resolution, human handoff, multi-channel    |
| **AI #2: Agent-Facing**    | Copilot for support agents            | Prioritized queue, AI drafts, context summaries |
| **AI #3: Builder-Facing**  | Setup/maintenance for non-tech owners | Doc ingestion, gap detection, setup wizard      |

## Tech Stack

| Layer        | Technology                                      |
| ------------ | ----------------------------------------------- |
| **Frontend** | Next.js 15 + TypeScript + shadcn/ui + Tailwind  |
| **Backend**  | NestJS (separate repo: `chasistem-api`)         |
| **Database** | Supabase (PostgreSQL + pgvector)                |
| **AI**       | OpenAI/Anthropic via ai-sdk.dev                 |
| **Payments** | Stripe                                          |
| **Hosting**  | Cloudflare Pages (frontend) / Railway (backend) |

## Commands

```bash
# Development
npm run dev          # Start dev server on http://localhost:3000

# Build
npm run build        # Production build
npm start            # Start production server

# Quality
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking (if configured)
```

## Architecture

### Repository Structure

- **chasistem-web** (this repo) → Marketing site + App UI at `chasistem.com`
- **chasistem-api** (separate repo) → NestJS backend at `api.chasistem.com`

### Key Directories (After Initialization)

```
app/                 # Next.js 15 App Router pages
components/          # React components
  ui/               # shadcn/ui components (auto-generated)
lib/                # Utilities and shared logic
public/             # Static assets
styles/             # Global styles
```

### UI Components

- Use **shadcn/ui** for all UI components
- Run `npx shadcn@latest add <component>` to add components
- Components are added to `components/ui/` and can be modified

### Styling

- **Tailwind CSS** for all styling
- Use Tailwind utilities directly in components
- Global styles in `app/globals.css`
- **Brand Theme**: Warm Indigo - see `docs/brand-theme.md` for color system and usage guidelines
- Always use semantic Tailwind classes (e.g., `text-primary`, `bg-primary`) instead of hardcoded colors

### AI Integration

- Use **ai-sdk.dev** for OpenAI/Anthropic integration
- Embeddings: OpenAI `text-embedding-3-small`
- Chat: GPT-4o-mini or Claude Haiku (cost-effective)
- Analysis: GPT-4o or Claude Sonnet (deep analysis)

### Database

- Supabase for PostgreSQL with pgvector extension
- Use Supabase client from `@supabase/supabase-js`
- Auth handled by Supabase Auth

## Development Notes

### Cost Control (AI API Usage)

| Tier             | Model       | Est. Cost/Msg |
| ---------------- | ----------- | ------------- |
| Chat (AI #1)     | GPT-4o-mini | $0.001        |
| Draft (AI #2)    | GPT-4o-mini | $0.002        |
| Analysis (AI #3) | GPT-4o      | $0.01         |

### MVP Phases

1. **Phase 1 (Weeks 1-6):** AI #3 + basic AI #1
2. **Phase 2 (Weeks 7-12):** AI #2 Agent Copilot
3. **Phase 3 (Weeks 13-16):** Polish & Integration

## Related Documentation

Market research and architecture decisions are in the sibling `market-research` directory:

- `ACTION-PLAN-3-WAY-AI-SUPPORT.md` - Full product spec and roadmap
- `ARCHITECTURE.md` - Stack decision rationale

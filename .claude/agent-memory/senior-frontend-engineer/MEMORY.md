# Senior Frontend Engineer — Agent Memory

## Project: Chasistem
Next.js 15 App Router, TypeScript strict, Tailwind CSS, shadcn/ui, Supabase, ai-sdk.dev.

## Brand Theme
- Primary color: Warm Indigo (OKLCH hue 255). Defined in `app/globals.css`.
- Always use semantic Tailwind tokens: `text-primary`, `bg-primary`, `bg-muted`, `bg-accent`, `border-border`, `text-muted-foreground`, etc. Never hardcode colors.
- Full color system documented in `docs/brand-theme.md`.

## Key Conventions

### Components
- shadcn/ui components live in `components/ui/` — extend, never modify base files.
- Available: `card.tsx`, `button.tsx`, `accordion.tsx`, `input.tsx`, `sonner.tsx`.
- Add new shadcn components via `npx shadcn@latest add <component>`.
- Helper components shared only within a page file are defined locally (not extracted to `components/`).

### Pages & Routing
- App Router. All pages are server components by default — avoid `"use client"` unless required.
- Standard page container: `container mx-auto max-w-5xl px-4 py-24` (legal/content pages).
- `export const metadata: Metadata` at the top of each page file.

### Styling Patterns
- `prose prose-neutral dark:prose-invert max-w-none` for body text in content pages.
- `not-prose` class on any element inside a prose div that should escape prose styling (tables, callout boxes, custom cards, contact boxes).
- Trust badge pattern: `bg-accent text-primary border border-primary/20 rounded-full px-3 py-1.5 text-xs font-medium inline-flex items-center gap-1.5`.
- Plain English callout: `border-l-4 border-primary/60 bg-muted/50 pl-4 py-3 pr-4 rounded-r-md`.
- Two-column layout with sticky TOC: `lg:grid lg:grid-cols-[220px_1fr] lg:gap-12 items-start` with TOC `sticky top-24 hidden lg:block`.
- Sub-processor / feature cards: `rounded-lg border border-border p-4 text-sm`.
- Contact box: `rounded-lg border border-border bg-muted/40 p-4`.

### Icons
- lucide-react is available. Icon size in section headings: `w-5 h-5 text-primary shrink-0`.
- `SectionHeading` pattern: flex div with icon + bold h2 text (NOT a prose h2).

### TypeScript
- Use `ComponentType<{ className?: string }>` for icon prop types.
- Named exports preferred for tree-shaking.

## File Paths
- Global styles / CSS variables: `app/globals.css`
- Legal pages: `app/terms/page.tsx`, `app/privacy/page.tsx`
- shadcn/ui components: `components/ui/`
- Brand theme docs: `docs/brand-theme.md`

## Related Memory Files
- See `design.md` for detailed design decisions (user's auto-memory file at project memory path).

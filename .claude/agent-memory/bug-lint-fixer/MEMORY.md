# Persistent Agent Memory - Bug Lint Fixer for Chasistem

## SonarLint Issue Fixes

### Issue: Prefer `globalThis` over `global` (sonarqube:typescript:S7764)

**Files affected:**
- `/Users/bphaengsrisara/Dev/personal/Softcast/chasistem-web/components/waitlist/WaitlistCount.test.tsx`
- `/Users/bphaengsrisara/Dev/personal/Softcast/chasistem-web/components/waitlist/WaitlistForm.test.tsx`
- `/Users/bphaengsrisara/Dev/personal/Softcast/chasistem-web/lib/api-client.test.ts`

**Fix applied:**
Replace `global.fetch = mockFetch as unknown as typeof fetch;` with:
```typescript
globalThis.fetch = mockFetch as unknown as typeof fetch;
```

### Issue: Type conversion error with Response mock

**TypeScript error:**
```
Conversion of type '{ ok: true; json: () => Promise<never>; }' to type 'Response' may be a mistake because neither type sufficiently overlaps with the other.
```

**Files affected:**
- All test files with fetch mocks using `as Response`

**Fix applied:**
Replace `} as Response);` with `} as unknown as Response);` in all mock fetch return values. This double-cast forces TypeScript to accept the partial mock object as a Response type.

**Example:**
```typescript
// Before (causes type error)
mockFetch.mockResolvedValueOnce({
  ok: true,
  json: async () => ({ count: 75 }),
} as Response);

// After (no type error)
mockFetch.mockResolvedValueOnce({
  ok: true,
  json: async () => ({ count: 75 }),
} as unknown as Response);
```

## Verification Commands

After fixing lint issues, verify with:
```bash
pnpm lint:check    # ESLint
pnpm tsc --noEmit  # TypeScript type checking
pnpm test:run      # Run all tests
pnpm build         # Production build
```

## Project Context

- **Framework:** Next.js 15 + TypeScript
- **Testing:** Vitest + React Testing Library
- **Linting:** ESLint
- **UI Components:** shadcn/ui
- **Styling:** Tailwind CSS

## Test Files Location

All test files are located in the project root (not in node_modules):
- `/Users/bphaengsrisara/Dev/personal/Softcast/chasistem-web/app/api/waitlist/route.test.ts`
- `/Users/bphaengsrisara/Dev/personal/Softcast/chasistem-web/components/waitlist/WaitlistCount.test.tsx`
- `/Users/bphaengsrisara/Dev/personal/Softcast/chasistem-web/components/waitlist/WaitlistForm.test.tsx`
- `/Users/bphaengsrisara/Dev/personal/Softcast/chasistem-web/lib/api-client.test.ts`
- `/Users/bphaengsrisara/Dev/personal/Softcast/chasistem-web/lib/utils.test.ts`

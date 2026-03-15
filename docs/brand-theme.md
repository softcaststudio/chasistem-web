# Chasistem Brand Theme: Warm Indigo

## Design Decision

Chasistem uses **Warm Indigo** as its primary brand color. This choice was made after thorough research to align with our core brand values and differentiate from competitors.

## Brand Values Alignment

| Value | How Warm Indigo Delivers |
|-------|-------------------------|
| **Trust + Professional** | Indigo = depth, wisdom, expertise - premium but not corporate |
| **Approachability** | Warmth = empathy, not cold blue - casual mentor |
| **Smart Mentor** | Purple = wisdom, thoughtful consultant - smart but kind |
| **Empowerment** | Purple = transformation, growth - user gets stronger |
| **Not Black-box** | Indigo = insight, understanding - transparent, not mysterious |
| **Differentiation** | Purple stands out from blue/teal competitors - unique but professional |

## Color System (OKLCH)

We use OKLCH color space for perceptually uniform colors that work well across light and dark modes.

### Primary Colors

| Token | Light Mode | Dark Mode | Purpose |
|-------|-----------|-----------|---------|
| `--primary` | `oklch(0.65 0.16 255)` | `oklch(0.80 0.18 255)` | Main brand color - CTAs, buttons, links |
| `--primary-foreground` | `oklch(1 0 0)` | `oklch(0.12 0.02 255)` | Text on primary elements |
| `--secondary` | `oklch(0.25 0.06 255)` | `oklch(0.30 0.06 255)` | Subtle actions, secondary buttons |
| `--muted` | `oklch(0.97 0.01 255)` | `oklch(0.269 0.01 255)` | Backgrounds, disabled states |
| `--accent` | `oklch(0.94 0.04 255)` | `oklch(0.55 0.15 192)` | Highlights, tags, categories |
| `--destructive` | `oklch(0.577 0.245 27.325)` | `oklch(0.704 0.191 22.216)` | Error states, delete actions |

### Supporting Colors

| Token | Light Mode | Dark Mode | Purpose |
|-------|-----------|-----------|---------|
| `--background` | `oklch(1 0 0)` | `oklch(0.145 0 0)` | Page background |
| `--foreground` | `oklch(0.145 0 0)` | `oklch(0.985 0 0)` | Main text |
| `--card` | `oklch(1 0 0)` | `oklch(0.18 0.01 255)` | Card backgrounds |
| `--popover` | `oklch(1 0 0)` | `oklch(0.16 0.01 255)` | Dropdown/modal backgrounds |
| `--border` | `oklch(0.922 0 0)` | `oklch(1 0 0 / 10%)` | Borders, dividers |
| `--input` | `oklch(0.922 0 0)` | `oklch(1 0 0 / 15%)` | Input fields |
| `--ring` | `oklch(0.50 0.18 255)` | `oklch(0.50 0.18 255)` | Focus rings |

### Chart Colors

| Token | Value | Purpose |
|-------|-------|---------|
| `--chart-1` | `oklch(0.50 0.18 255)` | Primary data series |
| `--chart-2` | `oklch(0.65 0.15 165)` | Secondary data (teal-green) |
| `--chart-3` | `oklch(0.55 0.12 165)` | Tertiary data |
| `--chart-4` | `oklch(0.60 0.18 200)` | Quaternary data |
| `--chart-5` | `oklch(0.45 0.08 255)` | Quinary data |

### Sidebar Colors

| Token | Light Mode | Dark Mode | Purpose |
|-------|-----------|-----------|---------|
| `--sidebar` | `oklch(0.985 0.005 255)` | `oklch(0.16 0.01 255)` | Sidebar background |
| `--sidebar-foreground` | `oklch(0.20 0.02 255)` | `oklch(0.96 0.005 255)` | Sidebar text |
| `--sidebar-primary` | `oklch(0.50 0.16 255)` | `oklch(0.92 0 0)` | Sidebar primary actions |
| `--sidebar-accent` | `oklch(0.94 0.04 255)` | `oklch(0.55 0.08 255)` | Sidebar highlights |
| `--sidebar-border` | `oklch(0.92 0.01 255)` | `oklch(1 0 0 / 10%)` | Sidebar borders |

## Usage Guidelines

### Tailwind CSS

Always use semantic Tailwind classes that reference CSS variables:

```tsx
// ✅ Good - uses CSS variables
<button className="bg-primary text-primary-foreground">
  Click me
</button>

// ❌ Bad - hardcoded colors
<button className="bg-indigo-600 text-white">
  Click me
</button>
```

### Common Patterns

```tsx
// Primary CTA button
<button className="bg-primary text-primary-foreground hover:bg-primary/90">
  Get Started
</button>

// Secondary button
<button className="bg-secondary text-secondary-foreground">
  Learn More
</button>

// Muted text
<p className="text-muted-foreground">Supporting information</p>

// Card with accent border
<div className="border-primary ring-primary/20 ring-1">
  Featured content
</div>
```

## Color Hue Reference

All indigo colors use **hue 255** (true indigo - between blue at 240 and violet at 270):

- Primary: `oklch(0.65 0.16 255)` - 65% lightness, 16% chroma
- Lighter: `oklch(0.80 0.18 255)` - 80% lightness (dark mode primary)
- Darker: `oklch(0.50 0.18 255)` - 50% lightness (rings, focus states)

## Related Files

- `app/globals.css` - CSS variable definitions
- `components/landing/*.tsx` - Landing page components using the theme
- `components/ui/*.tsx` - shadcn/ui components built on this theme

## History

- **2025-03-15**: Initial Warm Indigo theme implementation, replacing cyan/teal (hue 192)

# Personal Projects Section — Design Spec
**Date:** 2026-04-27  
**Status:** Approved

---

## Overview

Add a "Beyond the 9-5" section to the homepage (`src/app/page.tsx`) below the existing "What I Bring" dark section and above the Footer. The section showcases personal side projects distinct from professional case studies.

---

## Placement

Homepage bottom, between the "What I Bring" section (`#15030E` background) and the Footer wave divider. The existing wave divider that transitions from `#15030E` → footer gradient stays in place — this new section slots in before it, inheriting the same `#15030E` background so no new wave dividers are needed between "What I Bring" and "Beyond the 9-5".

**Order (bottom of page):**
1. "What I Bring" section (`#15030E`)
2. **"Beyond the 9-5" section** (`#15030E`) ← new
3. Wave divider (`#15030E` → footer gradient) — existing, unchanged
4. Footer

---

## Layout

**Featured + Teaser grid** — `grid-template-columns: 1.75fr 1fr`, gap `20px`, items stretch to equal height.

### Featured Card — hangwithjz.com
- Dark card: `background: #1a051a`, border `1px solid #2e0e2e`, `border-radius: 14px`
- **Top: mini site preview** — browser chrome bar (macOS dots + URL bar showing `hangwithjz.com`) above a dark recreation of the site aesthetic:
  - Avatar + brand name: `JZ` and `Picks & Recs` both in lime `#EAFF8C`, tagline in muted gray
  - Three product mini-cards in a 3-column grid; product image areas use near-black background (`#0e0410 → #140618` gradient) to blend with the dark site bg; emoji icons as stand-ins
- **Bottom: card body**
  - Live badge: gold dot + "Live" text, gold border, `#ffae00`
  - Title: "hangwithjz.com" — Playfair Display, 24px, `#FFEAF6`
  - Description: "A link-in-bio site for lifestyle content — supplement picks with discount codes, faves, UGC portfolio, and brand collabs."
  - Tags: `Next.js`, `Tailwind CSS`, `Fitness & Wellness` — pill style, muted border
  - CTA button: "Visit Site →" — outlined pill, `border: 1px solid #FFEAF6`, links to `https://www.hangwithjz.com`

### Teaser Card — Calorie Counter & Meal Tracker
- Same dark card style as featured
- "Coming Soon" badge — gold text, gold border, near-transparent gold bg
- Emoji + iPhone mockup side by side (low opacity ~0.4): salad emoji 🥗 at left, CSS-drawn iPhone outline (border, notch, screen area with small salad emoji, home indicator bar) at right
- Title: "Calorie Counter & Meal Tracker" — Playfair Display, muted `rgba(255,234,246,0.6)`
- Description: "A personal health app for logging meals and tracking daily nutrition goals — built for real life, not perfection."
- Tags: `Mobile` pill — same style as featured card tags (`border: 1px solid #2e0e2e`, muted text)
- Progress bar at bottom: `background: #2e0e2e`, fill uses gradient `#ffae00 → #FF2D9B` at ~30% width, labeled "In progress" in tiny muted text

---

## Section Header

- Eyebrow: "Side Projects" — 11px, uppercase, `letter-spacing: 0.12em`, color `#666`
- Heading: "Beyond the 9-5" — Playfair Display, bold, `#FFEAF6`
- Consistent with the "What I Bring" section heading style

---

## Data

Add a `personalProjects` array in `page.tsx`:

```ts
const personalProjects = [
  {
    title: "hangwithjz.com",
    description: "A link-in-bio site for lifestyle content — supplement picks with discount codes, faves, UGC portfolio, and brand collabs.",
    tags: ["Next.js", "Tailwind CSS", "Fitness & Wellness"],
    href: "https://www.hangwithjz.com",
    status: "live", // "live" | "coming-soon"
  },
  {
    title: "Calorie Counter & Meal Tracker",
    description: "A personal health app for logging meals and tracking daily nutrition goals — built for real life, not perfection.",
    tags: [],
    href: null,
    status: "coming-soon",
  },
];
```

---

## Components

Implement as two inline components in `page.tsx` (no new files needed given the project's existing pattern):

- `PersonalProjectsFeatured` — renders the hangwithjz featured card with browser chrome mini-preview
- `PersonalProjectsTeaser` — renders the coming-soon card with progress bar
- Wrap both in a `PersonalProjectsSection` that renders the grid and section header

---

## Constraints & Notes

- No new files — add data and components directly to `page.tsx`, consistent with how `CompanySection` and `CaseStudyCard` are defined there
- Must use existing CSS variables (`--color-jz-*`) and `font-display` / `font-body` class conventions
- The mini browser preview inside the featured card is HTML/CSS only — no `<img>` or screenshot dependency
- Responsive: on mobile, grid collapses to single column (featured card full width, teaser card below)
- External link (`hangwithjz.com`) opens in a new tab (`target="_blank" rel="noopener noreferrer"`)

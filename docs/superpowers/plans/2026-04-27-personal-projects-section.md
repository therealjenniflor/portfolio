# Personal Projects Section Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a "Beyond the 9-5" personal projects section to the bottom of the homepage, featuring hangwithjz.com (live) and a Calorie Counter & Meal Tracker (coming soon).

**Architecture:** All components and data are defined inline in `src/app/page.tsx`, consistent with the existing `CaseStudyCard` and `CompanySection` pattern. No new files. The section sits between the existing "What I Bring" dark section and the Footer wave divider, sharing the same `#15030E` background so no new wave dividers are needed.

**Tech Stack:** Next.js 16 · React 19 · TypeScript · Tailwind CSS v4 (`@theme inline`, no config file)

---

## File Map

| File | Change |
|------|--------|
| `src/app/page.tsx` | Add `personalProjects` data array + 4 inline components + section JSX |

---

### Task 1: Add project data

**Files:**
- Modify: `src/app/page.tsx` — add `personalProjects` const after the existing `skills` array (around line 144)

- [ ] **Step 1: Add the data array**

Open `src/app/page.tsx`. After the closing `];` of the `skills` array, add:

```tsx
type ProjectStatus = "live" | "coming-soon";

const personalProjects: {
  title: string;
  description: string;
  tags: string[];
  href: string | null;
  status: ProjectStatus;
}[] = [
  {
    title: "hangwithjz.com",
    description:
      "A link-in-bio site for lifestyle content — supplement picks with discount codes, faves, UGC portfolio, and brand collabs.",
    tags: ["Next.js", "Tailwind CSS", "Fitness & Wellness"],
    href: "https://www.hangwithjz.com",
    status: "live",
  },
  {
    title: "Calorie Counter & Meal Tracker",
    description:
      "A personal health app for logging meals and tracking daily nutrition goals — built for real life, not perfection.",
    tags: ["Mobile"],
    href: null,
    status: "coming-soon",
  },
];
```

- [ ] **Step 2: Type-check**

```bash
cd /Users/osita/Developer/portfolio && npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: add personalProjects data for Beyond the 9-5 section"
```

---

### Task 2: Build `HangwithjzPreview` (mini site preview)

**Files:**
- Modify: `src/app/page.tsx` — add component before the `Home` default export

This is a pure CSS recreation of the hangwithjz.com aesthetic inside a browser chrome frame. No `<img>` tags, no external assets.

- [ ] **Step 1: Add the component**

Add this function directly above the `Home` export:

```tsx
function HangwithjzPreview() {
  return (
    <div style={{ background: "#0A0A0A", padding: "18px 20px 0", overflow: "hidden" }}>
      {/* Browser chrome */}
      <div
        style={{
          background: "#1a1a1a",
          borderRadius: "6px 6px 0 0",
          padding: "7px 12px",
          display: "flex",
          alignItems: "center",
          gap: "6px",
        }}
      >
        <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#ff5f57" }} />
        <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#ffbd2e" }} />
        <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#28ca41" }} />
        <div
          style={{
            flex: 1,
            background: "#2a2a2a",
            borderRadius: 4,
            padding: "3px 8px",
            fontSize: 9,
            color: "#666",
            margin: "0 8px",
            textAlign: "center",
          }}
        >
          hangwithjz.com
        </div>
      </div>

      {/* Site header */}
      <div style={{ background: "#0d0d0d", padding: "10px 12px" }}>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 6,
              background: "#2a2a2a",
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 16,
            }}
          >
            👩🏻
          </div>
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 11, fontWeight: 700, lineHeight: 1.2 }}>
              <span style={{ color: "#EAFF8C" }}>JZ</span>
              <span style={{ color: "#444" }}> | </span>
              <span style={{ color: "#EAFF8C" }}>Picks & Recs</span>
            </div>
            <div style={{ fontSize: 8, color: "#666", marginTop: 2 }}>
              Fitness · Wellness · Beauty · Discount codes included
            </div>
            <div style={{ display: "flex", gap: 4, marginTop: 4 }}>
              {[0, 1, 2].map((i) => (
                <div key={i} style={{ width: 12, height: 12, background: "#333", borderRadius: 2 }} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Product mini-cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 5,
          padding: "0 12px 10px",
          background: "#0d0d0d",
        }}
      >
        {[
          { emoji: "🧴", name: "Energy Complete" },
          { emoji: "🥤", name: "Protein Complete" },
          { emoji: "💧", name: "Hydration Complete" },
        ].map(({ emoji, name }) => (
          <div key={name} style={{ background: "#1a1a1a", borderRadius: 5, padding: "7px 6px" }}>
            <div
              style={{
                height: 32,
                background: "linear-gradient(135deg, #0e0410 0%, #140618 100%)",
                borderRadius: 3,
                marginBottom: 5,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 12,
              }}
            >
              {emoji}
            </div>
            <div style={{ fontSize: 6, textTransform: "uppercase", letterSpacing: "0.1em", color: "#555" }}>
              Health
            </div>
            <div style={{ fontSize: 8, fontWeight: 600, color: "#eee", margin: "1px 0" }}>{name}</div>
            <div style={{ fontSize: 7, color: "#FF2D9B", fontWeight: 600 }}>Code: JZ10</div>
          </div>
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Type-check**

```bash
cd /Users/osita/Developer/portfolio && npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: add HangwithjzPreview mini site component"
```

---

### Task 3: Build `PersonalProjectsFeatured` and `PersonalProjectsTeaser`

**Files:**
- Modify: `src/app/page.tsx` — add two components after `HangwithjzPreview`

- [ ] **Step 1: Add `PersonalProjectsFeatured`**

Add after `HangwithjzPreview`:

```tsx
function PersonalProjectsFeatured({ project }: { project: (typeof personalProjects)[0] }) {
  return (
    <div
      style={{
        background: "#1a051a",
        border: "1px solid #2e0e2e",
        borderRadius: 14,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Mini site preview */}
      <div style={{ flexShrink: 0, height: 200, overflow: "hidden" }}>
        <HangwithjzPreview />
      </div>

      {/* Card body */}
      <div style={{ padding: "22px 24px 24px", flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Live badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 5,
            fontSize: 10,
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "#ffae00",
            border: "1px solid rgba(255,174,0,0.3)",
            borderRadius: 999,
            padding: "3px 10px",
            marginBottom: 10,
            width: "fit-content",
          }}
        >
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#ffae00" }} />
          Live
        </div>

        <h3
          className="font-display"
          style={{ fontSize: 24, fontWeight: 700, color: "#FFEAF6", marginBottom: 8 }}
        >
          {project.title}
        </h3>

        <p
          className="font-body"
          style={{ fontSize: 13, color: "rgba(255,234,246,0.5)", lineHeight: 1.6, marginBottom: 16, flex: 1 }}
        >
          {project.description}
        </p>

        {/* Tags */}
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 18 }}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-body"
              style={{
                fontSize: 10,
                border: "1px solid #2e0e2e",
                color: "rgba(255,234,246,0.4)",
                borderRadius: 999,
                padding: "3px 10px",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {project.href && (
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body"
            style={{
              display: "inline-block",
              width: "fit-content",
              fontSize: 11,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              padding: "9px 22px",
              borderRadius: 999,
              border: "1px solid #FFEAF6",
              color: "#FFEAF6",
              textDecoration: "none",
            }}
          >
            Visit Site →
          </a>
        )}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Add `PersonalProjectsTeaser`**

Add after `PersonalProjectsFeatured`:

```tsx
function PersonalProjectsTeaser({ project }: { project: (typeof personalProjects)[0] }) {
  return (
    <div
      style={{
        background: "#1a051a",
        border: "1px solid #2e0e2e",
        borderRadius: 14,
        padding: "32px 28px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div style={{ flex: 1 }}>
        {/* Coming soon badge */}
        <div
          className="font-body"
          style={{
            display: "inline-block",
            fontSize: 10,
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            background: "rgba(255,174,0,0.08)",
            color: "#ffae00",
            border: "1px solid rgba(255,174,0,0.25)",
            borderRadius: 999,
            padding: "3px 10px",
            marginBottom: 16,
          }}
        >
          Coming Soon
        </div>

        {/* Emoji + iPhone mockup */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            marginBottom: 16,
            opacity: 0.4,
          }}
        >
          <div style={{ fontSize: 44, lineHeight: 1 }}>🥗</div>
          {/* CSS iPhone */}
          <div
            style={{
              width: 36,
              height: 64,
              border: "2px solid rgba(255,234,246,0.6)",
              borderRadius: 8,
              position: "relative",
              flexShrink: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* Notch */}
            <div
              style={{
                width: 14,
                height: 4,
                background: "rgba(255,234,246,0.6)",
                borderRadius: "0 0 4px 4px",
                marginTop: 2,
              }}
            />
            {/* Screen */}
            <div
              style={{
                flex: 1,
                width: "calc(100% - 6px)",
                margin: "4px 3px 3px",
                background: "rgba(255,234,246,0.08)",
                borderRadius: 4,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 14,
              }}
            >
              🥗
            </div>
            {/* Home indicator */}
            <div
              style={{
                width: 12,
                height: 2,
                background: "rgba(255,234,246,0.4)",
                borderRadius: 999,
                marginBottom: 3,
              }}
            />
          </div>
        </div>

        <h3
          className="font-display"
          style={{
            fontSize: 20,
            fontWeight: 700,
            color: "rgba(255,234,246,0.6)",
            marginBottom: 10,
            lineHeight: 1.3,
          }}
        >
          {project.title}
        </h3>

        <p
          className="font-body"
          style={{
            fontSize: 12,
            color: "rgba(255,234,246,0.3)",
            lineHeight: 1.6,
            marginBottom: 20,
          }}
        >
          {project.description}
        </p>

        {/* Tags */}
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 20 }}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-body"
              style={{
                fontSize: 10,
                border: "1px solid #2e0e2e",
                color: "rgba(255,234,246,0.4)",
                borderRadius: 999,
                padding: "3px 10px",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Progress bar */}
      <div>
        <div
          style={{
            background: "#2e0e2e",
            borderRadius: 999,
            height: 3,
            overflow: "hidden",
            marginBottom: 6,
          }}
        >
          <div
            style={{
              background: "linear-gradient(90deg, #ffae00, #FF2D9B)",
              width: "30%",
              height: "100%",
              borderRadius: 999,
            }}
          />
        </div>
        <div
          className="font-body"
          style={{ fontSize: 9, color: "rgba(255,255,255,0.25)", textAlign: "right" }}
        >
          In progress
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 3: Type-check**

```bash
cd /Users/osita/Developer/portfolio && npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: add PersonalProjectsFeatured and PersonalProjectsTeaser components"
```

---

### Task 4: Build `PersonalProjectsSection` and wire into page

**Files:**
- Modify: `src/app/page.tsx` — add section component + insert into `Home` JSX

- [ ] **Step 1: Add `PersonalProjectsSection`**

Add after `PersonalProjectsTeaser`:

```tsx
function PersonalProjectsSection() {
  const [featured, teaser] = personalProjects;

  return (
    <section
      className="px-6 md:px-10 py-20 md:py-28"
      style={{ backgroundColor: "#15030E" }}
    >
      <div className="max-w-[1500px] mx-auto">
        {/* Section header */}
        <p className="font-body text-sm uppercase tracking-widest mb-3" style={{ color: "#666" }}>
          Side Projects
        </p>
        <h2
          className="font-display font-bold mb-10"
          style={{ fontSize: "clamp(2rem, 5vw, 3rem)", color: "#FFEAF6" }}
        >
          Beyond the 9-5
        </h2>

        {/* Featured + Teaser grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1.75fr_1fr] gap-5 items-stretch">
          <PersonalProjectsFeatured project={featured} />
          <PersonalProjectsTeaser project={teaser} />
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Insert section into `Home` JSX**

In the `Home` component, find the closing `</section>` of the "What I Bring" section (the one with `backgroundColor: "#15030E"`). Insert `<PersonalProjectsSection />` immediately after it, before the wave divider `<div>` that transitions to the footer:

```tsx
        {/* ─── What I Bring ─── */}
        <section
          className="px-6 md:px-10 py-20 md:py-28"
          style={{ backgroundColor: "#15030E" }}
        >
          {/* ...existing content... */}
        </section>

        {/* ─── Beyond the 9-5 ─── */}
        <PersonalProjectsSection />

        {/* ─── Wave divider (What I Bring → Footer) ─── */}
        <div
          className="overflow-hidden leading-none"
          style={{ background: "linear-gradient(135deg, #fef6cc 0%, #fce4e8 100%)" }}
        >
          {/* ...existing wave SVG... */}
        </div>
```

- [ ] **Step 3: Type-check**

```bash
cd /Users/osita/Developer/portfolio && npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 4: Start dev server and verify visually**

```bash
cd /Users/osita/Developer/portfolio && npm run dev
```

Open `http://localhost:3000` and scroll to the bottom. Verify:
- "Beyond the 9-5" heading appears above the footer wave
- Left card shows browser chrome with hangwithjz site preview, live badge, tags, "Visit Site →" button
- Right card shows salad + iPhone, "Coming Soon" badge, "Mobile" pill, progress bar
- Clicking "Visit Site →" opens `https://www.hangwithjz.com` in a new tab

- [ ] **Step 5: Verify responsive layout**

Resize browser to mobile width (< 768px). Verify:
- Grid collapses to single column (featured card full width, teaser card below)
- Both cards remain readable with no overflow

- [ ] **Step 6: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: add Beyond the 9-5 personal projects section to homepage"
```

---

## Self-Review

**Spec coverage:**
- ✅ Section title "Beyond the 9-5" with "Side Projects" eyebrow
- ✅ Placement: after "What I Bring", before footer wave divider, same `#15030E` bg
- ✅ Featured card: browser chrome, mini hangwithjz preview (lime branding, dark product cards), live badge, description, tags, CTA
- ✅ Teaser card: coming soon badge, salad + CSS iPhone, title, description, "Mobile" pill, progress bar
- ✅ No new files — all inline in `page.tsx`
- ✅ Responsive: `grid-cols-1` on mobile, `md:grid-cols-[1.75fr_1fr]` on desktop
- ✅ External link opens in new tab with `rel="noopener noreferrer"`

**Placeholder scan:** No TBDs, no "implement later", all code blocks are complete.

**Type consistency:** `personalProjects[0]` type flows correctly through `PersonalProjectsFeatured` and `PersonalProjectsTeaser` props. `ProjectStatus` type defined before it's used.

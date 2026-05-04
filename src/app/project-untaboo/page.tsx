import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/portfolio/Nav";
import Footer from "@/components/portfolio/Footer";
import Link from "next/link";
import CaseStudyNav from "@/components/portfolio/CaseStudyNav";

export const metadata: Metadata = {
  title: "Project Untaboo — JZ",
  description:
    "UX/UI Designer for Project Untaboo, a mobile app making period care accessible for travelers through community-driven support.",
};

const reflectionCols = [
  {
    label: "How I grew",
    points: [
      "Strengthened my ability to run collaborative workshops with cross-functional teams including engineers and leadership.",
      "Gained experience balancing founder vision with user feedback, knowing when to refine vs. replace.",
      "Developed confidence in facilitating early-stage design decisions under tight timelines.",
    ],
  },
  {
    label: "What I learned",
    points: [
      "Testing early and often delivers unbiased feedback that changes the product for the better.",
      "Collaborating with engineers from the start ensures feasibility and accelerates development.",
      "Small details in an MVP  -  copy, color, hierarchy  -  are often the difference between clarity and confusion.",
    ],
  },
  {
    label: "What I'd do differently",
    points: [
      "Establish brand guardrails with the founder before any visual design begins.",
      "Run a dedicated accessibility audit earlier to catch color and contrast issues in the first round.",
      "Create a lightweight component library from the start to ensure consistency across screens.",
    ],
  },
];

const sections = [
  { id: "hero", label: "Overview" },
  { id: "context", label: "Context" },
  { id: "problem", label: "Problem" },
  { id: "goals", label: "Goals" },
  { id: "research", label: "Research" },
  { id: "pain-points", label: "Pain Points" },
  { id: "workshop", label: "Workshop" },
  { id: "iteration", label: "First Iteration" },
  { id: "solution", label: "Solution" },
  { id: "key-screens", label: "Key Screens" },
  { id: "reflection", label: "Reflection" },
];

export default function ProjectUntabooPage() {
  return (
    <>
      <Nav />
      <CaseStudyNav sections={sections} />
      <main>

        {/* ─── Hero ─── */}
        <section id="hero" className="bg-[var(--color-jz-bg)] px-6 md:px-10 pt-16 pb-20 md:pt-24 md:pb-28">
          <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-body text-sm uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-4">
                <strong>Project Untaboo</strong> • Health &amp; Wellness • Mobile • UI Design
              </p>
              <h1 className="font-display text-5xl md:text-7xl font-bold text-[var(--color-jz-text)] leading-tight mb-8">
                Period Care,<br />Wherever You Are
              </h1>
              <p className="font-body text-xl md:text-2xl text-[var(--color-jz-text-secondary)] max-w-xl leading-relaxed mb-4">
                Designing the first iteration of a community-driven mobile app that makes period care
                accessible for travelers  -  no matter where they are.
              </p>
              <p className="font-body text-sm text-[var(--color-jz-text-muted)] italic">
                6-week sprint · UX/UI Design
              </p>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/images/project_untaboo/Untaboo_hero.png"
                alt="Project Untaboo  -  Login and Request Help screens"
                width={0}
                height={0}
                sizes="(max-width: 768px) 80vw, 40vw"
                style={{ width: "100%", height: "auto", maxWidth: "480px" }}
                unoptimized
              />
            </div>
          </div>
        </section>

        {/* ─── Context ─── */}
        <section id="context" className="bg-[var(--color-jz-surface)] px-6 md:px-10 py-16 md:py-24">
          <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16 items-start">
            {/* Metadata */}
            <div className="space-y-8">
              <div>
                <p className="font-body text-xs uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-1">Role</p>
                <p className="font-display text-lg font-bold text-[var(--color-jz-text)]">UX/UI Designer</p>
              </div>
              <div>
                <p className="font-body text-xs uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-1">Company</p>
                <p className="font-display text-lg font-bold text-[var(--color-jz-text)]">Project Untaboo</p>
              </div>
              <div>
                <p className="font-body text-xs uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-1">Duration</p>
                <p className="font-display text-lg font-bold text-[var(--color-jz-text)]">6 Weeks</p>
              </div>
              <div>
                <p className="font-body text-xs uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-1">Scope</p>
                <p className="font-display text-lg font-bold text-[var(--color-jz-text)]">First UX Iteration · MVP</p>
              </div>
            </div>

            {/* Description */}
            <div>
              <p className="font-body text-sm uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-3">
                The Project
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--color-jz-text)] leading-tight mb-8">
                A Community That Has Your Back
              </h2>
              <p className="font-body text-lg text-[var(--color-jz-text-secondary)] leading-relaxed mb-6">
                Project Untaboo is a mobile app designed around a simple but powerful idea: when you&apos;re
                traveling and need period care products, someone nearby can help. The app connects users
                to a growing community of people willing to share, making period care convenient and
                stress-free on the go.
              </p>
              <p className="font-body text-lg text-[var(--color-jz-text-secondary)] leading-relaxed mb-8">
                My team was responsible for designing the first iteration of UX deliverables  -  building the
                product from scratch in six weeks, from research and ideation to high-fidelity screens and
                a clickable prototype.
              </p>
              <p className="font-body text-sm text-[var(--color-jz-text-muted)]">
                Credits: Design team, Engineering, Founder/CEO
              </p>
            </div>
          </div>
        </section>

        {/* ─── Problem Statement ─── */}
        <section id="problem" className="bg-[var(--color-jz-bg)] px-6 md:px-10 py-16 md:py-24 border-t border-[var(--color-jz-border)]">
          <div className="max-w-[1500px] mx-auto">
            <p className="font-body text-sm uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-3">
              The Problem
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--color-jz-text)] leading-tight mb-12">
              What We Were Solving
            </h2>
            <blockquote className="border-l-4 border-[var(--color-jz-accent)] pl-8 mb-16">
              <p className="font-display text-2xl md:text-3xl font-bold text-[var(--color-jz-text)] leading-snug">
                &ldquo;Travelers struggle to find reliable, convenient period care products while on the move  - 
                despite it being a widespread, everyday need.&rdquo;
              </p>
            </blockquote>
          </div>
        </section>

        {/* ─── Business Goals + My Plan ─── */}
        <section id="goals" className="bg-[var(--color-jz-surface)] px-6 md:px-10 py-16 md:py-24">
          <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <p className="font-body text-sm uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-3">
                Goals
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-jz-text)] mb-8 leading-tight">
                Business Goal
              </h2>
              <p className="font-body text-lg text-[var(--color-jz-text-secondary)] leading-relaxed">
                Launch an MVP mobile app that maximizes user convenience and support  -  enabling users to
                effortlessly request period care products from people nearby, while building a trustworthy,
                personable community experience that keeps users coming back.
              </p>
            </div>

            <div className="border-l border-[var(--color-jz-border)] pl-16">
              <p className="font-body text-sm uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-3">
                Strategy
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-jz-text)] mb-8 leading-tight">
                My Plan
              </h2>
              <p className="font-body text-lg text-[var(--color-jz-text-secondary)] leading-relaxed mb-6">
                Ground every design decision in user feedback. Run a cross-functional ideation workshop to
                align the team early, then test quickly and iterate fast  -  keeping the experience
                straightforward, personable, and safe-feeling.
              </p>
              <ul className="space-y-3">
                {[
                  "Lead a 6-8-5 brainstorming workshop with designers, engineers, and leadership",
                  "Conduct usability testing with 6 real users across key flows",
                  "Iterate on product selection, time scheduling, and brand identity",
                  "Deliver high-fidelity screens and a clickable prototype",
                ].map((item) => (
                  <li key={item} className="flex gap-3 font-body text-base text-[var(--color-jz-text-secondary)]">
                    <span className="shrink-0 text-[var(--color-jz-text-muted)]">·</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ─── Research Process ─── */}
        <section id="research" className="bg-[var(--color-jz-bg)] px-6 md:px-10 py-16 md:py-24">
          <div className="max-w-[1500px] mx-auto">
            <p className="font-body text-sm uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-3">
              Research
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--color-jz-text)] mb-4 leading-tight">
              Listening First
            </h2>
            <p className="font-body text-lg text-[var(--color-jz-text-secondary)] max-w-2xl leading-relaxed mb-14">
              We ran usability testing with 6 users and affinity-mapped the findings to surface patterns
              and prioritize what mattered most for the MVP.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Image
                src="/images/project_untaboo/usertesting1.webp"
                alt="Team affinity mapping with sticky notes on wall"
                width={0} height={0} sizes="33vw"
                style={{ width: "100%", height: "auto" }}
                className="rounded-sm"
                unoptimized
              />
              <Image
                src="/images/project_untaboo/usertesting2.webp"
                alt="Prioritization matrix on whiteboard"
                width={0} height={0} sizes="33vw"
                style={{ width: "100%", height: "auto" }}
                className="rounded-sm"
                unoptimized
              />
              <Image
                src="/images/project_untaboo/usertesting3.webp"
                alt="Organizing research findings"
                width={0} height={0} sizes="33vw"
                style={{ width: "100%", height: "auto" }}
                className="rounded-sm"
                unoptimized
              />
            </div>
          </div>
        </section>

        {/* ─── Pain Points ─── */}
        <section id="pain-points" className="bg-[var(--color-jz-surface)] px-6 md:px-10 py-16 md:py-24">
          <div className="max-w-[1500px] mx-auto">
            <p className="font-body text-sm uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-3">
              Research Insights
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--color-jz-text)] mb-12 leading-tight">
              Pain Points We Uncovered
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--color-jz-border)]">

              {/* Pain Point 1 */}
              <div className="bg-[var(--color-jz-surface)] flex flex-col">
                <div className="flex justify-center items-center px-8 pt-8" style={{ height: "340px" }}>
                  <Image
                    src="/images/project_untaboo/pain_point1.webp"
                    alt="Pain point  -  limited product selection options"
                    width={0} height={0} sizes="25vw"
                    style={{ width: "auto", height: "100%", maxHeight: "320px", maxWidth: "260px" }}
                    unoptimized
                  />
                </div>
                <div className="p-10 flex-1">
                  <span className="font-display text-5xl font-bold block mb-4 leading-none" style={{ color: "#ffae00" }}>01</span>
                  <h3 className="font-display text-2xl font-bold text-[var(--color-jz-text)] mb-4">Product Selection</h3>
                  <ul className="space-y-2">
                    {[
                      "Insufficient direction on which products to choose",
                      "Limited options and inadequate imagery",
                      "5 users requested more variety; 4 noted colors felt dated",
                      "All 6 testers recommended color adjustments for legibility",
                    ].map((b, i) => (
                      <li key={i} className="flex gap-3 font-body text-base text-[var(--color-jz-text-secondary)]">
                        <span className="shrink-0 text-[var(--color-jz-text-muted)] mt-0.5">·</span>{b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Pain Point 2 */}
              <div className="bg-[var(--color-jz-surface)] flex flex-col">
                <div className="flex justify-center items-center px-8 pt-8" style={{ height: "340px" }}>
                  <Image
                    src="/images/project_untaboo/pain_point2.webp"
                    alt="Pain point  -  confusing time selection with too many options"
                    width={0} height={0} sizes="25vw"
                    style={{ width: "auto", height: "100%", maxHeight: "320px", maxWidth: "260px" }}
                    unoptimized
                  />
                </div>
                <div className="p-10 flex-1">
                  <span className="font-display text-5xl font-bold block mb-4 leading-none" style={{ color: "#ffae00" }}>02</span>
                  <h3 className="font-display text-2xl font-bold text-[var(--color-jz-text)] mb-4">Time Selection</h3>
                  <ul className="space-y-2">
                    {[
                      "Too many selection options created decision fatigue",
                      "Confusing interface with accessibility concerns around brand colors",
                      "4 users wanted faster selection via quick-pick buttons",
                      "3 found the instructional copy unclear",
                    ].map((b, i) => (
                      <li key={i} className="flex gap-3 font-body text-base text-[var(--color-jz-text-secondary)]">
                        <span className="shrink-0 text-[var(--color-jz-text-muted)] mt-0.5">·</span>{b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Pain Point 3 */}
              <div className="bg-[var(--color-jz-surface)] flex flex-col">
                <div className="flex justify-center items-center px-8 pt-8" style={{ height: "340px" }}>
                  <Image
                    src="/images/project_untaboo/paint_point3.webp"
                    alt="Pain point  -  brand colors and typography creating a dated aesthetic"
                    width={0} height={0} sizes="25vw"
                    style={{ width: "auto", height: "100%", maxHeight: "320px", maxWidth: "260px" }}
                    unoptimized
                  />
                </div>
                <div className="p-10 flex-1">
                  <span className="font-display text-5xl font-bold block mb-4 leading-none" style={{ color: "#ffae00" }}>03</span>
                  <h3 className="font-display text-2xl font-bold text-[var(--color-jz-text)] mb-4">Brand Disconnect</h3>
                  <ul className="space-y-2">
                    {[
                      "Colors and fonts created an unintended vintage aesthetic",
                      "Visual identity felt misaligned with the company's modern, inclusive vision",
                      "Required collaboration with the founder/CEO to course-correct",
                    ].map((b, i) => (
                      <li key={i} className="flex gap-3 font-body text-base text-[var(--color-jz-text-secondary)]">
                        <span className="shrink-0 text-[var(--color-jz-text-muted)] mt-0.5">·</span>{b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ─── Workshop / Ideation ─── */}
        <section id="workshop" className="bg-[var(--color-jz-bg)] px-6 md:px-10 py-16 md:py-24">
          <div className="max-w-[1500px] mx-auto">
            <p className="font-body text-sm uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-3">
              Ideation
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--color-jz-text)] mb-4 leading-tight">
              6-8-5 Workshop
            </h2>
            <p className="font-body text-lg text-[var(--color-jz-text-secondary)] max-w-2xl leading-relaxed mb-14">
              I facilitated a cross-functional brainstorming session with the design team, engineers, and
              leadership  -  generating ideas fast and building on each other&apos;s thinking through rapid
              sketching rounds.
            </p>
            <div className="grid grid-cols-3 gap-4 mb-10">
              <Image
                src="/images/project_untaboo/workshop_img1.webp"
                alt="Workshop sketch  -  home screen with period tracker and navigation"
                width={0} height={0} sizes="20vw"
                style={{ width: "100%", height: "auto" }}
                className="rounded-sm"
                unoptimized
              />
              <Image
                src="/images/project_untaboo/workshop_img2.webp"
                alt="Workshop sketch  -  home screen with request and become helper toggle"
                width={0} height={0} sizes="20vw"
                style={{ width: "100%", height: "auto" }}
                className="rounded-sm"
                unoptimized
              />
              <Image
                src="/images/project_untaboo/workshop_img3.webp"
                alt="Workshop sketch  -  28-day cycle tracker"
                width={0} height={0} sizes="20vw"
                style={{ width: "100%", height: "auto" }}
                className="rounded-sm"
                unoptimized
              />
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-3xl">
              {[
                "Users needed product search and help access from the home screen",
                "A period tracker feature was desired but secondary to core functionality",
                "Community support was considered a core differentiator",
                "Simple, to-the-point design was the clear preference",
              ].map((item) => (
                <li key={item} className="flex gap-3 font-body text-base text-[var(--color-jz-text-secondary)]">
                  <span className="shrink-0 text-[var(--color-jz-text-muted)]">→</span>{item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ─── First Iteration ─── */}
        <section id="iteration" className="bg-[var(--color-jz-surface)] px-6 md:px-10 py-16 md:py-24">
          <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-body text-sm uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-3">
                Iteration
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--color-jz-text)] leading-tight mb-8">
                Getting the Home Screen Right
              </h2>
              <p className="font-body text-lg text-[var(--color-jz-text-secondary)] leading-relaxed mb-6">
                Initial testing revealed three problems with our first home screen design. The period
                tracker dominated the page, confused users about the app&apos;s primary purpose, and the
                button hierarchy buried the most important action.
              </p>
              <ul className="space-y-4">
                {[
                  { num: "1", text: "Period tracker prominence confused the app's main purpose" },
                  { num: "2", text: "Heavy single-color usage created visual fatigue" },
                  { num: "3", text: "Primary function buttons lacked sufficient contrast and hierarchy" },
                ].map((item) => (
                  <li key={item.num} className="flex gap-4 font-body text-base text-[var(--color-jz-text-secondary)]">
                    <span className="font-display font-bold text-lg shrink-0" style={{ color: "#ffae00" }}>{item.num}</span>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/project_untaboo/iteration1.webp"
                alt="First home screen iteration  -  period tracker with Find Product, Active Request, In Progress buttons"
                width={0} height={0} sizes="30vw"
                style={{ width: "100%", height: "auto", maxWidth: "320px" }}
                className="rounded-sm"
                unoptimized
              />
            </div>
          </div>
        </section>

        {/* ─── The Solution ─── */}
        <section id="solution" className="bg-[var(--color-jz-bg)] px-6 md:px-10 py-16 md:py-24">
          <div className="max-w-[1500px] mx-auto">
            <p className="font-body text-sm uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-3">
              The Solution
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--color-jz-text)] mb-6 leading-tight">
              Designing for Clarity &amp; Community
            </h2>
            <p className="font-body text-lg text-[var(--color-jz-text-secondary)] max-w-3xl leading-relaxed mb-20">
              Every decision came back to three things users told us they wanted: an app that&apos;s
              straightforward and to the point, a personable experience, and a social environment that
              makes them feel safe.
            </p>

            <div className="space-y-24">

              {/* Row 1  -  text left, image right */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold mb-4" style={{ color: "var(--color-jz-accent)" }}>
                    Product Selection  -  Redesigned
                  </h3>
                  <p className="font-body text-lg text-[var(--color-jz-text-secondary)] leading-relaxed">
                    Expanded product options to include Tampons, Pads, and Panty Liners, with absorbency
                    levels (Light, Regular, Super) and applicator types (Paper, Plastic, None). Clear
                    iconography replaced the dated visual language, and colors were updated based directly
                    on user feedback.
                  </p>
                </div>
                <div className="flex justify-center">
                  <Image
                    src="/images/project_untaboo/solution1.webp"
                    alt="Redesigned product selection screen with clear icons and expanded options"
                    width={0} height={0} sizes="30vw"
                    style={{ width: "100%", height: "auto", maxWidth: "340px" }}
                    className="rounded-sm"
                    unoptimized
                  />
                </div>
              </div>

              {/* Row 2  -  image left, text right */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div className="flex justify-center">
                  <Image
                    src="/images/project_untaboo/solution2.webp"
                    alt="Simplified time selection screen with native time range picker"
                    width={0} height={0} sizes="30vw"
                    style={{ width: "100%", height: "auto", maxWidth: "340px" }}
                    className="rounded-sm"
                    unoptimized
                  />
                </div>
                <div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold mb-4" style={{ color: "var(--color-jz-accent)" }}>
                    Time Selection  -  Simplified
                  </h3>
                  <p className="font-body text-lg text-[var(--color-jz-text-secondary)] leading-relaxed">
                    Replaced the overloaded picker with a clean native time range selector users already
                    understand. Simplified the instructional copy to a single clear question  - 
                    &ldquo;What time works best for you?&rdquo;  -  and added a prominent Next button to move
                    the flow forward without confusion.
                  </p>
                </div>
              </div>

              {/* Row 3  -  text left, image right */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold mb-4" style={{ color: "var(--color-jz-accent)" }}>
                    Brand Identity  -  Refined
                  </h3>
                  <p className="font-body text-lg text-[var(--color-jz-text-secondary)] leading-relaxed">
                    Worked directly with the founder/CEO to refine (not replace) the color palette.
                    Created a mood board to align the team around a modern, inclusive visual direction  - 
                    teal as the primary color, with a cleaner typographic system. Small adjustments,
                    big shift in perception.
                  </p>
                </div>
                <div className="flex justify-center">
                  <Image
                    src="/images/project_untaboo/solution3.webp"
                    alt="Brand moodboard  -  refined teal palette and visual direction"
                    width={0} height={0} sizes="30vw"
                    style={{ width: "100%", height: "auto", maxWidth: "420px" }}
                    className="rounded-sm"
                    unoptimized
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ─── Home Screen Solution ─── */}
        <section className="bg-[var(--color-jz-surface)] px-6 md:px-10 py-16 md:py-24">
          <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-body text-sm uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-3">
                Home Screen
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--color-jz-text)] leading-tight mb-8">
                One Clear Question
              </h2>
              <p className="font-body text-lg text-[var(--color-jz-text-secondary)] leading-relaxed mb-6">
                The redesigned home screen leads with a single, direct question: &ldquo;What do you need
                today?&rdquo; The primary CTA  -  Find Product  -  is immediately visible. The period tracker
                is still there, but supporting, not dominating.
              </p>
              <ul className="space-y-3">
                {[
                  "Find Product promoted to primary CTA",
                  "Offer Help as a clear secondary action",
                  "Period tracker moved below the fold",
                  "Reduced color usage for a cleaner, more breathable layout",
                ].map((item) => (
                  <li key={item} className="flex gap-3 font-body text-base text-[var(--color-jz-text-secondary)]">
                    <span className="shrink-0 text-[var(--color-jz-text-muted)]">·</span>{item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/project_untaboo/homescreen_solution.webp"
                alt="Final home screen  -  Find Product and Offer Help CTAs with period tracker below"
                width={0} height={0} sizes="30vw"
                style={{ width: "100%", height: "auto", maxWidth: "320px" }}
                className="rounded-sm"
                unoptimized
              />
            </div>
          </div>
        </section>

        {/* ─── Key Screens ─── */}
        <section id="key-screens" className="bg-[var(--color-jz-bg)] px-6 md:px-10 py-16 md:py-24">
          <div className="max-w-[1500px] mx-auto">
            <p className="font-body text-sm uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-3">
              Key Screens
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--color-jz-text)] mb-14 leading-tight">
              The Core Flow
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
              <div>
                <p className="font-body text-xs uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-4">
                  Choose Your Helper
                </p>
                <div className="flex justify-center">
                  <Image
                    src="/images/project_untaboo/search.webp"
                    alt="Choose your helper screen  -  3 nearby users with profile, products, time, and distance"
                    width={0} height={0} sizes="30vw"
                    style={{ width: "100%", height: "auto", maxWidth: "340px" }}
                    className="rounded-sm"
                    unoptimized
                  />
                </div>
                <p className="font-body text-base text-[var(--color-jz-text-secondary)] leading-relaxed mt-6">
                  Users see nearby helpers with their available products, timing, and distance  -  building
                  trust through transparency and community ratings.
                </p>
              </div>
              <div>
                <p className="font-body text-xs uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-4">
                  Request Help
                </p>
                <div className="flex justify-center">
                  <Image
                    src="/images/project_untaboo/request_help.webp"
                    alt="Request Help  -  product selection step with type and absorbency options"
                    width={0} height={0} sizes="30vw"
                    style={{ width: "100%", height: "auto", maxWidth: "340px" }}
                    className="rounded-sm"
                    unoptimized
                  />
                </div>
                <p className="font-body text-base text-[var(--color-jz-text-secondary)] leading-relaxed mt-6">
                  A 4-step request flow  -  Location, Product, Timing, Review  -  guides users through a
                  clear, structured process with no ambiguity at each step.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Screens ─── */}
        <section className="bg-[var(--color-jz-surface)] px-6 md:px-10 py-16 md:py-24">
          <div className="max-w-[1500px] mx-auto">
            <p className="font-body text-sm uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-3">
              The Screens
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--color-jz-text)] mb-12 leading-tight">
              Final Designs
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                "homescreen_solution.webp",
                "1..webp",
                "2..webp",
                "3.webp",
                "4..webp",
                "5..webp",
                "6..webp",
                "7..webp",
                "8..webp",
              ].map((file) => (
                <div key={file} className="rounded-2xl overflow-hidden bg-[var(--color-jz-border)]">
                  <Image
                    src={`/images/project_untaboo/${file}`}
                    alt={`Untaboo screen ${file.replace(".webp", "")}`}
                    width={400}
                    height={800}
                    className="w-full h-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Reflection ─── */}
        <section id="reflection" className="bg-[#1a130a] overflow-hidden py-16 md:py-24">
          <div className="overflow-hidden mb-14 cursor-default select-none">
            <div className="marquee-track flex whitespace-nowrap">
              {[0, 1].map((n) => (
                <span key={n} className="flex shrink-0 items-center font-display text-5xl md:text-6xl font-bold text-[#f5f0e8]">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <span key={i} className="inline-flex items-center gap-4 mr-4">
                      <span>Reflection</span>
                      <svg viewBox="0 0 100 100" className="w-8 h-8 shrink-0 fill-[#f5f0e8]" xmlns="http://www.w3.org/2000/svg">
                        {[0, 60, 120, 180, 240, 300].map((deg) => (
                          <ellipse key={deg} cx="50" cy="26" rx="11" ry="18" transform={`rotate(${deg} 50 50)`} />
                        ))}
                      </svg>
                    </span>
                  ))}
                </span>
              ))}
            </div>
          </div>

          <div className="max-w-[1500px] mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
              {reflectionCols.map((col) => (
                <div key={col.label}>
                  <div className="inline-block border border-[#e8c84a] bg-[#f5f0e8] text-[#1a130a] font-display font-medium text-sm px-6 py-3 mb-8 rounded-sm">
                    {col.label}
                  </div>
                  <ul className="space-y-4 text-[#c8bfb0] font-body text-sm leading-relaxed list-none">
                    {col.points.map((pt, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="mt-1 shrink-0 text-[#8a7a60]">·</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── End CTA ─── */}
        <section className="bg-[var(--color-jz-surface)] px-6 md:px-10 py-20 md:py-28">
          <div className="max-w-[1500px] mx-auto text-center">
            <p className="font-display text-2xl md:text-3xl font-bold text-[var(--color-jz-text)] mb-2">
              You&apos;ve reached the end
            </p>
            <p className="font-body text-lg text-[var(--color-jz-text-secondary)] mb-10">
              But stick around!
            </p>
            <Link
              href="/tagboard"
              className="inline-block font-body text-sm font-semibold px-8 py-4 border border-[var(--color-jz-text)] text-[var(--color-jz-text)] hover:bg-[var(--color-jz-text)] hover:text-[var(--color-jz-bg)] transition-colors duration-200 mb-16"
            >
              View Tagboard work →
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

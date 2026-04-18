import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/portfolio/Nav";
import Footer from "@/components/portfolio/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Production Dashboard — JZ",
  description:
    "End-to-end redesign of Tagboard's Production Management Dashboard — improving information architecture and streamlining workflows for live content producers.",
};

const learningCols = [
  {
    label: "Redesigning Under Constraints",
    points: [
      "The existing dashboard had years of feature accumulation — every element had a stakeholder. Navigating that required diplomacy as much as design judgment.",
      "Shipping incrementally rather than all at once meant designs had to be backward-compatible with existing workflows.",
      "Constraints forced creative prioritization: deciding what not to show was often harder than deciding what to show.",
    ],
  },
  {
    label: "What I Learned",
    points: [
      "Observing real producers in live broadcast environments revealed pain points no survey would have surfaced.",
      "Information architecture work is invisible when done well — users just feel like the tool 'makes sense.'",
      "Bringing engineers into discovery sessions early shortened the feedback loop and prevented costly design pivots late in the process.",
    ],
  },
  {
    label: "Design Philosophy",
    points: [
      "Clarity over cleverness — in high-stakes live environments, producers need confidence, not novelty.",
      "Every extra click in a live production is a liability. Speed and predictability are features.",
      "A great dashboard disappears — the producer's focus should be on the show, not on navigating software.",
    ],
  },
];

const newFeatures = [
  {
    number: "1.",
    title: "Improving Organization",
    image: "/images/producer-issue1.webp",
    alt: "Improving Organization — dashboard grid layout",
    points: [
      { plain: "Changing layout to a grid, allowed for ", bold: "easier visual scanning", rest: "." },
      { plain: "Introduced ", bold: "double-click functionality", rest: " to enter production." },
      { plain: "Introduced a ", bold: "Starred section", rest: " to help users ", bold2: "quickly access", rest2: " their important or frequently used productions." },
      { plain: "Option to show list view or card view for personal preferences and ", bold: "visual organization", rest: "." },
    ],
  },
  {
    number: "2.",
    title: "Streamlining Production Creation",
    image: "/images/producer-issue2.webp",
    alt: "Streamlining Production Creation — new production modal",
    points: [
      { plain: "Adding a modal to the ", bold: "workflow prompting user", rest: " to add a name for the new production." },
      { plain: "If users do not belong to a team, remove option.", bold: null, rest: "" },
      { plain: "The option to \u201cAdd to Starred\u201d directly within the creation process.", bold: null, rest: "" },
      { plain: "A tag feature for categorizing the production to facilitate searching and organization.", bold: null, rest: "" },
    ],
  },
  {
    number: "3.",
    title: "Enhancing Information Display",
    image: "/images/producer-issue3.webp",
    alt: "Enhancing Information Display — right panel metadata",
    points: [
      { plain: "", bold: "Upon single click:", rest: " A right panel opens to display important meta data for each item to help with creation and edit history." },
      { plain: "Output status to let users know which production is \u201cLive\u201d and \u201cOn-Air\u201d so they ", bold: "do not enter during air time.", rest: "" },
      { plain: "A view in to ", bold: "who is working inside a production.", rest: "" },
    ],
  },
  {
    number: "4.",
    title: "Improving Production Management",
    image: "/images/producer-issue4.webp",
    alt: "Improving Production Management — deleted productions view",
    points: [
      { plain: "Option to ", bold: "delete productions", rest: " to keep unused or old productions out of view." },
      { plain: "Restore feature with ", bold: "30 day notice for accidental deletions", rest: " and better management." },
    ],
  },
];

export default function DashboardRedesignPage() {
  return (
    <>
      <Nav />
      <main>

        {/* ─── Hero ─── */}
        <section className="bg-[var(--color-jz-bg)] px-6 md:px-10 pt-16 pb-20 md:pt-24 md:pb-28">
          <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-body text-sm uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-4">
                <strong>Tagboard</strong> • Redesign • B2B SaaS • End-to-End
              </p>
              <h1 className="font-display font-bold text-[var(--color-jz-text)] leading-tight mb-6">
                <span className="text-5xl md:text-7xl block">Production Dashboard</span>
                <span className="text-2xl md:text-3xl font-semibold text-[var(--color-jz-text-secondary)] block mt-2">Redesign · 2022</span>
              </h1>
              <p className="font-body text-xl md:text-2xl text-[var(--color-jz-text-secondary)] leading-relaxed mb-4">
                End-to-end redesign of the Production Management Dashboard — enhancing information architecture and streamlining the live broadcast workflow.
              </p>
              <p className="font-body text-sm text-[var(--color-jz-text-muted)] italic max-w-2xl">
                Due to Non-Disclosure Agreements, specific details and visuals from this project are omitted to maintain confidentiality.
              </p>
            </div>
            <div>
              <Image
                src="/images/producer-hero-casestudy.webp"
                alt="Production Dashboard Redesign — Tagboard"
                width={0}
                height={0}
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ width: "100%", height: "auto" }}
                className="rounded-sm"
                unoptimized
              />
            </div>
          </div>
        </section>

        {/* ─── Context ─── */}
        <section className="bg-[var(--color-jz-surface)] px-6 md:px-10 py-16 md:py-24">
          <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 items-start">
            <div>
              <p className="font-body text-sm uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-3">
                Context
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-jz-text)] leading-tight mb-4">
                The Project
              </h2>
              <div className="space-y-2 mt-8">
                <p className="font-body text-xs uppercase tracking-widest text-[var(--color-jz-text-muted)]">Role</p>
                <p className="font-body text-base font-semibold text-[var(--color-jz-text)]">Lead Product Designer</p>
              </div>
              <div className="space-y-2 mt-6">
                <p className="font-body text-xs uppercase tracking-widest text-[var(--color-jz-text-muted)]">Company</p>
                <p className="font-body text-base font-semibold text-[var(--color-jz-text)]">Tagboard</p>
              </div>
              <div className="space-y-2 mt-6">
                <p className="font-body text-xs uppercase tracking-widest text-[var(--color-jz-text-muted)]">Year</p>
                <p className="font-body text-base font-semibold text-[var(--color-jz-text)]">2022</p>
              </div>
              <div className="space-y-2 mt-6">
                <p className="font-body text-xs uppercase tracking-widest text-[var(--color-jz-text-muted)]">Scope</p>
                <p className="font-body text-base font-semibold text-[var(--color-jz-text)]">End-to-End</p>
              </div>
            </div>
            <div>
              <p className="font-body text-lg text-[var(--color-jz-text-secondary)] leading-relaxed mb-6">
                Tagboard&apos;s Production Dashboard is the nerve center for live content producers —
                the tool they use to manage, schedule, and push graphics to screen during broadcasts.
                As the product scaled, the dashboard had accumulated{" "}
                <strong className="text-[var(--color-jz-text)]">years of features without a unifying structure</strong>,
                leaving producers navigating a cluttered interface under the pressure of live production.
              </p>
              <p className="font-body text-lg text-[var(--color-jz-text-secondary)] leading-relaxed mb-6">
                I led the end-to-end redesign — from initial discovery and user research through final
                design handoff. The goal was to restructure the information architecture and rebuild
                the interface so that it reflected how producers actually work, not just how features
                had been bolted on over time.
              </p>
              <p className="font-body text-sm text-[var(--color-jz-text-muted)] leading-relaxed">
                <span className="font-medium text-[var(--color-jz-text-secondary)]">Credits:</span>{" "}
                Engineering team, Product Manager Jenny Yang, VP of Product and Strategy Christine Chalk,
                and the Tagboard producer community whose feedback shaped every iteration.
              </p>
            </div>
          </div>
        </section>

        {/* ─── Problem ─── */}
        <section className="bg-[var(--color-jz-bg)] px-6 md:px-10 py-16 md:py-24">
          <div className="max-w-[1500px] mx-auto border-t border-[var(--color-jz-border)] pt-12">
            <p className="font-body text-sm uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-3">
              The Problem
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--color-jz-text)] leading-tight mb-12 max-w-xl">
              What We Were Solving
            </h2>
            <blockquote className="border-l-4 border-[var(--color-jz-accent)] pl-8 max-w-4xl mb-14">
              <p className="font-display text-2xl md:text-3xl font-bold text-[var(--color-jz-text)] leading-snug italic">
                &ldquo;Producers are losing valuable seconds during live broadcasts navigating a dashboard
                that wasn&apos;t designed with their workflow in mind. We need to fix this before we
                lose them to competitors.&rdquo;
              </p>
            </blockquote>

            <Image
              src="/images/producer-before.webp"
              alt="Production Dashboard — before redesign"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              className="rounded-sm"
              unoptimized
            />
          </div>
        </section>

        {/* ─── Process: Audit ─── */}
        <section className="bg-[var(--color-jz-surface)] px-6 md:px-10 py-16 md:py-24">
          <div className="max-w-[1500px] mx-auto">
            <p className="font-body text-sm uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-3">
              Process — Step 01
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--color-jz-text)] mb-12 leading-tight">
              Audit &amp; Discovery
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-12 items-start">
              <div>
                <Image
                  src="/images/producer-audit.webp"
                  alt="Dashboard audit — cataloging components and screen states"
                  width={0}
                  height={0}
                  sizes="(max-width: 768px) 100vw, 66vw"
                  style={{ width: "100%", height: "auto" }}
                  className="rounded-sm"
                  unoptimized
                />
              </div>
              <div className="flex flex-col justify-center">
                <p className="font-body text-lg text-[var(--color-jz-text-secondary)] leading-relaxed mb-6">
                  Conducted a full audit of the existing dashboard — cataloging every component,
                  interaction, and screen state. Paired with stakeholder interviews and session
                  recordings to map where producers were losing time and where critical information
                  was buried.
                </p>
                <ul className="space-y-3">
                  {[
                    "Full component & interaction inventory",
                    "Stakeholder interviews across teams",
                    "Session recording analysis",
                    "Pain point mapping",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 font-body text-sm text-[var(--color-jz-text-secondary)]">
                      <span className="shrink-0 text-[var(--color-jz-accent)] mt-0.5">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Process: User Research ─── */}
        <section className="bg-[var(--color-jz-bg)] px-6 md:px-10 py-16 md:py-24">
          <div className="max-w-[1500px] mx-auto">
            <p className="font-body text-sm uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-3">
              Process — Step 02
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--color-jz-text)] mb-12 leading-tight">
              User Interviews &amp; Personas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 items-start">
              <div className="flex flex-col justify-center">
                <p className="font-body text-lg text-[var(--color-jz-text-secondary)] leading-relaxed mb-6">
                  Sat with live production teams to observe their real workflows. Discovered that
                  producers were context-switching between multiple panels constantly, and that
                  the most-used controls were the least accessible.
                </p>
                <p className="font-body text-lg text-[var(--color-jz-text-secondary)] leading-relaxed">
                  These sessions directly shaped the new information hierarchy — and exposed that
                  different producer types had meaningfully different needs within the same tool.
                </p>
              </div>
              <div>
                <Image
                  src="/images/producer-personas.webp"
                  alt="Producer personas developed from user research"
                  width={0}
                  height={0}
                  sizes="(max-width: 768px) 100vw, 66vw"
                  style={{ width: "100%", height: "auto" }}
                  className="rounded-sm"
                  unoptimized
                />
              </div>
            </div>

            {/* User Pain Points */}
            <div className="mt-16 pt-16 border-t border-[var(--color-jz-border)]">
              <h3 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-jz-text)] mb-6 leading-tight">
                User Pain Points
              </h3>
              <p className="font-body text-lg text-[var(--color-jz-text-secondary)] leading-relaxed mb-2 max-w-3xl">
                From our research, we found 3 key issues with{" "}
                <strong className="text-[var(--color-jz-text)]">the product that affected the efficiency and overall workflow of our users</strong>.
                The direction of the redesign was a project aimed at enhancing the user experience and operational efficiency for producers.
              </p>
              <p className="font-body text-lg text-[var(--color-jz-text-secondary)] leading-relaxed mb-12">
                Issues our users had with our current dashboard:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--color-jz-border)]">
                {[
                  {
                    number: "1.",
                    title: "Difficulty Finding Productions",
                    points: [
                      { bold: "Over 75%", rest: " of our users used CTRL+F to find a production. A heartbreak, truly." },
                      { bold: null, rest: "Many users had \u201cUntitled\u201d productions." },
                    ],
                  },
                  {
                    number: "2.",
                    title: "Creating For The Wrong Teams",
                    points: [
                      { bold: null, rest: "Users failed to select appropriate team accounts before creating a production." },
                      { bold: null, rest: "Users had to contact a member of our Client Success team to help find a production." },
                      { bold: null, rest: "After creating a new production, users left their productions untitled." },
                    ],
                  },
                  {
                    number: "3.",
                    title: "Inadequate display of information",
                    points: [
                      { bold: null, rest: "Users frequently selected the incorrect production due to a lack of sufficient information." },
                      { bold: null, rest: "There was poor knowledge of production ownership making it difficult to make edits." },
                    ],
                  },
                ].map((col) => (
                  <div key={col.title} className="bg-[var(--color-jz-bg)] p-10">
                    <span className="font-display text-5xl font-bold text-[var(--color-jz-accent)] block mb-4 leading-none opacity-40">
                      {col.number}
                    </span>
                    <h4 className="font-display text-xl font-bold text-[var(--color-jz-text)] mb-6 leading-snug">
                      {col.title}
                    </h4>
                    <ul className="space-y-3">
                      {col.points.map((pt, i) => (
                        <li key={i} className="flex gap-2 font-body text-sm text-[var(--color-jz-text-secondary)] leading-relaxed">
                          <span className="shrink-0 text-[var(--color-jz-text-muted)] mt-0.5">·</span>
                          <span>
                            {pt.bold && <strong className="text-[var(--color-jz-text)]">{pt.bold}</strong>}
                            {pt.rest}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ─── Understanding the users ─── */}
        <section className="px-6 md:px-10 py-16 md:py-24" style={{ background: "linear-gradient(135deg, #fef6cc 0%, #fce4e8 100%)" }}>
          <div className="max-w-[1500px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-12 md:gap-20 items-start">

              {/* Left — heading + intro */}
              <div className="md:sticky md:top-24">
                <p className="font-body text-xs uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-4">
                  Discovery
                </p>
                <h2 className="font-display font-bold text-[var(--color-jz-text)] leading-[1.05] mb-8">
                  <span className="block text-5xl md:text-6xl">Understanding</span>
                  <span className="block text-5xl md:text-6xl italic text-[var(--color-jz-accent)]">the users</span>
                </h2>
                <p className="font-body text-lg text-[var(--color-jz-text-secondary)] leading-relaxed">
                  During this initial discovery phase, we began to formulate questions around their needs and concerns to help us craft the best solutions.
                </p>
              </div>

              {/* Right — problem statements as cards */}
              <div>
                <p className="font-body text-xs font-semibold uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-6">
                  Problem Statements
                </p>
                <div className="space-y-3">
                  {[
                    { plain: "How might we ", bold: "help our users find", rest: " a specific production within a long list?" },
                    { plain: "If users do not know or remember their production name, ", bold: "what other information could they use", rest: "?" },
                    { plain: "How can we ", bold: "decrease user error", rest: " and keep them from creating productions in the wrong team?" },
                    { plain: <>
                        <em>Why</em>{" "}are users not naming their productions, and{" "}
                      </>, bold: "how might we highlight the value of proper naming", rest: "?" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="group flex gap-5 items-start bg-white/60 hover:bg-white/90 transition-colors duration-200 rounded-xl p-6 backdrop-blur-sm"
                    >
                      <span className="font-display text-4xl font-bold text-[var(--color-jz-accent)] leading-none mt-1 select-none opacity-60 group-hover:opacity-100 transition-opacity">
                        {i + 1}
                      </span>
                      <p className="font-body text-lg text-[var(--color-jz-text-secondary)] leading-relaxed pt-1">
                        {item.plain}
                        <strong className="text-[var(--color-jz-text)]">{item.bold}</strong>
                        {item.rest}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ─── Mid-Fidelity ─── */}
        <section className="bg-[var(--color-jz-bg)] px-6 md:px-10 py-16 md:py-24">
          <div className="max-w-[1500px] mx-auto">
            <p className="font-body text-sm font-bold text-[var(--color-jz-text)] mb-3">
              Ideation time!
            </p>
            <h2 className="font-display text-5xl md:text-7xl font-bold text-[var(--color-jz-accent)] mb-8 leading-tight">
              Mid-Fidelity
            </h2>
            <p className="font-body text-xl md:text-2xl text-[var(--color-jz-text-secondary)] leading-relaxed mb-4 max-w-3xl">
              To test assumptions I created mid-fi wireframes in order to test the prototype and user interface design.
            </p>
            <p className="font-body text-base text-[var(--color-jz-text-muted)] italic mb-14 max-w-3xl">
              These mockups were slightly adjusted to respect confidential visuals and information. Have no fear, lo-fidelity mockups were created but unable to share.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { src: "/images/producer-mid1.webp", alt: "Mid-fidelity wireframe — dashboard overview" },
                { src: "/images/producer-mid2.webp", alt: "Mid-fidelity wireframe — new production modal" },
                { src: "/images/producer-mid3.webp", alt: "Mid-fidelity wireframe — expanded nav" },
              ].map((item) => (
                <div key={item.src} className="overflow-hidden rounded-sm border border-[var(--color-jz-border)]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={0}
                    height={0}
                    sizes="33vw"
                    style={{ width: "100%", height: "auto" }}
                    unoptimized
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Before / After ─── */}
        <section className="bg-[var(--color-jz-surface)] px-6 md:px-10 py-16 md:py-24">
          <div className="max-w-[1500px] mx-auto">
            <p className="font-body text-sm uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-3">
              The Approach — Information Architecture
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-jz-text)] leading-tight mb-6">
              Restructuring for How Producers Think
            </h2>
            <p className="font-body text-lg text-[var(--color-jz-text-secondary)] leading-relaxed mb-12 max-w-3xl">
              The old dashboard was organized around how the software was built — by feature category.
              The new structure was organized around{" "}
              <strong className="text-[var(--color-jz-text)]">how producers work</strong>:{" "}
              pre-show setup, live management, and post-show review.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--color-jz-border)]">
              <div className="bg-[var(--color-jz-surface)]">
                <div className="overflow-hidden">
                  <Image
                    src="/images/producer-before.webp"
                    alt="Production Dashboard — before redesign"
                    width={0}
                    height={0}
                    sizes="50vw"
                    style={{ width: "100%", height: "auto" }}
                    unoptimized
                  />
                </div>
                <div className="p-8 border-t border-[var(--color-jz-border)]">
                  <p className="font-body text-xs uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-2">Before</p>
                  <p className="font-body text-base text-[var(--color-jz-text-secondary)]">Features grouped by type — all options visible at once, flat undifferentiated hierarchy.</p>
                </div>
              </div>
              <div className="bg-[var(--color-jz-surface)]">
                <div className="overflow-hidden">
                  <Image
                    src="/images/producer-after.webp"
                    alt="Production Dashboard — after redesign"
                    width={0}
                    height={0}
                    sizes="50vw"
                    style={{ width: "100%", height: "auto" }}
                    unoptimized
                  />
                </div>
                <div className="p-8 border-t border-[var(--color-jz-accent)]" style={{ borderTopWidth: "3px" }}>
                  <p className="font-body text-xs uppercase tracking-widest text-[var(--color-jz-accent)] mb-2">After</p>
                  <p className="font-body text-base text-[var(--color-jz-text-secondary)]">Controls grouped by workflow stage — progressive disclosure, clear primary and secondary actions.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── New Product Features ─── */}
        <section className="bg-[var(--color-jz-bg)] px-6 md:px-10 py-16 md:py-24">
          <div className="max-w-[1500px] mx-auto">

            {/* Header */}
            <div className="mb-16 border-t border-[var(--color-jz-border)] pt-12">
              <p className="font-body text-sm uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-3">
                The Solution
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--color-jz-text)] mb-8 leading-tight">
                New Product Features
              </h2>
              <p className="font-body text-lg text-[var(--color-jz-text-secondary)] leading-relaxed mb-4 max-w-3xl">
                I aimed to make the new dashboard user-centric, card-based interface to allow for easier access to key production details and quick navigation through sorting and filtering.
              </p>
              <p className="font-body text-lg text-[var(--color-jz-text-secondary)] leading-relaxed mb-12 max-w-3xl">
                As a reminder, the user pain points were centered around{" "}
                <strong className="text-[var(--color-jz-accent)]">finding productions,</strong>{" "}
                creating{" "}
                <strong className="text-[var(--color-jz-accent)]">productions in the wrong teams,</strong>{" "}
                unsure of{" "}
                <strong className="text-[var(--color-jz-accent)]">production ownership.</strong>
              </p>

              {/* 3 pain point cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--color-jz-border)] mb-14">
                {[
                  {
                    label: "Pain Point 01",
                    title: "Finding Productions",
                    body: "Over 75% of users were using CTRL+F to locate productions. Many had untitled entries with no way to distinguish one from another.",
                  },
                  {
                    label: "Pain Point 02",
                    title: "Creating for the Wrong Teams",
                    body: "Users frequently created productions under the wrong team account, requiring Client Success intervention to resolve — adding friction and delay.",
                  },
                  {
                    label: "Pain Point 03",
                    title: "Production Ownership",
                    body: "Without clear metadata, users couldn't identify who created or last modified a production — making collaboration and editing error-prone.",
                  },
                ].map((card) => (
                  <div key={card.title} className="bg-[var(--color-jz-bg)] p-10">
                    <p className="font-body text-xs uppercase tracking-widest text-[var(--color-jz-accent)] mb-4">{card.label}</p>
                    <h4 className="font-display text-xl font-bold text-[var(--color-jz-text)] mb-4 leading-tight">{card.title}</h4>
                    <p className="font-body text-sm text-[var(--color-jz-text-secondary)] leading-relaxed">{card.body}</p>
                  </div>
                ))}
              </div>

              <blockquote className="border-l-4 border-[var(--color-jz-accent)] pl-8 max-w-2xl">
                <p className="font-display text-2xl md:text-3xl font-bold text-[var(--color-jz-text)] leading-snug">
                  We solved the previous issues by:
                </p>
              </blockquote>
            </div>

            {/* 4 features */}
            <div className="space-y-16">
              {newFeatures.map((feature) => (
                <div key={feature.title} className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
                  {/* Text */}
                  <div className="flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="font-display text-4xl font-bold text-[var(--color-jz-border)] leading-none">
                        {feature.number.replace(".", "")}
                      </span>
                      <div className="h-px flex-1 bg-[var(--color-jz-border)]" />
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-[var(--color-jz-text)] mb-6 leading-tight">
                      {feature.title}
                    </h3>
                    <ul className="space-y-3">
                      {feature.points.map((pt, i) => (
                        <li key={i} className="flex gap-3 font-body text-base text-[var(--color-jz-text-secondary)] leading-relaxed">
                          <span className="shrink-0 text-[var(--color-jz-accent)] mt-1">→</span>
                          <span>
                            {pt.plain}
                            {pt.bold && <strong className="text-[var(--color-jz-text)]">{pt.bold}</strong>}
                            {pt.rest}
                            {"bold2" in pt && pt.bold2 && <><strong className="text-[var(--color-jz-text)]">{pt.bold2}</strong>{pt.rest2}</>}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Image */}
                  <div className="overflow-hidden flex items-center justify-center">
                    <Image
                      src={feature.image}
                      alt={feature.alt}
                      width={0}
                      height={0}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      style={{ width: "100%", height: "auto" }}
                      unoptimized
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Final shipped image */}
            <div className="mt-16 pt-16 border-t border-[var(--color-jz-border)]">
              <p className="font-body text-sm uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-6">
                Shipped
              </p>
              <Image
                src="/images/producer-shipped-redesign.webp"
                alt="Shipped Production Dashboard redesign"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                className="rounded-sm"
                unoptimized
              />
            </div>
          </div>
        </section>

        {/* ─── Impact ─── */}
        <section className="bg-[var(--color-jz-surface)] px-6 md:px-10 py-16 md:py-24">
          <div className="max-w-[1500px] mx-auto">
            <p className="font-body text-sm uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-3">Results</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--color-jz-text)] mb-16 leading-tight">
              Impact post release
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--color-jz-border)]">
              {[
                { stat: "95%", label: "Rise in users generating unique and specific production names" },
                { stat: "3x",  label: "Increase in production discovery speed" },
              ].map((item) => (
                <div key={item.stat} className="bg-[var(--color-jz-surface)] p-14 flex flex-col gap-4">
                  <span className="font-display text-7xl md:text-8xl font-bold text-[#ffae00] leading-none">
                    {item.stat}
                  </span>
                  <p className="font-body text-lg text-[var(--color-jz-text-secondary)] leading-relaxed max-w-xs">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Challenges ─── */}
        <section className="bg-[var(--color-jz-bg)] px-6 md:px-10 py-16 md:py-24">
          <div className="max-w-[1500px] mx-auto">
            <p className="font-body text-sm uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-3">Reflection</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--color-jz-text)] mb-16 leading-tight">
              Challenges &amp; final thoughts
            </h2>
            <div className="divide-y divide-[var(--color-jz-border)] border-t border-[var(--color-jz-border)]">
              {[
                {
                  q: "What happened to a search bar?",
                  a: "Due to the timeline of the project, we were unable to add a search engine to the MVP. Although starring productions helped sort important productions, it does not help when there is a long list of productions. Search would've been a complete net new feature that require extensive research that time did not allow.",
                },
                {
                  q: "Tagging was unsuccessful",
                  a: "Introducing a new workflow in the dashboard showed to be unsuccessful. If I had the time, I would've conducted user testing to validate our assumption that tagging would be widely used. Without a search feature, it served little to no purpose to users.",
                },
                {
                  q: "Feature prioritization",
                  a: "If I were to have done this project over I would've prioritized a search function over adding a tagging feature for the Dashboard. In retrospect, it makes sense why adding a search over a tagging feature would be beneficial; it is a workflow users were already accustomed to. In contrast, tagging a production was a new feature, so users naturally didn't seem convinced by it.",
                },
              ].map((item) => (
                <details key={item.q} className="group py-6">
                  <summary className="flex items-center justify-between gap-4 cursor-pointer list-none">
                    <span className="font-display text-xl md:text-2xl font-bold text-[var(--color-jz-text)] leading-snug">
                      {item.q}
                    </span>
                    <span className="shrink-0 w-8 h-8 rounded-full border border-[var(--color-jz-border)] flex items-center justify-center text-[var(--color-jz-text-muted)] group-open:rotate-180 transition-transform duration-200">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </summary>
                  <p className="font-body text-base text-[var(--color-jz-text-secondary)] leading-relaxed mt-4 max-w-3xl">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Learnings ─── */}
        <section className="bg-[#fdeef4] overflow-hidden py-16 md:py-24">
          <div className="overflow-hidden mb-14 cursor-default select-none" title="Hover to pause">
            <div className="marquee-track flex whitespace-nowrap">
              {[0, 1].map((n) => (
                <span
                  key={n}
                  className="flex shrink-0 items-center font-display text-5xl md:text-6xl font-bold text-[#7a2a52]"
                >
                  {Array.from({ length: 8 }).map((_, i) => (
                    <span key={i} className="inline-flex items-center gap-4 mr-4">
                      <span>Learnings</span>
                      <span className="text-[#c06090] leading-none">✳</span>
                    </span>
                  ))}
                </span>
              ))}
            </div>
          </div>

          <div className="max-w-[1500px] mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
              {learningCols.map((col) => (
                <div key={col.label}>
                  <div className="inline-block bg-[#7a2a52] text-white font-display font-medium text-sm px-6 py-3 mb-8 rounded-sm">
                    {col.label}
                  </div>
                  <ul className="space-y-4 text-[#5c2040] font-body text-sm leading-relaxed list-none">
                    {col.points.map((pt, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="mt-1 shrink-0 text-[#c06090]">·</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="bg-[var(--color-jz-surface)] px-6 md:px-10 py-20 md:py-28">
          <div className="max-w-[1500px] mx-auto text-center">
            <p className="font-display text-2xl md:text-3xl font-bold text-[var(--color-jz-text)] mb-2">
              You&apos;ve reached the end
            </p>
            <p className="font-body text-lg text-[var(--color-jz-text-secondary)] mb-10">
              But stick around!
            </p>
            <Link
              href="/nba-sportradar"
              className="inline-block font-body text-sm font-semibold px-8 py-4 border border-[var(--color-jz-text)] text-[var(--color-jz-text)] hover:bg-[var(--color-jz-text)] hover:text-[var(--color-jz-bg)] transition-colors duration-200 mb-16"
            >
              View NBA × Sportradar →
            </Link>

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/portfolio/Nav";
import Footer from "@/components/portfolio/Footer";
import Link from "next/link";
import CaseStudyNav from "@/components/portfolio/CaseStudyNav";

export const metadata: Metadata = {
  title: "Google Sheet Integration — JZ",
  description:
    "Introducing Google Sheets to Tagboard's Graphic Editor, automating live data importation and streamlining the on-air workflow for graphic Creators.",
};

const painPoints = [
  {
    number: "1.",
    title: "Manual Data Entry Errors",
    points: [
      { bold: null, rest: "Users had to copy-paste live data from spreadsheets into Tagboard graphics by hand, a slow, error-prone process under broadcast deadlines." },
      { bold: null, rest: "Any update to source data required repeating the manual process entirely, with no way to stay in sync automatically." },
    ],
  },
  {
    number: "2.",
    title: "Intimidating Technical Workflow",
    points: [
      { bold: null, rest: "Data-specific jargon (\"pagination\", \"cell references\", \"data binding\") created a steep learning curve for non-technical graphic Creators." },
      { bold: null, rest: "Users weren't confident which data points were available or how they mapped to elements in their graphic." },
    ],
  },
  {
    number: "3.",
    title: "No Live Synchronization",
    points: [
      { bold: null, rest: "Graphics went stale the moment source data changed; producers had to manually refresh, creating risk of airing outdated information." },
      { bold: null, rest: "There was no background sync, so users had to stay vigilant and manually trigger updates throughout a live broadcast." },
    ],
  },
];

const solutions = [
  {
    number: "1.",
    title: "Simplification of Complex Workflows",
    points: [
      { plain: "Display ", bold: "all Google Sheet cell data upfront", rest: " rather than listing column headers only, giving users full confidence in what they're importing." },
      { plain: "Allow ", bold: "importing data directly onto the canvas", rest: ". Tagboard auto-defines elements as text or image, reducing decision fatigue." },
      { plain: "Alternative workflow: add a text or image element first, then ", bold: "map data to it", rest: ", supporting both beginner and power-user patterns." },
    ],
  },
  {
    number: "2.",
    title: "Democratizing Data-Driven Content",
    points: [
      { plain: "Replaced data-specific jargon with plain language: ", bold: "\"current page\" instead of \"pagination\"", rest: ", lowering the barrier for non-technical graphic Creators." },
      { plain: "Auto-display data formatting that ", bold: "matches how it appears in Google Sheets", rest: ", so users immediately recognize their own data." },
      { plain: "Reduced modal usage to prevent workflow interruption; ", bold: "right-panel options", rest: " handle filtering, layout, and spacing adjustments inline." },
    ],
  },
];

const reflectionCols = [
  {
    label: "How I Grew",
    points: [
      "Leading a complex API integration taught me how to bridge engineering constraints and user expectations. I had to deeply understand what the Google Sheets API could and couldn't do before designing around it.",
      "Working at the intersection of technical capability and non-technical users pushed me to become a stronger advocate for plain-language design.",
      "Regular design critiques and feedback loops across engineering, PM, and users made me more rigorous about validating assumptions before finalizing any pattern.",
    ],
  },
  {
    label: "What I Learned",
    points: [
      "Showing all data upfront, rather than asking users to trust the system, was the single biggest confidence builder. Transparency in data selection is a UX principle I'll carry forward.",
      "Competitive analysis revealed that most tools make the same mistake: designing for data engineers, not for the people who actually use the data in context.",
      "Feedback loops matter most on ambiguous features. We caught two critical misalignments in usability testing that would have shipped as confusing UI without it.",
    ],
  },
  {
    label: "What I'd Do Differently",
    points: [
      "I would have pushed harder for an onboarding flow for first-time connection. Users who'd never used a data integration before needed more scaffolding than we provided at launch.",
      "The mapping interface still felt technical to some users. I'd explore a more visual drag-to-map interaction as an alternative to the dropdown-based approach.",
      "Earlier workshops with Customer Success would have surfaced edge cases (private sheets, permission errors) that we only discovered late in testing.",
    ],
  },
];

const sections = [
  { id: "hero", label: "Overview" },
  { id: "context", label: "Context" },
  { id: "problem", label: "Problem" },
  { id: "business-goals", label: "Goals" },
  { id: "discovery", label: "Discovery" },
  { id: "pain-points", label: "Pain Points" },
  { id: "solution", label: "Solution" },
  { id: "key-insights", label: "Key Insights" },
  { id: "reflection", label: "Reflection" },
];

export default function GoogleSheetsPage() {
  return (
    <>
      <Nav />
      <CaseStudyNav sections={sections} />
      <main>

        {/* ─── Hero ─── */}
        <section id="hero" className="bg-[var(--color-jz-bg)] px-6 md:px-10 pt-16 pb-20 md:pt-24 md:pb-28">
          <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-body text-sm uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-4">
                <strong>Tagboard</strong> • Data Integration • UX • Automation
              </p>
              <h1 className="font-display font-bold text-[var(--color-jz-text)] leading-tight mb-6">
                <span className="text-5xl md:text-7xl block">Google Sheet</span>
                <span className="text-5xl md:text-7xl block">Integration</span>
                <span className="text-2xl md:text-3xl font-semibold text-[var(--color-jz-text-secondary)] block mt-2">Tagboard Inc. · 2023</span>
              </h1>
              <p className="font-body text-xl md:text-2xl text-[var(--color-jz-text-secondary)] leading-relaxed mb-4">
                Introducing Google Sheets to the Graphic Editor, automating live data importation and streamlining the on-air workflow for graphic Creators.
              </p>
              <p className="font-body text-sm text-[var(--color-jz-text-muted)] italic max-w-2xl">
                Due to Non-Disclosure Agreements, specific details and visuals from this project are omitted to maintain confidentiality.
              </p>
            </div>
            <div className="rounded-sm overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                style={{ width: "100%", height: "auto", display: "block" }}
              >
                <source src="/videos/google_demo.mov" type="video/mp4" />
              </video>
            </div>
          </div>
        </section>

        {/* ─── Context ─── */}
        <section id="context" className="bg-[var(--color-jz-surface)] px-6 md:px-10 py-16 md:py-24">
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
                <p className="font-body text-base font-semibold text-[var(--color-jz-text)]">Tagboard Inc.</p>
              </div>
              <div className="space-y-2 mt-6">
                <p className="font-body text-xs uppercase tracking-widest text-[var(--color-jz-text-muted)]">Year</p>
                <p className="font-body text-base font-semibold text-[var(--color-jz-text)]">2023</p>
              </div>
              <div className="space-y-2 mt-6">
                <p className="font-body text-xs uppercase tracking-widest text-[var(--color-jz-text-muted)]">Scope</p>
                <p className="font-body text-base font-semibold text-[var(--color-jz-text)]">Feature Design, End-to-End</p>
              </div>
            </div>
            <div>
              <p className="font-body text-lg text-[var(--color-jz-text-secondary)] leading-relaxed mb-6">
                Tagboard&apos;s Graphic Editor is the creative tool used by content producers in sports, news,
                and entertainment to design and publish live graphics. As the platform grew, a consistent
                user request emerged:{" "}
                <strong className="text-[var(--color-jz-text)]">connect graphics directly to live data sources</strong>,
                so content could update automatically without manual intervention.
              </p>
              <p className="font-body text-lg text-[var(--color-jz-text-secondary)] leading-relaxed mb-6">
                I led the end-to-end design for the Google Sheets integration, from mapping user flows
                and conducting competitive analysis through final design handoff. The goal was to make
                data-driven graphics feel approachable for every user, regardless of their technical background.
              </p>
              <p className="font-body text-sm text-[var(--color-jz-text-muted)] leading-relaxed">
                <span className="font-medium text-[var(--color-jz-text-secondary)]">Credits:</span>{" "}
                Lance Harper, Justin Brumley, Griffin Hammer (Engineering), Jenny Yang (Product Manager).
              </p>
            </div>
          </div>
        </section>

        {/* ─── Problem ─── */}
        <section id="problem" className="bg-[var(--color-jz-bg)] px-6 md:px-10 py-16 md:py-24">
          <div className="max-w-[1500px] mx-auto border-t border-[var(--color-jz-border)] pt-12">
            <p className="font-body text-sm uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-3">
              The Problem
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--color-jz-text)] leading-tight mb-12 max-w-xl">
              What We Were Solving
            </h2>
            <blockquote className="border-l-4 border-[var(--color-jz-accent)] pl-8 max-w-4xl mb-14">
              <p className="font-display text-2xl md:text-3xl font-bold text-[var(--color-jz-text)] leading-snug italic">
                &ldquo;Users had to manually import live data into their graphics, a process that was
                time-consuming, error-prone, and completely disconnected from their actual data source.&rdquo;
              </p>
            </blockquote>
            <Image
              src="/images/google_hero.webp"
              alt="Google Sheet Connected modal, mapping data to graphic elements"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              className="rounded-sm"
              unoptimized
            />
          </div>
        </section>

        {/* ─── Business Goals ─── */}
        <section id="business-goals" className="bg-[var(--color-jz-surface)] px-6 md:px-10 py-16 md:py-24">
          <div className="max-w-[1500px] mx-auto">
            <p className="font-body text-sm uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-3">
              Goals
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--color-jz-text)] leading-tight mb-12">
              What We Were After
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--color-jz-border)]">
              <div className="bg-[var(--color-jz-surface)] p-10">
                <p className="font-body text-xs uppercase tracking-widest text-[var(--color-jz-accent)] mb-4">Business Goal</p>
                <p className="font-body text-lg text-[var(--color-jz-text-secondary)] leading-relaxed">
                  Expand Tagboard&apos;s data integration capabilities to support live, dynamic content creation,
                  enabling producers to connect their existing Google Sheets workflows directly to on-air graphics
                  without manual data re-entry or technical overhead.
                </p>
              </div>
              <div className="bg-[var(--color-jz-surface)] p-10">
                <p className="font-body text-xs uppercase tracking-widest text-[var(--color-jz-accent)] mb-4">My Plan</p>
                <p className="font-body text-lg text-[var(--color-jz-text-secondary)] leading-relaxed">
                  Map the full integration flow from the user&apos;s perspective, identify where technical complexity
                  created friction, and design a UI that made data connection feel as natural as editing text,
                  with progressive disclosure for advanced options.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Discovery ─── */}
        <section id="discovery" className="px-6 md:px-10 py-16 md:py-24" style={{ background: "linear-gradient(135deg, #e8f5e9 0%, #e3f2fd 100%)" }}>
          <div className="max-w-[1500px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-12 md:gap-20 items-start">
              <div className="md:sticky md:top-24">
                <p className="font-body text-xs uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-4">
                  Discovery
                </p>
                <h2 className="font-display font-bold text-[var(--color-jz-text)] leading-[1.05] mb-8">
                  <span className="block text-5xl md:text-6xl">Understanding</span>
                  <span className="block text-5xl md:text-6xl italic text-[var(--color-jz-accent)]">the bigger picture</span>
                </h2>
                <p className="font-body text-lg text-[var(--color-jz-text-secondary)] leading-relaxed">
                  Before designing anything, I created high-level user flows to understand how users would interact
                  with the integration end-to-end, identifying MVP features and surfacing knowledge gaps
                  between design and engineering.
                </p>
              </div>
              <div>
                <p className="font-body text-xs font-semibold uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-6">
                  Essential Requirements
                </p>
                <div className="space-y-3 mb-10">
                  {[
                    {
                      plain: "Support both ",
                      bold: "private and public Google Sheets",
                      rest: ", offering flexibility for different team security models and use cases.",
                    },
                    {
                      plain: "Enable ",
                      bold: "background auto-synchronization",
                      rest: " so graphics stay live without producers manually refreshing during a broadcast.",
                    },
                    {
                      plain: "Allow users to ",
                      bold: "map data to specific graphic elements",
                      rest: ", with control over format, appearance, and behavior per element.",
                    },
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
                <Image
                  src="/images/google_flowmap.webp"
                  alt="Google Sheet Integration user flow map"
                  width={0}
                  height={0}
                  sizes="(max-width: 768px) 100vw, 60vw"
                  style={{ width: "100%", height: "auto" }}
                  className="rounded-sm"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </section>

        {/* ─── Pain Points ─── */}
        <section id="pain-points" className="bg-[var(--color-jz-bg)] px-6 md:px-10 py-16 md:py-24">
          <div className="max-w-[1500px] mx-auto">
            <p className="font-body text-sm uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-3">
              Research
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--color-jz-text)] mb-6 leading-tight">
              User Pain Points
            </h2>
            <p className="font-body text-lg text-[var(--color-jz-text-secondary)] leading-relaxed mb-12 max-w-3xl">
              Through user flows, competitive analysis, and direct conversations with graphic Creators,
              three core friction points emerged that shaped the entire design direction.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--color-jz-border)]">
              {painPoints.map((col) => (
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <Image
                src="/images/google_research1.webp"
                alt="Google Sheets research finding 1"
                width={0}
                height={0}
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ width: "100%", height: "auto" }}
                className="rounded-sm"
                unoptimized
              />
              <Image
                src="/images/google_research2.webp"
                alt="Google Sheets research finding 2"
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

        {/* ─── Solution ─── */}
        <section id="solution" className="bg-[var(--color-jz-bg)] px-6 md:px-10 py-16 md:py-24">
          <div className="max-w-[1500px] mx-auto">
            <div className="mb-16 border-t border-[var(--color-jz-border)] pt-12">
              <p className="font-body text-sm uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-3">
                The Solution
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--color-jz-text)] mb-8 leading-tight">
                Design Decisions
              </h2>
              <p className="font-body text-lg text-[var(--color-jz-text-secondary)] leading-relaxed mb-4 max-w-3xl">
                Two core design challenges defined the work: making a technically complex workflow feel
                simple, and making data-driven content creation accessible to non-technical graphic Creators.
              </p>
              <blockquote className="border-l-4 border-[var(--color-jz-accent)] pl-8 max-w-2xl mt-10">
                <p className="font-display text-2xl md:text-3xl font-bold text-[var(--color-jz-text)] leading-snug">
                  We solved these by:
                </p>
              </blockquote>
            </div>

            <div className="space-y-16">
              {solutions.map((feature, idx) => (
                <div
                  key={feature.title}
                  className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center"
                >
                  {idx % 2 === 0 ? (
                    <>
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
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="overflow-hidden rounded-sm">
                        <video
                          autoPlay
                          loop
                          muted
                          playsInline
                          style={{ width: "100%", height: "auto", display: "block" }}
                        >
                          <source src="/videos/google_demo.mov" type="video/mp4" />
                        </video>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="overflow-hidden rounded-sm">
                        <video
                          autoPlay
                          loop
                          muted
                          playsInline
                          style={{ width: "100%", height: "auto", display: "block" }}
                        >
                          <source src="/videos/google_panel.mov" type="video/mp4" />
                        </video>
                      </div>
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
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Key Insights ─── */}
        <section id="key-insights" className="bg-[var(--color-jz-surface)] px-6 md:px-10 py-16 md:py-24">
          <div className="max-w-[1500px] mx-auto">
            <p className="font-body text-sm uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-3">
              Key Insights
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--color-jz-text)] leading-tight mb-6">
              Refining Success Through<br />Feedback and Testing
            </h2>
            <p className="font-body text-lg text-[var(--color-jz-text-secondary)] leading-relaxed max-w-3xl mb-12">
              The quality of this feature came from three core practices:{" "}
              <strong className="text-[var(--color-jz-text)]">continuous design critiques, extensive user testing, and disciplined feedback loops.</strong>{" "}
              This approach created a dynamic, user-focused development environment, allowing us to iteratively
              enhance the product based on real-world usage and feedback before every release milestone.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--color-jz-border)]">
              {[
                {
                  label: "Design Critiques",
                  body: "Regular cross-functional critique sessions caught edge cases and UX regressions early, before they reached prototyping or testing.",
                },
                {
                  label: "User Testing",
                  body: "Usability tests with real graphic Creators revealed that terminology was the #1 barrier, leading to the plain-language redesign of all data labels.",
                },
                {
                  label: "Feedback Loops",
                  body: "Structured feedback collection after each testing round created clear prioritization signals and kept the engineering team aligned on what to build next.",
                },
              ].map((card) => (
                <div key={card.label} className="bg-[var(--color-jz-surface)] p-10">
                  <p className="font-body text-xs uppercase tracking-widest text-[var(--color-jz-accent)] mb-4">{card.label}</p>
                  <p className="font-body text-base text-[var(--color-jz-text-secondary)] leading-relaxed">{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Reflection / Learnings ─── */}
        <section id="reflection" className="bg-[#fdeef4] overflow-hidden py-16 md:py-24">
          <div className="overflow-hidden mb-14 cursor-default select-none">
            <div className="marquee-track flex whitespace-nowrap">
              {[0, 1].map((n) => (
                <span
                  key={n}
                  className="flex shrink-0 items-center font-display text-5xl md:text-6xl font-bold text-[#7a2a52]"
                >
                  {Array.from({ length: 8 }).map((_, i) => (
                    <span key={i} className="inline-flex items-center gap-4 mr-4">
                      <span>Reflection</span>
                      <span className="text-[#c06090] leading-none">✳</span>
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
              href="/dashboard-redesign"
              className="inline-block font-body text-sm font-semibold px-8 py-4 border border-[var(--color-jz-text)] text-[var(--color-jz-text)] hover:bg-[var(--color-jz-text)] hover:text-[var(--color-jz-bg)] transition-colors duration-200 mb-16"
            >
              View Production Dashboard →
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

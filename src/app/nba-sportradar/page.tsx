import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/portfolio/Nav";
import Footer from "@/components/portfolio/Footer";

export const metadata: Metadata = {
  title: "NBA × Sportradar — JZ",
  description:
    "Integrating Sportradar's live sport data API into Tagboard's Graphic Editor for NBA production teams and broadcasters.",
};

const processSteps = [
  {
    number: "01",
    title: "Sportradar's API Map",
    body: "Mapped Sportradar's API structure to guide design direction while back-end engineers gathered capability information. Key insight: to access main data sources, users needed only to input a date or specific season, which determined the entire user experience and flow.",
  },
  {
    number: "02",
    title: "Hands-On Data Exploration",
    body: "Initial API map review wasn't enough. Using a test API key, I explored NBA data in Postman: player statistics, game outcomes, and team rankings. Close collaboration with the PM helped identify how data could be structured for users and design a workflow facilitating easy selection and previewing.",
  },
  {
    number: "03",
    title: "Designing for Scalability",
    body: "The workflow needed to be specific enough for NBA demands while remaining adaptive for other sports. Learning Sportradar's API structure provided insight into how other providers (Stats Perform, Genius Sports, Opta Sports) might work, enabling a flow that could theoretically tailor to any sports data provider.",
  },
  {
    number: "04",
    title: "Final Design & Engineer Collaboration",
    body: "Using the API Map and knowledge from hands-on exploration, collaborated with front and back-end engineers to create an intuitive, functional way for users to filter the data they needed, enabling real-time parameter calls inside the Graphic Editor.",
  },
];

const learningCols = [
  {
    label: "Embracing Uncertainty",
    points: [
      "Lack of complete API information led to design assumptions early on, and learning to work within that ambiguity was essential.",
      "Designing with flexibility in mind allowed for rapid adaptation as new technical details emerged.",
      "Pivoting the design approach mid-project proved necessary to fully leverage growing product knowledge.",
    ],
  },
  {
    label: "What I Learned",
    points: [
      "Hands-on API exploration in Postman was far more valuable than reading documentation alone.",
      "Designing for scalability across providers from the start saved significant rework down the line.",
      "Close PM collaboration to understand data structures was essential to a user-centric final outcome.",
    ],
  },
  {
    label: "Design Philosophy",
    points: [
      "Embracing unknowns and being prepared to pivot became a cornerstone of my design approach.",
      "Solutions must be both innovative and fully aligned with the technical framework.",
      "Resilience and agility in product design are just as important as visual craft.",
    ],
  },
];

const futureProviders = [
  "Stats Perform",
  "Genius Sports",
  "Opta Sports",
];

export default function NbaSportradarPage() {
  return (
    <>
      <Nav />
      <main>

        {/* ─── Marquee ─── */}
        <section className="bg-[var(--color-jz-bg)] overflow-hidden py-10 md:py-14">
          <div className="overflow-hidden cursor-default select-none" title="Hover to pause">
            <div className="marquee-track flex whitespace-nowrap">
              {[0, 1].map((n) => (
                <span
                  key={n}
                  className="flex shrink-0 items-center font-display text-lg md:text-xl font-bold text-[var(--color-jz-accent)]"
                >
                  {Array.from({ length: 8 }).map((_, i) => (
                    <span key={i} className="inline-flex items-center gap-4 mr-4">
                      <span>NBA × Sportradar</span>
                      <svg
                        viewBox="0 0 100 100"
                        className="w-5 h-5 shrink-0 fill-[var(--color-jz-accent)]"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {[0, 60, 120, 180, 240, 300].map((deg) => (
                          <ellipse
                            key={deg}
                            cx="50"
                            cy="26"
                            rx="11"
                            ry="18"
                            transform={`rotate(${deg} 50 50)`}
                          />
                        ))}
                      </svg>
                    </span>
                  ))}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Hero ─── */}
        <section className="bg-[var(--color-jz-bg)] px-6 md:px-10 pt-16 pb-20 md:pt-24 md:pb-28">
          <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-body text-sm uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-4">
                <strong>Tagboard</strong> • API Integration • Product Design • Scalable Systems
              </p>
              <h1 className="font-display font-bold text-[var(--color-jz-text)] leading-tight mb-6">
                <span className="text-5xl md:text-7xl block">NBA Launchpad</span>
                <span className="text-2xl md:text-3xl font-semibold text-[var(--color-jz-text-secondary)] block mt-2">Cohort 2023</span>
              </h1>
              <p className="font-body text-xl md:text-2xl text-[var(--color-jz-text-secondary)] leading-relaxed mb-4">
                Sportradar Partnership Integration for NBA Launchpad.
              </p>
              <p className="font-body text-xs text-[var(--color-jz-text-muted)] italic mb-6">
                * Best viewed on desktop
              </p>
              <p className="font-body text-sm text-[var(--color-jz-text-muted)] italic max-w-2xl">
                Due to Non-Disclosure Agreements, specific details and visuals from this project are omitted to maintain confidentiality.
              </p>
            </div>
            <div>
              <Image
                src="/images/API-SR.png"
                alt="API Integration Sportradar  -  NBA Launchpad"
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
                The Partnership
              </h2>
              <div className="space-y-2 mt-8">
                <p className="font-body text-xs uppercase tracking-widest text-[var(--color-jz-text-muted)]">Role</p>
                <p className="font-body text-base font-semibold text-[var(--color-jz-text)]">Product Designer</p>
              </div>
              <div className="space-y-2 mt-6">
                <p className="font-body text-xs uppercase tracking-widest text-[var(--color-jz-text-muted)]">Company</p>
                <p className="font-body text-base font-semibold text-[var(--color-jz-text)]">Tagboard</p>
              </div>
              <div className="space-y-2 mt-6">
                <p className="font-body text-xs uppercase tracking-widest text-[var(--color-jz-text-muted)]">Client</p>
                <p className="font-body text-base font-semibold text-[var(--color-jz-text)]">NBA</p>
              </div>
            </div>
            <div>
              <p className="font-body text-lg text-[var(--color-jz-text-secondary)] leading-relaxed mb-6">
                <span className="font-semibold text-[var(--color-jz-text)]">
                  &ldquo;Sportradar is the official data provider of NBA statistics.&rdquo;
                </span>{" "}
                For Tagboard&apos;s Graphic Editor, the Sportradar collaboration enhanced the NBA Launchpad
                project, enriching basketball live games with real-time data.
              </p>
              <p className="font-body text-lg text-[var(--color-jz-text-secondary)] leading-relaxed mb-6">
                The integration allowed NBA teams and broadcasters to quickly import current data via API
                keys, then efficiently edit graphics with detailed data points, team colors, and photos.
              </p>
              <p className="font-body text-sm text-[var(--color-jz-text-muted)] leading-relaxed">
                <span className="font-medium text-[var(--color-jz-text-secondary)]">Credits:</span>{" "}
                Engineering team (Lance Harper, Griffin Hammer, Craig Wills, VP of Engineering),
                Product Manager Jenny Yang, VP of Product and Strategy Christine Chalk, and partners at
                NBA and Sportradar.
              </p>
            </div>
          </div>
        </section>

        {/* ─── Business Goal ─── */}
        <section className="bg-[var(--color-jz-bg)] px-6 md:px-10 py-16 md:py-24">
          <div className="max-w-[1500px] mx-auto border-t border-[var(--color-jz-border)] pt-12">
            <p className="font-body text-sm uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-3">
              Business Goal
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--color-jz-text)] leading-tight mb-12 max-w-xl">
              The Mission
            </h2>
            <blockquote className="border-l-4 border-[var(--color-jz-accent)] pl-8 max-w-4xl">
              <p className="font-display text-2xl md:text-3xl font-bold text-[var(--color-jz-text)] leading-snug italic">
                &ldquo;Seamlessly integrate Sportradar&apos;s live sport data directly into our widget
                library in our graphic editor so that NBA production teams and broadcasters could quickly
                import up-to-date data using Sportradar API keys.&rdquo;
              </p>
            </blockquote>
          </div>
        </section>

        {/* ─── My Process ─── */}
        <section className="bg-[var(--color-jz-surface)] px-6 md:px-10 py-16 md:py-24">
          <div className="max-w-[1500px] mx-auto">
            <p className="font-body text-sm uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-3">
              Process
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--color-jz-text)] mb-12 leading-tight">
              How We Got There
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--color-jz-border)]">
              {processSteps.map((step) => (
                <div key={step.number} className="bg-[var(--color-jz-surface)] p-10">
                  <span className="font-display text-5xl font-bold text-[#f5e06b] block mb-4 leading-none">
                    {step.number}
                  </span>
                  <h3 className="font-display text-xl font-bold text-[var(--color-jz-text)] mb-3">
                    {step.title}
                  </h3>
                  <p className="font-body text-base text-[var(--color-jz-text-secondary)] leading-relaxed">
                    {step.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Step 1 Detail: Understanding Parameters ─── */}
        <section className="bg-[var(--color-jz-bg)] px-6 md:px-10 py-16 md:py-24">
          <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div>
              <Image
                src="/images/SR+Map.webp"
                alt="Sportradar API Map"
                width={0}
                height={0}
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ width: "auto", height: "auto", maxHeight: "60vh", maxWidth: "100%", objectFit: "contain" }}
                className="rounded-sm mb-4"
                unoptimized
              />
              <p className="font-body text-sm font-semibold text-[var(--color-jz-text-secondary)] mb-1">
                Sportradar&apos;s API Map
              </p>
              <p className="font-body text-sm text-[var(--color-jz-text-muted)]">
                Map I used to help guide my design direction while back-end engineers gathered more information on API capabilities.
              </p>
            </div>
            <div>
              <p className="font-body text-sm uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-3">
                Step 1: Understanding Parameters
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-jz-text)] leading-tight mb-6">
                Sportradar&apos;s API Map
              </h2>
              <p className="font-body text-lg text-[var(--color-jz-text-secondary)] leading-relaxed mb-4">
                To begin, I utilized the API map provided to understand the types of parameters that are required to make API calls.
              </p>
              <p className="font-body text-lg text-[var(--color-jz-text-secondary)] leading-relaxed mb-8">
                It was understood that to access the main data sources, users would only need to{" "}
                <strong className="text-[var(--color-jz-text)]">input a date or specific season.</strong>
              </p>
              <p className="font-body text-base font-semibold text-[var(--color-jz-text)] mb-4">
                This was important to understand because:
              </p>
              <ul className="space-y-3">
                {[
                  "Helps determine the user experience and user flow",
                  "Selecting a primary feed would determine the additional data users can select from",
                ].map((item) => (
                  <li key={item} className="flex gap-3 font-body text-base text-[var(--color-jz-text-secondary)]">
                    <span className="shrink-0 text-[var(--color-jz-text-muted)] mt-1">·</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ─── Step 2 Detail: Postman Exploration ─── */}
        <section className="bg-[var(--color-jz-bg)] px-6 md:px-10 py-16 md:py-24">
          <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="font-body text-sm uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-3">
                Step 2: Deep Dive
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-jz-text)] leading-tight mb-6">
                Familiarizing with the Data
              </h2>
              <p className="font-body text-lg text-[var(--color-jz-text-secondary)] leading-relaxed mb-6">
                Initial API map exploration was insufficient. Using a test API key, hands-on exploration
                occurred in Postman to understand NBA data in detail:
              </p>
              <ul className="space-y-3 mb-6">
                {["Player statistics", "Game outcomes", "Team rankings"].map((item) => (
                  <li key={item} className="flex gap-3 font-body text-base text-[var(--color-jz-text-secondary)]">
                    <span className="shrink-0 text-[var(--color-jz-accent)] mt-1">→</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="font-body text-lg text-[var(--color-jz-text-secondary)] leading-relaxed">
                This exploration helped identify how data could be structured for users and design a
                workflow facilitating easy data selection and previewing. The{" "}
                <strong className="text-[var(--color-jz-text)]">final design was user-centric</strong>,
                enabling seamless integration of real-time NBA data into user graphics, enhancing the
                overall user experience for creating data-driven basketball content.
              </p>
            </div>
            <div className="border-l border-[var(--color-jz-border)] pl-16 flex items-center">
              <Image
                src="/images/data-map.webp"
                alt="Sportradar API data map"
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

        {/* ─── Quote ─── */}
        <section className="bg-[#0d1117] px-6 md:px-10 py-20 md:py-28">
          <div className="max-w-[1500px] mx-auto">
            <blockquote className="max-w-4xl mx-auto text-center">
              <p className="font-display text-2xl md:text-4xl font-bold text-[#f5e06b] leading-snug italic mb-8">
                &ldquo;While we may not be the first company to bring live data into a graphic, we are
                the first company to do it in a way that enables production teams to 3x their content
                output.&rdquo;
              </p>
              <cite className="font-body text-base text-[#8a9bb8] not-italic">
                Christine Chalk, SVP of Product and Strategy
              </cite>
            </blockquote>
          </div>
        </section>

        {/* ─── Step 3: Selecting Parameters ─── */}
        <section className="bg-[var(--color-jz-bg)] px-6 md:px-10 py-16 md:py-24">
          <div className="max-w-[1500px] mx-auto">
            <p className="font-body text-sm uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-3">
              Step 3: Selecting Parameters
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-jz-text)] leading-tight mb-10">
              Selecting Parameters
            </h2>
            <Image
              src="/images/parameters.webp"
              alt="Graphic Editor modal  -  Selecting parameters"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto", maxHeight: "80vh", objectFit: "contain" }}
              className="rounded-sm mb-6"
              unoptimized
            />
            <p className="font-body text-sm text-center text-[var(--color-jz-text-muted)] max-w-xl mx-auto">
              <strong className="text-[var(--color-jz-text-secondary)]">Graphic Editor, Modal:</strong>{" "}
              Once Sportradar data is selected, users can choose parameters in order to get the data they
              want. In-Game and Seasonal will offer different types of data to filter from.
            </p>
          </div>
        </section>

        {/* ─── Scalability ─── */}
        <section className="bg-[var(--color-jz-surface)] px-6 md:px-10 py-16 md:py-24">
          <div className="max-w-[1500px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mb-10">
              <div>
                <p className="font-body text-sm uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-3">
                  Step 4: Design Thinking
                </p>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-jz-text)] leading-tight mb-6">
                  Designing for Scalability
                </h2>
                <p className="font-body text-lg text-[var(--color-jz-text-secondary)] leading-relaxed mb-8">
                  The workflow needed to be specific enough for NBA demands while remaining adaptive for
                  other sports. Learning about Sportradar API keys provided insight into how other
                  providers might structure data, enabling a flow that could theoretically tailor to any
                  sports data provider.
                </p>
                <p className="font-body text-sm uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-4">
                  Future Integration Plans
                </p>
                <ul className="space-y-3">
                  {futureProviders.map((provider) => (
                    <li key={provider} className="flex gap-3 font-body text-base text-[var(--color-jz-text-secondary)]">
                      <span className="shrink-0 text-[var(--color-jz-text-muted)]">·</span>
                      {provider}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center">
                <Image
                  src="/images/sport.webp"
                  alt="Sport selection in Graphic Editor"
                  width={0}
                  height={0}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ width: "100%", height: "auto" }}
                  className="rounded-sm"
                  unoptimized
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[var(--color-jz-bg)] border border-[var(--color-jz-border)] p-6 rounded-sm">
                <p className="font-body text-xs uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-3">
                  Sport Selection
                </p>
                <p className="font-body text-sm text-[var(--color-jz-text-secondary)] leading-relaxed">
                  After selecting the Sportradar integration, users can choose from a list of sports,
                  making the architecture extensible beyond basketball from day one.
                </p>
              </div>
              <div className="bg-[var(--color-jz-bg)] border border-[var(--color-jz-border)] p-6 rounded-sm">
                <p className="font-body text-xs uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-3">
                  Strategic Insight
                </p>
                <p className="font-body text-sm text-[var(--color-jz-text-secondary)] leading-relaxed">
                  Understanding one provider&apos;s API structure created a mental model for how all
                  sports data providers work, turning an NBA-specific project into a scalable platform.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Final Design ─── */}
        <section className="bg-[var(--color-jz-bg)] px-6 md:px-10 py-16 md:py-24">
          <div className="max-w-[1500px] mx-auto">
            <p className="font-body text-sm uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-3">
              The Solution
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--color-jz-text)] mb-6 leading-tight">
              Final Design
            </h2>
            <p className="font-body text-lg text-[var(--color-jz-text-secondary)] max-w-3xl leading-relaxed mb-10">
              Using the API Map and knowledge from hands-on API key exploration, collaboration with
              front and back-end engineers created an{" "}
              <strong className="text-[var(--color-jz-text)]">
                intuitive, functional way for users to filter needed data
              </strong>
              , with parameter requirements making API calls in real time inside the Graphic Editor.
            </p>
            <Image
              src="/images/SR-final.webp"
              alt="Final design  -  Sportradar integration in Graphic Editor"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              className="rounded-sm mb-8"
              unoptimized
            />
            <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8 items-stretch">
              <video
                src="/videos/final.mov"
                autoPlay
                loop
                muted
                playsInline
                className="w-full rounded-sm"
              />
              <div className="flex flex-col gap-4 h-full justify-between">
                {[
                  {
                    step: "1",
                    title: "Select Sportradar",
                    body: "User selects the Sportradar integration option within the widget library.",
                  },
                  {
                    step: "2",
                    title: "Choose Parameters",
                    body: "Select sport, then choose In-Game or Seasonal feed to surface relevant data types.",
                  },
                  {
                    step: "3",
                    title: "Import & Edit",
                    body: "Real-time data populates the graphic: team colors, photos, and live stats ready to use.",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="border border-[var(--color-jz-border)] p-6 bg-[var(--color-jz-surface)] rounded-sm flex-1"
                  >
                    <span className="font-display text-3xl font-bold text-[#f5e06b] block mb-2 leading-none">
                      {item.step}
                    </span>
                    <h3 className="font-display text-lg font-bold text-[var(--color-jz-text)] mb-2">
                      {item.title}
                    </h3>
                    <p className="font-body text-sm text-[var(--color-jz-text-secondary)] leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── Learnings ─── */}
        <section className="bg-[#0d1117] overflow-hidden py-16 md:py-24">
          <div className="overflow-hidden mb-14 cursor-default select-none" title="Hover to pause">
            <div className="marquee-track flex whitespace-nowrap">
              {[0, 1].map((n) => (
                <span
                  key={n}
                  className="flex shrink-0 items-center font-display text-5xl md:text-6xl font-bold text-[#f5e06b]"
                >
                  {Array.from({ length: 8 }).map((_, i) => (
                    <span key={i} className="inline-flex items-center gap-4 mr-4">
                      <span>Learnings</span>
                      <svg
                        viewBox="0 0 100 100"
                        className="w-8 h-8 shrink-0 fill-[#f5e06b]"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {[0, 60, 120, 180, 240, 300].map((deg) => (
                          <ellipse
                            key={deg}
                            cx="50"
                            cy="26"
                            rx="11"
                            ry="18"
                            transform={`rotate(${deg} 50 50)`}
                          />
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
              {learningCols.map((col) => (
                <div key={col.label}>
                  <div className="inline-block border border-[#f5e06b] bg-[#f5e06b] text-[#0d1117] font-display font-medium text-sm px-6 py-3 mb-8 rounded-sm">
                    {col.label}
                  </div>
                  <ul className="space-y-4 text-[#8a9bb8] font-body text-sm leading-relaxed list-none">
                    {col.points.map((pt, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="mt-1 shrink-0 text-[#4a5568]">·</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Additional Project ─── */}
        <section className="bg-[var(--color-jz-surface)] px-6 md:px-10 py-16 md:py-24">
          <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 items-start">
            <div>
              <p className="font-body text-sm uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-3">
                Also at Tagboard
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-jz-text)] leading-tight">
                App Marketplace Launch
              </h2>
            </div>
            <div>
              <p className="font-body text-lg text-[var(--color-jz-text-secondary)] leading-relaxed">
                Beyond the NBA Launchpad, I also contributed to the launch of Tagboard&apos;s App
                Marketplace, a groundbreaking initiative designed to expand and enhance real-time
                content curation and display capabilities. This project revolutionized how users
                interact with social media content, making it easier and more dynamic for broadcasters
                and digital teams.
              </p>
            </div>
          </div>
        </section>


      </main>
      <Footer />
    </>
  );
}

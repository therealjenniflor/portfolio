import Nav from "@/components/portfolio/Nav";
import Footer from "@/components/portfolio/Footer";
import Link from "next/link";

const philosophies = [
  {
    title: "Collaborative",
    body: "I believe in designing through close collaboration with stakeholders, including users, engineers, and other designers. This ensures all perspectives are considered, leading to more effective and innovative solutions.",
  },
  {
    title: "Empathetic",
    body: "Drawing from my background in veterinary medicine, I strive to deeply understand and address users' needs and emotions. By combining empathy with data-driven decisions, I create solutions that truly resonate and serve their purpose.",
  },
  {
    title: "Scalable",
    body: "I design with scalability in mind, ensuring that my solutions can grow and adapt to increased user demands or new use cases without losing quality or performance. This approach allowed me to craft sustainable products for the long term.",
  },
];

const caseStudies = [
  {
    label: "Global Payments",
    tags: "Fintech • Customer Display • Dashboards",
    description:
      "Led the redesign of merchant tools and customer-facing flows used by over 100K businesses across the Global Payments ecosystem",
    href: "/global-payments",
    cta: "View Work for Global Payments",
  },
  {
    label: "Tagboard Inc.",
    tags: "B2B • SaaS • API Integrations",
    description:
      "Directed design for live production tools that supported storytelling at scale, from sports arenas to broadcast studios.",
    href: "/tagboard",
    cta: "View Work for Tagboard",
  },
  {
    label: "Project Untaboo",
    tags: "Health • Wellness • Mobile • UI Design",
    description:
      "Led the design of a mobile app to personalize period care and improve menstrual health outcomes",
    href: "/project-untaboo",
    cta: "View Work for Project Untaboo",
  },
];

const skills = [
  {
    title: "Contributed to Style Guide creation & Design Systems maintenance",
    body: "Proficient in crafting and applying style guides for organizational efficiency and unified branding. Expert in expanding design systems for streamlined workflow and consistent brand identity.",
  },
  {
    title: "I've enhanced workflows with Design Processes",
    body: "In my experience, I've facilitated engineer involvement in early product meetings to integrate technical insights with business and client objectives. Also, pioneered regular design critiques to harmonize technical and design considerations, optimizing collaborative problem-solving.",
  },
  {
    title: "I tap into marketing strategies",
    body: "Innovated a unique marketing strategy incorporating iconic imagery and brand colors, elevating brand visibility. Drove customer engagement and revenue growth through strategic marketing of new product launches.",
  },
  {
    title: "Has had fun in handling numerous projects of varying sizes",
    body: "Able to lead the design of numerous foundational projects. Previously led 8 projects culminating in the launch of Tagboard's App Marketplace at the 2023 NAB Show. Established products now critical to the daily operations of Tagboard's major clients. Clients include NFL, Fox Sports, TEGNA, and more!",
  },
];

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        {/* ─── Hero ─── */}
        <section className="bg-[var(--color-jz-bg)] px-6 md:px-10 pt-16 pb-20 md:pt-24 md:pb-28">
          <div className="max-w-[1500px] mx-auto">
            <h1 className="font-display font-bold leading-[0.9] tracking-tight text-[var(--color-jz-text)]">
              <span className="block text-[clamp(5rem,12vw,14rem)]">Jennifer</span>
              <span className="block text-[clamp(5rem,12vw,14rem)]">Zaragoza</span>
            </h1>
            <p className="mt-6 md:mt-8 font-body text-lg md:text-2xl text-[var(--color-jz-text-secondary)] max-w-2xl leading-relaxed">
              is a cool{" "}
              <span className="font-semibold text-[var(--color-jz-text)]">Product Designer</span>{" "}
              who excels in navigating ambiguity, and refining defined problems.
            </p>
          </div>
        </section>

        {/* ─── Divider wave ─── */}
        <div className="overflow-hidden bg-[var(--color-jz-surface)] h-px" />

        {/* ─── About Intro / Philosophies ─── */}
        <section className="bg-[var(--color-jz-surface)] px-6 md:px-10 py-20 md:py-28">
          <div className="max-w-[1500px] mx-auto">
            <p className="font-body text-lg md:text-2xl text-[var(--color-jz-text-secondary)] max-w-3xl leading-relaxed mb-2">
              With{" "}
              <span className="font-semibold text-[var(--color-jz-text)]">6 years of experience</span>
              , I specialize in{" "}
              <span className="font-semibold text-[var(--color-jz-text)]">Experience Design</span>,{" "}
              <span className="font-semibold text-[var(--color-jz-text)]">Design Thinking</span>, and{" "}
              <span className="font-semibold text-[var(--color-jz-text)]">Product Strategy</span> in the{" "}
              <span className="font-semibold text-[var(--color-jz-text)]">B2B SaaS space</span>.
            </p>
            <p className="font-body text-lg md:text-xl text-[var(--color-jz-text-secondary)] mb-10">
              I am passionate about all things{" "}
              <span className="font-semibold text-[var(--color-jz-text)] jz-highlight">Design System</span>{" "}
              and{" "}
              <span className="font-semibold text-[var(--color-jz-text)] jz-highlight">Design Ops.</span>
            </p>

            <h2 className="font-display text-3xl md:text-5xl font-bold text-[var(--color-jz-text)] mb-12">
              Collaborative * Scalable * Empathetic
            </h2>

            <p className="font-body text-sm uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-8">
              My Design Philosophies (not in any particular order)
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {philosophies.map((p) => (
                <div
                  key={p.title}
                  className="border border-[var(--color-jz-border)] p-8 bg-[var(--color-jz-bg)] rounded-sm"
                >
                  <h3 className="font-display text-2xl font-bold text-[var(--color-jz-text)] mb-4">
                    {p.title}
                  </h3>
                  <p className="font-body text-base text-[var(--color-jz-text-secondary)] leading-relaxed">
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Case Studies ─── */}
        <section className="bg-[var(--color-jz-bg)] px-6 md:px-10 py-20 md:py-28">
          <div className="max-w-[1500px] mx-auto">
            <p className="font-body text-sm uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-3">
              Case Studies
            </p>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-[var(--color-jz-text)] mb-16">
              My Proudest Work
            </h2>

            <div className="space-y-0 divide-y divide-[var(--color-jz-border)]">
              {caseStudies.map((cs, i) => (
                <div
                  key={cs.label}
                  className="group py-12 md:py-16 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-start"
                >
                  <div>
                    <span className="font-body text-xs uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-2 block">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-3xl md:text-5xl font-bold text-[var(--color-jz-text)] mb-3 group-hover:text-[var(--color-jz-accent)] transition-colors">
                      {cs.label}
                    </h3>
                    <p className="font-body text-sm text-[var(--color-jz-text-muted)] mb-4 tracking-wide">
                      {cs.tags}
                    </p>
                    <p className="font-body text-base text-[var(--color-jz-text-secondary)] max-w-xl leading-relaxed">
                      {cs.description}
                    </p>
                  </div>
                  <div className="self-center">
                    <Link
                      href={cs.href}
                      className="inline-block font-body text-sm font-semibold px-6 py-3 border border-[var(--color-jz-text)] text-[var(--color-jz-text)] hover:bg-[var(--color-jz-text)] hover:text-[var(--color-jz-bg)] transition-colors duration-200"
                    >
                      {cs.cta} →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── What I Bring ─── */}
        <section className="bg-[var(--color-jz-surface)] px-6 md:px-10 py-20 md:py-28">
          <div className="max-w-[1500px] mx-auto">
            <h2 className="font-display text-4xl md:text-6xl font-bold text-[var(--color-jz-text)] mb-12">
              What I bring to the table
            </h2>
            <div className="divide-y divide-[var(--color-jz-border)] border-t border-[var(--color-jz-border)]">
              {skills.map((skill) => (
                <details key={skill.title} className="group py-0">
                  <summary className="flex items-center justify-between py-6 cursor-pointer">
                    <span className="font-body text-lg md:text-xl font-semibold text-[var(--color-jz-text)] pr-4">
                      {skill.title}
                    </span>
                    <span className="flex-shrink-0 w-8 h-8 rounded-full border border-[var(--color-jz-border)] flex items-center justify-center text-[var(--color-jz-text-muted)] group-open:rotate-45 transition-transform duration-200 text-xl font-light">
                      +
                    </span>
                  </summary>
                  <div className="pb-8 pr-12">
                    <p className="font-body text-base text-[var(--color-jz-text-secondary)] leading-relaxed">
                      {skill.body}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

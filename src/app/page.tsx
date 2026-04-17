import Nav from "@/components/portfolio/Nav";
import Footer from "@/components/portfolio/Footer";
import Link from "next/link";
import Image from "next/image";

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
    image: "/images/global-pay.webp",
  },
  {
    label: "Tagboard Inc.",
    tags: "B2B • SaaS • API Integrations",
    description:
      "Directed design for live production tools that supported storytelling at scale, from sports arenas to broadcast studios.",
    href: "/tagboard",
    cta: "View Work for Tagboard",
    image: "/images/Tagboard.webp",
  },
  {
    label: "Project Untaboo",
    tags: "Health • Wellness • Mobile • UI Design",
    description:
      "Led the design of a mobile app to personalize period care and improve menstrual health outcomes",
    href: "/project-untaboo",
    cta: "View Work for Project Untaboo",
    image: null,
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
        <section className="relative px-6 md:px-10 pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden" style={{ background: 'linear-gradient(135deg, #fef6cc 0%, #fce4e8 100%)' }}>
          <div className="hidden md:block absolute top-1/2 right-0 -translate-y-1/2 translate-x-[-10%] pointer-events-none select-none" style={{ rotate: '-25deg' }}>
            <span
              aria-hidden="true"
              className="font-display font-bold leading-none"
              style={{ opacity: 0.4, fontSize: 'clamp(25rem,55vw,70rem)', color: '#ffae00' }}
            >
              *
            </span>
          </div>
          <div className="relative max-w-[1500px] mx-auto md:pl-24">
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
        <div className="overflow-hidden leading-none" style={{ background: 'linear-gradient(135deg, #fef6cc 0%, #fce4e8 100%)' }}>
          <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full block" style={{ height: '80px' }}>
            <path d="M0,60 C240,0 480,80 720,40 C960,0 1200,80 1440,20 L1440,80 L0,80 Z" fill="#FFFDF7" />
          </svg>
        </div>

        {/* ─── About Intro / Philosophies ─── */}
        <section className="px-6 md:px-10 py-20 md:py-28" style={{ backgroundColor: '#FFFDF7' }}>
          <div className="max-w-[1500px] mx-auto">
            {/* Text block — both paragraph and heading share the same left indent */}
            <div className="mb-12">
              <p className="font-body text-lg md:text-2xl text-[var(--color-jz-text-secondary)] max-w-3xl leading-relaxed mb-2 text-center mx-auto">
                With{" "}
                <span className="font-semibold text-[var(--color-jz-text)]">6 years of experience</span>
                , I specialize in{" "}
                <span className="font-semibold text-[var(--color-jz-text)]">Experience Design</span>,{" "}
                <span className="font-semibold text-[var(--color-jz-text)]">Design Thinking</span>, and{" "}
                <span className="font-semibold text-[var(--color-jz-text)]">Product Strategy</span> in the{" "}
                <span className="font-semibold text-[var(--color-jz-text)]">B2B SaaS space</span>.
              </p>
              <p className="font-body text-lg md:text-xl mb-10 max-w-3xl text-center mx-auto text-[var(--color-jz-text-secondary)]" style={{ marginTop: '16px' }}>
                I am passionate about all things{" "}
                <span className="font-semibold jz-highlight" style={{ textDecorationColor: '#000' }}>Design System</span>{" "}
                and{" "}
                <span className="font-semibold jz-highlight" style={{ textDecorationColor: '#000' }}>Design Ops.</span>
              </p>

              <hr className="border-t border-[var(--color-jz-border)] max-w-2xl mx-auto my-20" />

              <h2 className="font-display text-4xl md:text-6xl font-bold text-[var(--color-jz-text)] leading-tight text-center">
                Collaborative <span style={{ color: '#ffae00' }}>*</span> Scalable <span style={{ color: '#ffae00' }}>*</span> Empathetic
              </h2>
            </div>

            <p className="font-body text-sm uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-16 text-center">
              My Design Philosophies (not in any particular order)
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[var(--color-jz-border)]">
              {philosophies.map((p, i) => (
                <div key={p.title} className="px-0 md:px-10 py-8 md:py-0 first:pl-0 last:pr-0">
                  <span className="font-display text-5xl font-bold mb-4 block" style={{ color: '#ffae00' }}>
                    0{i + 1}
                  </span>
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

        {/* ─── Wave divider ─── */}
        <div className="overflow-hidden leading-none bg-[var(--color-jz-bg)]">
          <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full block" style={{ height: '80px' }}>
            <path d="M0,0 L0,60 C240,0 480,80 720,40 C960,0 1200,80 1440,20 L1440,0 Z" fill="#FFFDF7" />
            <path d="M0,60 C240,0 480,80 720,40 C960,0 1200,80 1440,20" fill="none" stroke="#ffae00" strokeWidth="2" />
          </svg>
        </div>

        {/* ─── Case Studies ─── */}
        <section className="bg-[var(--color-jz-bg)] px-6 md:px-10 py-20 md:py-28">
          <div className="max-w-[1500px] mx-auto">
            <p className="font-body text-sm uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-3">
              Case Studies
            </p>
            <h2 className="font-body font-semibold text-[var(--color-jz-text)] mb-8" style={{ fontSize: '24px' }}>
              My Proudest Work
            </h2>

            <div className="space-y-0 divide-y divide-[var(--color-jz-border)]">
              {caseStudies.map((cs, i) => (
                <div
                  key={cs.label}
                  className="group py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch"
                >
                  {/* Text column */}
                  <div className="flex flex-col justify-center pr-0 md:pr-16 py-8 md:py-0 border-b md:border-b-0 md:border-r border-[var(--color-jz-border)]">
                    <h3 className="font-display text-4xl md:text-6xl font-bold text-[var(--color-jz-text)] mb-4 leading-tight">
                      {cs.label}
                    </h3>
                    <p className="font-body text-sm text-[var(--color-jz-text-muted)] mb-5 tracking-wide">
                      {cs.tags}
                    </p>
                    <p className="font-body text-base text-[var(--color-jz-text-secondary)] leading-relaxed mb-8 max-w-sm">
                      {cs.description}
                    </p>
                    <div>
                      <Link
                        href={cs.href}
                        className="inline-block font-body text-sm font-semibold px-8 py-3 rounded-full border border-[var(--color-jz-text)] text-[var(--color-jz-text)] hover:bg-[var(--color-jz-text)] hover:text-[var(--color-jz-bg)] transition-colors duration-200 uppercase tracking-widest"
                      >
                        View Work for {cs.label}
                      </Link>
                    </div>
                  </div>
                  {/* Image column */}
                  <div className="md:pl-16 min-w-0">
                    {cs.image ? (
                      <div className="w-full h-[300px] md:h-[420px] overflow-hidden">
                        <Image
                          src={cs.image}
                          alt={cs.label}
                          width={1200}
                          height={800}
                          className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                        />
                      </div>
                    ) : (
                      <div className="w-full h-[300px] md:h-[420px] bg-[var(--color-jz-surface)] flex items-center justify-center">
                        <span className="font-display text-6xl font-bold" style={{ color: '#ffae00', opacity: 0.3 }}>*</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Wave divider (Case Studies → What I Bring) ─── */}
        <div className="overflow-hidden leading-none" style={{ backgroundColor: '#15030E' }}>
          <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full block" style={{ height: '80px' }}>
            <path d="M0,0 L0,60 C240,0 480,80 720,40 C960,0 1200,80 1440,20 L1440,0 Z" fill="var(--color-jz-bg)" />
            <path d="M0,60 C240,0 480,80 720,40 C960,0 1200,80 1440,20" fill="none" stroke="#FF1493" strokeWidth="2" />
          </svg>
        </div>

        {/* ─── What I Bring ─── */}
        <section className="px-6 md:px-10 py-20 md:py-28" style={{ backgroundColor: '#15030E' }}>
          <div className="max-w-[1500px] mx-auto">
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-12" style={{ color: '#FFEAF6' }}>
              What I bring to the table
            </h2>
            <div className="divide-y border-t" style={{ borderColor: '#fef6cc' }}>
              {skills.map((skill) => (
                <details key={skill.title} className="group py-0" style={{ borderColor: '#fef6cc' }}>
                  <summary className="flex items-center justify-between py-6 cursor-pointer">
                    <span className="font-body text-lg md:text-xl font-semibold pr-4" style={{ color: '#fff' }}>
                      {skill.title}
                    </span>
                    <span className="flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center group-open:rotate-45 transition-transform duration-200 text-xl font-light" style={{ borderColor: '#fef6cc', color: '#fef6cc' }}>
                      +
                    </span>
                  </summary>
                  <div className="pb-8 pr-12">
                    <p className="font-body text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
                      {skill.body}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
      {/* ─── Wave divider (What I Bring → Footer) ─── */}
      <div className="overflow-hidden leading-none" style={{ background: 'linear-gradient(135deg, #fef6cc 0%, #fce4e8 100%)' }}>
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full block" style={{ height: '80px' }}>
          <path d="M0,0 L0,60 C240,0 480,80 720,40 C960,0 1200,80 1440,20 L1440,0 Z" fill="#15030E" />
          <path d="M0,60 C240,0 480,80 720,40 C960,0 1200,80 1440,20" fill="none" stroke="#FF1493" strokeWidth="2" />
        </svg>
      </div>
      <Footer />
    </>
  );
}

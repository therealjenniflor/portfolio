"use client";

import { useState } from "react";
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

const companies = [
  {
    name: "Global Payments",
    role: "Lead Product Designer",
    tenure: "2023–Present",
    tags: "Fintech • POS & Admin Tooling • B2B SaaS",
    description:
      "Led end-to-end UX across multiple verticals, improving merchant tools and redesigning core POS workflows. Promoted from Senior to Lead Product Designer.",
    caseStudies: [
      {
        number: "01",
        title: "Checkout Flow Redesign",
        tags: ["UX Enhancement", "Leadership", "Prototype"],
        description:
          "Streamlining the checkout experience to reduce drop-off rates while enhancing collaboration and communication between design and product through clear delegation and cross-functional alignment.",
        href: "/pos-redesign",
        image: null,
        video: "/videos/pos_mockup.mp4",
        note: null,
      },
      {
        number: "02",
        title: "Multi Location Access",
        tags: ["Back Office", "Desktop", "Mobile"],
        description:
          "Designed the end-to-end multi-account experience for restaurant merchants managing multiple concepts under one login, including account selection, an admin switcher, and user-to-account assignment flows.",
        href: "/multi-location-access",
        image: "/images/multi_location/multi_location_casestudy.png",
        video: null,
        note: "🔒 Password protected, request access from JZ",
      },
      {
        number: "03",
        title: "Deposit Threshold",
        tags: ["Admin Tooling", "Systems Thinking", "Scalable Workflows"],
        description:
          "A high-leverage admin experience redesign that reduced payment exceptions and user error by introducing clear, configurable thresholds with layered permissioning and validation feedback.",
        href: "/deposit-threshold",
        image: "/images/hero-image.png",
        video: null,
        note: "Best viewed on desktop",
      },
    ],
  },
  {
    name: "Tagboard Inc.",
    role: "Product Designer",
    tenure: "2021–2023",
    tags: "B2B SaaS • Live Production • Broadcast",
    description:
      "Directed design for live production tools that supported storytelling at scale, from sports arenas to broadcast studios. Led 8 foundational projects culminating in the App Marketplace launch at NAB Show 2023.",
    caseStudies: [
      {
        number: "01",
        title: "NBA × Sportradar API Integration",
        tags: ["Live Data", "NBA Project", "API"],
        description:
          "Optimized the UX by introducing a feature that seamlessly automates sports data importation, improving the process of airing graphics for live sport events.",
        href: "/nba-sportradar",
        image: "/images/API-SR.png",
        video: null,
        note: null,
      },
      {
        number: "02",
        title: "Production Dashboard Redesign",
        tags: ["Redesign", "B2B SaaS", "End-to-End"],
        description:
          "Overhauled the information architecture and improved the overall workflow for the Production Management Dashboard used daily by NFL, Fox Sports, and TEGNA.",
        href: "/dashboard-redesign",
        image: "/images/producer-redesign.png",
        video: null,
        note: null,
      },
      {
        number: "03",
        title: "Google Sheets Integration",
        tags: ["Data Integration", "UX", "Automation"],
        description:
          "Introduced Google Sheets to the graphic editor, automating data importation and improving the process of launching graphics on air.",
        href: "/google-sheets",
        image: "/images/google_hero.webp",
        video: null,
        note: null,
      },
    ],
  },
];

const untaboo = {
  name: "Project Untaboo",
  role: "Lead Designer",
  tenure: "2022",
  tags: "Health • Wellness • Mobile • UI Design",
  description:
    "Led the design of a mobile app to personalize period care and improve menstrual health outcomes for underserved communities.",
  href: "/project-untaboo",
  image: "/images/project_untaboo/Untaboo_hero.png",
  caseStudyTags: ["Mobile", "Health", "UI Design"],
  caseStudyDescription:
    "End-to-end product design for a mobile app that personalizes period care, delivering tailored product recommendations and health education to improve menstrual health outcomes.",
};

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

function CaseStudyCard({ cs }: { cs: (typeof companies)[0]["caseStudies"][0] }) {
  return (
    <div className="border-t border-[var(--color-jz-border)] py-10 flex flex-col md:flex-row gap-8 md:gap-12 items-start">
      {/* Image / video  -  left */}
      <div
        className="w-full md:w-3/5 shrink-0 rounded-xl overflow-hidden bg-[var(--color-jz-surface)]"
        style={{ height: "clamp(220px, 35vw, 480px)" }}
      >
        {cs.video ? (
          <video
            src={cs.video}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        ) : cs.image ? (
          <Image
            src={cs.image}
            alt={cs.title}
            width={1400}
            height={700}
            className="w-full h-full object-contain"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="font-display text-8xl font-bold" style={{ color: "#ffae00", opacity: 0.3 }}>*</span>
          </div>
        )}
      </div>

      {/* Content  -  right */}
      <div className="flex flex-col justify-center gap-4 flex-1">
        <span className="font-display text-sm font-bold" style={{ color: "#ffae00" }}>{cs.number}</span>
        <h4 className="font-display text-2xl md:text-3xl font-bold text-[var(--color-jz-text)] leading-snug">
          {cs.title}
        </h4>
        <div className="flex flex-wrap gap-2">
          {cs.tags.map((t) => (
            <span
              key={t}
              className="font-body text-xs px-3 py-1 rounded-full border border-[var(--color-jz-border)] text-[var(--color-jz-text-muted)]"
            >
              {t}
            </span>
          ))}
        </div>
        <p className="font-body text-base text-[var(--color-jz-text-secondary)] leading-relaxed">
          {cs.description}
        </p>
        {cs.note && (
          <p className="font-body text-xs text-[var(--color-jz-text-muted)]">{cs.note}</p>
        )}
        <Link
          href={cs.href}
          className="inline-block self-start font-body text-sm font-semibold px-8 py-3 rounded-full border border-[var(--color-jz-text)] text-[var(--color-jz-text)] hover:bg-[var(--color-jz-text)] hover:text-[var(--color-jz-bg)] transition-colors duration-200 uppercase tracking-widest whitespace-nowrap"
        >
          View Case Study →
        </Link>
      </div>
    </div>
  );
}

function CompanySection({
  company,
  defaultOpen = false,
}: {
  company: (typeof companies)[0];
  defaultOpen?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-t border-[var(--color-jz-border)]">
      {/* Company header  -  accordion trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-10 md:py-14 text-left group"
        aria-expanded={isOpen}
      >
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 md:gap-16 items-start">
          <div>
            <h3 className="font-display text-4xl md:text-5xl font-bold text-[var(--color-jz-text)] leading-tight mb-2">
              {company.name}
            </h3>
            <p className="font-body text-sm text-[var(--color-jz-text-muted)] uppercase tracking-widest mb-1">
              {company.role}
            </p>
            <p className="font-body text-sm text-[var(--color-jz-text-muted)]">
              {company.tenure}
            </p>
          </div>
          <div className="flex items-start justify-between gap-8">
            <div>
              <p className="font-body text-xs uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-2">
                {company.tags}
              </p>
              <p className="font-body text-base md:text-lg text-[var(--color-jz-text-secondary)] leading-relaxed">
                {company.description}
              </p>
            </div>
            {/* Toggle button — filled with brand gold when open, outlined when closed */}
            <span
              className={`shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-2xl font-light transition-all duration-300 ${
                isOpen
                  ? "rotate-45 text-[var(--color-jz-bg)]"
                  : "border-2 text-[#ffae00] group-hover:bg-[#ffae00] group-hover:text-[var(--color-jz-bg)] group-hover:border-[#ffae00]"
              }`}
              style={isOpen ? { backgroundColor: "#ffae00", border: "2px solid #ffae00" } : { borderColor: "#ffae00" }}
            >
              +
            </span>
          </div>
        </div>
      </button>

      {/* Case studies  -  shown when company is open */}
      {isOpen && (
        <div className="pb-12">
          {company.caseStudies.map((cs) => (
            <CaseStudyCard key={cs.title} cs={cs} />
          ))}
        </div>
      )}
    </div>
  );
}


export default function Home() {
  return (
    <>
      <Nav />
      <main>
        {/* ─── Hero ─── */}
        <section
          className="relative px-6 md:px-10 pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden"
          style={{ background: "linear-gradient(135deg, #fef6cc 0%, #fce4e8 100%)" }}
        >
          <div
            className="hidden md:block absolute top-1/2 right-0 -translate-y-1/2 translate-x-[-10%] pointer-events-none select-none"
            style={{ rotate: "-25deg" }}
          >
            <span
              aria-hidden="true"
              className="font-display font-bold leading-none"
              style={{ opacity: 0.4, fontSize: "clamp(25rem,55vw,70rem)", color: "#ffae00" }}
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
              is a{" "}
              <span className="font-semibold text-[var(--color-jz-text)]">
                Product Designer
              </span>{" "}
              who navigates ambiguity, sharpens defined problems, and uses AI to move
              faster without cutting corners.
            </p>
          </div>
        </section>

        {/* ─── Divider wave ─── */}
        <div
          className="overflow-hidden leading-none"
          style={{ background: "linear-gradient(135deg, #fef6cc 0%, #fce4e8 100%)" }}
        >
          <svg
            viewBox="0 0 1440 80"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="w-full block"
            style={{ height: "80px" }}
          >
            <path
              d="M0,60 C240,0 480,80 720,40 C960,0 1200,80 1440,20 L1440,80 L0,80 Z"
              fill="#FFFDF7"
            />
          </svg>
        </div>

        {/* ─── About Intro / Philosophies ─── */}
        <section className="px-6 md:px-10 py-20 md:py-28" style={{ backgroundColor: "#FFFDF7" }}>
          <div className="max-w-[1500px] mx-auto">
            <div className="mb-12">
              <p className="font-body text-lg md:text-2xl text-[var(--color-jz-text-secondary)] max-w-3xl leading-relaxed mb-2 text-center mx-auto">
                With{" "}
                <span className="font-semibold text-[var(--color-jz-text)]">
                  6 years of experience
                </span>
                , I specialize in{" "}
                <span className="font-semibold text-[var(--color-jz-text)]">
                  Experience Design
                </span>
                ,{" "}
                <span className="font-semibold text-[var(--color-jz-text)]">
                  Design Thinking
                </span>
                , and{" "}
                <span className="font-semibold text-[var(--color-jz-text)]">
                  Product Strategy
                </span>{" "}
                in the{" "}
                <span className="font-semibold text-[var(--color-jz-text)]">
                  B2B SaaS space
                </span>
                .
              </p>
              <p
                className="font-body text-lg md:text-xl mb-10 max-w-3xl text-center mx-auto text-[var(--color-jz-text-secondary)]"
                style={{ marginTop: "16px" }}
              >
                I am passionate about all things{" "}
                <span
                  className="font-semibold jz-highlight"
                  style={{ textDecorationColor: "#000" }}
                >
                  Design System
                </span>{" "}
                and{" "}
                <span
                  className="font-semibold jz-highlight"
                  style={{ textDecorationColor: "#000" }}
                >
                  Design Ops.
                </span>
              </p>

              <hr className="border-t border-[var(--color-jz-border)] max-w-2xl mx-auto my-20" />

              <h2 className="font-display text-4xl md:text-6xl font-bold text-[var(--color-jz-text)] leading-tight text-center">
                Collaborative <span style={{ color: "#ffae00" }}>*</span> Scalable{" "}
                <span style={{ color: "#ffae00" }}>*</span> Empathetic
              </h2>
            </div>

            <p className="font-body text-sm uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-16 text-center">
              My Design Philosophies (not in any particular order)
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[var(--color-jz-border)]">
              {philosophies.map((p, i) => (
                <div
                  key={p.title}
                  className="px-0 md:px-10 py-8 md:py-0 first:pl-0 last:pr-0"
                >
                  <span
                    className="font-display text-5xl font-bold mb-4 block"
                    style={{ color: "#ffae00" }}
                  >
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
          <svg
            viewBox="0 0 1440 80"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="w-full block"
            style={{ height: "80px" }}
          >
            <path
              d="M0,0 L0,60 C240,0 480,80 720,40 C960,0 1200,80 1440,20 L1440,0 Z"
              fill="#FFFDF7"
            />
            <path
              d="M0,60 C240,0 480,80 720,40 C960,0 1200,80 1440,20"
              fill="none"
              stroke="#ffae00"
              strokeWidth="2"
            />
          </svg>
        </div>

        {/* ─── Work / Case Studies ─── */}
        <section className="bg-[var(--color-jz-bg)] px-6 md:px-10 pb-20 md:pb-28">
          <div className="max-w-[1500px] mx-auto">
            <div className="pt-16 md:pt-20 mb-4">
              <p className="font-body text-sm uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-3">
                Selected Work
              </p>
              <h2
                className="font-body font-semibold text-[var(--color-jz-text)]"
                style={{ fontSize: "24px" }}
              >
                My Proudest Work
              </h2>
            </div>

            {companies.map((company, i) => (
              <CompanySection key={company.name} company={company} defaultOpen={i === 0} />
            ))}

            {/* Project Untaboo  -  flat (single case study, no accordion) */}
            <div className="border-t border-[var(--color-jz-border)] py-10 md:py-14">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 md:gap-16 mb-10">
                <div>
                  <h3 className="font-display text-4xl md:text-5xl font-bold text-[var(--color-jz-text)] leading-tight mb-2">
                    {untaboo.name}
                  </h3>
                  <p className="font-body text-sm text-[var(--color-jz-text-muted)] uppercase tracking-widest mb-1">
                    {untaboo.role}
                  </p>
                  <p className="font-body text-sm text-[var(--color-jz-text-muted)]">
                    {untaboo.tenure}
                  </p>
                </div>
                <div>
                  <p className="font-body text-xs uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-2">
                    {untaboo.tags}
                  </p>
                  <p className="font-body text-base md:text-lg text-[var(--color-jz-text-secondary)] leading-relaxed">
                    {untaboo.description}
                  </p>
                </div>
              </div>

              {/* Case study card */}
              <div className="border-t border-[var(--color-jz-border)] pt-10 flex flex-col md:flex-row gap-8 md:gap-12 items-start">
                <div
                  className="w-full md:w-3/5 shrink-0 rounded-xl overflow-hidden bg-[var(--color-jz-surface)]"
                  style={{ height: "clamp(220px, 35vw, 480px)" }}
                >
                  <Image
                    src={untaboo.image}
                    alt="Project Untaboo mockups"
                    width={1400}
                    height={700}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-col justify-center gap-4 flex-1">
                  <span className="font-display text-sm font-bold" style={{ color: "#ffae00" }}>01</span>
                  <h4 className="font-display text-2xl md:text-3xl font-bold text-[var(--color-jz-text)] leading-snug">
                    Untaboo: Period Care App
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {untaboo.caseStudyTags.map((t) => (
                      <span key={t} className="font-body text-xs px-3 py-1 rounded-full border border-[var(--color-jz-border)] text-[var(--color-jz-text-muted)]">
                        {t}
                      </span>
                    ))}
                  </div>
                  <p className="font-body text-base text-[var(--color-jz-text-secondary)] leading-relaxed">
                    {untaboo.caseStudyDescription}
                  </p>
                  <Link
                    href={untaboo.href}
                    className="inline-block self-start font-body text-sm font-semibold px-8 py-3 rounded-full border border-[var(--color-jz-text)] text-[var(--color-jz-text)] hover:bg-[var(--color-jz-text)] hover:text-[var(--color-jz-bg)] transition-colors duration-200 uppercase tracking-widest whitespace-nowrap"
                  >
                    View Case Study →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Wave divider (Work → What I Bring) ─── */}
        <div
          className="overflow-hidden leading-none"
          style={{ backgroundColor: "#15030E" }}
        >
          <svg
            viewBox="0 0 1440 80"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="w-full block"
            style={{ height: "80px" }}
          >
            <path
              d="M0,0 L0,60 C240,0 480,80 720,40 C960,0 1200,80 1440,20 L1440,0 Z"
              fill="var(--color-jz-bg)"
            />
            <path
              d="M0,60 C240,0 480,80 720,40 C960,0 1200,80 1440,20"
              fill="none"
              stroke="#FF1493"
              strokeWidth="2"
            />
          </svg>
        </div>

        {/* ─── What I Bring ─── */}
        <section
          className="px-6 md:px-10 py-20 md:py-28"
          style={{ backgroundColor: "#15030E" }}
        >
          <div className="max-w-[1500px] mx-auto">
            <h2
              className="font-display text-4xl md:text-6xl font-bold mb-12"
              style={{ color: "#FFEAF6" }}
            >
              What I bring to the table
            </h2>
            <div className="divide-y border-t" style={{ borderColor: "#fef6cc" }}>
              {skills.map((skill) => (
                <details key={skill.title} className="group py-0" style={{ borderColor: "#fef6cc" }}>
                  <summary className="flex items-center justify-between py-6 cursor-pointer">
                    <span
                      className="font-body text-lg md:text-xl font-semibold pr-4"
                      style={{ color: "#fff" }}
                    >
                      {skill.title}
                    </span>
                    <span
                      className="flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center group-open:rotate-45 transition-transform duration-200 text-xl font-light"
                      style={{ borderColor: "#fef6cc", color: "#fef6cc" }}
                    >
                      +
                    </span>
                  </summary>
                  <div className="pb-8 pr-12">
                    <p
                      className="font-body text-base leading-relaxed"
                      style={{ color: "rgba(255,255,255,0.7)" }}
                    >
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
      <div
        className="overflow-hidden leading-none"
        style={{ background: "linear-gradient(135deg, #fef6cc 0%, #fce4e8 100%)" }}
      >
        <svg
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full block"
          style={{ height: "80px" }}
        >
          <path
            d="M0,0 L0,60 C240,0 480,80 720,40 C960,0 1200,80 1440,20 L1440,0 Z"
            fill="#15030E"
          />
          <path
            d="M0,60 C240,0 480,80 720,40 C960,0 1200,80 1440,20"
            fill="none"
            stroke="#FF1493"
            strokeWidth="2"
          />
        </svg>
      </div>
      <Footer />
    </>
  );
}

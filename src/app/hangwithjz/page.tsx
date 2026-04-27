import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/portfolio/Nav";
import Footer from "@/components/portfolio/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Building My Corner of the Internet | JZ",
  description:
    "A custom link-in-bio site built from scratch, because cookie-cutter templates weren't going to cut it.",
};

const painPoints = [
  {
    label: "Pain Point 01",
    title: "Generic Templates",
    body: "Existing tools forced a rigid layout with no room for personality. Every page looked the same, just a different name at the top.",
  },
  {
    label: "Pain Point 02",
    title: "No Portfolio Integration",
    body: "There was nowhere to showcase UGC work alongside affiliate links. The two lived in completely separate places.",
  },
  {
    label: "Pain Point 03",
    title: "Difficult to Scan, Hide & Filter",
    body: "Content was hard to browse with no way to hide or filter items by category, making pages feel overwhelming and cluttered.",
  },
];

const features = [
  {
    number: "1",
    title: "Custom Brand System",
    image: "/images/hangwithjz/hangwithjz-desktop.png",
    alt: "hangwithjz.com desktop view of the custom brand system",
    points: [
      { plain: "Built ", bold: "from scratch in Next.js", rest: ", zero template constraints." },
      { plain: "Hot pink + lime accent palette ", bold: "tied directly to my personal brand", rest: "." },
      { plain: "Playfair Display + Work Sans ", bold: "type pairing for an editorial feel", rest: " that sets me apart." },
    ],
  },
  {
    number: "2",
    title: "Visual Hierarchy & Scannable Layout",
    image: "/images/hangwithjz/hangwithjz-mobile1.png",
    alt: "hangwithjz.com mobile view showcasing visual hierarchy",
    points: [
      { plain: "Large imagery used to ", bold: "balance text and CTAs", rest: ", reducing visual noise." },
      { plain: "Dedicated sections let users ", bold: "scan and jump to what matters", rest: ", no infinite scroll walls of buttons." },
      { plain: "Both ", bold: "vertical and horizontal scroll", rest: " patterns added for product browsing variety." },
    ],
  },
  {
    number: "3",
    title: "Top Bar Navigation",
    image: "/images/hangwithjz/hangwithjz-mobile2.png",
    alt: "hangwithjz.com sticky top navigation bar",
    points: [
      { plain: "Sticky navigation gives ", bold: "instant access to any section", rest: " from anywhere on the page." },
      { plain: "Straight-to-the-point link architecture, ", bold: "no unnecessary depth", rest: " or buried content." },
      { plain: "Mobile-first collapse with ", bold: "hamburger menu", rest: " for a clean small-screen experience." },
    ],
  },
  {
    number: "4",
    title: "UGC Portfolio + Affiliate Integration",
    image: "/images/hangwithjz/hangwithjz-mobile3.png",
    alt: "hangwithjz.com UGC portfolio and affiliate links side by side",
    points: [
      { plain: "Dedicated UGC portfolio section ", bold: "lives alongside affiliate picks and faves", rest: ". One page, full picture." },
      { plain: "Affiliate links include ", bold: "discount codes inline", rest: " so nothing is buried in descriptions." },
      { plain: "\"Work With Me\" section functions as a ", bold: "lightweight brand brief", rest: " for potential collabs." },
    ],
  },
];

const learningCols = [
  {
    label: "How I Grew",
    points: [
      "Shipped a full product solo, from concept to deployment, using AI tooling to move at a pace that would otherwise require a team.",
      "Designing for myself was surprisingly harder than designing for users. Taste is personal and harder to justify without external constraints.",
      "Using Claude Code, Vercel, and GitHub in a real production context deepened my understanding of the full dev-to-deploy pipeline.",
    ],
  },
  {
    label: "What I Learned",
    points: [
      "Brand clarity before design is everything. Having a clear visual identity made every decision faster and more consistent.",
      "Building from scratch reveals what templates actually abstract away, and which of those abstractions are actually worth keeping.",
      "AI-assisted development is a skill, not a shortcut. Knowing what to ask for and how to review output is its own craft.",
    ],
  },
  {
    label: "What I'd Do Differently",
    points: [
      "I'd define a clearer content model earlier: what types of items exist, how they're categorized, before writing any UI.",
      "I'd add analytics from day one to understand which sections actually get visited, not just which ones feel important to me.",
    ],
  },
];

function WaveDivider(_props: { bgTop: string; bgBottom: string }) {
  return (
    <div style={{ height: 0, overflow: "visible", position: "relative", zIndex: 1 }}>
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        style={{ width: "100%", height: "60px", position: "absolute", top: "-30px", left: 0 }}
      >
        <path
          d="M0,30 C240,6 480,54 720,30 C960,6 1200,54 1440,24"
          fill="none"
          stroke="#D4579B"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}

export default function HangwithjzPage() {
  return (
    <>
      <Nav />
      <main>

        {/* ─── Hero ─── */}
        <section className="bg-[#fff5f9] px-6 md:px-10 pt-16 pb-20 md:pt-24 md:pb-28">
          <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 items-center">
            <div>
              <p className="font-body text-sm uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-4">
                <strong>Personal Content Creator Project</strong> • Web Design and Development • 2026
              </p>
              <h1 className="font-display font-bold text-[var(--color-jz-text)] leading-tight mb-6">
                <span className="text-5xl md:text-7xl block">Building My Corner</span>
                <span className="text-5xl md:text-7xl block">of the Internet</span>
                <span className="text-2xl md:text-3xl font-semibold text-[var(--color-jz-text-secondary)] block mt-2">hangwithjz.com · 2026</span>
              </h1>
              <p className="font-body text-xl md:text-2xl text-[var(--color-jz-text-secondary)] leading-relaxed">
                A fully custom link-in-bio site because cookie-cutter templates weren&apos;t going to cut it.
              </p>
            </div>
            <div>
              <Image
                src="/images/hangwithjz/hangwithjz-devices.png"
                alt="hangwithjz.com shown across desktop and mobile devices"
                width={0}
                height={0}
                sizes="(max-width: 768px) 100vw, 66vw"
                style={{ width: "100%", height: "auto" }}
                className="rounded-sm"
                unoptimized
              />
            </div>
          </div>
        </section>

        {/* ─── Context ─── */}
        <section className="bg-[#fdeef4] px-6 md:px-10 py-16 md:py-24">
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
                <p className="font-body text-base font-semibold text-[var(--color-jz-text)]">Solo Product Designer &amp; Engineer</p>
              </div>
              <div className="space-y-2 mt-6">
                <p className="font-body text-xs uppercase tracking-widest text-[var(--color-jz-text-muted)]">Project</p>
                <p className="font-body text-base font-semibold text-[var(--color-jz-text)]">hangwithjz.com</p>
              </div>
              <div className="space-y-2 mt-6">
                <p className="font-body text-xs uppercase tracking-widest text-[var(--color-jz-text-muted)]">Year</p>
                <p className="font-body text-base font-semibold text-[var(--color-jz-text)]">2026</p>
              </div>
              <div className="space-y-2 mt-6">
                <p className="font-body text-xs uppercase tracking-widest text-[var(--color-jz-text-muted)]">Scope</p>
                <p className="font-body text-base font-semibold text-[var(--color-jz-text)]">End-to-End Design &amp; Development</p>
              </div>
            </div>
            <div>
              <p className="font-body text-lg text-[var(--color-jz-text-secondary)] leading-relaxed mb-6">
                I wanted something like Linktree, but it was so &ldquo;cookie cutter&rdquo; and I&apos;m not one
                who likes to fit a mold handed to her. I wanted something{" "}
                <strong className="text-[var(--color-jz-text)]">personal, that was unique to me</strong>{" "}
                and the personal online brand I was building.
              </p>
              <p className="font-body text-lg text-[var(--color-jz-text-secondary)] leading-relaxed mb-6">
                So I built it myself, from scratch, in Next.js, deployed on Vercel. This project was as
                much about{" "}
                <strong className="text-[var(--color-jz-text)]">testing AI-assisted development workflows</strong>{" "}
                as it was about shipping a product I&apos;d actually use. It houses my affiliate picks, my
                faves, my UGC portfolio, and my brand collab info in one place.
              </p>
              <p className="font-body text-sm text-[var(--color-jz-text-muted)] leading-relaxed">
                <span className="font-medium text-[var(--color-jz-text-secondary)]">Built with:</span>{" "}
                Claude Code for AI-assisted development, Vercel for deployment, and GitHub for version control.
              </p>
            </div>
          </div>
        </section>

        {/* ─── Problem ─── */}
        <section className="bg-[#fff5f9] px-6 md:px-10 py-16 md:py-24">
          <div className="max-w-[1500px] mx-auto border-t border-[var(--color-jz-border)] pt-12">
            <p className="font-body text-sm uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-3">
              The Problem
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--color-jz-text)] leading-tight mb-12 max-w-xl">
              What I Was Solving
            </h2>
            <blockquote className="border-l-4 border-[var(--color-jz-accent)] pl-8 max-w-4xl mb-14">
              <p className="font-display text-2xl md:text-3xl font-bold text-[var(--color-jz-text)] leading-snug italic">
                &ldquo;Every link-in-bio tool looked the same, and I refused to be another template.&rdquo;
              </p>
            </blockquote>
            <div className="mb-14">
              <p className="font-body text-xs uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-4">
                What every other link-in-bio tool looks like
              </p>
              <Image
                src="/images/hangwithjz/linktree-templates.png"
                alt="Linktree template options,a grid of generic, cookie-cutter link-in-bio layouts"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                className="rounded-sm"
                unoptimized
              />
              <p className="font-body text-xs text-[var(--color-jz-text-muted)] mt-3 italic">
                * Template examples sourced from linktree.com for illustrative purposes.
              </p>
            </div>
            <p className="font-body text-xs uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-4">
              What I built instead
            </p>
            <Image
              src="/images/hangwithjz/hangwithjz-desktop.png"
              alt="hangwithjz.com full desktop view"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              className="rounded-sm"
              unoptimized
            />
          </div>
        </section>

        <WaveDivider bgTop="#fff5f9" bgBottom="#fdeef4" />

        {/* ─── Business Goals ─── */}
        <section className="bg-[#fdeef4] px-6 md:px-10 py-16 md:py-24">
          <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-px bg-[#f5c8dc]">
            <div className="bg-[#fdeef4] p-10 md:p-14">
              <p className="font-body text-sm uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-6">
                Personal Brand Goal
              </p>
              <p className="font-body text-lg text-[var(--color-jz-text-secondary)] leading-relaxed">
                Establish a distinct personal brand online that reflects my aesthetic and doubles as a
                UGC portfolio, while using the project as a real-world testing ground for{" "}
                <strong className="text-[var(--color-jz-text)]">AI-assisted product development</strong>.
              </p>
            </div>
            <div className="bg-[#fdeef4] p-10 md:p-14">
              <p className="font-body text-sm uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-6">
                My Plan
              </p>
              <p className="font-body text-lg text-[var(--color-jz-text-secondary)] leading-relaxed">
                Design and build a custom site from scratch, no templates, no constraints. Define a clear
                brand identity first, then build a layout that lets my content breathe:{" "}
                <strong className="text-[var(--color-jz-text)]">scannable, visual, and unmistakably mine</strong>.
                Ship it with Claude Code and Vercel to prove the full AI-to-production workflow.
              </p>
            </div>
          </div>
        </section>

        {/* ─── Pain Points + Solution ─── */}
        <section className="bg-[#fff5f9] px-6 md:px-10 py-16 md:py-24">
          <div className="max-w-[1500px] mx-auto">

            {/* Pain point cards */}
            <div className="mb-16 border-t border-[var(--color-jz-border)] pt-12">
              <p className="font-body text-sm uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-3">
                The Problem
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--color-jz-text)] mb-12 leading-tight">
                Why Existing Tools Fell Short
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#f5c8dc] mb-14">
                {painPoints.map((card) => (
                  <div key={card.title} className="bg-[#fff5f9] p-10">
                    <p className="font-body text-xs uppercase tracking-widest text-[var(--color-jz-accent)] mb-4">{card.label}</p>
                    <h4 className="font-display text-xl font-bold text-[var(--color-jz-text)] mb-4 leading-tight">{card.title}</h4>
                    <p className="font-body text-sm text-[var(--color-jz-text-secondary)] leading-relaxed">{card.body}</p>
                  </div>
                ))}
              </div>

              <blockquote className="border-l-4 border-[var(--color-jz-accent)] pl-8 max-w-2xl">
                <p className="font-display text-2xl md:text-3xl font-bold text-[var(--color-jz-text)] leading-snug">
                  So I built something better.
                </p>
              </blockquote>
            </div>

            {/* Solution header */}
            <div className="mb-16">
              <p className="font-body text-sm uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-3">
                The Solution
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--color-jz-text)] mb-6 leading-tight">
                What I Built
              </h2>
              <p className="font-body text-lg text-[var(--color-jz-text-secondary)] leading-relaxed max-w-3xl">
                A fully custom link-in-bio site built in Next.js with a distinct brand system, structured
                navigation, and dedicated sections for every type of content, all designed to be
                immediately scannable and unmistakably personal.
              </p>
            </div>

            {/* Feature rows */}
            <div className="space-y-20">
              {features.map((feature, idx) => (
                <div
                  key={feature.title}
                  className={`grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center ${
                    idx % 2 === 1 ? "md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1" : ""
                  }`}
                >
                  {/* Text */}
                  <div className="flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="font-display text-4xl font-bold text-[#FF2D9B] leading-none">
                        {feature.number}
                      </span>
                      <div className="h-px flex-1 bg-[#f5c8dc]" />
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
                  {/* Image */}
                  <div className="overflow-hidden flex items-center justify-center">
                    <Image
                      src={feature.image}
                      alt={feature.alt}
                      width={0}
                      height={0}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      style={{ width: "100%", height: "auto" }}
                      className="rounded-sm"
                      unoptimized
                    />
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        <WaveDivider bgTop="#fff5f9" bgBottom="#fff5f9" />

        {/* ─── JSON Data Layer ─── */}
        <section className="bg-[#fff5f9] px-6 md:px-10 py-20 md:py-28">
          <div className="max-w-[1500px] mx-auto">
            <p className="font-body text-sm uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-3">
              Under the Hood
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--color-jz-text)] leading-tight mb-10">
              I Built a JSON Data Layer
            </h2>

            {/* Paragraph left, VS Code image right */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
              <p className="font-body text-lg text-[var(--color-jz-text-secondary)] leading-relaxed">
                Rather than hardcoding affiliate links and product data directly in the UI, I set up a structured JSON file I can edit in VS Code whenever I want to update picks, swap discount codes, or add new categories. This keeps my AI token usage low, so I only involve Claude Code when I&apos;m actually changing the design, not just swapping in a new product link. (lol)
              </p>
              <div>
                <p className="font-body text-xs uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-4">
                  The data file in VS Code
                </p>
                <Image
                  src="/images/hangwithjz/vscode.png"
                  alt="VS Code showing the JSON data file used to manage affiliate links and product picks"
                  width={0}
                  height={0}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ width: "100%", height: "auto", borderRadius: "10px" }}
                  unoptimized
                />
              </div>
            </div>

            {/* Diagram centered below */}
            <div className="flex flex-col items-center">
              <p className="font-body text-xs uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-4">
                How it all connects
              </p>
              <Image
                src="/images/hangwithjz/diagram.png"
                alt="Diagram showing how the JSON data layer connects to the site UI"
                width={0}
                height={0}
                sizes="(max-width: 768px) 100vw, 70vw"
                style={{ width: "70%", height: "auto", borderRadius: "10px" }}
                unoptimized
              />
            </div>
          </div>
        </section>

        {/* ─── Live Site CTA ─── */}
        <section className="bg-[#fdeef4] px-6 md:px-10 py-16 md:py-24">
          <div className="max-w-[1500px] mx-auto">
            <p className="font-body text-sm uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-3">
              See It Live
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--color-jz-text)] leading-tight mb-6">
              Visit the Site
            </h2>
            <p className="font-body text-lg text-[var(--color-jz-text-secondary)] leading-relaxed max-w-2xl mb-10">
              The best way to experience it is to see it. Pop open a new tab and explore the real thing: live, deployed, and shipping updates.
            </p>
            <div className="mb-12">
              <Image
                src="/images/hangwithjz/hangwithjz-visit-site.png"
                alt="hangwithjz.com shown on desktop and mobile, Health + Wellness section with product cards"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                className="rounded-sm"
                unoptimized
              />
            </div>
            <div className="flex justify-center">
              <a
                href="https://www.hangwithjz.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-body text-sm font-semibold px-12 py-4 rounded-full bg-[#EAFF8C] text-[#111111] hover:bg-[#d4f070] transition-colors duration-200 uppercase tracking-widest"
              >
                Open hangwithjz.com →
              </a>
            </div>
          </div>
        </section>

        <WaveDivider bgTop="#fdeef4" bgBottom="#f9d5e8" />

        {/* ─── Learnings ─── */}
        <section className="bg-[#f9d5e8] overflow-hidden py-16 md:py-24">
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
        <section className="bg-[#fdeef4] px-6 md:px-10 py-20 md:py-28">
          <div className="max-w-[1500px] mx-auto text-center">
            <p className="font-display text-2xl md:text-3xl font-bold text-[var(--color-jz-text)] mb-2">
              You&apos;ve reached the end
            </p>
            <p className="font-body text-lg text-[var(--color-jz-text-secondary)] mb-10">
              But stick around!
            </p>
            <Link
              href="/pos-redesign"
              className="inline-block font-body text-sm font-semibold px-8 py-4 border border-[var(--color-jz-text)] text-[var(--color-jz-text)] hover:bg-[var(--color-jz-text)] hover:text-[var(--color-jz-bg)] transition-colors duration-200 mb-16"
            >
              View Checkout Flow Redesign →
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

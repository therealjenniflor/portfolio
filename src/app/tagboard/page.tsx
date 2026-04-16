import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/portfolio/Nav";
import Footer from "@/components/portfolio/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tagboard — JZ",
  description:
    "Lead Product Designer at Tagboard — core tools for live content producers and broadcasters.",
};

const featured = [
  {
    number: "01",
    company: "Tagboard Inc. × NBA",
    launched: "2023",
    title: "API Integration, Sportradar",
    tags: ["Live Data Integration", "NBA Project"],
    description:
      "Optimizing the user experience by introducing a feature that seamlessly automates sports data importation, improving the process of airing their graphics for sport events.",
    href: "/nba-sportradar",
    image: "/images/API-SR.png",
  },
  {
    number: "02",
    company: "Tagboard Inc.",
    launched: "2022",
    title: "Production Dashboard",
    tags: ["Redesign", "B2B SaaS", "End-to-End"],
    description:
      "Enhancing informational architecture and improving the overall workflow for the Production Management Dashboard.",
    href: "#",
    image: "/images/producer-redesign.png",
  },
  {
    number: "03",
    company: "Tagboard Inc.",
    launched: "2023",
    title: "Analytics Dashboard",
    tags: ["Data Viz", "UX Copy", "Cross-Functional Collab"],
    description:
      "Providing and enabling users to effectively track and analyze QR code engagement and gather insights on user interactions and geographic distribution.",
    href: "#",
    image: "/images/analytics-thumbnail.png",
  },
];

const runnerUps = [
  {
    launched: "2024",
    title: "Micro-interactions",
    description:
      "My approach to increasing product engagement and delighting users by introducing fun micro-interactions throughout Tagboard's Dashboard.",
    href: "#",
    image: null,
  },
  {
    launched: "2023",
    title: "Google Sheet Integration",
    description:
      "Introducing Google Sheets to the graphic editor, optimizing the user experience by seamlessly automating data importation, and improving the process of launching their graphics on air.",
    href: "#",
    image: "/images/google-intregration.png.png",
  },
  {
    launched: "2021",
    title: "Style Guide",
    description:
      "Establishing a full, comprehensive Style Guide to improve code quality and maintainability, and increase efficiency and productivity.",
    href: "#",
    image: null,
  },
];

export default function TagboardPage() {
  return (
    <>
      <Nav />
      <main>

        {/* ─── Hero ─── */}
        <section className="bg-[var(--color-jz-bg)] px-6 md:px-10 pt-16 pb-20 md:pt-24 md:pb-28">
          <div className="max-w-[1500px] mx-auto">
            <p className="font-body text-sm uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-4">
              <strong>Tagboard</strong> • B2B SaaS • Live Broadcast Tools
            </p>
            <h1 className="font-display text-6xl md:text-8xl font-bold text-[var(--color-jz-text)] leading-tight mb-8">
              At Tagboard
            </h1>
            <p className="font-body text-xl md:text-2xl text-[var(--color-jz-text-secondary)] max-w-3xl leading-relaxed">
              I was the <strong className="text-[var(--color-jz-text)]">Lead Product Designer</strong> responsible
              for designing core tools used by live content producers and broadcasters. I improved workflows,
              clarity, and speed across the platform, including the Producer Dashboard and high-profile
              projects with partners like the{" "}
              <strong className="text-[var(--color-jz-text)]">NBA</strong>.
            </p>
          </div>
        </section>

        {/* ─── Top 3 Featured ─── */}
        <section className="bg-[var(--color-jz-surface)] px-6 md:px-10 py-16 md:py-24">
          <div className="max-w-[1500px] mx-auto">
            <p className="font-body text-base text-[var(--color-jz-text)] mb-12">
              ♡ My top 3
            </p>

            <div className="space-y-px bg-[var(--color-jz-border)]">
              {featured.map((project) => (
                <div
                  key={project.title}
                  className="bg-[var(--color-jz-surface)] grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-0"
                >
                  {/* Image */}
                  <div className="overflow-hidden flex items-center justify-center self-stretch">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={0}
                        height={0}
                        sizes="50vw"
                        style={{ width: "100%", height: "100%", objectFit: "contain" }}
                        unoptimized
                      />
                    ) : (
                      <div className="w-full aspect-video flex items-center justify-center">
                        <span className="font-display text-xl font-bold text-[var(--color-jz-text-muted)] px-6 text-center">
                          {project.title}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-10 md:p-14 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <span className="font-display text-4xl font-bold text-[var(--color-jz-border)]">
                          {project.number}
                        </span>
                        <div className="h-px flex-1 bg-[var(--color-jz-border)]" />
                        <span className="font-body text-xs text-[var(--color-jz-text-muted)] uppercase tracking-widest">
                          {project.company} · {project.launched}
                        </span>
                      </div>
                      <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-jz-text)] mb-4 leading-tight">
                        {project.title}
                      </h2>
                      <p className="font-body text-sm text-[var(--color-jz-text-secondary)] mb-6">
                        {project.tags.join(" • ")}
                      </p>
                      <p className="font-body text-base text-[var(--color-jz-text-secondary)] leading-relaxed max-w-xl">
                        {project.description}
                      </p>
                    </div>
                    <div className="mt-8">
                      <Link
                        href={project.href}
                        className="inline-block font-body text-sm font-semibold px-6 py-3 border border-[var(--color-jz-text)] text-[var(--color-jz-text)] hover:bg-[var(--color-jz-text)] hover:text-[var(--color-jz-bg)] transition-colors duration-200"
                      >
                        View work →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Runner Ups ─── */}
        <section className="bg-[var(--color-jz-bg)] px-6 md:px-10 py-16 md:py-24">
          <div className="max-w-[1500px] mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--color-jz-text)] mb-3 leading-tight">
              Runner Ups
            </h2>
            <p className="font-body text-lg text-[var(--color-jz-text-secondary)] mb-14">
              More Tagboard projects, if you&apos;re interested (:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--color-jz-border)]">
              {runnerUps.map((project) => (
                <div
                  key={project.title}
                  className="bg-[var(--color-jz-bg)] flex flex-col justify-between"
                >
                  {project.image && (
                    <div className="aspect-video overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={0}
                        height={0}
                        sizes="33vw"
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        unoptimized
                      />
                    </div>
                  )}
                  <div className="p-10 flex-1 flex flex-col justify-between"><div>
                    <p className="font-body text-xs uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-4">
                      {project.launched}
                    </p>
                    <h3 className="font-display text-2xl font-bold text-[var(--color-jz-text)] mb-4 leading-tight">
                      {project.title}
                    </h3>
                    <p className="font-body text-base text-[var(--color-jz-text-secondary)] leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div className="mt-8">
                    <Link
                      href={project.href}
                      className="font-body text-sm font-semibold text-[var(--color-jz-text)] underline underline-offset-4 hover:text-[var(--color-jz-text-secondary)] transition-colors duration-200"
                    >
                      View work →
                    </Link>
                  </div>
                  </div>
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
              href="/global-payments"
              className="inline-block font-body text-sm font-semibold px-8 py-4 border border-[var(--color-jz-text)] text-[var(--color-jz-text)] hover:bg-[var(--color-jz-text)] hover:text-[var(--color-jz-bg)] transition-colors duration-200 mb-16"
            >
              View Global Payments work →
            </Link>

            <div className="border-t border-[var(--color-jz-border)] pt-14">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-[var(--color-jz-text)] mb-8">
                If you like what you see and want to chat:
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                <a
                  href="mailto:jar.zaragoza91@gmail.com"
                  className="inline-block font-body text-sm font-semibold px-8 py-4 border border-[var(--color-jz-text)] text-[var(--color-jz-text)] hover:bg-[var(--color-jz-text)] hover:text-[var(--color-jz-bg)] transition-colors duration-200"
                >
                  Email me →
                </a>
                <span className="font-body text-sm text-[var(--color-jz-text-muted)]">and / or</span>
                <a
                  href="https://www.linkedin.com/in/jarlenez/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block font-body text-sm font-semibold px-8 py-4 border border-[var(--color-jz-text)] text-[var(--color-jz-bg)] bg-[var(--color-jz-text)] hover:opacity-80 transition-opacity duration-200"
                >
                  Connect on LinkedIn →
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

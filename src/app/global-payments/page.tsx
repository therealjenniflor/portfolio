import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/portfolio/Nav";
import Footer from "@/components/portfolio/Footer";

export const metadata: Metadata = {
  title: "Global Payments — JZ",
  description:
    "JZ led end-to-end UX across multiple verticals at Global Payments, improving merchant tools and redesigning core POS workflows.",
};

const projects = [
  {
    number: "01",
    company: "Global Payments",
    launched: "2025",
    title: "Checkout Flow Redesign",
    tags: ["UX Enhancement", "Leadership", "Prototype"],
    description:
      "Focusing on streamlining the checkout experience to reduce drop-off rates while enhancing collaboration and communication between design and product through clear delegation and cross-functional alignment.",
    href: "/pos-redesign",
    note: null,
    video: "/videos/pos_mockup.mp4",
    image: null,
    embed: null,
  },
  {
    number: "02",
    company: "Global Payments",
    launched: "2024",
    title: "Deposit Threshold",
    tags: ["Admin Tooling", "Systems Thinking", "Scalable Workflows"],
    description:
      "A high-leverage admin experience redesign that helped reduce payment exceptions and user error by introducing clear, configurable thresholds with layered permissioning and validation feedback.",
    href: "/deposit-threshold",
    note: "Best viewed on desktop",
    video: null,
    image: "/images/hero-image.png",
    embed: null,
  },
];

export default function GlobalPaymentsPage() {
  return (
    <>
      <Nav />
      <main>

        {/* ─── Hero ─── */}
        <section className="bg-[var(--color-jz-bg)] px-6 md:px-10 pt-16 pb-20 md:pt-24 md:pb-28">
          <div className="max-w-[1500px] mx-auto">
            <p className="font-body text-sm uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-4">
              <strong>Global Payments</strong> • B2B SaaS • POS & Admin Tooling
            </p>
            <h1 className="font-display text-6xl md:text-8xl font-bold text-[var(--color-jz-text)] leading-tight mb-8">
              At Global Payments
            </h1>
            <p className="font-body text-xl md:text-2xl text-[var(--color-jz-text-secondary)] max-w-3xl leading-relaxed">
              I led end-to-end UX across multiple verticals, improving merchant tools and
              redesigning core POS workflows. My contributions to product quality and
              strengthening communication and collaboration between product managers and
              designers led to my promotion from{" "}
              <strong className="text-[var(--color-jz-text)]">
                Senior to Lead Product Designer
              </strong>
              .
            </p>
          </div>
        </section>

        {/* ─── Projects ─── */}
        <section className="bg-[var(--color-jz-surface)] px-6 md:px-10 py-16 md:py-24">
          <div className="max-w-[1500px] mx-auto">
            <p className="font-body text-base text-[var(--color-jz-text)] mb-12">
              ♡ Proudest Work
            </p>

            <div className="space-y-px bg-[var(--color-jz-border)]">
              {projects.map((project) => (
                <div
                  key={project.title}
                  className="bg-[var(--color-jz-surface)] grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-0"
                >
                  {/* Media slot */}
                  <div className="overflow-hidden flex items-center justify-center self-stretch min-h-[300px] max-h-[520px] min-w-0">
                    {project.embed ? (
                      <iframe
                        src={project.embed}
                        title={project.title}
                        style={{
                          border: "none",
                          width: "100%",
                          height: "420px",
                          display: "block",
                          pointerEvents: "none",
                        }}
                      />
                    ) : project.video ? (
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-contain"
                      >
                        <source src={project.video} type="video/mp4" />
                      </video>
                    ) : project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={0}
                        height={0}
                        sizes="50vw"
                        style={{ width: "100%", height: "auto" }}
                        unoptimized
                      />
                    ) : (
                      <span className="font-display text-xl font-bold text-[var(--color-jz-text-muted)] px-6 text-center">
                        {project.title}
                      </span>
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
                      {project.note && (
                        <p className="font-body text-xs text-[var(--color-jz-text-muted)] mt-3 italic">
                          {project.note}
                        </p>
                      )}
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

        {/* ─── End CTA ─── */}
        <section className="bg-[var(--color-jz-bg)] px-6 md:px-10 py-20 md:py-28">
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

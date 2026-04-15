import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/portfolio/Nav";
import Footer from "@/components/portfolio/Footer";

export const metadata: Metadata = {
  title: "Global Payments — JZ",
  description:
    "JZ led end-to-end UX across multiple verticals at Global Payments, improving merchant tools and redesigning core POS workflows.",
};

const projects = [
  {
    label: "Global Payments",
    title: "Checkout Flow Redesign",
    tags: "UX Enhancement • Leadership • Prototype",
    description:
      "Focusing on streamlining the checkout experience to reduce drop-off rates while enhancing collaboration and communication between design and product through clear delegation and cross-functional alignment.",
    href: "/pos-redesign",
    cta: "View work",
    note: null,
    video: "/checkoutflow.mp4",
  },
  {
    label: "Global Payments",
    title: "Deposit Threshold",
    tags: "Admin Tooling • Systems Thinking • Scalable Workflows",
    description:
      "A high-leverage admin experience redesign that helped reduce payment exceptions and user error by introducing clear, configurable thresholds with layered permissioning and validation feedback.",
    href: "/deposit-threshold",
    cta: "View work",
    note: "Best viewed on desktop",
    video: null,
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
              Case Study
            </p>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-[var(--color-jz-text)] mb-8 leading-tight">
              At Global Payments
            </h1>
            <p className="font-body text-lg md:text-xl text-[var(--color-jz-text-secondary)] max-w-3xl leading-relaxed">
              I led end-to-end UX across multiple verticals, improving merchant tools and
              redesigning core POS workflows. My contributions to product quality and
              strengthening communication and collaboration between product managers and
              designers led to my promotion from{" "}
              <span className="font-semibold text-[var(--color-jz-text)]">
                Senior to Lead Product Designer
              </span>
              .
            </p>
          </div>
        </section>

        {/* ─── Projects ─── */}
        <section className="bg-[var(--color-jz-surface)] px-6 md:px-10 py-20 md:py-28">
          <div className="max-w-[1500px] mx-auto">
            <p className="font-body text-sm uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-16">
              Proudest Work 💅🏻
            </p>

            <div className="space-y-24 md:space-y-32">
              {projects.map((project, i) => (
                <div
                  key={project.title}
                  className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center"
                >
                  {/* Video / media — left on even, right on odd */}
                  <div className={i % 2 === 1 ? "md:order-2" : ""}>
                    <div className="aspect-video bg-[var(--color-jz-border)] rounded-sm overflow-hidden">
                      {project.video ? (
                        <video
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover"
                        >
                          <source src={project.video} type="video/mp4" />
                        </video>
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <span className="font-display text-xl font-bold text-[var(--color-jz-text-muted)]">
                            {project.title}
                          </span>
                        </div>
                      )}
                    </div>
                    {project.note && (
                      <p className="font-body text-xs text-[var(--color-jz-text-muted)] mt-2 italic">
                        👋🏼 {project.note}
                      </p>
                    )}
                  </div>

                  {/* Text — right on even, left on odd */}
                  <div className={i % 2 === 1 ? "md:order-1" : ""}>
                    <p className="font-body text-xs uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-3">
                      {project.label}
                    </p>
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-jz-text)] mb-3 leading-tight">
                      {project.title}
                    </h2>
                    <p className="font-body text-sm text-[var(--color-jz-text-muted)] mb-5 tracking-wide">
                      {project.tags}
                    </p>
                    <p className="font-body text-base text-[var(--color-jz-text-secondary)] leading-relaxed mb-8">
                      {project.description}
                    </p>
                    <Link
                      href={project.href}
                      className="inline-block font-body text-sm font-semibold px-6 py-3 border border-[var(--color-jz-text)] text-[var(--color-jz-text)] hover:bg-[var(--color-jz-text)] hover:text-[var(--color-jz-bg)] transition-colors duration-200"
                    >
                      {project.cta} →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

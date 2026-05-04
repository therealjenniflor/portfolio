import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/portfolio/Nav";
import Footer from "@/components/portfolio/Footer";
import CaseStudyNav from "@/components/portfolio/CaseStudyNav";

export const metadata: Metadata = {
  title: "Deposit Threshold — JZ",
  description:
    "Making deposit requirements clear across POS and customer-facing displays at Global Payments.",
};

const roleCards = [
  {
    title: "Systems Thinking",
    body: "Created a unified design across multiple touchpoints, ensuring logic parity and predictable interactions between cashier-facing tools and admin settings. Established scalable patterns for error handling and validation.",
  },
  {
    title: "Design Ownership",
    body: "Led the UX and visual direction for the deposit threshold feature across POS and configuration dashboards. Focused on simplifying logic-heavy workflows while maintaining consistency, accessibility, and data accuracy.",
  },
  {
    title: "Cross-Functional Collaboration",
    body: "Partnered directly with the product manager to translate development requirements into a cohesive, user-friendly experience. Focused on ensuring the new threshold information is integrated seamlessly into the existing modal and CFD flows without increasing visual clutter.",
  },
  {
    title: "Execution Oversight",
    body: "Delivered high-fidelity prototypes and specs for both modal and in-flow interactions. Partnered with engineers to align on behavior logic and ensure smooth implementation of threshold limits and summary states.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Component & Pattern Review",
    body: "Reviewed the current product to identify similar existing components or UI patterns across other verticals. Collaborated briefly with other lead designers to ensure alignment and prevent duplicate work, maintaining design system integrity and scalability.",
  },
  {
    number: "02",
    title: "Design Ownership",
    body: "Led UX and visual design for the deposit threshold feature across POS and CFD. Created high-fidelity prototypes and interaction flows that balanced clarity with technical feasibility, ensuring consistent user experiences across both touchpoints.",
  },
  {
    number: "03",
    title: "Cross Functional Collaboration",
    body: "Partnered directly with the product manager to interpret business requirements and market insights. Maintained open communication with engineers to validate design feasibility and ensure accurate implementation of threshold logic.",
  },
  {
    number: "04",
    title: "Strategic Adjustments",
    body: "Adapted designs in real-time based on evolving requirements and stakeholder feedback. Streamlined visual hierarchy to surface the deposit requirement without clutter, and standardized messaging for easier associate training and customer understanding.",
  },
];

const beforeProblems = [
  {
    label: "1. Main POS",
    issue: "Hidden Deposit Requirements",
    image: null, // drop in POS1.png
  },
  {
    label: "2. Main POS › Payment Modal",
    issue: "Deposit amount disappears",
    image: null, // drop in POS.png
  },
];

const whyProblemPOS = [
  { bold: "Slowed transactions", rest: " – extra navigation during checkout created delays, especially during peak hours" },
  { bold: "Increased errors", rest: " – higher risk of associates collecting the wrong deposit amount" },
  { bold: "Reduced transparency", rest: " – customers were not informed about the deposit requirement unless told verbally" },
  { bold: "Inconsistent experience", rest: " – threshold information was available in some parts of the POS but disappeared in others" },
];

const whyProblemCFD = [
  { bold: "Lack of transparency", rest: " – Customers had no visual confirmation of the minimum deposit needed to proceed" },
  { bold: "Increased reliance on verbal explanation", rest: " – Slowed transactions and risked miscommunication" },
  { bold: "Missed opportunity for self-service clarity", rest: " – Customers couldn't verify requirements on their own" },
  { bold: "Inconsistent UX", rest: " – POS had threshold info in some areas, but the CFD never displayed it" },
];

const businessGoals = [
  { bold: "Persist threshold information in the", rest: " payment modal and customer-facing display (CFD)" },
  { bold: "Minimize navigation", rest: " between screens for store associates" },
  { bold: "Increase transparency for customers", rest: " during transactions" },
  { bold: "Maintain consistent messaging across", rest: " POS and admin tools" },
  { bold: "Support faster training", rest: " and onboarding for new associates" },
];

const reflectionCols = [
  {
    label: "How I grew",
    points: [
      "Strengthened my ability to identify reusable components, reducing design and development time.",
      "Improved cross-vertical collaboration by consulting other lead designers to avoid duplicating work.",
      "Gained confidence in making quick, strategic decisions that balance speed with long-term scalability.",
    ],
  },
  {
    label: "What I learned",
    points: [
      "Reusing proven UI patterns maintains consistency and reduces user learning curves.",
      "Cross-team alignment early on prevents wasted effort and ensures cohesive product experiences.",
      "Even small, strategic reuse efforts can have a big impact on delivery speed and engineering efficiency.",
    ],
  },
  {
    label: "What I'd do differently",
    points: [
      "Integrate earlier feedback from engineers to uncover constraints sooner.",
      "Explore more potential reuse opportunities across other verticals before locking designs.",
      "Conduct quick usability checks to confirm reused components still fit the new context without friction.",
    ],
  },
];

// Shared placeholder for missing screenshots
function ImgPlaceholder({ label }: { label: string }) {
  return (
    <div className="w-full aspect-video bg-[var(--color-jz-border)] rounded-sm flex items-center justify-center">
      <span className="font-body text-sm text-[var(--color-jz-text-muted)] italic">{label}</span>
    </div>
  );
}

const sections = [
  { id: "hero", label: "Overview" },
  { id: "callout", label: "Callout" },
  { id: "problem", label: "Problem" },
  { id: "goals", label: "Goals" },
  { id: "role", label: "My Role" },
  { id: "process", label: "Process" },
  { id: "before", label: "Before" },
  { id: "solution-bridge", label: "Solution" },
  { id: "final-designs", label: "Final Designs" },
  { id: "reflection", label: "Reflection" },
];

export default function DepositThresholdPage() {
  return (
    <>
      <Nav />
      <CaseStudyNav sections={sections} />
      <main>

        {/* ─── Hero ─── */}
        <section id="hero" className="bg-[var(--color-jz-bg)] px-6 md:px-10 pt-16 pb-20 md:pt-24 md:pb-28">
          <div className="max-w-[1500px] mx-auto">
            <p className="font-body text-sm uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-4">
              <strong>Global Payments</strong> • Admin Tooling • Systems Thinking • Scalable Workflows
            </p>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-[var(--color-jz-text)] leading-tight mb-8 max-w-4xl">
              Making Deposit Requirements Clear
            </h1>
            <p className="font-body text-xl md:text-2xl text-[var(--color-jz-text-secondary)] max-w-3xl leading-relaxed mb-4">
              Across POS and customer-facing displays (CFD).
            </p>
            <p className="font-body text-xs text-[var(--color-jz-text-muted)] italic mb-12">
              * Best viewed on desktop
            </p>
            <p className="font-body text-sm text-[var(--color-jz-text-muted)] italic max-w-2xl">
              Due to Non-Disclosure Agreements, specific details and visuals from this project are omitted to maintain confidentiality.
            </p>
          </div>
        </section>

        {/* ─── Callout ─── */}
        <section id="callout" className="bg-[var(--color-jz-surface)] px-6 md:px-10 py-16 md:py-24">
          <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 items-start">
            <div>
              <p className="font-body text-sm uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-3">
                The Insight
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-jz-text)] leading-tight mb-4">
                Persistent Deposit Visibility
              </h2>
              <p className="font-body text-base text-[var(--color-jz-text-secondary)] leading-relaxed">
                A tiny tweak, a massive impact. By reusing a proven component, we made the flow effortless
                for merchants and seamless for customers, proof that the simplest UI changes can drive the biggest wins.
              </p>
            </div>
            <div>
              <Image
                src="/images/hero-image.png"
                alt="Deposit Threshold  -  Hero"
                width={0}
                height={0}
                sizes="(max-width: 768px) 100vw, 60vw"
                style={{ width: "100%", height: "auto" }}
                className="rounded-sm"
                unoptimized
              />
            </div>
          </div>
        </section>

        {/* ─── The Problemo ─── */}
        <section id="problem" className="bg-[var(--color-jz-bg)] px-6 md:px-10 py-16 md:py-24">
          <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start border-t border-[var(--color-jz-border)] pt-12">
            <div>
              <p className="font-body text-sm uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-3">
                The Problem
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--color-jz-text)] leading-tight mb-8">
                The Problemo
              </h2>
            </div>
            <div>
              <p className="font-body text-lg text-[var(--color-jz-text-secondary)] leading-relaxed">
                The threshold amount was only visible on the main layaway screen, disappearing when the
                payment modal was opened. This{" "}
                <strong className="text-[var(--color-jz-text)]">forced</strong> sales associates to{" "}
                <strong className="text-[var(--color-jz-text)]">navigate back</strong> to the invoice
                screen to confirm amounts,{" "}
                <strong className="text-[var(--color-jz-text)]">adding friction</strong>,{" "}
                <strong className="text-[var(--color-jz-text)]">increasing the chance of error</strong>,
                and <strong className="text-[var(--color-jz-text)]">slowing checkout</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* ─── Business Goals + My Plan ─── */}
        <section id="goals" className="bg-[var(--color-jz-surface)] px-6 md:px-10 py-16 md:py-24">
          <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Business Goals */}
            <div>
              <p className="font-body text-sm uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-3">
                Goals
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-jz-text)] mb-8 leading-tight">
                Business Goals
              </h2>
              <p className="font-body text-lg text-[var(--color-jz-text-secondary)] leading-relaxed mb-8">
                Ensure deposit requirements were visible at every step of the layaway payment process to
                reduce transaction errors, improve checkout efficiency, and maintain policy compliance
                across stores.
              </p>
              <ul className="space-y-4">
                {businessGoals.map((g, i) => (
                  <li key={i} className="flex gap-3 font-body text-base text-[var(--color-jz-text-secondary)]">
                    <span className="mt-1 text-[var(--color-jz-text-muted)] shrink-0">→</span>
                    <span><strong className="text-[var(--color-jz-text)]">{g.bold}</strong>{g.rest}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* My Plan */}
            <div className="border-l border-[var(--color-jz-border)] pl-16">
              <p className="font-body text-sm uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-3">
                Strategy
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-jz-text)] mb-8 leading-tight">
                My Plan
              </h2>
              <p className="font-body text-lg text-[var(--color-jz-text-secondary)] leading-relaxed mb-8">
                Create a frictionless deposit experience by making the layaway threshold amount visible at
                every step of the transaction. This included adding a clear, persistent banner in the
                payment modal and mirroring the information on the customer-facing display.
              </p>
              <p className="font-body text-sm uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-4">
                Basically:
              </p>
              <ul className="space-y-3">
                {["Reducing navigation", "Preventing errors", "Increasing transparency for both associates and customers"].map((item) => (
                  <li key={item} className="flex gap-3 font-body text-base text-[var(--color-jz-text-secondary)]">
                    <span className="shrink-0 text-[var(--color-jz-text-muted)]">·</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ─── My Role ─── */}
        <section id="role" className="bg-[var(--color-jz-bg)] px-6 md:px-10 py-16 md:py-24">
          <div className="max-w-[1500px] mx-auto">
            <p className="font-body text-sm uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-3">
              My Role
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--color-jz-text)] mb-6 leading-tight">
              Lead Designer
            </h2>
            <p className="font-body text-lg text-[var(--color-jz-text-secondary)] max-w-3xl leading-relaxed mb-12">
              As the sole designer, I partnered with the product manager to lead the UX and visual design
              for the deposit threshold feature, ensuring the minimum deposit amount was visible in both
              the payment modal and customer-facing display. I iterated quickly based on stakeholder
              feedback, focusing on clarity, consistency, and a seamless engineering handoff.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {roleCards.map((card) => (
                <div
                  key={card.title}
                  className="border border-[var(--color-jz-border)] p-8 bg-[var(--color-jz-surface)] rounded-sm"
                >
                  <h3 className="font-display text-xl font-bold text-[var(--color-jz-text)] mb-3">
                    {card.title}
                  </h3>
                  <p className="font-body text-base text-[var(--color-jz-text-secondary)] leading-relaxed">
                    {card.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── My Process ─── */}
        <section id="process" className="bg-[var(--color-jz-surface)] px-6 md:px-10 py-16 md:py-24">
          <div className="max-w-[1500px] mx-auto">
            <p className="font-body text-sm uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-3">
              Process
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--color-jz-text)] mb-12 leading-tight">
              My Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--color-jz-border)]">
              {processSteps.map((step) => (
                <div
                  key={step.number}
                  className="bg-[var(--color-jz-surface)] p-10"
                >
                  <span className="font-display text-5xl font-bold text-[#e8d99a] block mb-4 leading-none">
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

        {/* ─── Before Pictures ─── */}
        <section id="before" className="bg-[var(--color-jz-bg)] px-6 md:px-10 py-16 md:py-24">
          <div className="max-w-[1500px] mx-auto">
            <p className="font-body text-sm uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-3">
              The Before
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--color-jz-text)] mb-3 leading-tight">
              Before Pictures
            </h2>
            <p className="font-body text-sm text-[var(--color-jz-text-muted)] italic mb-16">
              Identifying Opportunity Areas
            </p>

            {/* Hidden Deposit Requirements */}
            <div className="mb-20 md:mb-28">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-[var(--color-jz-text)] mb-4">
                Hidden Deposit Requirements
              </h3>
              <p className="font-body text-lg text-[var(--color-jz-text-secondary)] leading-relaxed mb-10">
                In the previous design, the minimum deposit threshold was not visible within the payment
                modal. Sales associates had to leave the modal and return to the invoice screen to confirm
                the amount.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div>
                  <p className="font-body text-xs uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-3">1. Main POS</p>
                  <Image src="/images/pos1.png" alt="Main POS screen" width={0} height={0} sizes="50vw" style={{ width: "100%", height: "auto" }} className="rounded-sm" unoptimized />
                </div>
                <div>
                  <p className="font-body text-xs uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-3">2. Main POS › Payment Modal</p>
                  <Image src="/images/pos.png" alt="Payment Modal" width={0} height={0} sizes="50vw" style={{ width: "100%", height: "auto" }} className="rounded-sm" unoptimized />
                </div>
              </div>
              <h4 className="font-display text-2xl md:text-3xl font-bold text-[var(--color-jz-text)] mb-6">
                Why was Payment Modal a problem?
              </h4>
              <ul className="space-y-5">
                {whyProblemPOS.map((item, i) => (
                  <li key={i} className="flex gap-3 font-body text-lg text-[var(--color-jz-text-secondary)]">
                    <span className="shrink-0 text-[var(--color-jz-text-muted)] mt-1">·</span>
                    <span><strong className="text-[var(--color-jz-text)]">{item.bold}</strong>{item.rest}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Info Hidden from the Customer */}
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-[var(--color-jz-text)] mb-4">
                Info Hidden from the Customer
              </h3>
              <p className="font-body text-lg text-[var(--color-jz-text-secondary)] leading-relaxed mb-4">
                In the previous design, the Customer-Facing Display (CFD) only showed the total due. The
                required deposit threshold amount was not surfaced, leaving customers unaware of the
                payment requirement unless verbally explained by the associate.
              </p>
              <p className="font-body text-xs uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-4">
                The Client-Facing Display (CFD)
              </p>
              <div className="flex justify-center mb-12">
                <Image src="/images/info-hidden.png" alt="Client-Facing Display before state" width={0} height={0} sizes="60vw" style={{ width: "60%", height: "auto" }} className="rounded-sm" unoptimized />
              </div>
              <h4 className="font-display text-2xl md:text-3xl font-bold text-[var(--color-jz-text)] mb-6">
                Why was the CFD a problem?
              </h4>
              <ul className="space-y-5">
                {whyProblemCFD.map((item, i) => (
                  <li key={i} className="flex gap-3 font-body text-lg text-[var(--color-jz-text-secondary)]">
                    <span className="shrink-0 text-[var(--color-jz-text-muted)] mt-1">·</span>
                    <span><strong className="text-[var(--color-jz-text)]">{item.bold}</strong>{item.rest}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ─── Solution Bridge ─── */}
        <section id="solution-bridge" className="bg-[var(--color-jz-surface)] px-6 md:px-10 py-16 md:py-24">
          <div className="max-w-[1500px] mx-auto space-y-24">

            {/* Row 1  -  image left, text right */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <Image
                src="/images/reuse-repurpose.png"
                alt="Finding the opportunity  -  existing POS component"
                width={0} height={0} sizes="50vw"
                style={{ width: "100%", height: "auto" }}
                className="rounded-sm"
                unoptimized
              />
              <div>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-[#c8823c] mb-4">
                  Finding the opportunity
                </h3>
                <p className="font-body text-lg text-[var(--color-jz-text-secondary)] leading-relaxed">
                  While reviewing the existing POS flow, I noticed we already had a clear, user-friendly
                  payment component. Instead of creating something entirely new, I proposed adapting it
                  for the deposit flow, saving weeks of design and dev work.
                </p>
              </div>
            </div>

            {/* Row 2  -  text left, image right */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="md:order-1">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-[#c8823c] mb-4">
                  Applying the Solution
                </h3>
                <p className="font-body text-lg text-[var(--color-jz-text-secondary)] leading-relaxed">
                  I worked closely with other lead designers to confirm no similar UI existed in other
                  verticals, ensuring we weren&apos;t duplicating efforts. This allowed engineering to
                  reuse patterns, keep behavior consistent, and speed up the handoff-to-build process.
                </p>
              </div>
              <Image
                src="/images/applying-solution.png"
                alt="Applying the solution  -  deposit modal"
                width={0} height={0} sizes="50vw"
                style={{ width: "100%", height: "auto" }}
                className="rounded-sm md:order-2"
                unoptimized
              />
            </div>

          </div>
        </section>

        {/* ─── Final / After Designs ─── */}
        <section id="final-designs" className="bg-[var(--color-jz-bg)] px-6 md:px-10 py-16 md:py-24">
          <div className="max-w-[1500px] mx-auto">
            <p className="font-body text-sm uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-3">
              The Solution
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--color-jz-text)] mb-6 leading-tight">
              Making Deposit Requirements Crystal Clear
            </h2>
            <p className="font-body text-lg text-[var(--color-jz-text-secondary)] max-w-3xl leading-relaxed mb-16">
              Ensure associates and customers stay aligned during checkout by surfacing the minimum deposit
              requirement across the payment modal and customer-facing display. This creates a seamless,
              transparent flow that{" "}
              <strong className="text-[var(--color-jz-text)]">
                reduces errors, speeds transactions, and builds trust
              </strong>.
            </p>

            {/* What the Cashier sees */}
            <div className="mb-16">
              <h3 className="font-display text-2xl font-bold text-[var(--color-jz-text)] mb-6">
                What the Cashier sees
              </h3>
              <Image
                src="/images/cashier-sees.png"
                alt="Final design  -  cashier view"
                width={0} height={0} sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                className="rounded-sm"
                unoptimized
              />
            </div>

            {/* What the Customer sees */}
            <div>
              <h3 className="font-display text-2xl font-bold text-[var(--color-jz-text)] mb-6">
                What the Customer sees
              </h3>
              <Image
                src="/images/customer-sees.png"
                alt="Final design  -  customer-facing display"
                width={0} height={0} sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                className="rounded-sm"
                unoptimized
              />
            </div>
          </div>
        </section>

        {/* ─── Reflection ─── */}
        <section id="reflection" className="bg-[#1a130a] overflow-hidden py-16 md:py-24">
          <div className="overflow-hidden mb-14 cursor-default select-none" title="Hover to pause">
            <div className="marquee-track flex whitespace-nowrap">
              {[0, 1].map((n) => (
                <span key={n} className="flex shrink-0 items-center font-display text-5xl md:text-6xl font-bold text-[#f5f0e8]">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <span key={i} className="inline-flex items-center gap-4 mr-4">
                      <span>Reflection</span>
                      <svg viewBox="0 0 100 100" className="w-8 h-8 shrink-0 fill-[#f5f0e8]" xmlns="http://www.w3.org/2000/svg">
                        {[0,60,120,180,240,300].map((deg) => (
                          <ellipse key={deg} cx="50" cy="26" rx="11" ry="18" transform={`rotate(${deg} 50 50)`}/>
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
              {reflectionCols.map((col) => (
                <div key={col.label}>
                  <div className="inline-block border border-[#e8c84a] bg-[#f5f0e8] text-[#1a130a] font-display font-medium text-sm px-6 py-3 mb-8 rounded-sm">
                    {col.label}
                  </div>
                  <ul className="space-y-4 text-[#c8bfb0] font-body text-sm leading-relaxed list-none">
                    {col.points.map((pt, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="mt-1 shrink-0 text-[#8a7a60]">·</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
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

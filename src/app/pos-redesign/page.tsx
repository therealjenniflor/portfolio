import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/portfolio/Nav";
import Footer from "@/components/portfolio/Footer";

export const metadata: Metadata = {
  title: "Checkout Flow Redesign — JZ",
  description:
    "Reimagining the restaurant checkout experience at Global Payments to reduce tip drop-offs and improve customer engagement.",
};

const roleDetails = [
  {
    title: "Team Delegation",
    body: "Managed weekly design timelines and assigned tasks based on team strengths.",
  },
  {
    title: "Design Ownership",
    body: 'Led visual and UX direction of the POS flow, ensuring clarity, consistency, and responsiveness across the new 13" customer-facing screen.',
  },
  {
    title: "Cross-Functional Communication",
    body: "Partnered across departments for easier integration with other data sources.",
  },
  {
    title: "Execution Oversight",
    body: "Delivered high-fidelity prototypes and partnered with engineers for accurate implementation.",
  },
];

const problems = [
  {
    title: "Missed Revenue Opportunities",
    body: "Since tipping and reviews weren't surfaced upfront, users often skipped them altogether, leading to fewer completed interactions and reduced tip volume.",
    image: "/images/missed.gif",
  },
  {
    title: "Mismatched Button Priority",
    body: "The call-to-action lacked proper hierarchy. Button styling unintentionally signaled finality rather than guiding continuation, causing confusion.",
    image: "/images/mismatched.gif",
  },
  {
    title: "Confusion meant Drop-offs",
    body: "The screen advanced only after a user tapped, with no indicators that more steps would follow, causing customers to believe the interaction was complete after the first screen.",
    image: "/images/dropoff.gif",
  },
];

const research = [
  {
    title: "Competitive Analysis",
    body: "Researched leading restaurant POS platforms to benchmark UX patterns, pricing structures, and feature gaps.",
  },
  {
    title: "Customer Journey Mapping",
    body: "Mapped merchant onboarding and ordering workflows to highlight drop-off points and identify friction in the checkout experience.",
  },
  {
    title: "Insight Synthesis",
    body: "Consolidated qualitative and quantitative data into digestible insights to guide design priorities, wireframes, and product direction.",
  },
];

// ── Light warm beige palette matching pos_mockup.html embed ──
const c = {
  bg:        "bg-[#f5f0e8]",
  surface:   "bg-[#ede8e0]",
  card:      "bg-[#e4ddd3]",
  text:      "text-[#1e1509]",
  textSec:   "text-[#4a3820]",
  textMuted: "text-[#9a8060]",
  border:    "border-[#cdc5b5]",
  label:     "text-[#8a6030]",
};

export default function PosRedesignPage() {
  return (
    <>
      <Nav />
      <main className={c.bg}>

        {/* ─── Hero ─── */}
        <section className={`${c.surface} px-6 md:px-10 pt-16 pb-12 md:pt-24 md:pb-16`}>

          {/* Label + Title — left-aligned, above embed */}
          <div className="max-w-[1500px] mx-auto mb-10">
            <p className={`font-body text-sm uppercase tracking-widest ${c.label} mb-4`}>
              <span className="font-bold">Global Payments</span>
              {" • UX Enhancement • Leadership • Prototype"}
            </p>
            <h1 className={`font-display text-5xl md:text-7xl font-bold ${c.text} leading-tight`}>
              Reimagining the Restaurant<br className="hidden md:block" /> Checkout Experience
            </h1>
          </div>

          {/* Embedded mockup */}
          <div className="max-w-[1500px] mx-auto mb-12">
            <iframe
              src="/pos_mockup.html"
              title="Checkout Flow Redesign — Interactive Demo"
              className="w-full rounded-sm"
              style={{ height: "580px", border: "none" }}
            />
          </div>

          {/* Text below embed — centered */}
          <div className="max-w-[1500px] mx-auto text-center">
            <p className={`font-body text-xl md:text-2xl ${c.textSec} mb-4`}>
              &ldquo;Tips Were Dropping — eeeek!&rdquo;
            </p>
            <p className={`font-body text-lg md:text-xl font-semibold ${c.text} mb-8`}>
              So We Redesigned the Moment That Matters
            </p>
            <p className={`font-body text-sm ${c.textMuted} italic max-w-2xl mx-auto`}>
              Due to Non-Disclosure Agreements, specific details and visuals from this project are omitted to maintain confidentiality.
            </p>
          </div>
        </section>

        {/* ─── Overview ─── */}
        <section className={`${c.surface} px-6 md:px-10 py-16 md:py-24`}>
          <div className={`max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 border-t ${c.border} pt-12`}>
            <div>
              <p className={`font-body text-sm uppercase tracking-widest ${c.label} mb-3`}>
                Business Goal
              </p>
              <p className={`font-body text-lg ${c.textSec} leading-relaxed`}>
                Global Payments aimed to improve the tipping experience in{" "}
                <span className={`font-semibold ${c.text} italic`}>Genius</span>{" "}
                by{" "}
                <span className={`font-semibold ${c.text}`}>reducing drop-offs during checkout.</span>{" "}
                Customers often walked away mid-flow, leading to lost tips and reviews. The redesigned
                display focused on speed, clarity, and{" "}
                <span className={`font-semibold ${c.text}`}>keeping users engaged through the full transaction.</span>
              </p>
            </div>
            <div>
              <p className={`font-body text-sm uppercase tracking-widest ${c.label} mb-3`}>
                My Plan
              </p>
              <p className={`font-body text-lg ${c.textSec} leading-relaxed`}>
                Create a{" "}
                <span className={`font-semibold ${c.text}`}>frictionless journey,</span>{" "}
                encouraging users to complete the flow and leave a tip.
              </p>
            </div>
          </div>
        </section>

        {/* ─── My Role ─── */}
        <section className={`${c.bg} px-6 md:px-10 py-16 md:py-24`}>
          <div className="max-w-[1500px] mx-auto">
            <p className={`font-body text-sm uppercase tracking-widest ${c.label} mb-3`}>
              My Role
            </p>
            <h2 className={`font-display text-4xl md:text-5xl font-bold ${c.text} mb-12 leading-tight`}>
              Lead Designer
            </h2>
            <p className={`font-body text-lg ${c.textSec} max-w-3xl leading-relaxed mb-12`}>
              As the lead designer for the customer display redesign, I owned the end-to-end design
              process, collaborated across teams, and drove strategic decisions shaping the product
              experience from concept to delivery.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {roleDetails.map((item) => (
                <div
                  key={item.title}
                  className={`border ${c.border} p-8 ${c.card} rounded-sm`}
                >
                  <h3 className={`font-display text-xl font-bold ${c.text} mb-3`}>
                    {item.title}
                  </h3>
                  <p className={`font-body text-base ${c.textSec} leading-relaxed`}>
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Before the Glow Up ─── */}
        <section className={`${c.surface} px-6 md:px-10 py-16 md:py-24`}>
          <div className="max-w-[1500px] mx-auto">
            <p className={`font-body text-sm uppercase tracking-widest ${c.label} mb-3`}>
              The Problem
            </p>
            <h2 className={`font-display text-4xl md:text-5xl font-bold ${c.text} mb-6 leading-tight`}>
              Before the Glow Up
            </h2>
            <p className={`font-body text-lg ${c.textSec} max-w-2xl leading-relaxed mb-4 italic`}>
              &ldquo;The original flow displayed only one screen at a time, causing confusion about what came next.&rdquo;
            </p>
            <h3 className={`font-display text-2xl font-bold ${c.text} mb-10`}>
              Identifying Drop-Off Triggers and Opportunity Areas
            </h3>

            <div className="space-y-16 md:space-y-20">
              {problems.map((item, i) => {
                const isOdd = i % 2 === 1;
                return (
                  <div
                    key={item.title}
                    className="grid grid-cols-1 gap-10 md:gap-16 items-center"
                    style={{ gridTemplateColumns: isOdd ? "55% 45%" : "45% 55%" }}
                  >
                    {/* Image — circular */}
                    <div className={`flex items-center justify-center ${isOdd ? "md:order-2" : ""}`}>
                      <div className="rounded-full overflow-hidden aspect-square w-full max-w-sm">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={0}
                          height={0}
                          sizes="(max-width: 768px) 80vw, 30vw"
                          style={{ width: "100%", height: "100%", objectFit: "cover" }}
                          unoptimized
                        />
                      </div>
                    </div>
                    {/* Text */}
                    <div className={isOdd ? "md:order-1" : ""}>
                      <h4 className={`font-display text-2xl md:text-3xl font-bold ${c.text} mb-5`}>
                        {item.title}
                      </h4>
                      <p className={`font-body text-lg md:text-xl ${c.textSec} leading-relaxed`}>
                        {item.body}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── Research ─── */}
        <section className={`${c.bg} px-6 md:px-10 py-16 md:py-24`}>
          <div className="max-w-[1500px] mx-auto">
            <p className={`font-body text-sm uppercase tracking-widest ${c.label} mb-3`}>
              Research Phase
            </p>
            <h2 className={`font-display text-4xl md:text-5xl font-bold ${c.text} mb-4 leading-tight`}>
              Research &amp; Analysis
            </h2>
            <p className={`font-body text-sm ${c.textMuted} italic mb-12`}>
              Research and analysis under NDA
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24 md:mb-32">
              {research.map((item) => (
                <div
                  key={item.title}
                  className={`border ${c.border} p-8 ${c.card} rounded-sm`}
                >
                  <h3 className={`font-display text-xl font-bold ${c.text} mb-3`}>
                    {item.title}
                  </h3>
                  <p className={`font-body text-base ${c.textSec} leading-relaxed`}>
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
            {/* Persona */}
            <div>
              <h3 className={`font-display text-3xl md:text-4xl font-bold ${c.text} mb-4`}>
                Leveraging Internal Insights
              </h3>
              <p className={`font-body text-lg ${c.textSec} leading-relaxed mb-10 max-w-3xl`}>
                During this phase, we referenced our main target audience, drawn from client feedback,
                internal team knowledge, and industry context. This helped us validate key needs and
                behaviors without requiring new interviews.
              </p>
              <Image
                src="/images/persona-doc.webp"
                alt="User Persona — Alex Torres"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                className="rounded-sm"
                unoptimized
              />
            </div>
          </div>
        </section>

        {/* ─── My Process ─── */}
        <section className={`${c.surface} px-6 md:px-10 py-16 md:py-24`}>
          <div className="max-w-[1500px] mx-auto">
            <h2 className={`font-display text-4xl md:text-5xl font-bold ${c.text} mb-12 text-center`}>
              My Process
            </h2>
            <div className={`divide-y ${c.border} border-t border-b ${c.border} max-w-4xl mx-auto`}>

              <details open className="group py-0">
                <summary className={`flex items-center justify-between py-6 cursor-pointer list-none`}>
                  <span className={`font-body text-lg md:text-xl font-semibold ${c.text}`}>
                    Team Structuring &amp; Delegation
                  </span>
                  <span className={`flex-shrink-0 w-8 h-8 flex items-center justify-center ${c.textMuted} group-open:rotate-180 transition-transform duration-200`}>
                    ▾
                  </span>
                </summary>
                <div className={`pb-8 pr-4 font-body text-base ${c.textSec} leading-relaxed`}>
                  <p className="mb-3">To meet our tight four-week timeline, I focused on:</p>
                  <ul className="space-y-2 list-disc list-inside">
                    <li><strong className={c.text}>Organizing the design workflow</strong> based on <strong className={c.text}>team strengths</strong>.</li>
                    <li><strong className={c.text}>Delegating</strong> the lower-risk login flow to a junior designer, while a fellow senior designer and I focused on the overall UX and branding.</li>
                  </ul>
                </div>
              </details>

              <details open className="group py-0">
                <summary className={`flex items-center justify-between py-6 cursor-pointer list-none`}>
                  <span className={`font-body text-lg md:text-xl font-semibold ${c.text}`}>
                    Design Ownership
                  </span>
                  <span className={`flex-shrink-0 w-8 h-8 flex items-center justify-center ${c.textMuted} group-open:rotate-180 transition-transform duration-200`}>
                    ▾
                  </span>
                </summary>
                <div className={`pb-8 pr-4 font-body text-base ${c.textSec} leading-relaxed`}>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>I led the end-to-end design and prototyping of the core customer-facing flow, while my teammate contributed to brand alignment, visuals, and UX refinement.</li>
                  </ul>
                </div>
              </details>

              <details open className="group py-0">
                <summary className={`flex items-center justify-between py-6 cursor-pointer list-none`}>
                  <span className={`font-body text-lg md:text-xl font-semibold ${c.text}`}>
                    Cross Functional Collaboration
                  </span>
                  <span className={`flex-shrink-0 w-8 h-8 flex items-center justify-center ${c.textMuted} group-open:rotate-180 transition-transform duration-200`}>
                    ▾
                  </span>
                </summary>
                <div className={`pb-8 pr-4 font-body text-base ${c.textSec} leading-relaxed`}>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>
                      I helped plan and lead recurring syncs with PMs to gather and clarify requirements and product feedback
                      <ul className="mt-2 ml-6 space-y-1 list-disc list-inside">
                        <li>This allowed us to quickly align on priorities and iterate with speed and intention</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </details>

              <details open className="group py-0">
                <summary className={`flex items-center justify-between py-6 cursor-pointer list-none`}>
                  <span className={`font-body text-lg md:text-xl font-semibold ${c.text}`}>
                    Strategic Adjustments
                  </span>
                  <span className={`flex-shrink-0 w-8 h-8 flex items-center justify-center ${c.textMuted} group-open:rotate-180 transition-transform duration-200`}>
                    ▾
                  </span>
                </summary>
                <div className={`pb-8 pr-4 font-body text-base ${c.textSec} leading-relaxed`}>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>
                      I made sure we were all utilizing our time intentionally
                      <ul className="mt-2 ml-6 space-y-1 list-disc list-inside">
                        <li>Midway through the sprint, <strong className={c.text}>I proposed</strong> shifting from twice-weekly meetings to weekly check-ins with PMs.
                          <ul className="mt-2 ml-6 space-y-1 list-disc list-inside">
                            <li>This gave the design team more heads-down time while maintaining alignment and momentum.</li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </details>

            </div>
          </div>
        </section>

        {/* ─── Prototype / Video ─── */}
        <section className={`${c.surface} px-6 md:px-10 py-16 md:py-24`}>
          <div className="max-w-[1500px] mx-auto">
            <p className={`font-body text-sm uppercase tracking-widest ${c.label} mb-3`}>
              The Prototype
            </p>
            <h2 className={`font-display text-4xl md:text-5xl font-bold ${c.text} mb-10 leading-tight`}>
              See It in Action
            </h2>
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full rounded-sm"
            >
              <source src="/checkoutflow.mp4" type="video/mp4" />
            </video>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/portfolio/Nav";
import Footer from "@/components/portfolio/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Multi-Location Access | JZ",
  description:
    "Designing a unified multi-account experience for restaurant merchants managing multiple restaurants under one login at Global Payments.",
};

const painPoints = [
  {
    number: "01",
    title: "Separate Logins Per Restaurant",
    body: "Merchants owning 3 or more restaurants had to maintain separate credentials for each, creating friction and security risk.",
  },
  {
    number: "02",
    title: "No Mid-Session Account Switching",
    body: "Once logged into a single account, there was no way to navigate to another company without fully logging out and back in, killing operational momentum.",
  },
  {
    number: "03",
    title: "All-or-Nothing User Permissions",
    body: "The New User modal only supported a single location. There was no way to scope staff across multiple accounts or assign granular access per company.",
  },
];

const solutions = [
  {
    label: "Account and Location Switcher",
    title: "All Your Concepts, One Dropdown",
    bullets: [
      "Persistent Account + Locations selector in the top nav lets operators filter the entire portal view by restaurant or location",
      "Dropdown exposes all associated accounts: Downtown Diner, JZ Tacos, Pizza Palace, without leaving the current page",
      "Selecting a specific account scopes the admin experience to that restaurant instantly",
    ],
    image: "/images/multi_location/multi-location-dashboard/Account + Locations _ Dropdown.png",
    imageAlt: "Account dropdown open showing Downtown Diner, JZ Tacos, and Pizza Palace alongside the Locations selector",
    textLeft: true,
  },
  {
    label: "Scoped Restaurant View",
    title: "Switch to a Restaurant and Stay in Context",
    bullets: [
      "Selecting JZ Tacos from the Account dropdown scopes the portal entirely to that restaurant's locations",
      "Location dropdown surfaces all JZ Tacos locations: DOCO, Lindon, SOHO, for precise filtering",
      "The top nav always reflects the active account, so operators know exactly where they are",
    ],
    image: "/images/multi_location/multi-location-dashboard/All Locations.png",
    imageAlt: "Admin portal with JZ Tacos selected, showing its specific locations in the dropdown",
    textLeft: false,
  },
  {
    label: "New User Modal Redesign",
    title: "Granular Access, Finally",
    bullets: [
      "Redesigned New User modal supports account-level assignment with chained Account, Location, and Permissions selects",
      "Staff can be scoped to one account, multiple accounts, or all accounts from a single flow",
      "Admins can add another account row or remove access per account without touching other assignments",
    ],
    image: "/images/multi_location/desktop_newuser_modal.png",
    imageAlt: "Redesigned New User modal showing multi-step account and permission assignment",
    textLeft: true,
  },
];

const reflection = [
  {
    tag: "How I grew",
    items: [
      <>I learned to design for <strong className="text-[#f5f0e8]">permission hierarchy</strong>, thinking in layers of access rather than simple on/off toggles.</>,
      <>I strengthened my ability to <strong className="text-[#f5f0e8]">translate product requirements into UI decisions</strong>, mapping each business rule directly to a design pattern.</>,
      <>This project deepened my comfort with <strong className="text-[#f5f0e8]">complex form architecture</strong>: chained selects, conditional fields, and multi-row state management.</>,
    ],
  },
  {
    tag: "What I learned",
    items: [
      <>Multi-account UX demands <strong className="text-[#f5f0e8]">persistent context indicators</strong>, users need constant reinforcement of which account they&apos;re operating in.</>,
      <>When permissions stack across accounts, <strong className="text-[#f5f0e8]">validation logic is a design problem</strong> as much as an engineering one.</>,
    ],
  },
  {
    tag: "What I'd do differently",
    items: [
      <>I&apos;d push for <strong className="text-[#f5f0e8]">usability testing with actual multi-restaurant operators</strong> earlier, their mental models for account switching differ significantly from single-location staff.</>,
      <>I&apos;d explore a <strong className="text-[#f5f0e8]">bulk-assignment pattern</strong> for large restaurant groups to avoid repetitive individual user setup.</>,
    ],
  },
];

export default function MultiLocationAccessPage() {
  return (
    <>
      <Nav />
      <main className="bg-[var(--color-jz-bg)]">

        {/* Hero */}
        <section className="bg-[var(--color-jz-surface)] px-6 md:px-10 pt-16 pb-20 md:pt-24 md:pb-28">
          <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-body text-sm uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-4">
                <strong>Global Payments</strong>
                {" • Back Office • Desktop • Mobile (handheld) • 2026"}
              </p>
              <h1 className="font-display font-bold text-[var(--color-jz-text)] leading-tight mb-6">
                <span className="text-5xl md:text-7xl block">Multi-Location</span>
                <span className="text-5xl md:text-7xl block">Access</span>
                <span className="text-2xl md:text-3xl font-semibold text-[var(--color-jz-text-secondary)] block mt-2">Global Payments · 2026</span>
              </h1>
              <p className="font-body text-xl text-[var(--color-jz-text-secondary)] leading-relaxed mb-4">
                Designed the end-to-end multi-account experience for restaurant merchants managing
                multiple restaurants under one login, including an in-portal account switcher, scoped
                restaurant views, and a redesigned user assignment flow.
              </p>
              <p className="font-body text-sm text-[var(--color-jz-text-muted)] italic">
                Due to Non-Disclosure Agreements, specific details and visuals from this project are omitted to maintain confidentiality.
              </p>
            </div>
            <div className="rounded-sm overflow-hidden">
              <Image
                src="/images/multi_location/multi-location-dashboard/Accounts + Locations-1.png"
                alt="Admin portal showing All Accounts + Locations switcher in the top nav"
                width={0}
                height={0}
                sizes="50vw"
                style={{ width: "100%", height: "auto" }}
                unoptimized
              />
            </div>
          </div>
        </section>

        {/* Context */}
        <section className="bg-[var(--color-jz-bg)] px-6 md:px-10 py-16 md:py-24">
          <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-[280px_1fr] gap-12 md:gap-24 border-t border-[var(--color-jz-border)] pt-12">
            <div className="space-y-6">
              <div>
                <p className="font-body text-xs uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-1">Role</p>
                <p className="font-body text-base font-semibold text-[var(--color-jz-text)]">Lead Product Designer</p>
              </div>
              <div>
                <p className="font-body text-xs uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-1">Company</p>
                <p className="font-body text-base font-semibold text-[var(--color-jz-text)]">Global Payments</p>
              </div>
              <div>
                <p className="font-body text-xs uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-1">Year</p>
                <p className="font-body text-base font-semibold text-[var(--color-jz-text)]">2026</p>
              </div>
              <div>
                <p className="font-body text-xs uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-1">Scope</p>
                <p className="font-body text-base font-semibold text-[var(--color-jz-text)]">Admin Portal · Auth Flows · User Permissioning</p>
              </div>
            </div>
            <div>
              <p className="font-body text-lg text-[var(--color-jz-text-secondary)] leading-relaxed mb-6">
                Global Payments serves restaurant merchants managing 3 or more restaurants and their
                multiple locations under one business. Many of these operators had no way to access all
                their accounts from a single login. Multi-account access existed only for Super Admins
                and Resellers.
              </p>
              <p className="font-body text-lg text-[var(--color-jz-text-secondary)] leading-relaxed mb-6">
                This project created the UI to support non-reseller multi-account users: a persistent
                in-portal account switcher and a redesigned New User modal that lets admins assign staff
                to specific accounts and locations with granular permissions.
              </p>
              <p className="font-body text-sm text-[var(--color-jz-text-muted)]">
                Credits: Product Manager, Engineering Lead
              </p>
            </div>
          </div>
        </section>

        {/* Problem Statement */}
        <section className="bg-[var(--color-jz-surface)] px-6 md:px-10 py-16 md:py-24">
          <div className="max-w-[1500px] mx-auto">
            <p className="font-body text-sm uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-3">
              The Problem
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--color-jz-text)] mb-10 leading-tight">
              What We Were Solving
            </h2>
            <blockquote className="border-l-4 border-[var(--color-jz-accent)] pl-8 mb-16 max-w-4xl">
              <p className="font-display text-2xl md:text-3xl font-bold text-[var(--color-jz-text)] leading-snug">
                &ldquo;Our merchants are running three restaurants with three logins. That&apos;s not a workflow, that&apos;s a burden.&rdquo;
              </p>
            </blockquote>

            {/* Before image */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_340px] gap-12 md:gap-20 items-start">
              <div>
                <p className="font-body text-sm uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-4">Before</p>
                <Image
                  src="/images/multi_location/before_image.png"
                  alt="Old portal showing single-account location dropdown with no way to switch between restaurants"
                  width={0}
                  height={0}
                  sizes="(max-width: 768px) 100vw, 60vw"
                  style={{ width: "100%", height: "auto" }}
                  className="rounded-sm"
                  unoptimized
                />
              </div>
              <div className="md:pt-10 space-y-5">
                <h3 className="font-display text-xl font-bold text-[var(--color-jz-text)] leading-tight">
                  Why This Needed an Upgrade
                </h3>
                <p className="font-body text-base text-[var(--color-jz-text-secondary)] leading-relaxed">
                  The old portal&apos;s location dropdown was scoped entirely to a single account. An operator
                  could filter between locations within Downtown Diner, but had no way to jump to a
                  completely separate restaurant like JZ Tacos or Pizza Palace.
                </p>
                <p className="font-body text-base text-[var(--color-jz-text-secondary)] leading-relaxed">
                  Multi-restaurant owners were forced to log out and log back in with different credentials
                  every time they needed to switch companies, treating what should be one
                  business as completely separate systems.
                </p>
                <p className="font-body text-base text-[var(--color-jz-text-secondary)] leading-relaxed">
                  There was also no way to assign a staff member across companies. The New User modal
                  only supported a single location, making cross-restaurant team management impossible
                  without duplicating users across accounts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Business Goals */}
        <section className="bg-[var(--color-jz-bg)] px-6 md:px-10 py-16 md:py-24">
          <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 border-t border-[var(--color-jz-border)] pt-12">
            <div>
              <p className="font-body text-sm uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-3">
                Business Goal
              </p>
              <p className="font-body text-lg text-[var(--color-jz-text-secondary)] leading-relaxed">
                Enable restaurant owners managing{" "}
                <span className="font-semibold text-[var(--color-jz-text)]">multiple restaurants</span> to access
                all of their accounts from a{" "}
                <span className="font-semibold text-[var(--color-jz-text)]">single email and password</span>,
                without requiring Super Admin or Reseller-level access. Reduce operational friction and
                support a growing segment of multi-restaurant operators.
              </p>
            </div>
            <div>
              <p className="font-body text-sm uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-3">
                My Plan
              </p>
              <p className="font-body text-lg text-[var(--color-jz-text-secondary)] leading-relaxed">
                Design two interconnected surfaces: a persistent{" "}
                <span className="font-semibold text-[var(--color-jz-text)]">in-portal account switcher</span>{" "}
                that lets operators move between restaurants mid-session, and a redesigned{" "}
                <span className="font-semibold text-[var(--color-jz-text)]">New User modal</span>{" "}
                with granular account-and-location permissioning, across both desktop and mobile.
              </p>
            </div>
          </div>
        </section>

        {/* Pain Points */}
        <section className="bg-[var(--color-jz-surface)] px-6 md:px-10 py-16 md:py-24">
          <div className="max-w-[1500px] mx-auto">
            <p className="font-body text-sm uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-3">
              Pain Points
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--color-jz-text)] mb-12 leading-tight">
              Where the Experience Broke Down
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--color-jz-border)]">
              {painPoints.map((pt) => (
                <div key={pt.number} className="bg-[var(--color-jz-bg)] p-10">
                  <p className="font-display text-5xl font-bold text-[var(--color-jz-accent)] mb-6">
                    {pt.number}
                  </p>
                  <h3 className="font-display text-xl font-bold text-[var(--color-jz-text)] mb-4">
                    {pt.title}
                  </h3>
                  <p className="font-body text-base text-[var(--color-jz-text-secondary)] leading-relaxed">
                    {pt.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solution: first two */}
        <section className="bg-[var(--color-jz-bg)] px-6 md:px-10 py-16 md:py-24">
          <div className="max-w-[1500px] mx-auto">
            <p className="font-body text-sm uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-3">
              The Solution
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--color-jz-text)] mb-16 leading-tight">
              Three Surfaces, One Unified System
            </h2>
            <div className="space-y-24 md:space-y-32">
              {solutions.slice(0, 2).map((s) => (
                <div
                  key={s.label}
                  className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center"
                >
                  <div className={s.textLeft ? "" : "md:order-2"}>
                    <p className="font-body text-sm uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-3">
                      {s.label}
                    </p>
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-[var(--color-jz-text)] mb-6 leading-tight">
                      {s.title}
                    </h3>
                    <ul className="space-y-3">
                      {s.bullets.map((b, bi) => (
                        <li key={bi} className="flex gap-3 font-body text-base text-[var(--color-jz-text-secondary)] leading-relaxed">
                          <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--color-jz-accent)]" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={s.textLeft ? "" : "md:order-1"}>
                    <Image
                      src={s.image}
                      alt={s.imageAlt}
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

        {/* Solution: New User Modal (sticky text + tall scrolling image) */}
        <section className="bg-[#fdf8ee] px-6 md:px-10 py-16 md:py-24">
          <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">

            {/* Sticky text */}
            <div className="md:sticky md:top-24">
              <p className="font-body text-sm uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-3">
                New User Modal Redesign
              </p>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-[var(--color-jz-text)] mb-6 leading-tight">
                Granular Access, Finally
              </h3>
              <p className="font-body text-base text-[var(--color-jz-text-secondary)] leading-relaxed mb-6">
                When a new user is added to the Back Office, admins can now configure exactly where
                they have access and what they can do, down to the individual location.
              </p>
              <p className="font-body text-base text-[var(--color-jz-text-secondary)] leading-relaxed mb-8">
                For each account, admins select specific locations by name and street address, then
                assign an account type (Admin, Dealer, or Call Center) and set permissions
                independently per location. A staff member can have full Admin access at one address
                and Call Center-only at another, all from a single modal.
              </p>
              <ul className="space-y-4">
                {[
                  "Select which account(s) a user belongs to, with the ability to add access to multiple restaurants from one flow",
                  "Choose specific locations by name and address within each account, scoping staff only to where they work",
                  "Assign account type and permissions independently per location: the same user can have different access levels across companies",
                  "Add another account row or remove access per account without affecting other assignments",
                ].map((b, i) => (
                  <li key={i} className="flex gap-3 font-body text-base text-[var(--color-jz-text-secondary)] leading-relaxed">
                    <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--color-jz-accent)]" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tall scrolling image */}
            <div>
              <Image
                src="/images/multi_location/desktop_newuser_modal.png"
                alt="Redesigned New User modal showing multi-step account and permission assignment across multiple screens"
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

        {/* Mobile Compatibility */}
        <section className="bg-[var(--color-jz-surface)] px-6 md:px-10 py-16 md:py-24">
          <div className="max-w-[1500px] mx-auto">
            <p className="font-body text-sm uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-3">
              Mobile Compatibility
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--color-jz-text)] mb-6 leading-tight">
              Designed for Desktop and Mobile
            </h2>
            <p className="font-body text-lg text-[var(--color-jz-text-secondary)] leading-relaxed mb-16 max-w-3xl">
              Every surface built for this feature was designed in parallel across desktop and mobile.
              The account switcher maintains full functionality on smaller screens, same flows,
              same permissions, no capability gaps.
            </p>
            <Image
              src="/images/multi_location/mobile/mobile_location_dropdown.png"
              alt="Mobile account and location dropdown showing All Accounts, Downtown Diner, JZ Tacos, and Pizza Palace"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              className="rounded-sm"
              unoptimized
            />
          </div>
        </section>

        {/* Interactive Prototype */}
        <section className="bg-[var(--color-jz-bg)] px-6 md:px-10 py-16 md:py-24">
          <div className="max-w-[1500px] mx-auto">
            <p className="font-body text-sm uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-3">
              The Prototype
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--color-jz-text)] mb-4 leading-tight">
              See It in Action
            </h2>
            <p className="font-body text-lg text-[var(--color-jz-text-secondary)] mb-10 max-w-2xl leading-relaxed">
              The redesigned New User modal, fully interactive. Select an account, pick a location,
              assign account type and permissions, and add access to additional companies.
            </p>
            <iframe
              src="/new-user-modal.html"
              title="New User Modal Interactive Prototype"
              className="w-full rounded-sm border border-[var(--color-jz-border)]"
              style={{ height: "760px", border: "none" }}
            />
          </div>
        </section>

        {/* Reflection */}
        <section className="bg-[#1a130a] overflow-hidden py-16 md:py-24">
          <div className="overflow-hidden mb-14 cursor-default select-none">
            <div className="marquee-track flex whitespace-nowrap">
              {[0, 1].map((n) => (
                <span key={n} className="flex shrink-0 items-center font-display text-5xl md:text-6xl font-bold text-[#f5f0e8]">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <span key={i} className="inline-flex items-center gap-4 mr-4">
                      <span>Reflection</span>
                      <svg viewBox="0 0 100 100" className="w-8 h-8 shrink-0 fill-[#f5f0e8]" xmlns="http://www.w3.org/2000/svg">
                        {[0, 60, 120, 180, 240, 300].map((deg) => (
                          <ellipse key={deg} cx="50" cy="26" rx="11" ry="18" transform={`rotate(${deg} 50 50)`} />
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
              {reflection.map((col) => (
                <div key={col.tag}>
                  <div className="inline-block border border-[#e8c84a] bg-[#f5f0e8] text-[#1a130a] font-display font-medium text-sm px-6 py-3 mb-8 rounded-sm">
                    {col.tag}
                  </div>
                  <ul className="space-y-4 text-[#c8bfb0] font-body text-sm leading-relaxed list-none">
                    {col.items.map((item, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="mt-1 shrink-0 text-[#8a7a60]">·</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
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
              View Tagboard work
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

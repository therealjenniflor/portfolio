"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";

const projectGroups = [
  {
    label: "Global Payments",
    href: "/global-payments",
    studies: [
      { title: "Checkout Flow Redesign", href: "/pos-redesign" },
      { title: "Deposit Threshold", href: "/deposit-threshold" },
    ],
  },
  {
    label: "Tagboard",
    href: "/tagboard",
    studies: [
      { title: "API Integration, Sportradar", href: "/nba-sportradar" },
      { title: "Production Dashboard", href: "/dashboard-redesign" },
      { title: "Analytics Dashboard", href: "#" },
      { title: "Micro-interactions", href: "#" },
      { title: "Google Sheet Integration", href: "#" },
      { title: "Style Guide", href: "#" },
    ],
  },
];

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProjectsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);
  const [mobileGroupOpen, setMobileGroupOpen] = useState<string | null>(null);

  const isProjectPath = projectGroups.some((g) =>
    [g.href, ...g.studies.map((s) => s.href)].includes(pathname)
  );

  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm" style={{ background: 'linear-gradient(135deg, #fef6cc 0%, #fce4e8 100%)' }}>
      <div className="max-w-[1500px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-display text-xl font-bold text-[var(--color-jz-text)] tracking-tight hover:text-[var(--color-jz-accent)] transition-colors"
        >
          JZ
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">

          {/* Projects dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setProjectsOpen(!projectsOpen)}
              className={`flex items-center gap-1 font-body text-sm font-medium transition-colors duration-200 ${
                isProjectPath
                  ? "text-[var(--color-jz-text)] underline underline-offset-4 decoration-[var(--color-jz-accent)]"
                  : "text-[var(--color-jz-text-secondary)] hover:text-[var(--color-jz-text)]"
              }`}
            >
              Projects
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                className={`transition-transform duration-200 ${projectsOpen ? "rotate-180" : ""}`}
              >
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {projectsOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-[var(--color-jz-bg)] border border-pink-400 z-50 rounded-xl overflow-hidden" style={{ boxShadow: '0 4px 24px rgba(255, 182, 193, 0.35)' }}>
                {projectGroups.map((group, i) => (
                  <div key={group.label}>
                    {i > 0 && <div className="border-t border-pink-100" />}
                    {/* Group heading row */}
                    <div className="flex items-center justify-between px-4 py-3">
                      <Link
                        href={group.href}
                        onClick={() => setProjectsOpen(false)}
                        className="font-body text-xs font-semibold uppercase tracking-widest transition-colors text-[var(--color-jz-text)] hover:text-[var(--color-jz-accent)]"
                      >
                        {group.label}
                      </Link>
                      <button
                        onClick={(e) => { e.stopPropagation(); setOpenGroup(openGroup === group.label ? null : group.label); }}
                        className="text-[var(--color-jz-text-muted)] hover:text-[var(--color-jz-text)] transition-colors p-0.5"
                        aria-label={`Toggle ${group.label}`}
                      >
                        <svg width="11" height="11" viewBox="0 0 12 12" fill="none"
                          className={`transition-transform duration-200 ${openGroup === group.label ? "rotate-180" : ""}`}
                        >
                          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                    </div>
                    {/* Case studies — shown only when expanded */}
                    {openGroup === group.label && (
                      <div className="pb-1">
                        {group.studies.map((study) => (
                          <Link
                            key={study.title}
                            href={study.href}
                            onClick={() => setProjectsOpen(false)}
                            className={`block pl-6 pr-4 py-2 font-body text-sm transition-colors duration-150 ${
                              pathname === study.href
                                ? "text-[var(--color-jz-text)] bg-[var(--color-jz-surface)]"
                                : "text-[var(--color-jz-text-secondary)] hover:text-[var(--color-jz-text)] hover:bg-[var(--color-jz-surface)]"
                            }`}
                          >
                            {study.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/about"
            className={`font-body text-sm font-medium transition-colors duration-200 ${
              pathname === "/about"
                ? "text-[var(--color-jz-text)] underline underline-offset-4 decoration-[var(--color-jz-accent)]"
                : "text-[var(--color-jz-text-secondary)] hover:text-[var(--color-jz-text)]"
            }`}
          >
            About
          </Link>
          <a
            href="/s/JenniferZaragozaResume-fxcl.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm font-medium text-[var(--color-jz-text-secondary)] hover:text-[var(--color-jz-text)] transition-colors duration-200"
          >
            Resume
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span className={`block w-6 h-0.5 bg-[var(--color-jz-text)] transition-transform duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[var(--color-jz-text)] transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[var(--color-jz-text)] transition-transform duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden border-t border-[var(--color-jz-border)] bg-[var(--color-jz-bg)] px-6 py-4 flex flex-col gap-1">
          {/* Projects accordion */}
          <div>
            <button
              onClick={() => setMobileProjectsOpen(!mobileProjectsOpen)}
              className="w-full flex items-center justify-between py-2 font-body text-base font-medium text-[var(--color-jz-text)]"
            >
              Projects
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className={`transition-transform duration-200 ${mobileProjectsOpen ? "rotate-180" : ""}`}>
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {mobileProjectsOpen && (
              <div className="pl-2 flex flex-col gap-1 mb-2">
                {projectGroups.map((group) => (
                  <div key={group.label}>
                    <div className="flex items-center justify-between">
                      <Link
                        href={group.href}
                        className="font-body text-sm font-semibold text-[var(--color-jz-text-secondary)] hover:text-[var(--color-jz-accent)] py-1.5 uppercase tracking-widest text-xs"
                        onClick={() => setMenuOpen(false)}
                      >
                        {group.label}
                      </Link>
                      <button
                        onClick={() => setMobileGroupOpen(mobileGroupOpen === group.label ? null : group.label)}
                        className="p-1 text-[var(--color-jz-text-muted)]"
                      >
                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none" className={`transition-transform duration-200 ${mobileGroupOpen === group.label ? "rotate-180" : ""}`}>
                          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                    </div>
                    {mobileGroupOpen === group.label && (
                      <div className="pl-3 flex flex-col gap-0.5">
                        {group.studies.map((study) => (
                          <Link
                            key={study.title}
                            href={study.href}
                            className="font-body text-sm text-[var(--color-jz-text-muted)] hover:text-[var(--color-jz-accent)] py-1.5 transition-colors"
                            onClick={() => setMenuOpen(false)}
                          >
                            {study.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/about"
            className="font-body text-base font-medium text-[var(--color-jz-text)] hover:text-[var(--color-jz-accent)] transition-colors py-2"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <a
            href="/s/JenniferZaragozaResume-fxcl.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-base font-medium text-[var(--color-jz-text)] hover:text-[var(--color-jz-accent)] transition-colors py-2"
            onClick={() => setMenuOpen(false)}
          >
            Resume
          </a>
        </div>
      )}
    </header>
  );
}

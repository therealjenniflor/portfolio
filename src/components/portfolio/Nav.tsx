"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[var(--color-jz-bg)]/95 backdrop-blur-sm border-b border-[var(--color-jz-border)]">
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
          <span
            className={`block w-6 h-0.5 bg-[var(--color-jz-text)] transition-transform duration-200 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[var(--color-jz-text)] transition-opacity duration-200 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[var(--color-jz-text)] transition-transform duration-200 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden border-t border-[var(--color-jz-border)] bg-[var(--color-jz-bg)] px-6 py-4 flex flex-col gap-4">
          <Link
            href="/about"
            className="font-body text-base font-medium text-[var(--color-jz-text)] hover:text-[var(--color-jz-accent)] transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <a
            href="/s/JenniferZaragozaResume-fxcl.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-base font-medium text-[var(--color-jz-text)] hover:text-[var(--color-jz-accent)] transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Resume
          </a>
        </div>
      )}
    </header>
  );
}

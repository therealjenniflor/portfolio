export default function Footer() {
  return (
    <footer className="bg-[var(--color-jz-text)] text-[var(--color-jz-bg)] py-16 px-6 md:px-10">
      <div className="max-w-[1500px] mx-auto text-center">
        <p className="font-display text-2xl md:text-3xl font-semibold mb-6">
          If you like what you see and want to chat:
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 font-body text-base">
          <a
            href="mailto:jar.zaragoza91@gmail.com"
            className="underline underline-offset-4 decoration-[var(--color-jz-accent)] hover:text-[var(--color-jz-accent)] transition-colors font-medium"
          >
            Email me
          </a>
          <span className="text-[var(--color-jz-text-muted)] opacity-60">and/or</span>
          <a
            href="https://www.linkedin.com/in/jarlenez/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 decoration-[var(--color-jz-accent)] hover:text-[var(--color-jz-accent)] transition-colors font-medium"
          >
            Connect on LinkedIn
          </a>
        </div>
        <p className="mt-10 font-body text-sm opacity-40">
          &copy; {new Date().getFullYear()} Jennifer Zaragoza
        </p>
      </div>
    </footer>
  );
}

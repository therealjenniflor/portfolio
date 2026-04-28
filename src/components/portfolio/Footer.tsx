import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

const links = [
  {
    label: "Email",
    href: "mailto:jar.zaragoza91@gmail.com",
    icon: faEnvelope,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jarlenez/",
    icon: faLinkedinIn,
  },
  {
    label: "GitHub",
    href: "https://github.com/therealjenniflor",
    icon: faGithub,
  },
];

export default function Footer() {
  return (
    <footer className="py-16 px-6 md:px-10 text-[var(--color-jz-text)]" style={{ background: "linear-gradient(135deg, #fef6cc 0%, #fce4e8 100%)" }}>
      <div className="max-w-[1500px] mx-auto text-center">
        <p className="font-display text-2xl md:text-3xl font-semibold mb-8">
          Connect with me
        </p>
        <div className="flex items-center justify-center gap-6">
          {links.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              aria-label={label}
              className="text-[var(--color-jz-text)] hover:text-[var(--color-jz-accent)] transition-colors duration-200"
            >
              <FontAwesomeIcon icon={icon} style={{ fontSize: "1.5rem" }} />
            </a>
          ))}
        </div>
        <p className="mt-10 font-body text-sm opacity-40">
          &copy; {new Date().getFullYear()} Jennifer Zaragoza
        </p>
      </div>
    </footer>
  );
}

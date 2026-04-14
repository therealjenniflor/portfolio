import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/portfolio/Nav";
import Footer from "@/components/portfolio/Footer";

export const metadata: Metadata = {
  title: "About me — JZ",
  description:
    "Hi, I'm Jennifer Zaragoza — a Product Designer who went from vet med to crafting digital experiences.",
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>
        {/* ─── Hero ─── */}
        <section className="bg-[var(--color-jz-bg)] px-6 md:px-10 pt-16 pb-16 md:pt-24 md:pb-20">
          <div className="max-w-[1500px] mx-auto">
            <h1 className="font-display text-5xl md:text-7xl font-bold text-[var(--color-jz-text)] mb-4">
              Hi again!
            </h1>
            <p className="font-body text-xl md:text-2xl text-[var(--color-jz-text-secondary)] mb-6">
              You can call me{" "}
              <span className="font-semibold text-[var(--color-jz-text)]">JZ</span> from here on out.
            </p>
            <p className="font-body text-base text-[var(--color-jz-text-muted)] max-w-xl leading-relaxed italic">
              fun fact: I entered my Figjam drawing of a Platypus in a Figma contest and won Figma swag!{" "}
              <a
                href="https://www.instagram.com/jenniflor.wtrcolor/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 decoration-[var(--color-jz-accent)] text-[var(--color-jz-text-secondary)] hover:text-[var(--color-jz-text)] transition-colors"
              >
                You can check it out on my IG
              </a>
            </p>
            <div className="mt-8">
              <a
                href="mailto:jar.zaragoza91@gmail.com"
                className="inline-block font-body text-sm font-semibold px-6 py-3 border border-[var(--color-jz-text)] text-[var(--color-jz-text)] hover:bg-[var(--color-jz-text)] hover:text-[var(--color-jz-bg)] transition-colors duration-200"
              >
                Email JZ
              </a>
            </div>
          </div>
        </section>

        {/* ─── Bio ─── */}
        <section className="bg-[var(--color-jz-surface)] px-6 md:px-10 py-16 md:py-24">
          <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
            {/* Left: portrait */}
            <div className="order-2 md:order-1 relative aspect-[3/4] overflow-hidden rounded-sm">
              <Image
                src="/images/jz-portrait.jpg"
                alt="Jennifer Zaragoza"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Right: text */}
            <div className="order-1 md:order-2 space-y-6">
              <p className="font-body text-lg text-[var(--color-jz-text-secondary)] leading-relaxed">
                My journey into product design started with a background in veterinary medicine, but my passion for fitness and finding the best workout app evolved into finding beautiful and intuitive experiences. I made the scary yet, exciting decision to leave vet med to pursue a career in product design.
              </p>
              <p className="font-body text-lg text-[var(--color-jz-text-secondary)] leading-relaxed">
                My passion for design derives from my need to know the{" "}
                <span className="font-semibold text-[var(--color-jz-text)]">&ldquo;why?&rdquo;</span>{" "}
                and{" "}
                <span className="font-semibold text-[var(--color-jz-text)]">&ldquo;how?&rdquo;</span>{" "}
                about everything. This has led me to develop a creative and purposeful approach to solving challenging problems—not surprising given my Biology/Chemistry background.
              </p>
              <p className="font-body text-lg font-semibold text-[var(--color-jz-text)]">
                We science nerds love asking questions!
              </p>
            </div>
          </div>
        </section>

        {/* ─── More than a Designer ─── */}
        <section className="bg-[var(--color-jz-bg)] px-6 md:px-10 py-16 md:py-24">
          <div className="max-w-[1500px] mx-auto">
            <p className="font-body text-sm uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-3">
              More than a Designer
            </p>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-[var(--color-jz-text)] mb-16">
              Bold * Curious * Fun
            </h2>

            {/* Cards grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* Bold — watercolor art */}
              <div className="space-y-4">
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                  <Image
                    src="/images/jz-art.png"
                    alt="Watercolor painting by JZ — one of her favorite pieces"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <p className="font-body text-xs text-[var(--color-jz-text-muted)] italic">
                  One of my favorite pieces
                </p>
                <h3 className="font-display text-2xl font-bold text-[var(--color-jz-text)]">
                  I enjoy the simple things in life.
                </h3>
                <p className="font-body text-base text-[var(--color-jz-text-secondary)] leading-relaxed">
                  As corny as it sounds, I believe people should be{" "}
                  <span className="font-semibold text-[var(--color-jz-text)] jz-highlight">
                    &ldquo;forever students of life,&rdquo;
                  </span>{" "}
                  never limiting their capabilities and striving to learn new things.
                </p>
                <p className="font-body text-base text-[var(--color-jz-text-secondary)] leading-relaxed">
                  Whether it&rsquo;s for work or personal, scary or fun, I&rsquo;m always looking for ways to level up. That is how I jumped from vet med to product design — I found a passion and wanted more. Most recently, I decided to pick up a brush and learned to watercolor.
                </p>
              </div>

              {/* Curious — dogs */}
              <div className="space-y-4">
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                  <Image
                    src="/images/jz-dogs.png"
                    alt="Otis Redding and Zeus, JZ's two senior dogs"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <p className="font-body text-xs text-[var(--color-jz-text-muted)] italic">
                  Front: Otis Redding. Back: Zeus
                </p>
                <h3 className="font-display text-2xl font-bold text-[var(--color-jz-text)]">
                  I&rsquo;m the fun person at parties (or meetings).
                </h3>
                <p className="font-body text-base text-[var(--color-jz-text-secondary)] leading-relaxed">
                  I am a{" "}
                  <span className="font-semibold text-[var(--color-jz-text)] jz-highlight">Dog Mom</span>
                  , so when I&rsquo;m not lifting heavy weights at the gym, you can find me on the couch with my favorite book, an iced coffee, and my two senior dogs cuddling next to me.
                </p>
                <p className="font-body text-base text-[var(--color-jz-text-secondary)]">
                  I also have over 60 plants, so I guess you can call me a{" "}
                  <span className="font-semibold text-[var(--color-jz-text)] jz-highlight">Plant Mom</span>
                  &hellip;?
                </p>
              </div>

              {/* Fun — Zeus gif + copy */}
              <div className="space-y-4 md:col-span-2 md:grid md:grid-cols-2 md:gap-12">
                <div className="space-y-4">
                  {/* GIF — use unoptimized so Next.js doesn't strip animation */}
                  <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                    <Image
                      src="/images/jz-zeus.gif"
                      alt="JZ playing tag with her dog Zeus in Seattle"
                      fill
                      unoptimized
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <p className="font-body text-xs text-[var(--color-jz-text-muted)] italic">
                    Playing tag with my dog, Zeus, in Seattle
                  </p>
                </div>
                <div className="space-y-4 self-center">
                  <h3 className="font-display text-2xl font-bold text-[var(--color-jz-text)]">
                    I go through life with a fun and bold personality and a lot of curiosity.
                  </h3>
                  <p className="font-body text-base text-[var(--color-jz-text-secondary)] leading-relaxed">
                    Life is already so serious, and while I love solving complex problems through design, I don&rsquo;t believe in being serious 100% of the time.
                  </p>
                  <p className="font-body text-base text-[var(--color-jz-text-secondary)] leading-relaxed">
                    I enjoy making everything fun and enjoyable. From personal experiences to digital experiences, people remember fun times.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

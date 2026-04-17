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
        {/* ─── Hero — text left, portrait right ─── */}
        <section className="px-6 md:px-10 pt-16 pb-0 md:pt-24" style={{ backgroundColor: '#1d1d1a' }}>
          <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
            {/* Left: text */}
            <div className="pb-16 md:pb-24">
              <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-4">
                Hi again!
              </h1>
              <p className="font-body text-xl md:text-2xl text-white/70 mb-6">
                You can call me{" "}
                <span className="font-semibold text-white">JZ</span> from here on out.
              </p>
              <p className="font-body text-base text-white/70 max-w-md leading-relaxed mb-4">
                My journey into product design started with a background in veterinary medicine, but my passion for fitness and finding the best workout app evolved into finding beautiful and intuitive experiences. I made the scary yet, exciting decision to leave vet med to pursue a career in product design.
              </p>
              <p className="font-body text-base text-white/70 max-w-md leading-relaxed mb-8">
                My passion for design derives from my need to know the{" "}
                <span className="font-semibold text-white">&ldquo;why?&rdquo;</span>{" "}
                and{" "}
                <span className="font-semibold text-white">&ldquo;how?&rdquo;</span>{" "}
                about everything. This has led me to develop a creative and purposeful approach to solving challenging problems—not surprising given my Biology/Chemistry background.
              </p>
              <a
                href="mailto:jar.zaragoza91@gmail.com"
                className="inline-block font-body text-sm font-semibold px-8 py-3 rounded-full border border-white text-white hover:bg-white hover:text-[#1d1d1a] transition-colors duration-200 uppercase tracking-widest"
              >
                Email JZ
              </a>
            </div>

            {/* Right: portrait */}
            <div className="self-start mt-0">
              <Image
                src="/images/jz-portrait.jpg"
                alt="Jennifer Zaragoza"
                width={0}
                height={0}
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ width: "100%", height: "auto" }}
                priority
              />
            </div>
          </div>
        </section>

        {/* ─── Wave divider (Hero → More than a Designer) ─── */}
        <div className="overflow-hidden leading-none" style={{ background: '#FFFDF7' }}>
          <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full block" style={{ height: '80px' }}>
            <path d="M0,0 L0,60 C240,0 480,80 720,40 C960,0 1200,80 1440,20 L1440,0 Z" fill="#1d1d1a" />
            <path d="M0,60 C240,0 480,80 720,40 C960,0 1200,80 1440,20" fill="none" stroke="#ffae00" strokeWidth="2" />
          </svg>
        </div>

        {/* ─── More than a Designer ─── */}
        <section className="px-6 md:px-10 py-16 md:py-24" style={{ backgroundColor: '#FFFDF7' }}>
          <div className="max-w-[1500px] mx-auto">
            <p className="font-body text-sm uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-3 text-center">
              More than a Designer
            </p>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-[var(--color-jz-text)] mb-16 text-center">
              Bold <span style={{ color: '#ffae00' }}>*</span> Curious <span style={{ color: '#ffae00' }}>*</span> Fun
            </h2>

            <div className="space-y-20 md:space-y-28 max-w-[1000px] mx-auto">

              {/* Row 1 — image LEFT, text RIGHT */}
              <div className="grid grid-cols-1 md:grid-cols-[minmax(0,420px)_1fr] gap-6 md:gap-10 items-start">
                <div className="space-y-3">
                  <Image
                    src="/images/jz-art.png"
                    alt="Watercolor painting by JZ — one of her favorite pieces"
                    width={0}
                    height={0}
                    sizes="(max-width: 768px) 100vw, 400px"
                    style={{ width: "100%", height: "auto" }}
                  />
                  <p className="font-body text-xs text-[var(--color-jz-text-muted)] italic">
                    One of my favorite pieces
                  </p>
                </div>
                <div className="space-y-5 self-center max-w-[520px]">
                  <p className="font-body text-lg text-[var(--color-jz-text-secondary)] leading-normal">
                    As corny as it sounds, I believe people should be{" "}
                    <span className="font-semibold text-[var(--color-jz-text)] jz-highlight">
                      &ldquo;forever students of life,&rdquo;
                    </span>{" "}
                    never limiting their capabilities and striving to learn new things.
                  </p>
                  <p className="font-body text-lg text-[var(--color-jz-text-secondary)] leading-normal">
                    Whether it&rsquo;s for work or personal, scary or fun, I&rsquo;m always looking for ways to level up. That is how I jumped from vet med to product design — I found a passion and wanted more. Most recently, I decided to pick up a brush and learned to watercolor.
                  </p>
                </div>
              </div>

              {/* Row 2 — text LEFT, image RIGHT */}
              <div className="grid grid-cols-1 md:grid-cols-[1fr_minmax(0,420px)] gap-6 md:gap-10 items-start">
                <div className="space-y-5 self-center md:order-1 order-2 max-w-[520px]">
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-[var(--color-jz-text)]">
                    I enjoy the simple things in life.
                  </h3>
                  <p className="font-body text-lg text-[var(--color-jz-text-secondary)] leading-normal">
                    I am a{" "}
                    <span className="font-semibold text-[var(--color-jz-text)] jz-highlight">Dog Mom</span>
                    , so when I&rsquo;m not lifting heavy weights at the gym, you can find me on the couch with my favorite book, an iced coffee, and my two senior dogs cuddling next to me.
                  </p>
                  <p className="font-body text-lg text-[var(--color-jz-text-secondary)] leading-normal">
                    I also have over 60 plants, so I guess you can call me a{" "}
                    <span className="font-semibold text-[var(--color-jz-text)] jz-highlight">Plant Mom</span>
                    &hellip;?
                  </p>
                </div>
                <div className="space-y-3 md:order-2 order-1">
                  <Image
                    src="/images/jz-dogs.png"
                    alt="Otis Redding and Zeus, JZ's two senior dogs"
                    width={0}
                    height={0}
                    sizes="(max-width: 768px) 100vw, 400px"
                    style={{ width: "100%", height: "auto" }}
                  />
                  <p className="font-body text-xs text-[var(--color-jz-text-muted)] italic">
                    Front: Otis Redding. Back: Zeus
                  </p>
                </div>
              </div>

              {/* Row 3 — image LEFT, text RIGHT */}
              <div className="grid grid-cols-1 md:grid-cols-[minmax(0,420px)_1fr] gap-6 md:gap-10 items-start">
                <div className="space-y-3">
                  <Image
                    src="/images/jz-zeus.gif"
                    alt="JZ playing tag with her dog Zeus in Seattle"
                    width={0}
                    height={0}
                    unoptimized
                    sizes="(max-width: 768px) 100vw, 400px"
                    style={{ width: "100%", height: "auto" }}
                  />
                  <p className="font-body text-xs text-[var(--color-jz-text-muted)] italic">
                    Playing tag with my dog, Zeus, in Seattle
                  </p>
                </div>
                <div className="space-y-5 self-center max-w-[520px]">
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-[var(--color-jz-text)]">
                    I&rsquo;m the fun person at parties (or meetings).
                  </h3>
                  <p className="font-body text-lg text-[var(--color-jz-text-secondary)] leading-normal">
                    Life is already so serious, and while I love solving complex problems through design, I don&rsquo;t believe in being serious 100% of the time.
                  </p>
                  <p className="font-body text-lg text-[var(--color-jz-text-secondary)] leading-normal">
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

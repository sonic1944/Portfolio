import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="px-6 py-[clamp(2.5rem,6vh,4.5rem)] pb-24 text-white">
      <div className="mx-auto w-full max-w-md sm:max-w-lg">
        {/* Top bar */}
        <header className="relative mb-6 flex items-center justify-center">
          <h1 className="text-center text-[clamp(1.25rem,2.2vw,1.6rem)] font-medium text-white/90">
            Discover more about me
          </h1>

          <Link
            href="/discover"
            className="absolute right-0 inline-flex items-center justify-center rounded-full bg-white/10 px-5 py-2 text-sm text-white/90 backdrop-blur-xl ring-1 ring-white/15 transition hover:bg-white/15"
          >
            Home
          </Link>
        </header>

        {/* ONE column container with internal grid */}
        <GlassPanel className="p-5 sm:p-6">
          <div className="grid gap-5">
            {/* Top row: two cards inside the panel */}
            <div className="grid grid-cols-2 gap-4">
              <GlassCard className="p-4">
                <h2 className="mb-3 text-sm font-medium text-white/90">
                  General Tech-stack
                </h2>
                <ul className="space-y-1 text-sm leading-5 text-white/80">
                  {["HTML", "CSS", "JavaScript", "Express", "React", "Node.js", "Python"].map(
                    (t) => (
                      <li key={t}>{t}</li>
                    )
                  )}
                </ul>
              </GlassCard>

              <GlassCard className="p-4">
                <h2 className="mb-3 text-sm font-medium text-white/90">
                  Picture of me
                </h2>

                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10">
                 <Image
                    src="/images/profile_picture.jpeg"
                    alt="Nicolas Edeni"
                    fill
                    className="object-cover"
                  />
                </div>
              </GlassCard>
            </div>

            {/* Middle: big journey card */}
            <GlassCard className="p-5">
              <h2 className="mb-3 text-sm font-medium text-white/90">
                My journey
              </h2>
              <p className="text-sm leading-6 text-white/80">
                Hello! I'm Nicolas Edeni, a passionate web developer with a knack for creating dynamic and user-friendly web applications. With a strong foundation in both front-end and back-end technologies, I enjoy bringing ideas to life through code. When I'm not coding, you can find me exploring the latest tech trends or working on personal projects to further hone my skills.
              </p>
            </GlassCard>

            {/* Bottom CTA tile */}
            <Link
              href="/contact"
              className="block rounded-2xl bg-white/10 px-5 py-4 text-sm text-white/90 backdrop-blur-xl ring-1 ring-white/15 transition hover:bg-white/15"
            >
              let&apos;s stay in touch
            </Link>
          </div>
        </GlassPanel>
      </div>
    </main>
  );
}

/** Outer panel that contains the whole about layout */
function GlassPanel({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      className={[
        "rounded-[2.25rem] bg-white/10 backdrop-blur-xl",
        "ring-1 ring-white/15",
        "shadow-[0_20px_60px_rgba(0,0,0,0.35)]",
        className,
      ].join(" ")}
    >
      {children}
    </section>
  );
}

/** Inner cards inside the panel */
function GlassCard({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={[
        "rounded-2xl bg-white/10 backdrop-blur-xl",
        "ring-1 ring-white/12",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

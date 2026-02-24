import Link from "next/link";

const EMAIL = "sonic1944@hotmail.com";
const LINKEDIN_URL = "https://linkedin.com/in/nicolas-e-b4458a289";

export default function ContactPage() {
  const mailtoHref =
    `mailto:${EMAIL}?subject=${encodeURIComponent("Portfolio inquiry")}`;

  const pillClasses =
    "block rounded-[26px] bg-white/10 border border-white/15 backdrop-blur-md p-6 " +
    "transition hover:bg-white/15 hover:border-white/25 " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40";

  return (
    <main className="px-6 py-[clamp(2.5rem,6vh,4.5rem)] pb-24 text-white">
      <div className="mx-auto w-full max-w-3xl">
        {/* Top bar: centered title + home button right */}
        <div className="relative mb-6 flex items-center justify-center">
          <h1 className="text-center text-[clamp(1.25rem,2.2vw,1.6rem)] font-medium text-white/90">
            Get in touch
          </h1>

          <Link
            href="/discover"
            className="absolute right-0 inline-flex items-center justify-center
                       rounded-full px-4 py-2 text-sm
                       bg-white/10 backdrop-blur-md border border-white/20
                       text-white/90 hover:bg-white hover:text-black transition
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            Home
          </Link>
        </div>

        {/* Big glass panel */}
        <section
          className="
            relative overflow-hidden
            rounded-[28px]
            border border-white/15
            bg-white/10
            backdrop-blur-md
            shadow-[0_20px_60px_rgba(0,0,0,0.25)]
            p-8 sm:p-10
          "
        >
          {/* Inner pills container */}
          <div className="sm:mt-14 mb-14 mx-auto w-full max-w-sm space-y-10">
            {/* Email */}
            <a href={mailtoHref} className={pillClasses}>
              <p className="text-white/90 leading-snug">
                E-Mail <br />
                <span className="text-white/70">{EMAIL}</span>
              </p>
            </a>

            {/* LinkedIn */}
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={pillClasses}
            >
              <p className="text-white/90 leading-snug">
                My LinkedIn Profile <br />
                <span className="text-white/70">linkedin.com/myprofile</span>
              </p>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
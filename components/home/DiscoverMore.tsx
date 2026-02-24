import Link from "next/link";

export default function DiscoverMore() {
  return (
    
     <section className="min-h-svh px-6 py-[clamp(3rem,8vh,6rem)]">
      {/* Floating back button */}
        <Link
          href="/"
          className="
            fixed bottom-6 right-6
            grid place-items-center
            h-12 w-12
            rounded-full
            bg-white/10 backdrop-blur-xl
            ring-1 ring-white/20
            text-white text-xl
            cursor-pointer
            transition
            hover:bg-white/20 hover:-translate-y-0.5
          "
        >
          ×
        </Link>
      <div className="mx-auto grid w-full max-w-5xl place-items-center mt-20">
        {/* Grid wrapper */}
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
          {/* Tile 1 */}
          <DiscoverTile label="Projects" href="/projects"/>

          {/* Tile 2 */}
          <DiscoverTile label="About me" href="/about" />

          {/* Tile 3 (spans) */}
          <div className="sm:col-span-2">
            <DiscoverTile label="Let's get in touch" href="/contact" />
          </div>
        </div>
      </div>
    </section>
  );
}
function DiscoverTile({
  label,
  href,
}: {
  label: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className={[
        "h-[clamp(7.5rem,18vh,10.5rem)] w-full",
        "rounded-[2rem] bg-white/10 backdrop-blur-xl",
        "ring-1 ring-white/15",
        "shadow-[0_20px_60px_rgba(0,0,0,0.35)]",
        "transition will-change-transform hover:-translate-y-0.5 hover:bg-white/12",
        "grid place-items-center",
        "text-[clamp(2rem,4vw,3.25rem)] font-sans tracking-tight text-white/95",
        "cursor-pointer active:scale-[0.98]",
      ].join(" ")}
    >
      {label}
    </Link>
  );
}
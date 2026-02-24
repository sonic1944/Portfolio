import Link from "next/link";

export default function Hero() {
  return (

    <section className="min-h-screen grid grid-rows-[auto,1fr,auto] place-items-center px-6">
        <header className="text-center pt-1">
        <h1 className="text-white text-5xl md:text-6xl font-sans tracking-tight">
          Nicolas Edeni
        </h1>

        <p className="text-xl md:text-2xl font-sans text-white/70">
          Portfolio
        </p>
        </header>
        <div> </div>
        <footer className="pb-10">
          <Link
            href="/discover"
            className="inline-flex items-center justify-center
    px-10 py-4
    rounded-full
    bg-white/10
    backdrop-blur-md
    border border-white/30
    text-white
    shadow-[0_8px_24px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.4)]
    hover:bg-white/20 hover:text-black
    transition duration-300"
            >
            Discover
          </Link>
        </footer>

    </section>
  );
}
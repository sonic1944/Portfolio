import Link from "next/link";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/projects/ProjectCard";

export default function ProjectsPage() {
  return (
    <main className="px-6 py-[clamp(2.5rem,6vh,4.5rem)] pb-24 text-white">
      <div className="mx-auto w-full max-w-4xl">
        {/* Top bar */}
        <header className="relative mb-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <h1 className="max-w-[14rem] text-center text-[clamp(1.5rem,9vw,2.5rem)] font-medium leading-tight text-white/90 sm:max-w-none sm:text-[clamp(1.25rem,2.2vw,1.6rem)]">
            Learn more about my projects
          </h1>

          <Link
            href="/discover"
            className="inline-flex items-center justify-center rounded-full bg-white/10 px-5 py-2 text-sm text-white/90 backdrop-blur-xl ring-1 ring-white/15 transition hover:bg-white/15 sm:absolute sm:right-0"
          >
            Get Back
          </Link>
        </header>

        <GlassPanel className="p-8 sm:p-10">
          <h2 className="text-xl font-medium text-white/90">Projects</h2>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <a
              href="https://github.com/sonic1944"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-white/10 px-6 py-3 text-sm text-white/90 backdrop-blur-xl ring-1 ring-white/15 transition hover:bg-white/15"
            >
              Other projects on GitHub
            </a>
          </div>
        </GlassPanel>
      </div>
    </main>
  );
}

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
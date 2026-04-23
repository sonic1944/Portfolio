import Link from "next/link";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/projects/ProjectCard";

export default function ProjectsPage() {
  return (
    <main className="px-6 py-[clamp(2.5rem,6vh,4.5rem)] pb-24 text-white">
      <div className="mx-auto w-full max-w-4xl">
        {/* Top bar: centered title + home button right */}
        <div className="relative mb-6 flex items-center justify-center">
          <h1 className="text-center text-[clamp(1.25rem,2.2vw,1.6rem)] font-medium text-white/90">
            Learn more about my projects
          </h1>

          <Link
            href="/discover"
            className="absolute right-0 inline-flex items-center justify-center
                       rounded-full px-4 py-2 text-sm
                       bg-white/10 backdrop-blur-md border border-white/20
                       text-white/90 hover:bg-white hover:text-black transition
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            Get Back
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
          <h2 className="text-xl font-medium text-white/90">Projects</h2>

          {/* Project cards */}
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="
                  rounded-[26px]
                  border border-white/15
                  bg-white/10
                  backdrop-blur-md
                  p-6
                  transition
                  hover:bg-white/15 hover:border-white/25
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40
                "
              >
                <h3 className="text-lg font-medium text-white/90">
                  {project.name}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-white/65">
                  {project.description}
                </p>
              </Link>
            ))}
          </div>

          {/* GitHub button */}
          <div className="mt-10 flex justify-center">
            <a
              href="https://github.com/sonic1944"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center justify-center
                rounded-full px-6 py-3 text-sm
                bg-white/10 backdrop-blur-md border border-white/20
                text-white/90 hover:bg-white hover:text-black transition
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40
              "
            >
              Other projects on GitHub
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
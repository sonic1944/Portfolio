import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="px-6 py-[clamp(2.5rem,6vh,4.5rem)] pb-24 text-white">
      <div className="mx-auto w-full max-w-5xl">
        <div className="relative mb-6 flex items-center justify-center">
          <h1 className="text-center text-[clamp(1.25rem,2.2vw,1.6rem)] font-medium text-white/90">
            {project.name}
          </h1>

          <div className="absolute right-0 flex gap-3">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm bg-white/10 backdrop-blur-md border border-white/20 text-white/90 hover:bg-white hover:text-black transition"
            >
              Back
            </Link>

            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm bg-white/10 backdrop-blur-md border border-white/20 text-white/90 hover:bg-white hover:text-black transition"
            >
              Home
            </Link>
          </div>
        </div>

        <section
          className="
            rounded-[28px]
            border border-white/15
            bg-white/10
            backdrop-blur-md
            shadow-[0_20px_60px_rgba(0,0,0,0.25)]
            p-8 sm:p-10
          "
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[26px] border border-white/15 bg-white/10 p-6">
              <h2 className="text-lg font-medium text-white/90">Tech Stack</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/65">
                {project.techStack.join(", ")}
              </p>
            </div>

            <div className="rounded-[26px] border border-white/15 bg-white/10 p-6">
              <h2 className="text-lg font-medium text-white/90">Preview</h2>
              <p className="mt-3 text-sm text-white/65">
                Project image goes here
              </p>
            </div>

            <div className="rounded-[26px] border border-white/15 bg-white/10 p-6 md:col-span-2">
              <h2 className="text-lg font-medium text-white/90">Description</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/65">
                {project.description}
              </p>

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm bg-white/10 backdrop-blur-md border border-white/20 text-white/90 hover:bg-white hover:text-black transition"
                >
                  View source code
                </a>
              )}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
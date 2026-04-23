import Link from "next/link";
import { Project } from "@/data/projects";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="
        group block
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

      <div className="mt-4 text-xs text-white/40 transition group-hover:text-white/70">
        View project →
      </div>
    </Link>
  );
}
import React from "react";

export type Project = {
  id: string;
  name: string;
  description: string;
  techStack: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    id: "proj-1",
    name: "Project 1",
    description: "Description of project 1",
    techStack: ["React", "Node.js", "CSS"],
    link: "",
  },
  {
    id: "proj-2",
    name: "Project 2",
    description: "Description of project 2",
    techStack: ["React", "Node.js", "CSS"],
    link: "",
  },
  {
    id: "proj-3",
    name: "Project 3",
    description: "Description of project 3",
    techStack: ["React", "Node.js", "CSS"],
    link: "",
  },
];

export default function Projects(){
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h2>learn more about my projects</h2>
          <div className="grid-container">
            <h1 className="">Projects</h1>
           <ul>
           {projects.map((project, index) => (
                <li key={index}>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <p>Tech Stack: {project.techStack.join(", ")}</p>
                    <a href="">Click here to view my source code</a>
                </li>
            ))}
           </ul>
          </div>
        </main>
    );
}
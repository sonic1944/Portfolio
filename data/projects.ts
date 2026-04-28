export type Project = {
  slug: string;
  name: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  image: string;
};

export const projects: Project[] = [
  {
    slug: "chatgpt-clone",
    name: "ChatGPT Clone",
    description: "A clone of the ChatGPT interface built with Python.",
    techStack: ["Python", "API", "HTML", "CSS"],
    githubUrl: "https://github.com/sonic1944/chatgpt-clone",
    image: "/images/projects/chatgpt.png",
  },
  {
    slug: "pokedex",
    name: "Pokedex",
    description: "A React-based Pokedex using API data and dynamic rendering.",
    techStack: ["React", "JavaScript", "CSS"],
    githubUrl: "https://github.com/sonic1944/pokedex",
    image: "/images/projects/pokedex.png",
  },
  {
    slug: "trivia-game",
    name: "Trivia Game",
    description: "A browser-based trivia project built with JavaScript.",
    techStack: ["HTML", "JavaScript", "CSS"],
    githubUrl: "https://github.com/sonic1944/trivia-game",
    image: "/images/projects/quiz.png",
  },
  {
    slug: "pixel-grid",
    name: "Pixel Grid",
    description: "A full-stack pixel grid app with interactive functionality.",
    techStack: ["React", "JavaScript", "CSS"],
    githubUrl: "https://github.com/sonic1944/pixel_grid",
    image: "/images/projects/pixel_grid.png",
  },
];
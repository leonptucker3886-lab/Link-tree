export interface Project {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  techStack: string[];
  demoUrl: string;
  githubUrl: string;
  image: string;
  accent: string;
}

export const projects: Project[] = [
  {
    id: "ai-peach",
    name: "AI Peach",
    description: "AI-powered application built with modern web technologies.",
    longDescription: "An innovative AI-powered web application showcasing the latest in artificial intelligence and web development. Built with a focus on user experience and cutting-edge technology.",
    techStack: ["Next.js", "TypeScript", "AI/ML", "Tailwind CSS"],
    demoUrl: "https://ai-peach-gamma.vercel.app/",
    githubUrl: "https://github.com/leontucker/ai-peach",
    image: "/projects/ai-peach.svg",
    accent: "#f472b6",
  },
  {
    id: "nightshift",
    name: "NightShift",
    description: "A modern web application with sleek dark-themed design.",
    longDescription: "A beautifully crafted web application featuring a dark theme and smooth interactions. Demonstrates expertise in modern frontend development and UI/UX design.",
    techStack: ["React", "TypeScript", "CSS", "Vercel"],
    demoUrl: "https://nightshift-six.vercel.app/",
    githubUrl: "https://github.com/leontucker/nightshift",
    image: "/projects/nightshift.svg",
    accent: "#6366f1",
  },
  {
    id: "conflict-resolution",
    name: "Conflict Resolution",
    description: "An application focused on conflict resolution methodologies.",
    longDescription: "A thoughtfully designed application that helps users navigate and resolve conflicts through structured approaches. Features intuitive interfaces and practical tools for mediation and resolution.",
    techStack: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
    demoUrl: "https://vercel.com/leonptucker3886-labs-projects/conflict-resolution",
    githubUrl: "https://github.com/leontucker/conflict-resolution",
    image: "/projects/conflict-resolution.svg",
    accent: "#10b981",
  },
  {
    id: "ivywheel",
    name: "IvyWheel",
    description: "A creative web application with unique visual design.",
    longDescription: "An imaginative web project that combines creative design with functional development. Showcases artistic vision and technical skill in building engaging digital experiences.",
    techStack: ["React", "JavaScript", "CSS", "Vercel"],
    demoUrl: "https://ivywheel.vercel.app/",
    githubUrl: "https://github.com/leontucker/ivywheel",
    image: "/projects/ivywheel.svg",
    accent: "#8b5cf6",
  },
];

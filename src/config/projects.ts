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
    id: "ai-studio-lab",
    name: "AI Studio Lab",
    description: "Generators, Voice Changers — AI tools with zero gatekeeping.",
    longDescription: "A creative AI toolkit featuring generators, voice changers, and more. Built for creators who want power without the gatekeeping. No fluff, no paywalls, just tools that work.",
    techStack: ["Next.js", "TypeScript", "AI/ML", "Tailwind CSS"],
    demoUrl: "https://ai-peach-gamma.vercel.app/",
    githubUrl: "https://github.com/leontucker/ai-studio-lab",
    image: "/projects/ai-studio-lab.svg",
    accent: "#f472b6",
  },
  {
    id: "pdfs-for-nurses",
    name: "PDFs for Nurses",
    description: "Tools built for the nurse.",
    longDescription: "A collection of essential tools built specifically for nurses. Streamlines documentation, scheduling, and workflow management for healthcare professionals on the front lines.",
    techStack: ["React", "TypeScript", "CSS", "Vercel"],
    demoUrl: "https://nightshift-six.vercel.app/",
    githubUrl: "https://github.com/leontucker/pdfs-for-nurses",
    image: "/projects/pdfs-for-nurses.svg",
    accent: "#6366f1",
  },
  {
    id: "dr-resolve",
    name: "Dr Resolve",
    description: "The only way to settle an argument with Dr Resolve, the AI Dr Phil.",
    longDescription: "The only way to settle an argument — Dr Resolve is the AI-powered Dr Phil that helps you navigate disputes with wit and wisdom. Drop in your conflict, get real talk back.",
    techStack: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
    demoUrl: "https://vercel.com/leonptucker3886-labs-projects/conflict-resolution",
    githubUrl: "https://github.com/leontucker/dr-resolve",
    image: "/projects/dr-resolve.svg",
    accent: "#10b981",
  },
  {
    id: "ivy-peace",
    name: "Ivy Peace",
    description: "A coloring book generator of badassery.",
    longDescription: "An imaginative coloring book generator that transforms prompts into badass illustrations. Combines creative AI techniques with a slick interface for generating unique, edgy coloring pages.",
    techStack: ["React", "JavaScript", "CSS", "Vercel"],
    demoUrl: "https://ivywheel.vercel.app/",
    githubUrl: "https://github.com/leontucker/ivy-peace",
    image: "/projects/ivy-peace.svg",
    accent: "#8b5cf6",
  },
];

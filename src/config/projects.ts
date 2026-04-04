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
    id: "dr-resolve",
    name: "Dr Resolve",
    description: "The only way to settle an argument with Dr Resolve, the AI Dr Phil.",
    longDescription: "The only way to settle an argument — Dr Resolve is the AI-powered Dr Phil that helps you navigate disputes with wit and wisdom. Drop in your conflict, get real talk back.",
    techStack: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
    demoUrl: "https://conflict-resolution-lilac.vercel.app/",
    githubUrl: "https://github.com/leontucker/dr-resolve",
    image: "/projects/dr-resolve.svg",
    accent: "#10b981",
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
    id: "ai-studio-lab",
    name: "AI Studio Lab",
    description: "Generators, Voice Changers — built for creators, not haters.",
    longDescription: "A creative AI toolkit featuring generators, voice changers, and more. Built for creators who want power without the gatekeeping. No fluff, no paywalls, just tools that work.",
    techStack: ["Next.js", "TypeScript", "AI/ML", "Tailwind CSS"],
    demoUrl: "https://ai-peach-gamma.vercel.app/",
    githubUrl: "https://github.com/leontucker/ai-studio-lab",
    image: "/projects/ai-studio-lab.svg",
    accent: "#f472b6",
  },
  {
    id: "narcassist-generator",
    name: "Narcassist Generator",
    description: "What should a Narc say?",
    longDescription: "A cheeky generator that dishes out classic narcissistic phrases on demand. Perfect for laughs, parody, or understanding manipulation patterns. Because sometimes you just need to see the playbook.",
    techStack: ["React", "JavaScript", "CSS", "Vercel"],
    demoUrl: "https://narcassist.vercel.app/",
    githubUrl: "https://github.com/leontucker/narcassist",
    image: "/projects/narcassist.svg",
    accent: "#8b5cf6",
  },
];

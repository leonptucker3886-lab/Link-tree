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
    id: "ai-content-studio",
    name: "AI Content Studio",
    description: "AI-powered content generation platform with GPT-4 integration for blogs, ads, and social media.",
    longDescription: "A full-stack AI content generation platform that leverages OpenAI's GPT-4 API to help marketers and creators produce high-quality content at scale. Features include template management, brand voice training, content scheduling, and analytics dashboard. Built with real-time streaming responses and collaborative editing.",
    techStack: ["Next.js", "TypeScript", "OpenAI API", "Prisma", "PostgreSQL", "Tailwind CSS"],
    demoUrl: "https://ai-content-studio.vercel.app",
    githubUrl: "https://github.com/leontucker/ai-content-studio",
    image: "/projects/ai-studio.svg",
    accent: "#06b6d4",
  },
  {
    id: "colorcraft-ai",
    name: "ColorCraft AI",
    description: "AI coloring book generator that transforms text prompts into beautiful line art illustrations.",
    longDescription: "An innovative web application that uses Stable Diffusion and custom image processing pipelines to generate coloring book pages from text descriptions. Users can customize complexity, style, and subject matter. Includes a built-in digital coloring tool with brush controls, color palettes, and export options.",
    techStack: ["React", "Python", "FastAPI", "Stable Diffusion", "Redis", "Stripe"],
    demoUrl: "https://colorcraft-ai.vercel.app",
    githubUrl: "https://github.com/leontucker/colorcraft-ai",
    image: "/projects/colorcraft.svg",
    accent: "#f59e0b",
  },
  {
    id: "devpulse",
    name: "DevPulse",
    description: "Real-time developer productivity dashboard tracking GitHub activity, commits, and code metrics.",
    longDescription: "A comprehensive developer analytics platform that aggregates data from GitHub, Jira, and CI/CD pipelines to provide actionable insights into team productivity. Features real-time WebSocket updates, customizable dashboards, burnout detection algorithms, and automated weekly reports delivered via email.",
    techStack: ["Next.js", "WebSocket", "D3.js", "Node.js", "MongoDB", "Docker"],
    demoUrl: "https://devpulse-app.vercel.app",
    githubUrl: "https://github.com/leontucker/devpulse",
    image: "/projects/devpulse.svg",
    accent: "#10b981",
  },
  {
    id: "vaultnotes",
    name: "VaultNotes",
    description: "End-to-end encrypted note-taking app with markdown support and real-time sync.",
    longDescription: "A privacy-first note-taking application with military-grade E2E encryption. Supports rich markdown editing with live preview, hierarchical organization with nested notebooks, full-text search over encrypted content using homomorphic encryption techniques, and seamless cross-device synchronization with conflict resolution.",
    techStack: ["React Native", "Expo", "TypeScript", "Supabase", "Crypto API", "Zustand"],
    demoUrl: "https://vaultnotes.vercel.app",
    githubUrl: "https://github.com/leontucker/vaultnotes",
    image: "/projects/vaultnotes.svg",
    accent: "#8b5cf6",
  },
];

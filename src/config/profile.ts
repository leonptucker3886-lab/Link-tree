export const profile = {
  name: "Leon Tucker",
  bio: "Full-Stack Developer",
  avatar: "https://api.dicebear.com/9.x/shapes/svg?seed=LeonTucker&backgroundColor=0a0a0a&colors=6366f1,3b82f6,a855f7",
  links: [
    { title: "Website", url: "https://example.com" },
    { title: "Portfolio", url: "https://portfolio.example.com" },
    { title: "Blog", url: "https://blog.example.com" },
    { title: "YouTube", url: "https://youtube.com" },
    { title: "Newsletter", url: "https://newsletter.example.com" },
    { title: "Resume", url: "https://resume.example.com" },
    { title: "Contact", url: "mailto:hello@example.com" },
  ],
  socials: [
    { platform: "twitter" as const, url: "https://twitter.com" },
    { platform: "github" as const, url: "https://github.com" },
    { platform: "linkedin" as const, url: "https://linkedin.com" },
    { platform: "instagram" as const, url: "https://instagram.com" },
  ],
};

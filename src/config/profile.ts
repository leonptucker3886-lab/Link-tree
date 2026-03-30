export const profile = {
  name: "Your Name",
  bio: "Developer · Creator · Dreamer",
  avatar: "https://api.dicebear.com/9.x/initials/svg?seed=YN&backgroundColor=785e3a",
  links: [
    { title: "My Website", url: "https://example.com" },
    { title: "Portfolio", url: "https://portfolio.example.com" },
    { title: "Blog", url: "https://blog.example.com" },
    { title: "YouTube Channel", url: "https://youtube.com" },
    { title: "Newsletter", url: "https://newsletter.example.com" },
    { title: "Resume / CV", url: "https://resume.example.com" },
    { title: "Contact Me", url: "mailto:hello@example.com" },
  ],
  socials: [
    { platform: "twitter" as const, url: "https://twitter.com" },
    { platform: "github" as const, url: "https://github.com" },
    { platform: "linkedin" as const, url: "https://linkedin.com" },
    { platform: "instagram" as const, url: "https://instagram.com" },
  ],
};

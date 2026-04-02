import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/providers/ThemeProvider";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Leon Tucker | Developer",
  description:
    "Full-Stack Developer — Building modern digital experiences with code, creativity, and AI.",
  keywords: ["developer", "full-stack", "portfolio", "web development", "React", "Next.js"],
  authors: [{ name: "Leon Tucker" }],
  openGraph: {
    title: "Leon Tucker | Developer",
    description: "Full-Stack Developer — Building modern digital experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${jakarta.variable} ${jetbrains.variable} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}

"use client";

import { motion } from "framer-motion";
import { profile } from "@/config/profile";

const codeSnippets = [
  "const app = next();",
  "export default Hero;",
  "useState(false);",
  "async/await",
  "npm run build",
  "git push origin",
  "<Component />",
  "tailwind.css",
  "motion.div",
  "type Props = {",
];

function FloatingCode({ text, x, y, delay, duration }: { text: string; x: string; y: string; delay: number; duration: number }) {
  return (
    <motion.div
      className="absolute text-xs font-mono pointer-events-none select-none whitespace-nowrap"
      style={{
        left: x,
        top: y,
        color: "var(--color-text-muted)",
        opacity: 0,
      }}
      animate={{
        opacity: [0, 0.15, 0.15, 0],
        y: [0, -30, -30, -60],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {text}
    </motion.div>
  );
}

function GeometricShape({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <motion.div
      className={`absolute pointer-events-none ${className || ""}`}
      style={{ ...style, borderColor: "var(--color-accent)" }}
      animate={{
        rotate: [0, 360],
        scale: [1, 1.1, 1],
      }}
      transition={{
        rotate: { duration: 20, repeat: Infinity, ease: "linear" },
        scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
      }}
    />
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Floating code snippets */}
      {codeSnippets.map((snippet, i) => (
        <FloatingCode
          key={i}
          text={snippet}
          x={`${10 + (i * 8) % 80}%`}
          y={`${15 + (i * 12) % 70}%`}
          delay={i * 0.8}
          duration={6 + i * 0.5}
        />
      ))}

      {/* Geometric shapes */}
      <GeometricShape
        className="w-20 h-20 rounded-xl border opacity-[0.06]"
        style={{ left: "10%", top: "20%" }}
      />
      <GeometricShape
        className="w-14 h-14 rounded-full border opacity-[0.05]"
        style={{ right: "15%", top: "25%" }}
      />
      <GeometricShape
        className="w-10 h-10 border opacity-[0.04]"
        style={{ left: "20%", bottom: "25%", transform: "rotate(45deg)" }}
      />
      <GeometricShape
        className="w-16 h-16 rounded-lg border opacity-[0.05]"
        style={{ right: "20%", bottom: "20%" }}
      />

      {/* Hero content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-8"
          style={{
            background: "var(--color-surface)",
            borderColor: "var(--color-border)",
          }}
        >
          <span className="relative flex h-2 w-2">
            <span
              className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
              style={{ background: "var(--color-accent)" }}
            />
            <span
              className="relative inline-flex rounded-full h-2 w-2"
              style={{ background: "var(--color-accent)" }}
            />
          </span>
          <span className="text-xs font-medium" style={{ color: "var(--color-text-secondary)" }}>
            Available for new projects
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-4"
          style={{ color: "var(--color-text)" }}
        >
          {profile.name}
          <span
            className="block text-transparent bg-clip-text animate-gradient"
            style={{
              backgroundImage: "linear-gradient(135deg, var(--color-accent), var(--color-accent-secondary), var(--color-accent))",
            }}
          >
            {`< Developer />`}
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: "var(--color-text-secondary)" }}
        >
          {profile.tagline}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#projects" className="hire-btn text-sm sm:text-base">
            <span>View My Work</span>
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl text-sm sm:text-base font-semibold border transition-all duration-300 hover:scale-105"
            style={{
              borderColor: "var(--color-border-hover)",
              color: "var(--color-text)",
              background: "var(--color-surface)",
            }}
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 flex items-start justify-center p-1.5"
            style={{ borderColor: "var(--color-border-hover)" }}
          >
            <motion.div
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "var(--color-accent)" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { Project } from "@/config/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
  onSelect: (project: Project) => void;
}

function TechPill({ label, color }: { label: string; color: string }) {
  return (
    <span
      className="tech-pill"
      style={{
        color: color,
        borderColor: `${color}33`,
        background: `${color}11`,
      }}
    >
      {label}
    </span>
  );
}

export default function ProjectCard({ project, index, onSelect }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="glass-card shimmer-line group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onSelect(project)}
      style={{
        transform: isHovered ? `perspective(1000px) rotateX(${isHovered ? -2 : 0}deg) rotateY(${isHovered ? 2 : 0}deg)` : undefined,
      }}
    >
      {/* Accent top border */}
      <div
        className="h-1 w-full transition-all duration-500"
        style={{
          background: `linear-gradient(90deg, ${project.accent}, transparent)`,
          opacity: isHovered ? 1 : 0.3,
        }}
      />

      <div className="p-5 sm:p-6">
        {/* Project icon and name */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <motion.div
              className="w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold"
              style={{
                background: `${project.accent}18`,
                border: `1px solid ${project.accent}30`,
                color: project.accent,
              }}
              animate={isHovered ? { scale: 1.1, rotate: 6 } : { scale: 1, rotate: 0 }}
            >
              {project.name[0]}
            </motion.div>
            <div>
              <h3
                className="font-semibold text-base tracking-tight transition-colors duration-300"
                style={{ color: isHovered ? "var(--color-accent-bright)" : "var(--color-text)" }}
              >
                {project.name}
              </h3>
            </div>
          </div>

          {/* Arrow icon */}
          <motion.svg
            width={18}
            height={18}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            animate={isHovered ? { x: 3, y: -3 } : { x: 0, y: 0 }}
            style={{ color: isHovered ? "var(--color-accent)" : "var(--color-text-muted)" }}
            className="transition-colors duration-300 flex-shrink-0"
          >
            <path d="M7 17 17 7" />
            <path d="M7 7h10v10" />
          </motion.svg>
        </div>

        {/* Description */}
        <p
          className="text-sm leading-relaxed mb-4 transition-colors duration-300"
          style={{ color: "var(--color-text-secondary)" }}
        >
          {project.description}
        </p>

        {/* Tech stack pills */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.techStack.slice(0, 4).map((tech) => (
            <TechPill key={tech} label={tech} color={project.accent} />
          ))}
          {project.techStack.length > 4 && (
            <span className="tech-pill" style={{ color: "var(--color-text-muted)", borderColor: "var(--color-border)" }}>
              +{project.techStack.length - 4}
            </span>
          )}
        </div>

        {/* Links row (visible on hover) */}
        <motion.div
          initial={false}
          animate={{
            height: isHovered ? "auto" : 0,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="flex gap-3 pt-3 border-t" style={{ borderColor: "var(--color-border)" }}>
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg transition-all duration-300 hover:scale-105"
              style={{
                background: `${project.accent}18`,
                color: project.accent,
                border: `1px solid ${project.accent}30`,
              }}
            >
              <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              Live Demo
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg transition-all duration-300 hover:scale-105"
              style={{
                background: "var(--color-surface)",
                color: "var(--color-text-secondary)",
                border: "1px solid var(--color-border)",
              }}
            >
              <svg width={12} height={12} viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              Code
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

"use client";

import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "@/config/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: "rgba(0, 0, 0, 0.7)", backdropFilter: "blur(8px)" }}
            onClick={onClose}
          >
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card w-full max-w-2xl max-h-[85vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Accent bar */}
              <div
                className="h-1.5 w-full rounded-t-2xl"
                style={{
                  background: `linear-gradient(90deg, ${project.accent}, ${project.accent}66, transparent)`,
                }}
              />

              <div className="p-6 sm:p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold"
                      style={{
                        background: `${project.accent}18`,
                        border: `1px solid ${project.accent}30`,
                        color: project.accent,
                      }}
                    >
                      {project.name[0]}
                    </div>
                    <div>
                      <h2
                        className="text-xl font-bold tracking-tight"
                        style={{ color: "var(--color-text)" }}
                      >
                        {project.name}
                      </h2>
                      <p className="text-sm mt-0.5" style={{ color: "var(--color-text-muted)" }}>
                        {project.techStack.length} technologies
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={onClose}
                    className="w-8 h-8 rounded-lg flex items-center justify-center border transition-all duration-300 hover:scale-110"
                    style={{
                      background: "var(--color-surface)",
                      borderColor: "var(--color-border)",
                      color: "var(--color-text-secondary)",
                    }}
                  >
                    <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                </div>

                {/* Description */}
                <p
                  className="text-sm sm:text-base leading-relaxed mb-6"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {project.longDescription}
                </p>

                {/* Tech stack */}
                <div className="mb-6">
                  <h3
                    className="text-xs font-semibold uppercase tracking-widest mb-3"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="tech-pill text-xs"
                        style={{
                          color: project.accent,
                          borderColor: `${project.accent}33`,
                          background: `${project.accent}11`,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hire-btn text-center flex-1"
                    style={{
                      background: `linear-gradient(135deg, ${project.accent}, ${project.accent}cc)`,
                    }}
                  >
                    <span className="flex items-center justify-center gap-2">
                      <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                      View Live Demo
                    </span>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-xl text-sm font-semibold border text-center transition-all duration-300 hover:scale-105 flex-1"
                    style={{
                      borderColor: "var(--color-border-hover)",
                      color: "var(--color-text)",
                      background: "var(--color-surface)",
                    }}
                  >
                    <span className="flex items-center justify-center gap-2">
                      <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      View Source
                    </span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

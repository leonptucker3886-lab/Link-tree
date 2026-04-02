"use client";

import { motion } from "framer-motion";
import { profile } from "@/config/profile";

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="text-xs font-semibold uppercase tracking-[0.2em] mb-3 block"
            style={{ color: "var(--color-accent)" }}
          >
            About Me
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight mb-4"
            style={{ color: "var(--color-text)" }}
          >
            The Developer Behind the Code
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card p-6 sm:p-8"
          >
            <p
              className="text-base leading-relaxed mb-6"
              style={{ color: "var(--color-text-secondary)" }}
            >
              {profile.bio}
            </p>

            {/* Experience */}
            <h3
              className="text-xs font-semibold uppercase tracking-[0.15em] mb-4"
              style={{ color: "var(--color-text-muted)" }}
            >
              Experience
            </h3>
            <div className="space-y-4">
              {profile.experience.map((exp, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div
                    className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0"
                    style={{ background: "var(--color-accent)" }}
                  />
                  <div>
                    <p className="text-sm font-semibold" style={{ color: "var(--color-text)" }}>
                      {exp.role}
                    </p>
                    <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>
                      {exp.company} · {exp.period}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-6 sm:p-8"
          >
            <h3
              className="text-xs font-semibold uppercase tracking-[0.15em] mb-6"
              style={{ color: "var(--color-text-muted)" }}
            >
              Skills & Technologies
            </h3>
            <div className="space-y-6">
              {profile.skills.map((group) => (
                <div key={group.category}>
                  <p
                    className="text-sm font-semibold mb-3"
                    style={{ color: "var(--color-text)" }}
                  >
                    {group.category}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <motion.span
                        key={skill}
                        whileHover={{ scale: 1.05 }}
                        className="tech-pill"
                        style={{
                          color: "var(--color-accent)",
                          borderColor: "var(--color-border-hover)",
                          background: "var(--color-surface)",
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

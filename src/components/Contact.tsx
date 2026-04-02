"use client";

import { motion } from "framer-motion";
import { profile } from "@/config/profile";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span
            className="text-xs font-semibold uppercase tracking-[0.2em] mb-3 block"
            style={{ color: "var(--color-accent)" }}
          >
            Get In Touch
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight mb-4"
            style={{ color: "var(--color-text)" }}
          >
            Let&apos;s Build Something Amazing
          </h2>
          <p
            className="text-base sm:text-lg max-w-lg mx-auto mb-10"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Have a project in mind? I&apos;m always open to discussing new opportunities and creative ideas.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card p-6 sm:p-8 text-center"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="hire-btn text-sm sm:text-base w-full sm:w-auto"
            >
              <span className="flex items-center justify-center gap-2">
                <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <rect width={20} height={16} x={2} y={4} rx={2} />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                Send me an email
              </span>
            </a>

            <span className="text-sm" style={{ color: "var(--color-text-muted)" }}>
              or
            </span>

            <a
              href={profile.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl text-sm font-semibold border transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              style={{
                borderColor: "var(--color-border-hover)",
                color: "var(--color-text)",
                background: "var(--color-surface)",
              }}
            >
              <span className="flex items-center justify-center gap-2">
                <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Message on Facebook
              </span>
            </a>
          </div>

          <p
            className="text-xs mt-6"
            style={{ color: "var(--color-text-muted)" }}
          >
            Based in {profile.location} · Typically responds within 24 hours
          </p>
        </motion.div>
      </div>
    </section>
  );
}

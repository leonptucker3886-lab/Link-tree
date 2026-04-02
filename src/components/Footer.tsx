"use client";

import { motion } from "framer-motion";
import { profile } from "@/config/profile";

export default function Footer() {
  return (
    <footer
      className="relative border-t py-8"
      style={{ borderColor: "var(--color-border)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p
            className="text-xs"
            style={{ color: "var(--color-text-muted)" }}
          >
            &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>

          {/* Social - Facebook only */}
          <div className="flex items-center gap-4">
            <motion.a
              href={profile.facebook}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-9 h-9 rounded-lg flex items-center justify-center border transition-all duration-300"
              style={{
                background: "var(--color-surface)",
                borderColor: "var(--color-border)",
                color: "var(--color-text-secondary)",
              }}
              aria-label="Facebook"
            >
              <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </motion.a>

            <p
              className="text-xs tracking-widest uppercase"
              style={{ color: "var(--color-text-muted)" }}
            >
              Built with Next.js
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

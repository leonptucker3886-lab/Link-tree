"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const camelQuotes = [
  "I asked my camel for a ride. He said 'hump day' and walked away.",
  "A camel is a horse designed by a committee that had a deadline.",
  "My camel has better posture than most developers I know.",
];

export default function Camel() {
  const [quoteIndex, setQuoteIndex] = useState(0);

  const nextQuote = () => {
    setQuoteIndex((prev) => (prev + 1) % camelQuotes.length);
  };

  return (
    <section id="camel" className="relative py-24 sm:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span
            className="text-xs font-semibold uppercase tracking-[0.2em] mb-3 block"
            style={{ color: "var(--color-accent)" }}
          >
            Intermission
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight mb-4"
            style={{ color: "var(--color-text)" }}
          >
            Camel Break
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-card p-8 sm:p-10 text-center"
        >
          {/* Camel */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="text-8xl mb-6 select-none"
          >
            🐪
          </motion.div>

          {/* Quote */}
          <motion.p
            key={quoteIndex}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="text-base sm:text-lg italic mb-6 leading-relaxed"
            style={{ color: "var(--color-text-secondary)" }}
          >
            &ldquo;{camelQuotes[quoteIndex]}&rdquo;
          </motion.p>

          <button
            onClick={nextQuote}
            className="px-5 py-2 rounded-xl text-sm font-semibold border transition-all duration-300 hover:scale-105 mb-8"
            style={{
              borderColor: "var(--color-border-hover)",
              color: "var(--color-text)",
              background: "var(--color-surface)",
            }}
          >
            Another One
          </button>

          {/* Divider */}
          <div
            className="w-16 h-px mx-auto mb-8"
            style={{ background: "var(--color-border)" }}
          />

          {/* Pun */}
          <p
            className="text-sm sm:text-base font-medium"
            style={{ color: "var(--color-accent)" }}
          >
            Why did the camel build this portfolio?
          </p>
          <p
            className="text-lg sm:text-xl font-bold mt-2"
            style={{ color: "var(--color-text)" }}
          >
            Because he wanted to show he could handle any <em>hump</em> in the road.
          </p>
          <p className="text-xs mt-4" style={{ color: "var(--color-text-muted)" }}>
            (You camel believe you scrolled this far)
          </p>
        </motion.div>
      </div>
    </section>
  );
}

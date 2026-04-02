"use client";

import { motion } from "framer-motion";

const services = [
  "Inventory Systems",
  "Customer Portals",
  "Custom Forms",
  "Marketplaces",
  "Dashboards",
  "Automations",
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Large Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-64 h-64 sm:w-80 sm:h-80 mx-auto mb-12 rounded-2xl flex items-center justify-center overflow-hidden"
            style={{
              background: "linear-gradient(135deg, var(--color-accent), var(--color-accent-secondary))",
            }}
          >
            <svg width={160} height={160} viewBox="0 0 100 100" fill="none">
              {/* Camel body */}
              <ellipse cx="50" cy="60" rx="22" ry="12" fill="rgba(255,255,255,0.3)" />
              {/* Hump */}
              <ellipse cx="56" cy="46" rx="9" ry="11" fill="rgba(255,255,255,0.35)" />
              {/* Head */}
              <circle cx="30" cy="42" r="7" fill="rgba(255,255,255,0.3)" />
              {/* Neck */}
              <path d="M35 50 Q33 44 35 36" stroke="rgba(255,255,255,0.3)" strokeWidth="5" fill="none" strokeLinecap="round" />
              {/* Legs */}
              <rect x="35" y="68" width="4" height="14" rx="2" fill="rgba(255,255,255,0.25)" />
              <rect x="43" y="68" width="4" height="14" rx="2" fill="rgba(255,255,255,0.25)" />
              <rect x="53" y="68" width="4" height="14" rx="2" fill="rgba(255,255,255,0.25)" />
              <rect x="61" y="68" width="4" height="14" rx="2" fill="rgba(255,255,255,0.25)" />
              {/* Tail */}
              <path d="M72 54 Q78 48 76 38" stroke="rgba(255,255,255,0.3)" strokeWidth="3" fill="none" strokeLinecap="round" />
              {/* L */}
              <path d="M18 16 L18 36 L28 36" stroke="white" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              {/* T */}
              <path d="M38 16 L54 16" stroke="white" strokeWidth="5" fill="none" strokeLinecap="round" />
              <path d="M46 16 L46 36" stroke="white" strokeWidth="5" fill="none" strokeLinecap="round" />
            </svg>
          </motion.div>

          {/* Heading */}
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6"
            style={{ color: "var(--color-text)" }}
          >
            If You Can Dream It, I Can Build It
          </h2>
          <p
            className="text-base sm:text-lg max-w-xl mx-auto mb-10"
            style={{ color: "var(--color-text-secondary)" }}
          >
            From scrappy prototypes to production-grade apps — I turn messy ideas into working products.
          </p>

          {/* Services Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 max-w-lg mx-auto">
            {services.map((service, i) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="glass-card p-4 text-center rounded-xl"
              >
                <p className="text-sm font-medium" style={{ color: "var(--color-text)" }}>
                  {service}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Bottom tagline */}
          <p
            className="text-xs mt-10"
            style={{ color: "var(--color-text-muted)" }}
          >
            Inventory, forms, customer portals, marketplaces — virtually anything you need.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

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

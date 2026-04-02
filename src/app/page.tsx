"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";
import CursorFollower from "@/components/CursorFollower";

function SectionDivider() {
  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="section-divider"
    />
  );
}

export default function Home() {
  return (
    <main className="min-h-screen relative mesh-bg noise">
      <ParticleBackground />
      <CursorFollower />
      <Header />

      <div className="relative z-10">
        <Hero />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Contact />
        <Footer />
      </div>

      {/* Floating Hire Me button - mobile only */}
      <motion.a
        href="mailto:leonptucker3886@gmail.com"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="floating-hire sm:hidden hire-btn"
      >
        <span className="flex items-center gap-2 text-sm">
          <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
            <path d="m15 5 4 4" />
          </svg>
          Hire Me
        </span>
      </motion.a>
    </main>
  );
}

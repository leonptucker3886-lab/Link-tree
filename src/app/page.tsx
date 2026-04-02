"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import MiniGames from "@/components/MiniGames";
import Camel from "@/components/Camel";
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
        <MiniGames />
        <SectionDivider />
        <Camel />
        <Footer />
      </div>
    </main>
  );
}

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/providers/ThemeProvider";
import type { ThemeId } from "@/providers/ThemeProvider";
import { profile } from "@/config/profile";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Examples of Geekdom", href: "#projects" },
  { label: "Mini Games", href: "#games" },
  { label: "Contact", href: "#contact" },
];

function ThemeSwitcher() {
  const { theme, setTheme, themes } = useTheme();
  const [open, setOpen] = useState(false);
  const [spinning, setSpinning] = useState(false);

  const currentTheme = themes.find((t) => t.id === theme)!;

  const handleSwitch = (id: ThemeId) => {
    setSpinning(true);
    setTimeout(() => setSpinning(false), 500);
    setTheme(id);
    setOpen(false);
  };

  return (
    <div className="relative">
      <motion.button
        onClick={() => setOpen(!open)}
        className="w-9 h-9 rounded-lg flex items-center justify-center text-lg border transition-all duration-300"
        style={{
          background: "var(--color-surface)",
          borderColor: "var(--color-border)",
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{ rotate: spinning ? 360 : 0 }}
        transition={{ duration: 0.5 }}
        aria-label="Toggle theme"
      >
        {currentTheme.icon}
      </motion.button>

      <AnimatePresence>
        {open && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 top-full mt-2 z-50 rounded-xl border p-2 min-w-[180px]"
              style={{
                background: "var(--color-bg-raised)",
                borderColor: "var(--color-border)",
                boxShadow: "0 16px 48px rgba(0,0,0,0.3)",
              }}
            >
              {themes.map((t) => (
                <button
                  key={t.id}
                  onClick={() => handleSwitch(t.id)}
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 text-left"
                  style={{
                    background: theme === t.id ? "var(--color-surface-hover)" : "transparent",
                    color: theme === t.id ? "var(--color-accent)" : "var(--color-text-secondary)",
                  }}
                >
                  <span className="text-base">{t.icon}</span>
                  <span>{t.name}</span>
                  {theme === t.id && (
                    <motion.span
                      layoutId="theme-indicator"
                      className="ml-auto w-1.5 h-1.5 rounded-full"
                      style={{ background: "var(--color-accent)" }}
                    />
                  )}
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

function ContactPopup({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="relative glass-card p-8 text-center max-w-sm w-full"
      >
        <h3 className="text-xl font-bold mb-2" style={{ color: "var(--color-text)" }}>
          Let&apos;s Connect
        </h3>
        <p className="text-sm mb-6" style={{ color: "var(--color-text-secondary)" }}>
          Pick your poison
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href={`mailto:${profile.email}`}
            className="flex flex-col items-center gap-2 p-4 rounded-xl border transition-all duration-300 hover:scale-105"
            style={{
              borderColor: "var(--color-border-hover)",
              background: "var(--color-surface)",
            }}
          >
            <svg width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <rect width={20} height={16} x={2} y={4} rx={2} />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            <span className="text-xs font-medium" style={{ color: "var(--color-text)" }}>Email</span>
          </a>
          <a
            href={profile.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 p-4 rounded-xl border transition-all duration-300 hover:scale-105"
            style={{
              borderColor: "var(--color-border-hover)",
              background: "var(--color-surface)",
            }}
          >
            <svg width={28} height={28} viewBox="0 0 24 24" fill="var(--color-accent)">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            <span className="text-xs font-medium" style={{ color: "var(--color-text)" }}>Facebook</span>
          </a>
        </div>
        <button
          onClick={onClose}
          className="mt-6 text-xs underline"
          style={{ color: "var(--color-text-muted)" }}
        >
          nevermind
        </button>
      </motion.div>
    </motion.div>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    if (href === "#contact") {
      e.preventDefault();
      setContactOpen(true);
      setMobileOpen(false);
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? "var(--color-bg-glass)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid var(--color-border)" : "1px solid transparent",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2 group">
              <motion.div
                className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm"
                style={{
                  background: "linear-gradient(135deg, var(--color-accent), var(--color-accent-secondary))",
                  color: "var(--color-bg)",
                }}
                whileHover={{ rotate: 12, scale: 1.1 }}
              >
                LT
              </motion.div>
              <span
                className="font-semibold text-sm tracking-tight hidden sm:block transition-colors duration-300"
                style={{ color: "var(--color-text)" }}
              >
                Leon Tucker
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(link.href, e)}
                  className="px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-[var(--color-surface)]"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-2 sm:gap-3">
              <ThemeSwitcher />

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center border"
                style={{
                  background: "var(--color-surface)",
                  borderColor: "var(--color-border)",
                }}
                aria-label="Toggle menu"
              >
                <div className="flex flex-col gap-1">
                  <motion.span
                    animate={mobileOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
                    className="block w-4 h-0.5 origin-center"
                    style={{ background: "var(--color-text)" }}
                  />
                  <motion.span
                    animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                    className="block w-4 h-0.5"
                    style={{ background: "var(--color-text)" }}
                  />
                  <motion.span
                    animate={mobileOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
                    className="block w-4 h-0.5 origin-center"
                    style={{ background: "var(--color-text)" }}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 pt-20 md:hidden"
            style={{ background: "var(--color-bg-glass)", backdropFilter: "blur(20px)" }}
          >
            <nav className="flex flex-col items-center gap-4 p-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    if (link.href === "#contact") {
                      handleNavClick(link.href, e);
                    } else {
                      setMobileOpen(false);
                    }
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-lg font-medium py-2"
                  style={{ color: "var(--color-text)" }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Popup */}
      <AnimatePresence>
        {contactOpen && <ContactPopup onClose={() => setContactOpen(false)} />}
      </AnimatePresence>
    </>
  );
}

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/providers/ThemeProvider";
import type { ThemeId } from "@/providers/ThemeProvider";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
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

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

              <a
                href="mailto:leon@example.com"
                className="hire-btn hidden sm:inline-flex items-center text-sm"
              >
                <span>Let&apos;s Build Together</span>
              </a>

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
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-lg font-medium py-2"
                  style={{ color: "var(--color-text)" }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="mailto:leon@example.com"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="hire-btn mt-4 text-center"
              >
                <span>Let&apos;s Build Together</span>
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

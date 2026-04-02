"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorFollower() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 400 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);
  const visibleRef = useRef(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!visibleRef.current) visibleRef.current = true;
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const leave = () => {
      visibleRef.current = false;
      cursorX.set(-100);
      cursorY.set(-100);
    };

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-[9999] hidden lg:block mix-blend-difference"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
          border: "1.5px solid var(--color-accent-bright)",
          opacity: 0.5,
        }}
      />
      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999] hidden lg:block"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          background: "var(--color-accent-bright)",
          boxShadow: "0 0 12px var(--color-accent)",
        }}
      />
    </>
  );
}

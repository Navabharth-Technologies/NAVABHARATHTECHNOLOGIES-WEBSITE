"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    setMounted(true);
    
    // Only enable on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = window.getComputedStyle(target).cursor === "pointer" || target.tagName.toLowerCase() === "a" || target.tagName.toLowerCase() === "button";
      setIsPointer(isClickable);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  if (!mounted) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border border-[#0ea5e9]/50 bg-[#0ea5e9]/10 pointer-events-none z-[100] hidden md:flex items-center justify-center backdrop-blur-[2px]"
      style={{
        x: smoothX,
        y: smoothY,
      }}
      animate={{
        scale: isPointer ? 1.5 : 1,
        backgroundColor: isPointer ? "rgba(14, 165, 233, 0.2)" : "rgba(14, 165, 233, 0.1)",
      }}
      transition={{ duration: 0.2 }}
    >
      <motion.div 
        className="w-1.5 h-1.5 bg-[#0ea5e9] rounded-full"
        animate={{
          scale: isPointer ? 0 : 1,
          opacity: isPointer ? 0 : 1
        }}
      />
    </motion.div>
  );
}

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

export default function PageTransition({ children }: { children: ReactNode }) {
  // Premium SaaS / Apple-like easing curve
  const premiumEasing = [0.22, 1, 0.36, 1] as const;

  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        exit={{ opacity: 0, y: -20, filter: "blur(6px)" }}
        transition={{
          duration: 0.6,
          ease: premiumEasing,
        }}
        className="transform-gpu will-change-transform min-h-screen"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

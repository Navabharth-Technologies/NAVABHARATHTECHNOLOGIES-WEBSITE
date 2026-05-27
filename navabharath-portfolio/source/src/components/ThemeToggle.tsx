"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-14 h-7 rounded-full bg-slate-200 dark:bg-slate-800 animate-pulse" />;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative flex items-center w-14 h-7 rounded-full bg-slate-200 dark:bg-slate-700 p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]"
      aria-label="Toggle theme"
    >
      <div className="absolute inset-0 flex justify-between items-center px-1.5 pointer-events-none">
        <Moon className="w-3.5 h-3.5 text-slate-400 opacity-100 dark:opacity-0 transition-opacity" />
        <Sun className="w-3.5 h-3.5 text-amber-500 opacity-0 dark:opacity-100 transition-opacity" />
      </div>
      <motion.div
        animate={{ x: theme === "dark" ? 28 : 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="w-5 h-5 bg-white rounded-full shadow-sm z-10 flex items-center justify-center"
      >
        {theme === "dark" ? <Sun className="w-3 h-3 text-amber-500" /> : <Moon className="w-3 h-3 text-slate-700" />}
      </motion.div>
    </button>
  );
}

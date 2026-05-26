"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative py-12 border-t border-slate-200 dark:border-slate-800/50 bg-slate-50 dark:bg-[#020617] transition-colors duration-500 overflow-hidden">
      {/* Mini animated divider line */}
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#0ea5e9] to-transparent opacity-50"
      />
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        <a href="/navabharath-portfolio/" className="group mb-6">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="relative w-20 h-20 transition-transform duration-300"
          >
            <div className="absolute inset-0 bg-[#0ea5e9]/20 dark:bg-[#38bdf8]/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Image 
              src="/navabharath-portfolio/logo-wbg.png" 
              alt="NAVABHARATH TECHNOLOGIES Logo" 
              fill 
              className="object-contain"
              sizes="80px"
            />
          </motion.div>
        </a>
        <p className="text-center text-slate-500 dark:text-slate-400 text-sm transition-colors duration-500">
          © {new Date().getFullYear()} NAVABHARATH TECHNOLOGIES. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

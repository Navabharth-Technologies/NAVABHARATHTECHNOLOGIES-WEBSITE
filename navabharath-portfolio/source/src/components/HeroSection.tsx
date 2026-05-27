"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Code, Layout, Smartphone, TrendingUp } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const FloatingBadge = ({ icon: Icon, text, delay, className }: { icon: any, text: string, delay: number, className: string }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
      transition={{ 
        opacity: { duration: 0.8, delay },
        scale: { duration: 0.8, delay },
        y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay }
      }}
      className={`absolute hidden md:flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-slate-700 dark:text-slate-300 ${className}`}
    >
      <Icon className="w-4 h-4 text-[#D48D30] dark:text-[#F5A623]" />
      <span>{text}</span>
    </motion.div>
  );

  return (
    <section className="relative min-h-screen flex items-end justify-center pb-12 pt-24 overflow-hidden transition-colors duration-500 bg-[#f8fbff] dark:bg-[#020617]">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 bg-black mt-16 md:mt-20">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-contain object-center opacity-100 dark:opacity-80"
        >
          <source src="/navabharath-portfolio/brand-cinematic-impact.mp4" type="video/mp4" />
        </video>
        {/* Gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10 w-full flex justify-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl w-full flex flex-col items-center"
        >
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#portfolio"
              className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-[#0F203C] dark:bg-[#D48D30] px-10 font-medium text-white dark:text-[#0F203C] duration-300 shadow-xl shadow-[#0F203C]/30 dark:shadow-[#D48D30]/30 border border-[#0F203C]/50 dark:border-[#D48D30]/50"
            >
              <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                <div className="relative h-full w-8 bg-white/20" />
              </div>
              <span className="flex items-center gap-2">
                View Our Clients
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="inline-flex h-14 items-center justify-center rounded-full border border-slate-300 dark:border-slate-700 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-10 font-medium text-[#0F203C] dark:text-white transition-colors hover:bg-white dark:hover:bg-slate-800 shadow-xl"
            >
              Start Your Project
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

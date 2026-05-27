"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Globe, Smartphone, Megaphone, Cpu, PhoneCall } from "lucide-react";

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"loading" | "textFlow" | "curtain">("loading");

  useEffect(() => {
    if (phase !== "loading") return;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setPhase("textFlow"), 200);
          return 100;
        }
        const increment = prev > 85 ? 1 : prev > 40 ? 3 : 2;
        return Math.min(prev + increment, 100);
      });
    }, 30);

    return () => clearInterval(timer);
  }, [phase]);

  useEffect(() => {
    if (phase === "textFlow") {
      const timer = setTimeout(() => {
        setPhase("curtain");
      }, 2000); // Give the text flow 2 seconds
      return () => clearTimeout(timer);
    }
    
    if (phase === "curtain") {
      const timer = setTimeout(() => {
        onComplete();
      }, 1200); // Wait for the curtain to rise
      return () => clearTimeout(timer);
    }
  }, [phase, onComplete]);

  // Features for bottom strip
  const features = [
    { name: "Web Development", icon: Globe },
    { name: "Mobile Apps", icon: Smartphone },
    { name: "Digital Marketing", icon: Megaphone },
    { name: "AI Solutions", icon: Cpu },
    { name: "IVR Solutions", icon: PhoneCall },
  ];

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-[#020617] overflow-hidden font-sans origin-top"
      initial={{ y: 0 }}
      animate={{ 
        y: phase === "curtain" ? "-100vh" : 0,
        filter: phase === "curtain" ? "blur(10px)" : "blur(0px)",
        opacity: phase === "curtain" ? 0 : 1
      }}
      transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
      style={{ pointerEvents: phase === "loading" ? 'auto' : 'none' }}
    >
      {/* BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0F172A] via-[#081120] to-[#020617] -z-20" />
      
      {/* Cyber Grid */}
      <div 
        className="absolute inset-0 -z-10 opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 198, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 198, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          transform: 'perspective(500px) rotateX(60deg) translateY(-100px) translateZ(-200px)',
        }}
      />

      {/* Moving Light Fog / Bloom */}
      <motion.div 
        animate={{ opacity: [0.1, 0.25, 0.1], scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00C6FF]/10 rounded-full blur-[150px] -z-10"
      />

      {/* TOP DECORATION */}
      <motion.div 
        animate={{ opacity: phase === "loading" ? 0.5 : 0 }}
        className="w-full h-24 flex justify-center items-start pt-8"
      >
         <div className="w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#00C6FF] to-transparent relative">
            <motion.div 
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 left-1/2 w-32 h-[2px] bg-[#00C6FF] shadow-[0_0_10px_#00C6FF] -translate-x-1/2"
            />
         </div>
      </motion.div>

      {/* CENTERPIECE */}
      <div className="relative flex flex-col items-center justify-center flex-1 w-full -mt-20">
        
        {/* LOGO & RINGS CONTAINER (Perfectly Centered) */}
        <motion.div 
          animate={{ 
             opacity: phase === "loading" ? 1 : 0, 
             scale: phase === "loading" ? 1 : 0.8 
          }}
          transition={{ duration: 0.8 }}
          className="relative flex items-center justify-center mb-10 w-[400px] h-[400px]"
        >
          {/* HUD Rings & Particles */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {/* Ring 1 - Outer Dashed */}
            <motion.svg 
              animate={{ rotate: 360 }} 
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute w-[400px] h-[400px] opacity-30" 
              viewBox="0 0 100 100"
            >
              <circle cx="50" cy="50" r="48" fill="none" stroke="#00C6FF" strokeWidth="0.5" strokeDasharray="4 6" />
            </motion.svg>
            
            {/* Ring 2 - Inner Solid with glowing edge */}
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute w-[320px] h-[320px] rounded-full border border-[#3B82F6]/20 border-l-[#009DFF] border-r-[#FF9F1C]/50 shadow-[inset_0_0_20px_rgba(0,157,255,0.1)]"
            />

            {/* Ring 3 - Tech accents */}
            <motion.svg 
              animate={{ rotate: 360 }} 
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute w-[280px] h-[280px] opacity-40" 
              viewBox="0 0 100 100"
            >
              <circle cx="50" cy="50" r="49" fill="none" stroke="#FF9F1C" strokeWidth="0.5" strokeDasharray="20 40 10 30" />
              <circle cx="50" cy="2" r="2" fill="#FFB347" />
              <circle cx="50" cy="98" r="2" fill="#00C6FF" />
            </motion.svg>
            
            {/* Central soft pulse glow */}
            <motion.div 
              animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-[250px] h-[250px] rounded-full bg-gradient-to-tr from-[#00C6FF]/20 to-[#3B82F6]/20 blur-[40px]"
            />
          </div>

          {/* Breathing Logo */}
          <motion.div 
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 w-48 h-48 md:w-60 md:h-60 overflow-hidden"
          >
            <Image 
              src="/navabharath-portfolio/logo-wbg.png" 
              alt="NAVABHARATH TECHNOLOGIES Logo" 
              fill 
              className="object-contain drop-shadow-[0_0_25px_rgba(0,198,255,0.5)]" 
              priority
              sizes="240px"
            />
            {/* Light Sweep Reflection */}
            <motion.div 
              animate={{ left: ['-100%', '200%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", repeatDelay: 2 }}
              className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg] blur-[1px]"
            />
          </motion.div>
        </motion.div>

        {/* TYPOGRAPHY / TEXT FLOW */}
        <div className="text-center flex flex-col items-center justify-center relative z-20 h-[120px]">
          {/* Main Title */}
          <motion.h1 
            initial={{ opacity: 0, letterSpacing: "0px" }}
            animate={
              phase === "loading" 
                ? { opacity: 1, letterSpacing: "2px", scale: 1, y: 0 }
                : { opacity: 1, letterSpacing: "6px", scale: 1.2, y: -80 } // Moves up and grows during Text Flow
            }
            transition={{ duration: 1.5, ease: "easeOut" }}
            className={`text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00C6FF] to-white mb-2 drop-shadow-[0_0_15px_rgba(0,198,255,0.4)] ${phase === "textFlow" ? "bg-[length:200%_auto] animate-[bg-pos_2s_linear_infinite]" : ""}`}
          >
            NAVABHARATH
          </motion.h1>
          
          {/* Subtitle */}
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={
              phase === "loading" 
                ? { opacity: 1, letterSpacing: "0.4em", scale: 1, y: 0 }
                : { opacity: 1, letterSpacing: "0.8em", scale: 1.2, y: -70, color: "#00C6FF" } // Matches title movement
            }
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-lg md:text-xl font-medium text-[#3B82F6] tracking-[0.4em] mb-6 drop-shadow-[0_0_8px_rgba(59,130,246,0.6)] uppercase ml-2"
          >
            TECHNOLOGIES
          </motion.h2>

          {/* Tagline (Fades out during text flow) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: phase === "loading" ? 1 : 0, y: phase === "loading" ? 0 : 20 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col items-center gap-2"
          >
            <p className="text-xs md:text-sm font-mono text-[#FFB347] tracking-[0.2em] flex items-center gap-4">
              <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#FFB347]/50" />
              INNOVATE • BUILD • ELEVATE
              <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#FFB347]/50" />
            </p>
            <p className="text-[10px] md:text-xs font-medium text-[#00C6FF]/80 tracking-[0.15em] uppercase">
              Smarter Solutions For Better Future
            </p>
          </motion.div>
        </div>

        {/* PROGRESS BAR SECTION */}
        <motion.div 
          animate={{ opacity: phase === "loading" ? 1 : 0, y: phase === "loading" ? 0 : 40 }}
          transition={{ duration: 0.8 }}
          className="mt-8 w-full max-w-md px-6 z-10 flex flex-col items-center"
        >
          <div className="flex justify-between w-full mb-3 text-[10px] md:text-xs font-mono font-bold text-[#00C6FF] tracking-widest">
            <span>SYSTEM_INITIATING</span>
            <span>{progress}%</span>
          </div>
          
          <div className="relative w-full h-1.5 bg-[#0F172A] rounded-full overflow-hidden border border-[#1E293B] shadow-[0_0_20px_rgba(0,0,0,0.8)] backdrop-blur-sm">
            <motion.div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#3B82F6] via-[#00C6FF] to-[#00C6FF] rounded-full"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute right-0 top-0 bottom-0 w-8 bg-white shadow-[0_0_15px_#fff,0_0_25px_#00C6FF] blur-[1px]" />
            </motion.div>
          </div>
        </motion.div>

      </div>

      {/* BOTTOM FEATURE STRIP */}
      <motion.div 
        animate={{ opacity: phase === "loading" ? 1 : 0, y: phase === "loading" ? 0 : 40 }}
        transition={{ duration: 0.8 }}
        className="w-full pb-8 pt-4 px-4 z-10"
      >
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center md:justify-between items-center gap-4 md:gap-8 border-t border-[#1E293B]/60 pt-8">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center gap-3 group">
              <div className="w-12 h-12 rounded-full border border-[#1E293B] bg-[#081120]/80 backdrop-blur-md flex items-center justify-center group-hover:border-[#00C6FF]/60 group-hover:shadow-[0_0_20px_rgba(0,198,255,0.25)] transition-all duration-500">
                <feature.icon className="w-5 h-5 text-[#3B82F6] group-hover:text-[#00C6FF] transition-colors duration-500" />
              </div>
              <span className="text-[10px] uppercase tracking-[0.15em] text-slate-500 font-semibold group-hover:text-slate-300 transition-colors duration-500">
                {feature.name}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Global Style for Text Flow Gradient Animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes bg-pos {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
      `}} />
    </motion.div>
  );
}

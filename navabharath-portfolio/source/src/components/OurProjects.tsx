"use client";

import { motion } from "framer-motion";

export default function OurProjects() {
  const baseProjects = [
    { name: "Tokens Boy", url: "https://tokensboy.com/", img: "/assets/Tokens Boy.png" },
    { name: "Jkdmart", url: "https://jkdmart.com/", img: "/assets/Jkdmart.png" },
    { name: "VYAPAROne", url: "#", img: "/assets/VYAPAROne.png" },
  ];
  
  // Repeat the base projects to ensure the marquee content is wider than the screen, preventing empty gaps
  const projects = [...baseProjects, ...baseProjects, ...baseProjects, ...baseProjects];

  return (
    <section className="py-24 relative bg-white dark:bg-[#060c1c] overflow-hidden transition-colors duration-500">
      {/* Background Shapes */}
      <div className="absolute w-[400px] h-[400px] rounded-full bg-[#1a3c87]/5 dark:bg-[#1a3c87]/20 blur-[90px] -top-[100px] -right-[80px] pointer-events-none" />
      <div className="absolute w-[300px] h-[300px] rounded-full bg-[#667eea]/5 dark:bg-[#667eea]/20 blur-[90px] -bottom-[80px] -left-[60px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-[#0b1220] dark:text-white mb-4 transition-colors duration-500"
          >
            Our <span className="text-gradient">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto transition-colors duration-500"
          >
            Real solutions delivered for real businesses
          </motion.p>
        </div>

        {/* Marquee Container */}
        <div className="w-full overflow-hidden whitespace-nowrap relative py-5">
          <style dangerouslySetInnerHTML={{
            __html: `
              @keyframes marqueeScroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(calc(-50% - 20px)); }
              }
              .animate-marquee {
                animation: marqueeScroll 25s linear infinite;
              }
              .animate-marquee:hover {
                animation-play-state: paused;
              }
            `
          }} />
          
          <div className="inline-flex gap-[40px] animate-marquee w-max">
            {/* Set 1 */}
            {projects.map((project, index) => (
              <div key={`set1-${index}`} className="flex-none w-[180px] h-[120px] bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 flex items-center justify-center p-5 transition-transform hover:scale-105 hover:shadow-md">
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="w-full h-full flex items-center justify-center">
                  <img src={project.img} alt={`${project.name} Project`} className="max-w-full max-h-full object-contain" loading="lazy" />
                </a>
              </div>
            ))}
            {/* Set 2 (duplicate for seamless loop) */}
            {projects.map((project, index) => (
              <div key={`set2-${index}`} className="flex-none w-[180px] h-[120px] bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 flex items-center justify-center p-5 transition-transform hover:scale-105 hover:shadow-md">
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="w-full h-full flex items-center justify-center">
                  <img src={project.img} alt={`${project.name} Project`} className="max-w-full max-h-full object-contain" loading="lazy" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

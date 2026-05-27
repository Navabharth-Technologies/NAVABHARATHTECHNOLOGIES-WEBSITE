"use client";

import { motion } from "framer-motion";

export default function ProcessTimeline() {
  const steps = [
    { num: "01", title: "Understand the Brand", desc: "We dive deep into your goals, audience, and market." },
    { num: "02", title: "Build or Maintain", desc: "Creating and optimizing digital platforms like websites and apps." },
    { num: "03", title: "Manage Social Presence", desc: "Crafting engaging content and managing social channels." },
    { num: "04", title: "Improve User Experience", desc: "Ensuring smooth, accessible, and fast digital interactions." },
    { num: "05", title: "Continuous Support", desc: "Ongoing maintenance, updates, and digital strategy." },
  ];

  return (
    <section className="py-24 relative bg-[#f8fbff] dark:bg-[#020617] overflow-hidden transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-[#0F203C] dark:text-white transition-colors duration-500"
          >
            How We <span className="text-gradient">Support</span> Our Clients
          </motion.h2>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 dark:bg-slate-800 -translate-y-1/2 z-0 transition-colors duration-500" />
          
          {/* Connecting Line (Mobile) */}
          <div className="lg:hidden absolute top-0 bottom-0 left-[27px] w-0.5 bg-slate-200 dark:bg-slate-800 z-0 transition-colors duration-500" />

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-6 justify-between relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="flex lg:flex-col items-start lg:items-center relative lg:w-1/5"
              >
                {/* Number Badge */}
                <div className="w-14 h-14 shrink-0 rounded-full glass-card flex items-center justify-center text-xl font-bold text-[#D48D30] dark:text-[#F5A623] mb-0 lg:mb-6 shadow-[0_0_20px_rgba(212,141,48,0.2)] transition-colors">
                  {step.num}
                </div>
                
                {/* Content */}
                <div className="ml-6 lg:ml-0 lg:text-center">
                  <h4 className="text-lg font-bold text-[#0F203C] dark:text-white mb-2 transition-colors duration-500">{step.title}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 transition-colors duration-500">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

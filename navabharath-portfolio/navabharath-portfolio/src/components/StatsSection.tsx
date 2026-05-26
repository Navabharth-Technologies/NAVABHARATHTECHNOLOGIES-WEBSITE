"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Counter = ({ value, label }: { value: number; label: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = value / (duration / 16); // 60fps
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center p-6 text-center">
      <div className="text-4xl md:text-5xl font-bold mb-2 text-[#0F203C] dark:text-white flex items-center transition-colors duration-500">
        {count}
        <span className="text-[#D48D30] ml-1">+</span>
      </div>
      <div className="text-sm md:text-base text-slate-600 dark:text-slate-400 font-medium max-w-[150px] transition-colors duration-500">{label}</div>
    </div>
  );
};

export default function StatsSection() {
  const stats = [
    { value: 5, label: "Active Clients" },
    { value: 20, label: "Websites Maintained" },
    { value: 50, label: "Social Media Managed" },
    { value: 10, label: "Custom Applications" },
    { value: 100, label: "Ongoing Digital Support" },
  ];

  return (
    <section className="py-20 relative z-10 border-y border-slate-200 dark:border-slate-800/50 bg-white/50 dark:bg-[#060c1c]/50 transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 divide-x divide-slate-200 dark:divide-slate-800/50 transition-colors duration-500">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="first:border-l-0"
            >
              <Counter value={stat.value} label={stat.label} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

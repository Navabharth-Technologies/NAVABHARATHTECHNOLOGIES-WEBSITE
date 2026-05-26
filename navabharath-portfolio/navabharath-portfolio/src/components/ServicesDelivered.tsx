"use client";

import { motion, Variants } from "framer-motion";
import { MonitorPlay, Smartphone, Share2, Eye, TrendingUp } from "lucide-react";

export default function ServicesDelivered() {
  const services = [
    { icon: MonitorPlay, name: "Website Maintenance", desc: "Ongoing updates, security, and performance optimization." },
    { icon: Share2, name: "Social Media Management", desc: "Engaging content, community building, and consistent branding." },
    { icon: Smartphone, name: "Mobile Application Development", desc: "Custom mobile app solutions for iOS and Android platforms." },
    { icon: Eye, name: "Brand Visibility", desc: "Increasing online presence and reaching the right audience." },
    { icon: TrendingUp, name: "Digital Growth Support", desc: "Long-term strategies to scale your digital operations." },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="py-24 relative bg-white/50 dark:bg-slate-900/20 border-y border-slate-200 dark:border-slate-800/50 transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-[#0F203C] dark:text-white mb-4 transition-colors duration-500"
          >
            Services We <span className="text-gradient">Deliver</span>
          </motion.h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-wrap justify-center gap-6"
        >
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.05 }}
                className="glass-card p-6 rounded-2xl w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex flex-col items-center text-center group cursor-default"
              >
                <div className="w-16 h-16 rounded-full bg-[#0F203C]/5 dark:bg-[#0F203C]/50 border border-[#0F203C]/10 dark:border-[#0F203C] flex items-center justify-center mb-4 group-hover:bg-[#0F203C]/10 dark:group-hover:bg-[#0F203C] transition-colors">
                  <Icon className="w-8 h-8 text-[#D48D30] dark:text-[#F5A623]" />
                </div>
                <h4 className="text-lg font-semibold text-[#0F203C] dark:text-white mb-2 transition-colors duration-500">{service.name}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 transition-colors duration-500">{service.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

export default function CTASection() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-50 dark:bg-[#060c1c] transition-colors duration-500">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D48D30]/5 dark:bg-[#0F203C]/20 rounded-full blur-[120px] pointer-events-none transition-colors duration-500" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-white/80 dark:bg-[#0b1329]/80 border border-slate-200 dark:border-[#0F203C]/50 p-10 md:p-16 rounded-[2rem] text-center shadow-lg shadow-slate-200/50 dark:shadow-2xl backdrop-blur-sm transition-colors duration-500"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-[#0F203C] dark:text-white mb-6 transition-colors duration-500"
          >
            Want to Build Your <span className="text-gradient">Digital Presence?</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto transition-colors duration-500"
          >
            Whether you need a new website, a mobile app, or a complete digital marketing strategy, our team is ready to help you grow.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/#contact"
              className="inline-flex h-14 w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[#0F203C] dark:bg-[#D48D30] px-8 font-medium text-white dark:text-[#0F203C] transition-colors hover:bg-[#132644] dark:hover:bg-[#F5A623] shadow-lg shadow-[#0F203C]/20 dark:shadow-[#D48D30]/20"
            >
              <Mail className="w-4 h-4" />
              Contact Us
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/#services"
              className="group inline-flex h-14 w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 px-8 font-medium text-[#0F203C] dark:text-white transition-colors hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              Explore Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

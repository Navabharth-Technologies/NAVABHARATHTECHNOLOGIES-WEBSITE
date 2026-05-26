"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Client } from "@/data/clients";

export default function ClientCard({ client }: { client: Client }) {
  const Icon = client.icon;

  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group relative h-full rounded-2xl glass-card glass-card-hover overflow-hidden flex flex-col"
    >
      {/* Glow effect on hover */}
      <div className="absolute -inset-px bg-gradient-to-r from-[#0ea5e9] to-indigo-500 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-sm pointer-events-none z-0" />
      
      {/* Preview Image Section */}
      {client.previewUrl && (
        <div className="relative w-full h-48 overflow-hidden z-10">
          <div className="absolute inset-0 bg-[#0ea5e9]/20 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-overlay" />
          <Image 
            src={client.previewUrl} 
            alt={`${client.name} preview`}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Gradient fade to blend image with card body */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/90 dark:from-[#0b1220] to-transparent z-10 transition-colors duration-300" />
        </div>
      )}

      <div className={`relative z-10 flex flex-col h-full ${client.previewUrl ? 'p-8 pt-0' : 'p-8'}`}>
        <div className={`flex justify-between items-start mb-6 ${client.previewUrl ? '-mt-6' : ''}`}>
          {client.logoUrl ? (
            <div className="relative w-14 h-14 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 overflow-hidden shadow-lg z-20 group-hover:border-[#0ea5e9] transition-colors">
              <Image 
                src={client.logoUrl} 
                alt={`${client.name} logo`} 
                fill 
                className="object-cover" 
                sizes="56px" 
              />
            </div>
          ) : (
            <div className="w-14 h-14 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex items-center justify-center shadow-inner z-20 group-hover:border-[#0ea5e9] transition-colors">
              <Icon className="w-7 h-7 text-[#0ea5e9] group-hover:scale-110 transition-all" />
            </div>
          )}
          <span className="text-[10px] sm:text-xs font-semibold px-2 sm:px-3 py-1 bg-[#0ea5e9]/10 text-[#0ea5e9] dark:text-[#38bdf8] border border-[#0ea5e9]/20 rounded-full uppercase tracking-wider z-20 backdrop-blur-md shadow-sm">
            {client.category.split('/')[0].trim()}
          </span>
        </div>

        <h3 className="text-2xl font-bold text-[#0b1220] dark:text-white mb-3 group-hover:text-[#0ea5e9] dark:group-hover:text-[#38bdf8] transition-colors">
          {client.name}
        </h3>

        <div className="flex flex-wrap gap-2 mb-4">
          {client.services.map((service, idx) => (
            <span key={idx} className="text-xs text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/50 px-2 py-1 rounded-md border border-slate-200 dark:border-slate-700/50 transition-colors">
              {service}
            </span>
          ))}
        </div>

        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed flex-grow mb-8 transition-colors duration-300">
          {client.shortDescription}
        </p>

        <Link href={`/portfolio/${client.slug}`} className="mt-auto">
          <button type="button" className="w-full py-3 px-4 rounded-xl bg-[#0ea5e9]/5 dark:bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 text-[#0ea5e9] dark:text-[#38bdf8] font-medium text-sm hover:bg-[#0ea5e9]/10 dark:hover:bg-[#0ea5e9]/20 transition-colors flex items-center justify-center gap-2">
            View Case Study
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </Link>
      </div>
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";
import { Search } from "lucide-react";

type PortfolioFiltersProps = {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
};

export default function PortfolioFilters({
  categories,
  activeCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange
}: PortfolioFiltersProps) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
      <div className="flex flex-wrap items-center gap-2 justify-center md:justify-start">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === category
                ? "bg-[#0ea5e9] text-white shadow-md shadow-[#0ea5e9]/20"
                : "bg-white/60 dark:bg-[#0f172a]/60 text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-[#1e293b] border border-slate-200 dark:border-slate-800"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      
      <div className="relative w-full md:w-64 group">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-[#0ea5e9] transition-colors" />
        <input
          type="text"
          placeholder="Search clients..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-4 py-2 rounded-full bg-white/60 dark:bg-[#0f172a]/60 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]/50 transition-all duration-300"
        />
      </div>
    </div>
  );
}

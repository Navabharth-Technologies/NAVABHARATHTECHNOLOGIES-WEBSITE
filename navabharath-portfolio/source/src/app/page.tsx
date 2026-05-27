"use client";

import { useState, useMemo } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ServicesDelivered from "@/components/ServicesDelivered";
import ProcessTimeline from "@/components/ProcessTimeline";
import CTASection from "@/components/CTASection";
import PortfolioFilters from "@/components/PortfolioFilters";
import ClientCard from "@/components/ClientCard";
import { clients } from "@/data/clients";
import { motion } from "framer-motion";

export default function PortfolioPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", ...Array.from(new Set(clients.map(c => c.category.split('/')[0].trim())))];

  const filteredClients = useMemo(() => {
    return clients.filter((client) => {
      const matchesCategory = activeCategory === "All" || client.category.includes(activeCategory);
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch = 
        client.name.toLowerCase().includes(searchLower) ||
        client.shortDescription.toLowerCase().includes(searchLower) ||
        client.services.some(s => s.toLowerCase().includes(searchLower)) ||
        client.tags.some(t => t.toLowerCase().includes(searchLower));
      
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <main className="bg-[#f8fbff] dark:bg-[#020617] min-h-screen text-[#0b1220] dark:text-slate-200">
      {isLoading && (
        <>
          <LoadingScreen onComplete={() => setIsLoading(false)} />
          <style dangerouslySetInnerHTML={{ __html: `nav, footer { opacity: 0 !important; pointer-events: none !important; }` }} />
        </>
      )}
      
      <div className={`transition-opacity duration-1000 ${isLoading ? 'opacity-0 h-screen overflow-hidden' : 'opacity-100'}`}>

        <HeroSection />
        <StatsSection />
        
        {/* Dynamic Portfolio Grid with Filters */}
        <section id="portfolio" className="py-24 relative bg-[#f8fbff] dark:bg-[#020617] transition-colors duration-500">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-[#0b1220] dark:text-white mb-4 transition-colors duration-500"
              >
                Client <span className="text-gradient">Portfolio</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto transition-colors duration-500"
              >
                Explore some of the businesses and organizations we help grow through consistent digital support and custom tech solutions.
              </motion.p>
            </div>

            <PortfolioFilters 
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
            />

            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredClients.map((client) => (
                <motion.div 
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={client.id} 
                  className="h-full"
                >
                  <ClientCard client={client} />
                </motion.div>
              ))}
              {filteredClients.length === 0 && (
                <div className="col-span-full py-12 text-center text-slate-500 dark:text-slate-400">
                  No clients found matching your search.
                </div>
              )}
            </motion.div>
          </div>
        </section>

        <ServicesDelivered />
        <ProcessTimeline />
        <CTASection />
      </div>
    </main>
  );
}

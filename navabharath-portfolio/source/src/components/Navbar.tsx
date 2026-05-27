"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";
import { ArrowLeft } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isPortfolioPage = pathname === "/" || pathname === "/#portfolio";
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScrollDir = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      
      lastScrollY = currentScrollY;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 bg-white/80 dark:bg-[#020617]/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800/50 transition-transform duration-300 transform-gpu ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="container mx-auto px-6 h-28 flex items-center justify-between relative">
        
        {/* Left Side Placeholder */}
        <div className="flex-1 hidden md:block"></div>

        {/* Center - Logo */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <a href="/" className="flex items-center gap-4 group">
            <div className="relative w-24 h-24 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
              <Image 
                src="/navabharath-portfolio/logo-wbg.png" 
                alt="NAVABHARATH TECHNOLOGIES Logo" 
                fill 
                className="object-contain" 
                sizes="96px"
                priority
              />
            </div>
            <div className="text-xl md:text-2xl font-bold text-[#0b1220] dark:text-white tracking-tight hidden lg:block transition-colors duration-500 whitespace-nowrap">
              NAVABHARATH <span className="text-[#0ea5e9] dark:text-[#38bdf8]">TECHNOLOGIES</span>
            </div>
          </a>
        </div>
        
        {/* Right Side - Actions */}
        <div className="flex-1 flex items-center justify-end gap-6">
          {!isPortfolioPage && (
            <Link 
              href="/#portfolio" 
              className="hidden sm:flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-[#0ea5e9] dark:hover:text-[#38bdf8] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Link>
          )}
          {isPortfolioPage && (
             <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300 transition-colors duration-500">
               <span className="text-[#0ea5e9] dark:text-[#38bdf8] font-semibold tracking-wide uppercase text-xs">Portfolio</span>
             </div>
          )}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}

"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface InstagramReelPlayerProps {
  src: string;
}

export default function InstagramReelPlayer({ src }: InstagramReelPlayerProps) {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Load the official Instagram embed script
    const script = document.createElement("script");
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    // If script is already loaded, process new embeds
    if ((window as any).instgrm) {
      (window as any).instgrm.Embeds.process();
    }
  }, [src]);

  return (
    <motion.div
      className="relative w-full min-h-[500px] rounded-3xl overflow-hidden bg-white dark:bg-black group border border-slate-200 dark:border-slate-800 shadow-xl flex justify-center"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="w-full h-full overflow-y-auto overflow-x-hidden custom-scrollbar max-w-full">
        <blockquote
          className="instagram-media max-w-full"
          data-instgrm-permalink={src}
          data-instgrm-version="14"
          style={{
            background: "#FFF",
            border: "0",
            margin: "0",
            padding: "0",
            width: "100%",
            maxWidth: "100%",
            minHeight: "500px"
          }}
        ></blockquote>
      </div>

      {/* Premium Hover Glow */}
      <div
        className={`absolute inset-0 border-2 border-white/0 rounded-3xl transition-colors duration-500 pointer-events-none ${
          isHovered ? "border-[#0ea5e9]/50 dark:border-[#38bdf8]/50" : ""
        }`}
      />
    </motion.div>
  );
}

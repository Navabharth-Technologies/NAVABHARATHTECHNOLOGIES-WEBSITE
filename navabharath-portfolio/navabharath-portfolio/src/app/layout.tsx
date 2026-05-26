import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | NAVABHARATH TECHNOLOGIES",
  description: "Explore the clients and digital solutions maintained by NAVABHARATH TECHNOLOGIES, including websites, social media, and application development.",
};

import { ThemeProvider } from "@/components/ThemeProvider";
import AmbientBackground from "@/components/AmbientBackground";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-[#f8fbff] dark:bg-[#020617] text-[#0b1220] dark:text-slate-200 min-h-screen selection:bg-[#0ea5e9]/30 selection:text-[#0ea5e9] dark:selection:text-[#38bdf8] overflow-x-hidden transition-colors duration-500 relative`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <AmbientBackground />
          <CustomCursor />
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

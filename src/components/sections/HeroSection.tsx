"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, Zap } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-36 overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.png"
          alt="Starline Battery Hero"
          fill
          sizes="100vw"
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/20 to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl">
          <div className="animate-in fade-in slide-in-from-left-8 duration-1000 fill-mode-both">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-bold tracking-widest uppercase mb-6">
              <Zap size={14} fill="currentColor" />
              Made in India
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter uppercase mb-8">
              Powering Performance. <br />
              <span className="text-primary glow-text-red">Driving Reliability.</span>
            </h1>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-10 text-lg md:text-2xl font-bold tracking-wide">
              <span className="text-primary uppercase tracking-widest relative pb-1 w-fit">
                Starline Batteries
                <span className="absolute bottom-0 left-0 w-1/2 h-[3px] bg-primary rounded-full shadow-[0_0_8px_rgba(200,16,46,0.8)]"></span>
              </span>
              <span className="hidden sm:inline text-white/30 font-light">|</span>
              <span className="text-white/90 italic tracking-wider">Always The Winner</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-black text-lg h-14 px-8 rounded-none group">
                Explore Products
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 font-black text-lg h-14 px-8 rounded-none">
                Find Dealer
              </Button>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 fill-mode-both">
            {[
              { label: "Warranty", value: "Up to 72 Months" },
              { label: "Technology", value: "Advanced AGM" },
              { label: "Service", value: "Pan India Support" },
              { label: "Rating", value: "4.9/5 Happy Users" },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-white/40 text-xs uppercase tracking-widest mb-1">{stat.label}</p>
                <p className="text-white font-bold text-lg">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Subtle parallax elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/10 blur-[120px] rounded-full z-0"
      />
    </section>
  );
}

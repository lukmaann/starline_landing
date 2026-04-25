"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Shield, Zap, Thermometer, RotateCcw } from "lucide-react";

const features = [
  {
    title: "Silver-Alloy Technology",
    description: "Our proprietary silver-alloy grid ensures 2x longer life and exceptional corrosion resistance.",
    icon: Shield,
  },
  {
    title: "Rapid Charge Recovery",
    description: "Advanced paste formulation allows for faster recharging after deep discharges.",
    icon: RotateCcw,
  },
  {
    title: "Extreme Temperature Stability",
    description: "Designed to perform from -20°C to +55°C without losing capacity.",
    icon: Thermometer,
  },
  {
    title: "High Surge Capability",
    description: "Delivers maximum cranking amps when you need it most, even in low-state-of-charge.",
    icon: Zap,
  },
];

export function FeatureShowcase() {
  return (
    <section id="performance" className="py-24 bg-zinc-950 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-bold tracking-widest text-xs uppercase mb-3 block">Technical Superiority</span>
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-8 leading-[0.9]">
              Engineered for <br />
              <span className="text-primary">Extreme Conditions</span>
            </h2>
            <p className="text-white/60 text-lg mb-12 max-w-xl">
              Starline batteries aren&apos;t just built; they&apos;re over-engineered. We use the highest grade materials to ensure you never get stranded.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feature, i) => (
                <div key={i} className="space-y-3">
                  <div className="w-10 h-10 rounded-none bg-primary/10 flex items-center justify-center">
                    <feature.icon className="text-primary" size={20} />
                  </div>
                  <h4 className="text-white font-bold uppercase tracking-tight">{feature.title}</h4>
                  <p className="text-white/40 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative aspect-square lg:aspect-auto lg:h-[600px] w-full"
          >
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />
            <Image
              src="/images/tech.png"
              alt="Starline Battery Technology"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain relative z-10"
            />
            
            {/* Callouts - Ather Style */}
            <div className="absolute top-1/4 right-0 z-20 bg-black/60 backdrop-blur-md border border-white/10 p-4 hidden md:block">
              <p className="text-primary font-black text-xl leading-none mb-1">99.9%</p>
              <p className="text-white/50 text-[10px] uppercase font-bold tracking-widest">Pure Lead Content</p>
            </div>
            
            <div className="absolute bottom-1/4 left-0 z-20 bg-black/60 backdrop-blur-md border border-white/10 p-4 hidden md:block">
              <p className="text-primary font-black text-xl leading-none mb-1">ZERO</p>
              <p className="text-white/50 text-[10px] uppercase font-bold tracking-widest">Maintenance Required</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

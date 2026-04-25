"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Factory, Award, Building2 } from "lucide-react";

export function StrengthSection() {
  return (
    <section id="strength" className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] md:h-[600px] group"
          >
            <div className="absolute inset-0 border-[20px] border-primary/10 translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700" />
            <div className="absolute inset-0 z-10">
              <Image
                src="/images/factory1.png"
                alt="Starline Manufacturing Facility"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute bottom-10 -right-10 z-20 bg-primary p-8 hidden md:block">
              <p className="text-white font-black text-4xl mb-1">5000+</p>
              <p className="text-white/80 text-xs uppercase font-bold tracking-widest">Units Per Month</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-bold tracking-widest text-xs uppercase mb-3 block">Industrial Might</span>
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-8 leading-[0.9]">
              Built in <br />
              <span className="text-white">State-of-the-Art</span> <br />
              <span className="text-primary">Facilities</span>
            </h2>
            <p className="text-white/60 text-lg mb-12 max-w-xl">
              Our manufacturing unit in Belagavi is a marvel of modern engineering. With fully automated assembly lines and ISO 9001 certification, we ensure consistency in every cell.
            </p>

            <div className="space-y-8">
              {[
                {
                  title: "ISO 9001:2015 Certified",
                  description: "Internationally recognized standards for quality management systems.",
                  icon: Award,
                },
                {
                  title: "Fully Automated Lines",
                  description: "Precision robotics ensure zero human error in critical assembly stages.",
                  icon: Factory,
                },
                {
                  title: "Research & Development",
                  description: "In-house lab dedicated to optimizing chemical compositions for longer life.",
                  icon: Building2,
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center text-primary">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold uppercase tracking-tight mb-2">{item.title}</h4>
                    <p className="text-white/40 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

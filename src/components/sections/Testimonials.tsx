"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Card } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Fleet Manager, SRS Travels",
    content: "We switched our entire fleet of 50+ buses to Starline. The downtime has reduced by 40% and the backup time is significantly better than premium brands.",
    rating: 5,
  },
  {
    name: "Dr. Ananya Singh",
    role: "Homeowner",
    content: "Using Starline Inverter batteries for 3 years now. Even during long power cuts in the monsoon, my house stays bright. Highly recommend!",
    rating: 5,
  },
  {
    name: "Vikram Patil",
    role: "Farmer, Belagavi",
    content: "My tractor needs a battery that can handle vibration and dust. Starline is the only one that survived more than two seasons on my farm.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeader
          subtitle="Testimonials"
          title="Voices of Trust"
          description="Don't just take our word for it. Hear from the people who rely on Starline for their daily power needs."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="bg-black border-white/5 p-8 h-full flex flex-col relative group hover:border-primary/30 transition-all duration-300">
                <Quote className="absolute top-6 right-8 text-primary/10 group-hover:text-primary/20 transition-colors" size={60} />
                
                <div className="flex gap-1 mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-primary text-primary" />
                  ))}
                </div>
                
                <p className="text-white/70 italic mb-8 relative z-10 leading-relaxed">
                  &quot;{t.content}&quot;
                </p>
                
                <div className="mt-auto pt-6 border-t border-white/5">
                  <p className="text-white font-bold uppercase tracking-tight">{t.name}</p>
                  <p className="text-primary text-xs font-bold tracking-widest uppercase">{t.role}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

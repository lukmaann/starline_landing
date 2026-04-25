"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CheckCircle2, Award, Clock, Users } from "lucide-react";

const benefits = [
  {
    title: "Unmatched Warranty",
    description: "Industry-leading warranty periods up to 72 months, giving you total peace of mind.",
    icon: Award,
  },
  {
    title: "Always On Time",
    description: "Our efficient dealer network ensures you get service and replacements exactly when you need them.",
    icon: Clock,
  },
  {
    title: "Quality Guaranteed",
    description: "Every battery undergoes 24 rigorous quality checks before leaving our facility.",
    icon: CheckCircle2,
  },
  {
    title: "Trusted by Millions",
    description: "Over 20 years of excellence and millions of satisfied customers across the nation.",
    icon: Users,
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeader
          subtitle="Our Commitment"
          title="Why Starline Stands Out"
          description="We don't just sell batteries; we sell reliability. Our commitment to quality and service makes us the preferred choice for industrial and domestic power."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="w-20 h-20 mx-auto bg-zinc-900 border border-white/5 flex items-center justify-center mb-6 group-hover:border-primary/50 transition-all duration-300">
                <benefit.icon className="text-primary group-hover:scale-110 transition-transform duration-300" size={36} />
              </div>
              <h4 className="text-xl font-bold text-white uppercase mb-4 tracking-tight">{benefit.title}</h4>
              <p className="text-white/40 text-sm leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

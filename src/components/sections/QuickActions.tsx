"use client";

import { motion } from "framer-motion";
import { Search, ShieldCheck, MapPin, PhoneCall, ChevronRight } from "lucide-react";

const actions = [
  { title: "Find Right Battery", icon: Search, href: "#products" },
  { title: "Register Warranty", icon: ShieldCheck, href: "/warranty" },
  { title: "Find a Dealer", icon: MapPin, href: "#dealer" },
  { title: "Emergency Support", icon: PhoneCall, href: "tel:+911234567890" },
];

export function QuickActions() {
  return (
    <section className="py-12 bg-black border-b border-white/5">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-8 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-white">
            Quick Actions
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {actions.map((action, index) => (
            <motion.a
              key={action.title}
              href={action.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -50px 0px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-between p-6 bg-[#111111] hover:bg-[#1a1a1a] rounded-3xl border border-white/5 transition-colors group cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <action.icon size={24} />
                </div>
                <span className="text-lg font-bold text-white tracking-tight">
                  {action.title}
                </span>
              </div>
              <ChevronRight className="text-white/30 group-hover:text-primary group-hover:translate-x-1 transition-all" size={24} />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Recycle, ShieldCheck, Leaf, Factory, ArrowRight, Battery as BatteryIcon, Globe, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function SustainabilityPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 lg:px-12 mb-24">
        <div className="relative rounded-[3rem] overflow-hidden bg-zinc-900 border border-zinc-800 p-12 md:p-20 flex flex-col items-center text-center">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-green-600/10 blur-[120px] rounded-full" />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative z-10"
          >
            <Badge variant="outline" className="border-green-500/50 text-green-500 mb-6 px-4 py-1 uppercase tracking-widest font-black">
              Greener Power
            </Badge>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6 uppercase italic">
              Powering a <span className="text-green-500">Sustainable</span> Future
            </h1>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed font-medium">
              At Starline, we believe that high performance shouldn&apos;t come at the cost of the environment. 
              Our closed-loop recycling system ensures that 99% of lead-acid components are reused.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="container mx-auto px-4 lg:px-12 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Recycle className="w-8 h-8 text-green-500" />,
              title: "Closed-Loop Recycling",
              desc: "We collect old batteries and process them in state-of-the-art smelting units to extract pure lead for new production."
            },
            {
              icon: <Leaf className="w-8 h-8 text-green-500" />,
              title: "Eco-Friendly Tech",
              desc: "Our manufacturing process uses low-emission technology and water purification systems to minimize ecological impact."
            },
            {
              icon: <Award className="w-8 h-8 text-green-500" />,
              title: "ISO Certified",
              desc: "Fully compliant with ISO 14001 environmental standards and local pollution control board regulations."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-[2rem] bg-zinc-900/50 border border-zinc-800 hover:border-green-500/30 transition-all group"
            >
              <div className="mb-6">{item.icon}</div>
              <h3 className="text-2xl font-black mb-4 uppercase italic tracking-tight">{item.title}</h3>
              <p className="text-zinc-400 leading-relaxed font-medium">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Buy-Back Program */}
      <section className="container mx-auto px-4 lg:px-12 mb-32">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-square w-full rounded-[3rem] overflow-hidden border border-zinc-800 shadow-2xl">
            <Image 
              src="/images/factory.png" 
              alt="Recycling Process" 
              fill 
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute bottom-10 left-10">
              <p className="text-4xl font-black uppercase italic tracking-tighter">THE <span className="text-green-500">STARLINE</span><br />PROMISE</p>
            </div>
          </div>
          
          <div>
            <h2 className="text-xs font-black text-green-500 uppercase tracking-[0.4em] mb-6">Our Scrappage Policy</h2>
            <h3 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 uppercase italic leading-none">
              Get Paid to <br />Protect the Earth
            </h3>
            <p className="text-zinc-400 text-lg mb-8 leading-relaxed font-medium">
              Don&apos;t let your old batteries end up in landfills where they can leak harmful chemicals. 
              Bring your used Starline (or any brand) battery to an authorized dealer and receive:
            </p>
            
            <ul className="space-y-6 mb-12">
              {[
                "Instant cashback or discount on your new Starline battery.",
                "Assurance of scientifically handled disposal.",
                "Starline Green Certificate of Participation."
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 border border-green-500/50 flex items-center justify-center flex-shrink-0 mt-1">
                    <ShieldCheck className="w-4 h-4 text-green-500" />
                  </div>
                  <span className="text-lg font-bold text-zinc-200">{text}</span>
                </li>
              ))}
            </ul>
            
            <Button className="h-16 px-10 bg-green-600 text-white hover:bg-green-700 rounded-none font-black text-sm uppercase tracking-widest transition-all">
              Locate Recycling Center <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Global Impact Grid */}
      <section className="bg-zinc-900/30 border-y border-zinc-800 py-32">
        <div className="container mx-auto px-4 lg:px-12">
          <div className="text-center mb-20">
             <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic mb-4">Our Environmental <span className="text-green-500">Impact</span></h2>
             <p className="text-zinc-500 font-medium">Real numbers, real change, powered by Starline.</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { val: "100K+", label: "Batteries Recycled" },
              { val: "2M+", label: "KG Lead Recovered" },
              { val: "85%", label: "Lower Carbon Footprint" },
              { val: "0%", label: "Landfill Waste" }
            ].map((stat, i) => (
              <div key={i} className="text-center group cursor-default">
                <p className="text-5xl md:text-7xl font-black text-white mb-2 group-hover:text-green-500 transition-colors">{stat.val}</p>
                <div className="h-px w-12 bg-green-600 mx-auto mb-4" />
                <p className="text-zinc-500 text-[10px] font-black uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function Badge({ children, variant, className }: any) {
  return (
    <div className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${className}`}>
      {children}
    </div>
  );
}

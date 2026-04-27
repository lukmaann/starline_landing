"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const families = [
  {
    title: "Automotive Range",
    tagline: "Built for pure performance",
    image: "/images/family_auto.png",
    exploreText: "Explore Automotive",
    link: "/products/automotive",
  },
  {
    title: "Inverter Range",
    tagline: "Bestest friend for every home",
    image: "/images/family_inverter.png",
    exploreText: "Explore Inverters",
    link: "/inverters",
  },
];

export function BatteryFamily() {
  return (
    <section id="products" className="py-24 bg-black">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white">
            The Starline Battery Family
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {families.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -50px 0px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative rounded-[2rem] overflow-hidden group aspect-[4/5] md:aspect-square lg:aspect-[4/5] bg-zinc-900"
            >
              {/* Background Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Gradient Overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />

              {/* Content Top */}
              <div className="absolute top-0 left-0 right-0 p-8 md:p-12 text-center flex flex-col items-center">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-md">
                  {item.title}
                </h3>
                <span className="px-6 py-2 bg-white/20 backdrop-blur-md border border-white/10 rounded-full text-white font-medium text-sm drop-shadow-sm">
                  {item.tagline}
                </span>
              </div>

              {/* Content Bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 flex justify-center w-full">
                <Link href={item.link} className="w-full max-w-sm">
                  <Button className="rounded-full bg-white text-black hover:bg-gray-200 font-bold px-8 h-12 w-full transition-all hover:scale-105">
                    {item.exploreText}
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

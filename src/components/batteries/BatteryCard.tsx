"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, IndianRupee, ShieldCheck, Zap } from "lucide-react";
import { Battery } from "@/lib/battery-data";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";

interface BatteryCardProps {
  battery: Battery;
}

export function BatteryCard({ battery }: BatteryCardProps) {
  return (
    <Link href={`/products/automotive/${battery.slug}`} className="block h-full group">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.015 }}
        transition={{ duration: 0.35 }}
        className="h-full"
      >
        <Card className="relative h-full overflow-hidden rounded-[0.9rem] border border-white/10 bg-[#070707] text-white shadow-[0_22px_54px_rgba(0,0,0,0.34)] transition-all duration-500 group-hover:border-red-500/35 group-hover:shadow-[0_28px_64px_rgba(0,0,0,0.44)]">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_16%),linear-gradient(145deg,rgba(185,28,28,0.06),transparent_40%)] opacity-90" />

          <CardContent className="relative flex h-full flex-col p-0">
            <div className="flex items-center justify-between px-4 pt-4 sm:px-5">
              <Badge className="rounded-md border border-red-500/30 bg-red-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-red-200">
                Automotive
              </Badge>
              <span className="text-[10px] font-medium uppercase tracking-[0.24em] text-zinc-500">
                {battery.voltage} platform
              </span>
            </div>

            <div className="relative mx-4 mt-4 overflow-hidden rounded-[0.8rem] border border-white/6 bg-[linear-gradient(180deg,#111111_0%,#050505_100%)] sm:mx-5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.14),transparent_60%)] opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative aspect-[5/4] p-4 sm:p-5">
                <Image
                  src={battery.image}
                  alt={battery.name}
                  fill
                  className="object-contain p-4 transition-transform duration-700 group-hover:scale-105 sm:p-5"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <div className="absolute bottom-4 left-4">
                <Badge className="rounded-md border border-white/10 bg-black/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-zinc-100 backdrop-blur">
                  {battery.capacity}
                </Badge>
              </div>
            </div>

            <div className="flex flex-1 flex-col justify-between p-4 sm:p-5">
              <div>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-[1.45rem] font-semibold tracking-tight text-white transition-colors group-hover:text-red-300">
                      {battery.name}
                    </h3>
                    <p className="mt-2 line-clamp-3 text-sm leading-6 text-zinc-400">
                      {battery.description}
                    </p>
                  </div>
                  <div className="shrink-0 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-right">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-zinc-500">MRP</p>
                    <div className="mt-1 flex items-center text-base font-semibold text-white">
                      <IndianRupee className="h-4 w-4 text-red-400" />
                      <span>{battery.price.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-md border border-white/8 bg-white/[0.03] p-3">
                    <div className="flex items-center gap-2 text-zinc-500">
                      <Zap className="h-3.5 w-3.5 text-red-400" />
                      <span className="text-[10px] uppercase tracking-[0.2em]">Capacity</span>
                    </div>
                    <p className="mt-2 text-sm font-medium text-zinc-100">{battery.capacity}</p>
                  </div>
                  <div className="rounded-md border border-white/8 bg-white/[0.03] p-3">
                    <div className="flex items-center gap-2 text-zinc-500">
                      <ShieldCheck className="h-3.5 w-3.5 text-red-400" />
                      <span className="text-[10px] uppercase tracking-[0.2em]">Warranty</span>
                    </div>
                    <p className="mt-2 text-sm font-medium text-zinc-100">{battery.warranty}</p>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {battery.features.slice(0, 2).map((feature) => (
                    <span
                      key={feature}
                      className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] text-zinc-300"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                <span className="text-[11px] uppercase tracking-[0.24em] text-zinc-500">
                  View full profile
                </span>
                <div className="flex items-center gap-2 text-sm font-medium text-zinc-100 transition-colors group-hover:text-red-300">
                  Explore
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </Link>
  );
}

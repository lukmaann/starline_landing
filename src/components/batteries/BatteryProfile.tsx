"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Car,
  CheckCircle2,
  ChevronLeft,
  Construction,
  IndianRupee,
  Ship,
  ShieldCheck,
  Truck,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { Battery } from "@/lib/battery-data";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { EnquiryModal } from "./EnquiryModal";

interface BatteryProfileProps {
  battery: Battery;
}

export function BatteryProfile({ battery }: BatteryProfileProps) {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  const getAppIcon = (app: string) => {
    if (app.toLowerCase().includes("truck") || app.toLowerCase().includes("commercial")) {
      return <Truck className="h-5 w-5" />;
    }
    if (
      app.toLowerCase().includes("car") ||
      app.toLowerCase().includes("sedan") ||
      app.toLowerCase().includes("hatchback")
    ) {
      return <Car className="h-5 w-5" />;
    }
    if (app.toLowerCase().includes("machinery") || app.toLowerCase().includes("equipment")) {
      return <Construction className="h-5 w-5" />;
    }
    if (app.toLowerCase().includes("marine") || app.toLowerCase().includes("vessel")) {
      return <Ship className="h-5 w-5" />;
    }
    return <CheckCircle2 className="h-5 w-5" />;
  };

  return (
    <div className="min-h-screen bg-[#030303] pt-20 text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,rgba(220,38,38,0.12),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_20%)]" />

      <main className="relative z-10 pb-28 lg:pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="py-6 sm:py-8">
              <Link
                href="/products/automotive"
                className="group inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white"
              >
                <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                <span>Back to automotive range</span>
              </Link>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-start lg:gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="overflow-hidden rounded-[1rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] shadow-[0_28px_70px_rgba(0,0,0,0.4)]"
              >
                <div className="flex items-center justify-between px-4 pt-4 sm:px-6">
                  <Badge className="rounded-md border border-red-500/30 bg-red-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-red-200">
                    Professional series
                  </Badge>
                  <span className="text-[10px] uppercase tracking-[0.24em] text-zinc-500">
                    {battery.category}
                  </span>
                </div>

                <div className="relative m-4 overflow-hidden rounded-[0.9rem] border border-white/8 bg-[linear-gradient(180deg,#111111_0%,#050505_100%)] sm:m-6">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.14),transparent_62%)]" />
                  <div className="relative aspect-[4/3] sm:aspect-square">
                    <Image
                      src={battery.image}
                      alt={battery.name}
                      fill
                      className="object-contain p-5 sm:p-8"
                      priority
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 px-4 pb-4 sm:px-6 sm:pb-6">
                  <div className="rounded-md border border-white/8 bg-black/30 p-3">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-zinc-500">Capacity</p>
                    <p className="mt-2 text-sm font-medium text-zinc-100">{battery.capacity}</p>
                  </div>
                  <div className="rounded-md border border-white/8 bg-black/30 p-3">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-zinc-500">Voltage</p>
                    <p className="mt-2 text-sm font-medium text-zinc-100">{battery.voltage}</p>
                  </div>
                  <div className="rounded-md border border-white/8 bg-black/30 p-3">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-zinc-500">Warranty</p>
                    <p className="mt-2 text-sm font-medium text-zinc-100">{battery.warranty}</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="flex flex-col gap-5"
              >
                <div className="rounded-[1rem] border border-white/10 bg-white/[0.03] p-5 shadow-[0_18px_50px_rgba(0,0,0,0.22)] sm:p-6">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-red-300">Battery profile</p>
                  <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
                    {battery.name}
                  </h1>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-300 sm:text-base">
                    {battery.description}
                  </p>

                  <div className="mt-6 flex flex-wrap items-end gap-4">
                    <div className="rounded-md border border-white/10 bg-black/30 px-4 py-3">
                      <p className="text-[10px] uppercase tracking-[0.24em] text-zinc-500">MRP</p>
                      <div className="mt-2 flex items-center text-2xl font-semibold text-white sm:text-3xl">
                        <IndianRupee className="mr-1 h-5 w-5 text-red-400 sm:h-6 sm:w-6" />
                        <span>{battery.price.toLocaleString()}</span>
                      </div>
                    </div>
                    <div className="flex min-w-[9rem] items-center gap-3 rounded-md border border-white/10 bg-black/20 px-4 py-3">
                      <ShieldCheck className="h-5 w-5 text-red-300" />
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.24em] text-zinc-500">Coverage</p>
                        <p className="mt-1 text-sm font-medium text-zinc-100">{battery.warranty}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div className="rounded-[1rem] border border-white/10 bg-white/[0.03] p-5">
                    <div className="flex items-center gap-2">
                      <Zap className="h-4 w-4 text-red-300" />
                      <h2 className="text-sm font-medium uppercase tracking-[0.22em] text-zinc-100">
                        Ideal applications
                      </h2>
                    </div>
                    <div className="mt-4 space-y-3">
                      {battery.applications.map((app) => (
                        <div
                          key={app}
                          className="flex items-center gap-3 rounded-md border border-white/8 bg-black/20 px-3 py-3"
                        >
                          <div className="flex h-9 w-9 items-center justify-center rounded-md border border-red-500/20 bg-red-500/10 text-red-200">
                            {getAppIcon(app)}
                          </div>
                          <span className="text-sm text-zinc-200">{app}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[1rem] border border-white/10 bg-white/[0.03] p-5">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4 text-red-300" />
                      <h2 className="text-sm font-medium uppercase tracking-[0.22em] text-zinc-100">
                        Key highlights
                      </h2>
                    </div>
                    <div className="mt-4 space-y-3">
                      {battery.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-3 rounded-md border border-white/8 bg-black/20 px-3 py-3"
                        >
                          <CheckCircle2 className="h-4 w-4 text-red-300" />
                          <span className="text-sm text-zinc-200">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="rounded-[1rem] border border-white/10 bg-white/[0.03] p-5">
                  <h2 className="text-sm font-medium uppercase tracking-[0.22em] text-zinc-100">
                    Engineering overview
                  </h2>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {[
                      { label: "Nominal voltage", value: battery.voltage },
                      { label: "Battery capacity", value: battery.capacity },
                      { label: "Technology", value: "Calcium-silver maintenance free" },
                      { label: "Container", value: "High-strength FR polypropylene" },
                      { label: "Separator", value: "Low resistance PE envelopes" },
                      { label: "Service use", value: "Heavy duty SLI application" },
                    ].map((spec) => (
                      <div
                        key={spec.label}
                        className="rounded-md border border-white/8 bg-black/20 p-3"
                      >
                        <p className="text-[10px] uppercase tracking-[0.22em] text-zinc-500">{spec.label}</p>
                        <p className="mt-2 text-sm font-medium text-zinc-100">{spec.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    onClick={() => setIsEnquiryOpen(true)}
                    className="h-16 px-10 bg-white text-black hover:bg-red-600 hover:text-white rounded-none font-black text-sm uppercase tracking-widest transition-all"
                  >
                    Get Wholesale Quote
                  </Button>
                  <Button
                    variant="outline"
                    className="h-12 rounded-md border-white/10 bg-white/[0.03] px-6 text-sm font-medium text-white hover:bg-white/[0.08]"
                  >
                    Request technical sheet
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      {/* Sticky Mobile Footer */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 p-4 bg-black border-t border-zinc-800 z-50">
        <Button 
          onClick={() => setIsEnquiryOpen(true)}
          className="w-full h-14 bg-red-600 text-white font-black text-xs uppercase tracking-widest rounded-none"
        >
          Contact for Enquiry
        </Button>
      </div>

      <EnquiryModal 
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
        productName={battery.name}
      />
    </div>
  );
}

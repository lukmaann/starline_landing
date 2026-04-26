"use client";

import { ShieldCheck, CheckCircle2, AlertTriangle, FileText } from "lucide-react";

export default function WarrantyPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-24 pb-20">
      {/* Header Section */}
      <section className="relative py-16 md:py-24 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent z-0" />
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 border border-primary/30 text-primary mb-8">
            <ShieldCheck size={40} />
          </div>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 text-white">
            Warranty <span className="text-primary glow-text-red">Policy</span>
          </h1>
          <p className="text-xl text-white/70 font-medium">
            Starline Batteries
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="prose prose-invert prose-lg md:prose-xl max-w-none">
            
            <p className="text-2xl font-light leading-relaxed text-white/90 mb-12">
              At Starline Batteries, every product is built with precision, tested for durability, and designed to perform under demanding conditions. Our warranty policy reflects the confidence we have in our engineering and the commitment we make to every customer.
            </p>

            <div className="bg-[#111] border border-white/10 rounded-3xl p-8 md:p-10 mb-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <CheckCircle2 size={100} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3 relative z-10">
                <CheckCircle2 className="text-primary" />
                Coverage & Conditions
              </h3>
              <p className="text-white/70 leading-relaxed mb-6 relative z-10">
                Each Starline battery is covered under a limited warranty period, starting from the date of purchase. This warranty ensures that the battery is free from manufacturing defects in material and workmanship under normal usage conditions. In the unlikely event of a failure within the warranty period, the battery will be repaired or replaced as per standard evaluation procedures.
              </p>
              <p className="text-white/70 leading-relaxed relative z-10">
                The warranty is applicable only when the battery is used in accordance with recommended applications and maintained properly. Proper installation, regular inspection, and adherence to usage guidelines are essential to ensure optimal performance and eligibility under warranty coverage.
              </p>
            </div>

            <div className="bg-[#111] border border-white/10 rounded-3xl p-8 md:p-10 mb-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <AlertTriangle size={100} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3 relative z-10">
                <AlertTriangle className="text-primary" />
                Exclusions
              </h3>
              <p className="text-white/70 leading-relaxed relative z-10">
                This warranty does not cover damages resulting from misuse, improper charging, overcharging, deep discharge beyond recommended limits, physical damage, accidents, exposure to extreme conditions, or unauthorized modifications. Normal wear and tear, including capacity reduction over time due to usage, is also not covered under warranty.
              </p>
            </div>

            <div className="bg-[#111] border border-white/10 rounded-3xl p-8 md:p-10 mb-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <FileText size={100} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3 relative z-10">
                <FileText className="text-primary" />
                How to Claim
              </h3>
              <p className="text-white/70 leading-relaxed mb-6 relative z-10">
                To claim warranty, customers are required to present a valid proof of purchase along with the original warranty card or invoice. The battery must be returned to an authorized Starline dealer or service center for inspection. The decision regarding repair or replacement will be based on technical evaluation and company guidelines.
              </p>
              <p className="text-white/70 leading-relaxed relative z-10">
                Starline Batteries reserves the right to determine the cause of failure and take appropriate action under the warranty terms. The company&apos;s liability is limited strictly to repair or replacement of the battery and does not extend to any indirect or consequential damages.
              </p>
            </div>

            <div className="text-center pt-8 border-t border-white/10">
              <p className="text-xl text-white/90 leading-relaxed mb-8 font-light italic">
                &ldquo;Our goal is not just to deliver power, but to build trust that lasts. With Starline, you can be confident that every battery is backed by reliability, accountability, and support you can depend on.&rdquo;
              </p>
              <h4 className="text-3xl font-black text-white uppercase tracking-wider">
                Starline Batteries
                <br />
                <span className="text-primary mt-2 block glow-text-red text-xl">Always The Winner.</span>
              </h4>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}

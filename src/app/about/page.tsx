"use client";

import Image from "next/image";
import { Zap, Target, ShieldCheck } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-24 pb-20">
      {/* Header Section */}
      <section className="relative py-20 md:py-32 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-black to-black z-0" />
        
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center max-w-4xl">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-sm font-bold tracking-widest uppercase mb-6">
            <Zap size={16} fill="currentColor" />
            Our Story
          </span>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">
            Powering Performance. <br className="hidden md:block" />
            <span className="text-primary glow-text-red">Driving Reliability.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/70 italic tracking-wide">
            Starline Batteries <span className="text-white/30 px-2">|</span> Always The Winner
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl space-y-16">
          
          {/* Part 1 */}
          <div className="prose prose-invert prose-lg md:prose-xl max-w-none">
            <p className="text-2xl md:text-3xl font-light leading-relaxed text-white/90">
              Every brand has a beginning. <br />
              <strong className="font-bold text-white">Ours began with curiosity.</strong>
            </p>
            <p className="text-white/70 leading-relaxed mt-6">
              Over three decades ago, in a small home workshop, we were driven by a simple question—<em className="text-primary not-italic font-medium">what truly makes a battery reliable?</em>
            </p>
            <p className="text-white/70 leading-relaxed">
              There were no large machines, no production lines, and no established systems. Just hands-on learning, trial and error, and an unwavering interest in understanding the science behind lead-acid batteries.
            </p>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          {/* Part 2 */}
          <div className="prose prose-invert prose-lg md:prose-xl max-w-none">
            <p className="text-white/70 leading-relaxed">
              Those early days were not about scale. <br />
              They were about <strong className="text-white">precision</strong>. About learning the behavior of materials, the chemistry of performance, and the discipline required to build something that people could depend on.
            </p>
            <p className="text-white/70 leading-relaxed">
              What started with a single battery soon turned into something more meaningful. As the quality of our work began to speak for itself, local dealers and mechanics took notice. Trust was not marketed—<strong className="text-white">it was earned, one battery at a time.</strong>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
            <div className="bg-[#111] p-8 rounded-3xl border border-white/5 text-center">
              <ShieldCheck className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-white font-bold text-xl mb-2">Consistency</h3>
            </div>
            <div className="bg-[#111] p-8 rounded-3xl border border-white/5 text-center">
              <Target className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-white font-bold text-xl mb-2">Durability</h3>
            </div>
            <div className="bg-[#111] p-8 rounded-3xl border border-white/5 text-center">
              <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-white font-bold text-xl mb-2">Reliability</h3>
            </div>
          </div>

          {/* Part 3 */}
          <div className="prose prose-invert prose-lg md:prose-xl max-w-none">
            <p className="text-white/70 leading-relaxed">
              With growing confidence and demand, we took our first major step forward—establishing a dedicated manufacturing setup. It marked the transition from craftsmanship to structured production, while still preserving the core values we started with: <strong className="text-white">consistency, durability, and reliability.</strong>
            </p>
            <p className="text-white/70 leading-relaxed">
              Over the years, Starline Batteries evolved into a recognized name across the region. Today, our presence extends across a <strong className="text-primary font-bold">300-kilometer network around Belagavi</strong>, powering thousands of vehicles every day—across cities, highways, and demanding Indian conditions.
            </p>
          </div>

          <div className="bg-[#111] border border-white/10 rounded-3xl overflow-hidden mt-12 mb-12 flex flex-col">
            <div className="relative w-full h-[300px] md:h-[500px]">
              <Image 
                src="/images/factory.png" 
                alt="Starline Batteries Manufacturing Facility" 
                fill 
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent" />
            </div>
            
            <div className="p-8 md:p-12 relative z-10 flex flex-col md:flex-row gap-12 items-center justify-between">
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-black text-white mb-6 uppercase tracking-tight">Our Manufacturing Hub</h3>
                <p className="text-white/80 leading-relaxed">
                  As we continue to grow, we have taken another significant leap with the development of our modern manufacturing facility. This new hub represents our commitment to scaling responsibly—combining experience with improved processes, better infrastructure, and a forward-looking approach.
                </p>
              </div>
              
              <div className="bg-black/50 p-6 rounded-2xl border border-white/5 backdrop-blur-sm relative z-20 w-full md:w-auto min-w-[300px]">
                <h4 className="text-primary font-bold tracking-widest uppercase text-xs mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  Registered Address
                </h4>
                <address className="not-italic text-white/90 leading-relaxed font-medium">
                  <strong className="text-white text-lg">Starline Batteries</strong><br />
                  Kanagala Industrial Area,<br />
                  Taluk: Hukkeri,<br />
                  District: Belgavi,<br />
                  State: Karnataka, India
                </address>
              </div>
            </div>
          </div>

          {/* Part 4 */}
          <div className="prose prose-invert prose-lg md:prose-xl max-w-none">
            <p className="text-2xl font-light text-white/90 mb-8">
              Yet, despite this growth, the foundation remains unchanged.
            </p>
            <p className="text-white/70 leading-relaxed">
              We still believe that a battery is not just a product—<strong className="text-white">it is a promise.</strong><br />
              A promise that your vehicle will start when it matters most.<br />
              A promise of performance you can feel, and reliability you can trust.
            </p>
            <p className="text-white/70 leading-relaxed">
              From building a single battery in a small space to establishing a strong regional footprint, our journey has been shaped by persistence, learning, and trust.
            </p>
            <p className="text-white/70 leading-relaxed">
              Today, Starline stands as a brand built on experience, strengthened by consistency, and driven by purpose.
            </p>
          </div>

          {/* Footer Statement */}
          <div className="text-center pt-12 pb-8">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-tight">
              And this journey is <br className="hidden md:block" />
              <span className="text-primary glow-text-red">far from complete.</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/70 mt-6 font-medium">
              We are growing—stronger, faster, and further than ever before.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}

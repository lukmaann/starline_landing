"use client";

import { useState } from "react";
import { Check, Users, Map, TrendingUp, Percent, Shield, Clock, Award, Briefcase, Store, Wrench, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";

import { submitContactForm } from "@/lib/actions";
import { Turnstile } from "@marsidev/react-turnstile";

export default function DealersPage() {
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [captchaError, setCaptchaError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!captchaToken) {
      setCaptchaError(true);
      return;
    }
    setCaptchaError(false);
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      business: formData.get("business") as string,
      phone: formData.get("phone") as string,
      email: formData.get("email") as string,
      location: formData.get("location") as string,
      type: formData.get("type") as string || "dealer",
      experience: parseInt(formData.get("experience") as string) || undefined,
      message: formData.get("message") as string,
      captchaToken: captchaToken,
    };

    const result = await submitContactForm(data);
    
    setIsSubmitting(false);
    if (result.success) {
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        setCaptchaToken(null);
      }, 5000);
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  const whyChooseUs = [
    {
      icon: <TrendingUp size={24} />,
      title: "Strong Market Demand",
      description: "Automotive batteries are a recurring need. With growing vehicle usage, demand is consistent and reliable."
    },
    {
      icon: <Percent size={24} />,
      title: "Attractive Dealer Margins",
      description: "Enjoy competitive margins of up to 10%, ensuring healthy profitability and sustainable growth."
    },
    {
      icon: <Shield size={24} />,
      title: "Reliable Product Performance",
      description: "Our batteries are built for Indian conditions — delivering consistent starts, durability, and customer satisfaction."
    },
    {
      icon: <Clock size={24} />,
      title: "Fast Supply & Support",
      description: "Efficient distribution and quick response ensure you never lose a customer due to stock delays."
    },
    {
      icon: <Award size={24} />,
      title: "Growing Brand Recognition",
      description: "Be part of a brand that is rapidly expanding and building strong recall across the region."
    },
    {
      icon: <Briefcase size={24} />,
      title: "Long-Term Business Opportunity",
      description: "We focus on building relationships — not just transactions."
    }
  ];

  const whoCanJoin = [
    { icon: <Store size={32} />, title: "Battery Dealers" },
    { icon: <Briefcase size={32} />, title: "Automobile Spare Shops" },
    { icon: <Wrench size={32} />, title: "Garage Owners & Mechanics" },
    { icon: <Truck size={32} />, title: "Distributors looking to expand" }
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-24 pb-20">
      {/* Header Section */}
      <section className="relative py-16 md:py-24 border-b border-white/10 overflow-hidden text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-black to-black z-0" />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 text-white">
            Dealer <span className="text-primary glow-text-red">Network</span>
          </h1>
          <p className="text-2xl md:text-3xl text-white/90 font-bold mb-4">Grow With Starline Batteries</p>
          <p className="text-white/70 max-w-3xl mx-auto text-lg leading-relaxed">
            Be part of a fast-growing automotive battery brand built on reliability, trust, and consistent performance.<br className="hidden md:block" />
            At Starline Batteries, we don’t just supply products — we build long-term partnerships with our dealers.
          </p>
        </div>
      </section>

      {/* Network Stats */}
      <section className="py-16 bg-[#0a0a0a] border-b border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">A Growing Network You Can Trust</h2>
            <p className="text-white/60 text-lg">
              With a strong presence across the region, Starline Batteries is proud to have a rapidly expanding footprint. Our growth reflects one thing — <span className="text-white font-bold">trust earned through performance</span>.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-[#111] border border-white/10 rounded-3xl p-8 text-center flex flex-col items-center justify-center">
              <Users size={48} className="text-primary mb-4" />
              <h3 className="text-5xl font-black text-white mb-2">40+</h3>
              <p className="text-white/70 text-lg uppercase tracking-widest font-bold">Active Dealers</p>
              <p className="text-white/40 text-sm mt-2">Serving customers across multiple cities and towns</p>
            </div>
            
            <div className="bg-[#111] border border-white/10 rounded-3xl p-8 text-center flex flex-col items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=Belagavi&zoom=8&size=600x300&maptype=roadmap&style=feature:all|element:labels|visibility:off&style=feature:water|element:geometry|color:0x000000&style=feature:landscape|element:geometry|color:0x111111')] opacity-20 bg-cover bg-center" />
              <Map size={48} className="text-primary mb-4 relative z-10" />
              <h3 className="text-5xl font-black text-white mb-2 relative z-10">300+ km</h3>
              <p className="text-white/70 text-lg uppercase tracking-widest font-bold relative z-10">Network Radius</p>
              <p className="text-white/40 text-sm mt-2 relative z-10">Centered around Belagavi</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Become a Dealer */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4">
              Why Become a <span className="text-primary">Starline Dealer?</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((feature, index) => (
              <div key={index} className="bg-zinc-900/50 border border-white/10 p-8 rounded-3xl hover:bg-zinc-900 transition-colors">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-white/60 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Can Join */}
      <section className="py-20 bg-[#0a0a0a] border-y border-white/5">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Who Can Join?</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {whoCanJoin.map((item, index) => (
              <div key={index} className="bg-black border border-white/10 p-6 rounded-2xl text-center flex flex-col items-center gap-4 hover:border-primary/50 transition-colors">
                <div className="text-white/50">{item.icon}</div>
                <p className="font-bold text-white/90">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 skew-y-3 translate-y-32 scale-110 z-0" />
        
        <div className="container mx-auto px-4 max-w-3xl relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black uppercase tracking-tight mb-4 text-white">Become a Starline Dealer</h2>
            <p className="text-white/60 text-lg">Take the next step and grow your business with us. Fill out the form below and our team will connect with you.</p>
          </div>

          <div className="bg-[#111] border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl">
            {isSuccess ? (
              <div className="flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in py-12">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                  <Check size={40} className="text-green-500" />
                </div>
                <h3 className="text-3xl font-bold text-white">Application Received!</h3>
                <p className="text-white/60 text-lg">Thank you for your interest in joining the Starline network. Our dealer management team will get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-white/60 text-xs uppercase font-bold tracking-widest">Full Name *</label>
                    <input name="name" required type="text" className="w-full bg-black border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primary transition-colors" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-white/60 text-xs uppercase font-bold tracking-widest">Business Name *</label>
                    <input name="business" required type="text" className="w-full bg-black border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primary transition-colors" placeholder="Your Shop/Garage Name" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-white/60 text-xs uppercase font-bold tracking-widest">Phone Number *</label>
                    <input name="phone" required type="tel" className="w-full bg-black border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primary transition-colors" placeholder="+91 XXXXX XXXXX" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-white/60 text-xs uppercase font-bold tracking-widest">Email Address</label>
                    <input name="email" type="email" className="w-full bg-black border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primary transition-colors" placeholder="email@example.com" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-white/60 text-xs uppercase font-bold tracking-widest">Location (City/State) *</label>
                    <input name="location" required type="text" className="w-full bg-black border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primary transition-colors" placeholder="e.g. Belagavi, Karnataka" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-white/60 text-xs uppercase font-bold tracking-widest">Type of Business *</label>
                    <select name="type" required defaultValue="" className="w-full bg-black border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primary transition-colors appearance-none">
                      <option value="" disabled>Select Business Type</option>
                      <option value="battery_dealer">Battery Dealer</option>
                      <option value="auto_spares">Automobile Spare Shop</option>
                      <option value="garage">Garage / Mechanic</option>
                      <option value="distributor">Distributor</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-white/60 text-xs uppercase font-bold tracking-widest">Years of Experience</label>
                  <input name="experience" type="number" min="0" className="w-full bg-black border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primary transition-colors" placeholder="e.g. 5" />
                </div>

                <div className="space-y-2">
                  <label className="text-white/60 text-xs uppercase font-bold tracking-widest">Message</label>
                  <textarea name="message" rows={4} className="w-full bg-black border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primary transition-colors resize-none" placeholder="Tell us more about your current business setup and why you want to join Starline..."></textarea>
                </div>

                <div className={`flex flex-col gap-1 w-full sm:w-[300px] ${captchaError ? 'animate-shake' : ''}`}>
                  <Turnstile 
                    siteKey={process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY || '1x00000000000000000000AA'} 
                    onSuccess={(token) => {
                      setCaptchaToken(token);
                      setCaptchaError(false);
                    }}
                    options={{ theme: 'dark' }}
                  />
                  {captchaError && <span className="text-xs text-red-500 ml-1">Please verify that you are not a robot.</span>}
                </div>

                <Button type="submit" disabled={isSubmitting} className="w-full bg-primary hover:bg-primary/90 text-white font-black text-xl h-16 rounded-xl mt-4 disabled:opacity-50">
                  {isSubmitting ? "SUBMITTING..." : "APPLY FOR DEALERSHIP"}
                </Button>
                <p className="text-white/40 text-sm text-center mt-4">Our team will get back to you within 24 hours.</p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer Tagline */}
      <section className="py-12 border-t border-white/10 text-center bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase text-white tracking-wide mb-2">
            Powering Performance. <span className="text-white/50">Driving Reliability.</span>
          </h2>
          <h3 className="text-xl text-primary font-bold italic tracking-widest">
            Starline Batteries — Always The Winner
          </h3>
        </div>
      </section>
    </main>
  );
}

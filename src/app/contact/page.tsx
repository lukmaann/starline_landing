"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Globe, Send, Handshake, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

import { submitContactForm } from "@/lib/actions";
import { Turnstile } from "@marsidev/react-turnstile";

export default function ContactPage() {
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
      phone: formData.get("phone") as string,
      email: formData.get("email") as string,
      location: formData.get("location") as string,
      type: formData.get("type") as string,
      message: formData.get("message") as string,
      captchaToken: captchaToken,
    };

    const result = await submitContactForm(data);
    
    setIsSubmitting(false);
    if (result.success) {
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <main className="min-h-screen bg-black text-white pt-24 pb-20">
      {/* Header Section */}
      <section className="relative py-16 border-b border-white/10 overflow-hidden text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-black to-black z-0" />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 text-white">
            Contact <span className="text-primary glow-text-red">Us</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-bold mb-2">Let’s Power Your Next Move</p>
          <p className="text-white/70 max-w-2xl mx-auto">
            Reliable support. Quick response. Trusted partnership with Starline Batteries.<br className="hidden md:block" />
            Whether you're looking for the right automotive battery, dealership opportunities, or bulk supply — our team is ready to assist you.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left Column: Contact Info & Form */}
            <div className="space-y-12">
              
              {/* Get In Touch */}
              <div>
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                  <span className="w-8 h-1 bg-primary rounded-full"></span>
                  Get in Touch
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 text-primary">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <h3 className="font-bold text-white mb-1">Address</h3>
                        <p className="text-white/60 text-sm leading-relaxed">
                          Starline Batteries<br />
                          Kanagala Industrial Area, Plot No. 180<br />
                          Hukkeri, Belagavi, Karnataka, India
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 text-primary">
                        <Phone size={20} />
                      </div>
                      <div>
                        <h3 className="font-bold text-white mb-1">Phone</h3>
                        <p className="text-white/60 text-sm">+91 XXXXX XXXXX</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 text-primary">
                        <Mail size={20} />
                      </div>
                      <div>
                        <h3 className="font-bold text-white mb-1">Email</h3>
                        <a href="mailto:starlinebatteries717@gmail.com" className="text-primary hover:underline text-sm">
                          starlinebatteries717@gmail.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 text-primary">
                        <Globe size={20} />
                      </div>
                      <div>
                        <h3 className="font-bold text-white mb-1">Website</h3>
                        <a href="http://www.starlinebatteries.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
                          www.starlinebatteries.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="bg-[#111] border border-white/10 p-8 rounded-3xl">
                <h2 className="text-2xl font-bold mb-2">Send an Enquiry</h2>
                <p className="text-white/50 text-sm mb-6">Fill in your details and our team will get back to you within 24 hours.</p>
                
                {isSuccess ? (
                  <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-8 text-center text-green-500 space-y-4 animate-in fade-in">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check size={32} />
                    </div>
                    <h3 className="text-2xl font-bold">Message Sent!</h3>
                    <p className="text-green-500/70">Thank you for reaching out. Our team will get back to you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input name="name" type="text" placeholder="Full Name *" className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" required />
                      <input name="phone" type="tel" placeholder="Phone Number *" className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" required />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input name="email" type="email" placeholder="Email Address" className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" />
                      <input name="location" type="text" placeholder="Location (City/State) *" className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" required />
                    </div>
                    <select name="type" className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors appearance-none" required defaultValue="">
                      <option value="" disabled>Select Requirement *</option>
                      <option value="automotive">Automotive Battery</option>
                      <option value="dealer">Dealer Enquiry</option>
                      <option value="bulk">Bulk Purchase</option>
                    </select>
                    <textarea name="message" placeholder="Message" rows={4} className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"></textarea>
                    
                    <div className={`flex flex-col gap-1 w-full sm:w-[300px] my-4 ${captchaError ? 'animate-shake' : ''}`}>
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

                    <Button type="submit" size="lg" disabled={isSubmitting} className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-14 rounded-xl text-lg mt-2 disabled:opacity-50">
                      {isSubmitting ? "SENDING..." : "ENQUIRE NOW"}
                    </Button>
                  </form>
                )}
              </div>

            </div>

            {/* Right Column: Calls to Action & Map */}
            <div className="space-y-8">
              
              {/* Immediate Help */}
              <div className="bg-primary/10 border border-primary/20 p-8 rounded-3xl text-center">
                <Phone size={40} className="text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Need Immediate Help?</h3>
                <p className="text-white/70 mb-6">Prefer to speak directly with us?</p>
                <a href="tel:+911234567890">
                  <Button variant="outline" size="lg" className="bg-transparent border-primary text-primary hover:bg-primary hover:text-white font-bold h-14 px-8 rounded-full">
                    Call Now
                  </Button>
                </a>
              </div>

              {/* Dealership */}
              <div className="bg-[#111] border border-white/10 p-8 rounded-3xl text-center">
                <Handshake size={40} className="text-white mx-auto mb-4 opacity-50" />
                <h3 className="text-2xl font-bold text-white mb-2">Become a Starline Dealer</h3>
                <p className="text-white/70 mb-2">Grow with a trusted and expanding battery brand.</p>
                <p className="text-primary font-bold text-sm uppercase tracking-widest mb-6">Strong demand. Reliable supply. Real business opportunity.</p>
                <Link href="/dealers" passHref>
                  <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold h-14 px-8 rounded-full">
                    Apply for Dealership
                  </Button>
                </Link>
              </div>

              {/* Map */}
              <div className="border border-white/10 p-2 rounded-3xl bg-[#111]">
                <div className="bg-black rounded-2xl overflow-hidden relative h-[300px] flex flex-col items-center justify-center text-center p-6 group">
                  {/* Integrated Google Map */}
                  <iframe 
                    src="https://maps.google.com/maps?q=Kanagala%20Industrial%20Area,%20Hukkeri,%20Belagavi&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                    className="absolute inset-0 w-full h-full opacity-50 group-hover:opacity-100 transition-opacity duration-500 z-0" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                  
                  {/* Overlay text that disappears on hover */}
                  <div className="relative z-10 bg-black/60 backdrop-blur-sm p-4 rounded-xl border border-white/10 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none">
                    <MapPin size={40} className="text-primary mx-auto mb-2 animate-bounce" />
                    <h3 className="text-lg font-bold text-white">Visit Our Manufacturing Hub</h3>
                    <p className="text-white/80 text-sm mt-1">Kanagala Industrial Area</p>
                  </div>
                </div>
              </div>

            </div>
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

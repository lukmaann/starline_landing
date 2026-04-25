"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageSquare, Phone, ArrowRight, Check } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/20 skew-y-3 translate-y-32 scale-110 z-0" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter mb-8 leading-none">
            Ready to Experience <br />
            <span className="text-primary">Superior Power?</span>
          </h2>
          <p className="text-white/60 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Starline for their energy needs. Get a free consultation for your industrial or domestic requirements today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-black text-xl h-16 px-10 rounded-none group">
              REQUEST A QUOTE <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Link href="/dealers" passHref>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 font-black text-xl h-16 px-10 rounded-none">
                BECOME A DEALER
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}



import { submitContactForm } from "@/lib/actions";
import { Turnstile } from "@marsidev/react-turnstile";

export function ContactSection() {
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
    <section id="contact" className="py-24 bg-black border-t border-white/5">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-6">Get In Touch</h2>
            <p className="text-white/50 text-lg mb-10 max-w-md">
              Have questions about our products or need technical support? Our team is here to help you 24/7.
            </p>
            
            <div className="space-y-6 mb-12">
              <a href="tel:+911234567890" className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-white/5 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Phone size={24} className="text-primary group-hover:text-white" />
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase font-bold tracking-widest">Call Us</p>
                  <p className="text-white font-bold text-lg">+91 123 456 7890</p>
                </div>
              </a>
              
              <a href="https://wa.me/911234567890" className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-white/5 flex items-center justify-center group-hover:bg-green-500 transition-colors">
                  <MessageSquare size={24} className="text-primary group-hover:text-white" />
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase font-bold tracking-widest">WhatsApp</p>
                  <p className="text-white font-bold text-lg">+91 123 456 7890</p>
                </div>
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-zinc-900/50 border border-white/5 p-8 md:p-12"
          >
            {isSuccess ? (
              <div className="flex flex-col items-center justify-center h-full text-center space-y-4 animate-in fade-in zoom-in duration-500 py-12">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                  <Check size={40} className="text-green-500" />
                </div>
                <h3 className="text-3xl font-bold text-white">Request Received</h3>
                <p className="text-white/60 text-lg">Thank you for contacting Starline Batteries. Our support team will reach out to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-white/60 text-xs uppercase font-bold tracking-widest">Your Name *</label>
                    <input name="name" required className="w-full bg-black border border-white/10 p-4 text-white focus:border-primary outline-none transition-colors" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-white/60 text-xs uppercase font-bold tracking-widest">Phone Number *</label>
                    <input name="phone" required type="tel" className="w-full bg-black border border-white/10 p-4 text-white focus:border-primary outline-none transition-colors" placeholder="+91 00000 00000" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-white/60 text-xs uppercase font-bold tracking-widest">Inquiry Type *</label>
                  <select name="type" required defaultValue="" className="w-full bg-black border border-white/10 p-4 text-white focus:border-primary outline-none transition-colors appearance-none">
                    <option value="" disabled>Select an option</option>
                    <option value="automotive">Automotive Battery</option>
                    <option value="inverter">Inverter Battery</option>
                    <option value="dealership">Dealership Inquiry</option>
                    <option value="support">Support/Warranty</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-white/60 text-xs uppercase font-bold tracking-widest">Message</label>
                  <textarea name="message" className="w-full bg-black border border-white/10 p-4 text-white focus:border-primary outline-none transition-colors h-32" placeholder="Tell us about your requirement..." />
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
                
                <Button type="submit" disabled={isSubmitting} className="w-full bg-primary hover:bg-primary/90 text-white font-black text-lg h-16 rounded-none disabled:opacity-50">
                  {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

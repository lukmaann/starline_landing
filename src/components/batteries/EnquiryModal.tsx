"use client";

import { useState } from "react";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, CheckCircle2 } from "lucide-react";
import { Turnstile } from "@marsidev/react-turnstile";
import { submitContactForm } from "@/lib/actions";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
}

export function EnquiryModal({ isOpen, onClose, productName }: EnquiryModalProps) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [captchaError, setCaptchaError] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!captchaToken) {
      setCaptchaError(true);
      return;
    }
    
    setCaptchaError(false);
    setLoading(true);
    
    try {
      const result = await submitContactForm({
        ...formData,
        type: "product_enquiry",
        message: `Enquiry for ${productName}. ${formData.message}`,
        captchaToken: captchaToken
      });

      if (result.success) {
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
          onClose();
          setFormData({ name: "", phone: "", email: "", location: "", message: "" });
          setCaptchaToken(null);
        }, 3000);
      } else {
        alert(result.error || "Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Submission failed", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-zinc-950 border-zinc-800 text-white">
        {success ? (
          <div className="py-12 flex flex-col items-center text-center">
            <CheckCircle2 className="w-16 h-16 text-green-500 mb-6" />
            <h3 className="text-2xl font-black uppercase tracking-tight mb-2">Enquiry Sent!</h3>
            <p className="text-zinc-400">Our team will contact you within 24 hours.</p>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-black uppercase tracking-tight italic">
                Enquire for <span className="text-red-600">{productName}</span>
              </DialogTitle>
              <DialogDescription className="text-zinc-500">
                Enter your details and our product specialist will get in touch with you.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name" className="text-xs font-black uppercase tracking-widest text-zinc-500">Full Name</Label>
                <Input 
                  id="name" 
                  required 
                  className="bg-zinc-900 border-zinc-800" 
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone" className="text-xs font-black uppercase tracking-widest text-zinc-500">Phone Number</Label>
                <Input 
                  id="phone" 
                  required 
                  className="bg-zinc-900 border-zinc-800" 
                  value={formData.phone}
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="location" className="text-xs font-black uppercase tracking-widest text-zinc-500">City / Location</Label>
                <Input 
                  id="location" 
                  className="bg-zinc-900 border-zinc-800" 
                  value={formData.location}
                  onChange={e => setFormData({...formData, location: e.target.value})}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message" className="text-xs font-black uppercase tracking-widest text-zinc-500">Message (Optional)</Label>
                <Textarea 
                  id="message" 
                  className="bg-zinc-900 border-zinc-800 resize-none h-24" 
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                />
              </div>

              <div className={`flex flex-col gap-1 w-full my-2 ${captchaError ? 'animate-shake' : ''}`}>
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

              <Button 
                type="submit" 
                disabled={loading}
                className="w-full h-14 bg-red-600 text-white font-black uppercase tracking-widest hover:bg-red-700 transition-all"
              >
                {loading ? <Loader2 className="animate-spin" /> : "SUBMIT ENQUIRY"}
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

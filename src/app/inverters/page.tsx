import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BatteryWarning } from "lucide-react";

export default function InvertersComingSoon() {
  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 blur-[150px] rounded-full z-0 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 text-center max-w-2xl">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/5 border border-white/10 text-primary mb-8 animate-pulse">
          <BatteryWarning size={40} />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-6">
          Launching <br />
          <span className="text-primary glow-text-red">Soon</span>
        </h1>
        
        <p className="text-lg md:text-xl text-white/70 mb-12 leading-relaxed">
          We are engineering the next generation of Starline Tubular Inverter Batteries to give your home unstoppable power. Stay tuned for the official launch in the near future!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/">
            <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 h-14 px-8 rounded-full font-bold">
              <ArrowLeft className="mr-2" size={20} />
              Back to Home
            </Button>
          </Link>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white h-14 px-8 rounded-full font-bold">
            Get Notified
          </Button>
        </div>
      </div>
    </main>
  );
}

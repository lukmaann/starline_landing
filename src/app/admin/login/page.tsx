"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(false);

    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        router.push("/admin");
        router.refresh();
      } else {
        setError(true);
        setIsLoading(false);
      }
    } catch (err) {
      setError(true);
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-black to-black z-0" />
      
      <div className="bg-[#111] border border-white/10 p-8 rounded-3xl w-full max-w-md relative z-10 shadow-2xl">
        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <Shield size={32} className="text-primary" />
        </div>
        
        <h1 className="text-3xl font-black text-white text-center mb-2 uppercase tracking-tighter">Admin Portal</h1>
        <p className="text-white/50 text-center mb-8 text-sm">Secure access required to proceed.</p>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="text-white/60 text-xs uppercase font-bold tracking-widest flex items-center gap-2">
              <Lock size={14} /> Password
            </label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full bg-black border ${error ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primary transition-colors tracking-widest`} 
              placeholder="••••••••"
              required
            />
            {error && <p className="text-red-500 text-xs mt-1">Invalid credentials. Please try again.</p>}
          </div>

          <Button type="submit" disabled={isLoading} className="w-full bg-primary hover:bg-primary/90 text-white font-black text-lg h-14 rounded-xl transition-all flex items-center justify-center gap-2">
            {isLoading ? "AUTHENTICATING..." : "ENTER DASHBOARD"}
            {!isLoading && <ArrowRight size={18} />}
          </Button>
        </form>
      </div>
      
      <p className="text-white/20 text-xs mt-8 relative z-10 uppercase tracking-widest">Starline Batteries Internal System</p>
    </div>
  );
}

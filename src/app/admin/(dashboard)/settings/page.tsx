"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Settings, ShieldAlert, KeyRound, Bell, Check } from "lucide-react";
import { generatePasswordHash } from "@/lib/actions";

export default function SettingsPage() {
  const [newPassword, setNewPassword] = useState("");
  const [generatedHash, setGeneratedHash] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerateHash = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    
    const result = await generatePasswordHash(newPassword);
    if (result.success && result.hash) {
      setGeneratedHash(result.hash);
    } else {
      alert("Failed to generate hash.");
    }
    setIsGenerating(false);
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div>
        <h1 className="text-3xl font-black uppercase tracking-tight text-white mb-2">Platform Settings</h1>
        <p className="text-white/50">Manage your administrative preferences and security.</p>
      </div>

      <div className="grid gap-8">
        
        {/* Security Settings */}
        <div className="bg-black border border-white/10 rounded-2xl overflow-hidden">
          <div className="border-b border-white/10 bg-zinc-900/50 p-6 flex items-center gap-3">
            <KeyRound size={24} className="text-primary" />
            <h2 className="text-xl font-bold text-white uppercase tracking-widest">Security Credentials</h2>
          </div>
          
          <div className="p-6 space-y-6">
            <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-xl flex gap-4">
              <ShieldAlert size={24} className="text-blue-500 shrink-0" />
              <div>
                <h3 className="text-blue-500 font-bold mb-1">Environment-Level Security</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  For maximum security, your admin password is not stored in the database. It is managed via the <code className="bg-black px-2 py-1 rounded">ADMIN_PASSWORD_HASH</code> variable in your server environment (`.env`).
                </p>
              </div>
            </div>

            <form onSubmit={handleGenerateHash} className="space-y-4">
              <h3 className="font-bold text-white">Generate New Password Hash</h3>
              <p className="text-white/50 text-sm">Enter a new password below to generate a secure bcrypt hash. You will need to paste this hash into your `.env` file and restart the server to apply it.</p>
              
              <div className="flex gap-4">
                <input 
                  type="text" 
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Enter new strong password" 
                  className="flex-1 bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                  required
                />
                <Button type="submit" disabled={isGenerating} className="bg-white text-black hover:bg-gray-200 font-bold px-8">
                  {isGenerating ? "GENERATING..." : "GENERATE HASH"}
                </Button>
              </div>
            </form>

            {generatedHash && (
              <div className="animate-in fade-in slide-in-from-top-4 space-y-2 mt-4">
                <label className="text-green-500 text-xs uppercase font-bold tracking-widest flex items-center gap-1">
                  <Check size={14} /> Hash Generated Successfully
                </label>
                <div className="bg-zinc-900 border border-green-500/30 p-4 rounded-xl font-mono text-sm text-white/80 break-all select-all">
                  {generatedHash}
                </div>
                <p className="text-white/40 text-xs">Copy this entire string and set it as `ADMIN_PASSWORD_HASH` in your `.env` file.</p>
              </div>
            )}
          </div>
        </div>

        {/* Notification Settings */}
        <div className="bg-black border border-white/10 rounded-2xl overflow-hidden opacity-50 pointer-events-none">
          <div className="border-b border-white/10 bg-zinc-900/50 p-6 flex items-center gap-3">
            <Bell size={24} className="text-white" />
            <h2 className="text-xl font-bold text-white uppercase tracking-widest flex items-center gap-4">
              Email Notifications <span className="bg-primary/20 text-primary text-xs px-2 py-1 rounded-full tracking-normal">Coming Soon</span>
            </h2>
          </div>
          
          <div className="p-6 space-y-4">
            <p className="text-white/50 text-sm">Configure where new lead notifications should be sent.</p>
            
            <div className="space-y-2">
              <label className="text-white/60 text-xs uppercase font-bold tracking-widest">Notification Email Address</label>
              <input 
                type="email" 
                defaultValue="starlinebatteries717@gmail.com"
                className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                disabled
              />
            </div>

            <div className="flex items-center gap-3 mt-4">
              <div className="w-12 h-6 bg-primary rounded-full relative">
                <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
              </div>
              <span className="text-white font-medium">Send email alerts for new Dealer Applications</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

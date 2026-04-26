"use client";

import { useState } from "react";
import { 
  MapPin, 
  Navigation, 
  Phone, 
  Search, 
  Store, 
  Loader2, 
  Compass,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Dealer = {
  id: string;
  name: string;
  address: string;
  phone: string | null;
  latitude: number;
  longitude: number;
  distance: number | null;
};

export default function FindDealerPage() {
  const [dealers, setDealers] = useState<Dealer[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadingAllDealers, setLoadingAllDealers] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [locationAccessed, setLocationAccessed] = useState(false);

  const loadAllDealers = async () => {
    setLoadingAllDealers(true);
    setError(null);

    try {
      const res = await fetch("/api/dealers");
      if (!res.ok) throw new Error("Failed to fetch dealers");
      const data = await res.json();
      setDealers(data);
      setLocationAccessed(true);
    } catch {
      setError("We couldn't load dealer locations right now. Please try again.");
    } finally {
      setLoadingAllDealers(false);
    }
  };

  const findNearest = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by this browser. You can still view all dealers below.");
      return;
    }

    setLoading(true);
    setError(null);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const res = await fetch(`/api/dealers/nearest?lat=${latitude}&lng=${longitude}`);
          if (!res.ok) throw new Error("Failed to fetch dealers");
          const data = await res.json();
          setDealers(data);
          setLocationAccessed(true);
        } catch {
          setError("Failed to retrieve nearest dealers. Please try again.");
        } finally {
          setLoading(false);
        }
      },
      (err) => {
        setLoading(false);
        if (err.code === 1) {
          setError("Location access was denied by this browser. You can allow location and try again, or view all dealers below.");
        } else {
          setError("Could not determine your location. Please check your GPS settings.");
        }
      },
      { enableHighAccuracy: true }
    );
  };

  return (
    <main className="min-h-screen bg-black text-white pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative py-20 border-b border-white/10 overflow-hidden text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-black to-black z-0" />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 text-white">
            Find a <span className="text-primary glow-text-red">Dealer</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-bold mb-6">Locate the nearest Starline Authorized Store</p>
          
          <div className="max-w-xl mx-auto space-y-6">
            <Button 
              onClick={findNearest}
              disabled={loading}
              className="bg-primary hover:bg-primary/90 text-white font-black text-xl h-16 px-10 rounded-full group shadow-[0_0_20px_rgba(255,0,0,0.3)]"
            >
              {loading ? (
                <><Loader2 className="mr-2 animate-spin" /> LOCATING...</>
              ) : (
                <><Compass className="mr-2 group-hover:rotate-45 transition-transform" /> USE MY CURRENT LOCATION</>
              )}
            </Button>
            
            {error && (
              <div className="space-y-4">
                <p className="text-red-500 font-bold bg-red-500/10 p-3 rounded-xl border border-red-500/20">
                  {error}
                </p>
                <Button
                  onClick={loadAllDealers}
                  disabled={loadingAllDealers}
                  variant="outline"
                  className="border-white/15 text-white hover:bg-white/10 font-bold h-12 px-6 rounded-full"
                >
                  {loadingAllDealers ? "LOADING DEALERS..." : "VIEW ALL DEALERS"}
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          {!locationAccessed && !loading && !error && (
            <div className="text-center py-20 bg-zinc-900/30 rounded-3xl border border-white/5 p-10">
              <Search size={48} className="mx-auto text-white/10 mb-4" />
              <h3 className="text-2xl font-bold text-white/40 uppercase">Ready to help you</h3>
              <p className="text-white/20 mt-2 max-w-sm mx-auto">Click the button above to discover Authorized Starline Dealers in your vicinity.</p>
            </div>
          )}

          {locationAccessed && dealers.length === 0 && (
            <div className="text-center py-20">
              <h3 className="text-2xl font-bold text-white/40">No dealers found in your region.</h3>
              <p className="text-white/20 mt-2">We are expanding rapidly. Contact us to find the nearest distribution point.</p>
            </div>
          )}

          {dealers.length > 0 && (
            <div className="grid grid-cols-1 gap-6">
              <h2 className="text-2xl font-black uppercase tracking-widest text-primary mb-2 flex items-center gap-2">
                <Store size={24} /> Dealers Near You
              </h2>
              
              {dealers.map((dealer) => (
                <div 
                  key={dealer.id} 
                  className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 hover:border-primary/50 transition-all group"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-black text-white uppercase">{dealer.name}</h3>
                      {typeof dealer.distance === "number" && (
                        <span className="bg-primary/20 text-primary text-[10px] px-2 py-1 rounded-full font-bold">
                          {dealer.distance.toFixed(1)} KM AWAY
                        </span>
                      )}
                    </div>
                    
                    <div className="space-y-3 mt-4">
                      <p className="flex items-start gap-3 text-white/60">
                        <MapPin size={20} className="text-primary shrink-0 mt-1" />
                        <span className="text-lg">{dealer.address}</span>
                      </p>
                      {dealer.phone && (
                        <p className="flex items-center gap-3 text-white/60">
                          <Phone size={20} className="text-primary shrink-0" />
                          <span className="text-lg font-bold">{dealer.phone}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <a 
                    href={`https://www.google.com/maps/dir/?api=1&destination=${dealer.latitude},${dealer.longitude}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full md:w-auto"
                  >
                    <Button className="w-full md:w-auto bg-white text-black hover:bg-primary hover:text-white font-black h-16 px-8 rounded-2xl group transition-all">
                      GET DIRECTIONS <Navigation size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Become a Dealer CTA */}
      <section className="py-20 bg-[#050505] border-t border-white/5 mt-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-black uppercase mb-4">Want to Join our Network?</h2>
          <p className="text-white/60 mb-10 max-w-2xl mx-auto text-lg">Partner with Starline Batteries and grow your business with a brand trusted for performance and reliability.</p>
          <Link href="/dealers">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white font-black h-14 px-10 rounded-full text-lg">
              BECOME A DEALER <ArrowRight size={20} className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}

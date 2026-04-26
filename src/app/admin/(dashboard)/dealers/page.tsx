"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { 
  Store, 
  MapPin, 
  Phone, 
  Plus, 
  Trash2, 
  Navigation, 
  Check,
  AlertCircle
} from "lucide-react";
import { createDealer, getAllDealers, deleteDealer } from "@/lib/actions";

type Dealer = {
  id: string;
  name: string;
  address: string;
  phone: string | null;
  latitude: number;
  longitude: number;
  createdAt: Date;
};

export default function DealersAdminPage() {
  const [dealers, setDealers] = useState<Dealer[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  useEffect(() => {
    let isActive = true;

    async function loadDealers() {
      const result = await getAllDealers();
      if (!isActive) {
        return;
      }

      if (result.success && result.dealers) {
        setDealers(result.dealers as Dealer[]);
      }
      setIsLoading(false);
    }

    void loadDealers();

    return () => {
      isActive = false;
    };
  }, []);

  async function fetchDealers() {
    setIsLoading(true);
    const result = await getAllDealers();
    if (result.success && result.dealers) {
      setDealers(result.dealers as Dealer[]);
    }
    setIsLoading(false);
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      address: formData.get("address") as string,
      phone: formData.get("phone") as string,
      latitude: parseFloat(formData.get("latitude") as string),
      longitude: parseFloat(formData.get("longitude") as string),
    };

    const result = await createDealer(data);
    setIsSubmitting(false);

    if (result.success) {
      setMessage({ type: 'success', text: 'Dealer added successfully!' });
      setShowAddForm(false);
      fetchDealers();
    } else {
      setMessage({ type: 'error', text: result.error || 'Failed to add dealer.' });
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to remove this dealer?")) return;

    const result = await deleteDealer(id);
    if (result.success) {
      fetchDealers();
    } else {
      alert("Failed to delete dealer.");
    }
  };

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between md:items-end gap-6">
        <div>
          <h1 className="text-3xl font-black uppercase tracking-tight text-white mb-2">Dealer Network</h1>
          <p className="text-white/50">Manage physical store locations and geolocation coordinates.</p>
        </div>

        <Button 
          onClick={() => setShowAddForm(!showAddForm)}
          className={`${showAddForm ? 'bg-zinc-800' : 'bg-primary'} text-white font-bold h-12 px-6 rounded-xl`}
        >
          {showAddForm ? "Cancel" : <><Plus className="mr-2" size={20} /> Add New Dealer</>}
        </Button>
      </div>

      {message && (
        <div className={`p-4 rounded-xl border flex items-center gap-3 animate-in fade-in slide-in-from-top-2 ${
          message.type === 'success' ? 'bg-green-500/10 border-green-500/20 text-green-500' : 'bg-red-500/10 border-red-500/20 text-red-500'
        }`}>
          {message.type === 'success' ? <Check size={20} /> : <AlertCircle size={20} />}
          <span className="font-bold uppercase tracking-widest text-xs">{message.text}</span>
        </div>
      )}

      {showAddForm && (
        <div className="bg-black border border-primary/20 rounded-2xl p-8 animate-in zoom-in-95 duration-200">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-white/60 text-xs uppercase font-bold tracking-widest">Dealer Name *</label>
                <input name="name" required className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="e.g. Starline Belagavi Hub" />
              </div>
              <div className="space-y-2">
                <label className="text-white/60 text-xs uppercase font-bold tracking-widest">Phone Number</label>
                <input name="phone" className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="+91 XXXXX XXXXX" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-white/60 text-xs uppercase font-bold tracking-widest">Full Address *</label>
              <textarea name="address" required rows={2} className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none" placeholder="Enter complete store address..." />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-white/60 text-xs uppercase font-bold tracking-widest flex items-center gap-2">
                  Latitude * <span className="text-[10px] text-primary lowercase">(Get from Google Maps)</span>
                </label>
                <input name="latitude" required type="number" step="any" className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="e.g. 15.8497" />
              </div>
              <div className="space-y-2">
                <label className="text-white/60 text-xs uppercase font-bold tracking-widest flex items-center gap-2">
                  Longitude * <span className="text-[10px] text-primary lowercase">(Get from Google Maps)</span>
                </label>
                <input name="longitude" required type="number" step="any" className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="e.g. 74.4977" />
              </div>
            </div>

            <div className="pt-4">
              <Button type="submit" disabled={isSubmitting} className="w-full bg-white text-black hover:bg-gray-200 font-black h-14 rounded-xl text-lg">
                {isSubmitting ? "SAVING..." : "SAVE DEALER LOCATION"}
              </Button>
            </div>
          </form>
        </div>
      )}

      {isLoading ? (
        <div className="text-center py-20 animate-pulse text-white/20 font-black uppercase tracking-widest">
          Fetching Store Locations...
        </div>
      ) : dealers.length === 0 ? (
        <div className="bg-black border border-white/5 rounded-3xl p-20 text-center space-y-4">
          <Store size={48} className="mx-auto text-white/10" />
          <h3 className="text-xl font-bold text-white/40 uppercase tracking-tighter">No dealers found</h3>
          <p className="text-white/20 max-w-xs mx-auto">Add your first physical store location to enable the &ldquo;Find Dealer&rdquo; feature for customers.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {dealers.map((dealer) => (
            <div key={dealer.id} className="bg-black border border-white/5 rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-white/20 transition-all group">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Store size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{dealer.name}</h3>
                  <div className="flex flex-wrap gap-4 mt-2">
                    <span className="flex items-center gap-1.5 text-white/40 text-sm italic">
                      <MapPin size={14} /> {dealer.address}
                    </span>
                    {dealer.phone && (
                      <span className="flex items-center gap-1.5 text-white/40 text-sm">
                        <Phone size={14} /> {dealer.phone}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-3 mt-3">
                    <span className="bg-zinc-900 text-white/60 text-[10px] px-2 py-0.5 rounded border border-white/5 font-mono uppercase">
                      Lat: {dealer.latitude.toFixed(4)}
                    </span>
                    <span className="bg-zinc-900 text-white/60 text-[10px] px-2 py-0.5 rounded border border-white/5 font-mono uppercase">
                      Lng: {dealer.longitude.toFixed(4)}
                    </span>
                    <a 
                      href={`https://www.google.com/maps?q=${dealer.latitude},${dealer.longitude}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary text-[10px] font-bold uppercase tracking-widest flex items-center gap-1 hover:underline"
                    >
                      <Navigation size={10} /> View on Map
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Button 
                  variant="outline" 
                  onClick={() => handleDelete(dealer.id)}
                  className="bg-transparent border-white/10 text-white/40 hover:border-red-500/50 hover:text-red-500 h-10 w-10 p-0 rounded-xl"
                >
                  <Trash2 size={18} />
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

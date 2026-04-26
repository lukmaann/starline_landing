"use client";

import { useEffect, useState } from "react";
import { getSubmissions, markSubmissionResolved, deleteSubmission } from "@/lib/actions";
import { Button } from "@/components/ui/button";
import { Check, Mail, Phone, MapPin, Calendar, Building, Award, Trash2, Filter } from "lucide-react";

type Submission = {
  id: string;
  type: string;
  name: string;
  phone: string;
  email: string | null;
  location: string | null;
  business: string | null;
  experience: number | null;
  message: string | null;
  status: string;
  createdAt: Date;
};

export default function AdminDashboard() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Filters
  const [statusFilter, setStatusFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");

  useEffect(() => {
    let isActive = true;

    async function loadSubmissions() {
      const result = await getSubmissions();
      if (!isActive) {
        return;
      }

      if (result.success && result.submissions) {
        setSubmissions(result.submissions);
      }
      setLoading(false);
    }

    void loadSubmissions();

    return () => {
      isActive = false;
    };
  }, []);

  async function fetchSubmissions() {
    setLoading(true);
    const result = await getSubmissions();
    if (result.success && result.submissions) {
      setSubmissions(result.submissions);
    }
    setLoading(false);
  }

  const handleResolve = async (id: string) => {
    await markSubmissionResolved(id);
    fetchSubmissions(); // refresh
  };

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to permanently delete this record?")) {
      await deleteSubmission(id);
      fetchSubmissions(); // refresh
    }
  };

  if (loading) {
    return <div className="text-white/50 text-center py-20 font-bold uppercase tracking-widest animate-pulse">Loading Database...</div>;
  }

  // Apply filters
  const filteredSubmissions = submissions.filter(sub => {
    if (statusFilter !== "all" && sub.status !== statusFilter) return false;
    if (typeFilter !== "all" && sub.type !== typeFilter) return false;
    return true;
  });

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between md:items-end gap-6">
        <div>
          <h1 className="text-3xl font-black uppercase tracking-tight text-white mb-2">Lead Manager</h1>
          <p className="text-white/50">View, filter, and manage form submissions.</p>
        </div>

        {/* Filters UI */}
        <div className="flex flex-wrap gap-4 items-center bg-zinc-900/50 p-4 rounded-2xl border border-white/5">
          <div className="flex items-center gap-2 text-white/50">
            <Filter size={16} /> <span className="text-sm font-bold uppercase tracking-widest">Filter</span>
          </div>
          <select 
            value={statusFilter} 
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-black border border-white/10 text-white text-sm rounded-lg px-3 py-2 outline-none focus:border-primary"
          >
            <option value="all">All Statuses</option>
            <option value="new">New</option>
            <option value="resolved">Resolved</option>
          </select>
          
          <select 
            value={typeFilter} 
            onChange={(e) => setTypeFilter(e.target.value)}
            className="bg-black border border-white/10 text-white text-sm rounded-lg px-3 py-2 outline-none focus:border-primary"
          >
            <option value="all">All Types</option>
            <option value="dealer">Dealer Enquiry</option>
            <option value="automotive">Automotive</option>
            <option value="inverter">Inverter</option>
            <option value="bulk">Bulk Purchase</option>
            <option value="support">Support</option>
          </select>
        </div>
      </div>

      {submissions.length === 0 ? (
        <div className="bg-black border border-white/5 rounded-2xl p-12 text-center text-white/50">
          No submissions found in the database.
        </div>
      ) : filteredSubmissions.length === 0 ? (
        <div className="bg-black border border-white/5 rounded-2xl p-12 text-center text-white/50">
          No submissions match the selected filters.
        </div>
      ) : (
        <div className="grid gap-6">
          {filteredSubmissions.map((sub) => (
            <div key={sub.id} className={`bg-black border rounded-2xl p-6 relative overflow-hidden transition-all ${sub.status === 'resolved' ? 'border-green-500/20 opacity-70' : 'border-white/10 hover:border-white/20'}`}>
              
              {/* Type Badge */}
              <div className="absolute top-6 right-6 flex gap-2">
                <span className={`px-3 py-1 text-xs rounded-full border font-bold uppercase tracking-widest ${
                  sub.type === 'dealer' || sub.type === 'dealership' ? 'bg-primary/20 text-primary border-primary/20' : 
                  sub.type === 'automotive' ? 'bg-blue-500/20 text-blue-400 border-blue-500/20' :
                  'bg-white/10 text-white border-white/10'
                }`}>
                  {sub.type}
                </span>
                {sub.status === 'resolved' ? (
                  <span className="px-3 py-1 text-xs rounded-full bg-green-500 text-white font-bold flex items-center"><Check size={14} className="mr-1"/> Resolved</span>
                ) : (
                  <span className="px-3 py-1 text-xs rounded-full border border-white/10 bg-zinc-800 text-white/50 font-bold">New</span>
                )}
              </div>

              {/* Header Info */}
              <div className="mb-6 pr-40">
                <h3 className="text-2xl font-bold text-white mb-1">{sub.name}</h3>
                <div className="flex flex-wrap gap-4 text-white/60 text-sm mt-3">
                  <span className="flex items-center gap-1"><Phone size={14}/> {sub.phone}</span>
                  {sub.email && <span className="flex items-center gap-1"><Mail size={14}/> {sub.email}</span>}
                  {sub.location && <span className="flex items-center gap-1"><MapPin size={14}/> {sub.location}</span>}
                  <span className="flex items-center gap-1"><Calendar size={14}/> {new Date(sub.createdAt).toLocaleString()}</span>
                </div>
              </div>

              {/* Dealer Specific Info */}
              {(sub.business || sub.experience) && (
                <div className="bg-zinc-900/50 rounded-xl p-4 mb-6 flex gap-8 border border-white/5">
                  {sub.business && (
                    <div>
                      <span className="text-white/40 text-xs uppercase font-bold tracking-widest flex items-center gap-1 mb-1"><Building size={12}/> Business Name</span>
                      <p className="font-medium text-white">{sub.business}</p>
                    </div>
                  )}
                  {sub.experience !== null && (
                    <div>
                      <span className="text-white/40 text-xs uppercase font-bold tracking-widest flex items-center gap-1 mb-1"><Award size={12}/> Experience</span>
                      <p className="font-medium text-white">{sub.experience} Years</p>
                    </div>
                  )}
                </div>
              )}

              {/* Message */}
              {sub.message && (
                <div className="bg-zinc-900 rounded-xl p-4 mb-6 text-white/80 italic border border-white/5">
                  &ldquo;{sub.message}&rdquo;
                </div>
              )}

              {/* Action */}
              <div className="pt-4 border-t border-white/10 flex justify-end gap-3">
                <Button 
                  variant="outline"
                  onClick={() => handleDelete(sub.id)}
                  className="bg-transparent border-red-500/50 text-red-500 hover:bg-red-500 hover:text-white font-bold transition-colors"
                >
                  <Trash2 size={16} className="mr-2" /> Delete
                </Button>
                
                {sub.status !== 'resolved' && (
                  <Button 
                    onClick={() => handleResolve(sub.id)}
                    className="bg-green-500 hover:bg-green-600 text-white font-bold"
                  >
                    <Check size={16} className="mr-2" /> Mark as Resolved
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

import { requireAuth } from "@/lib/auth";
import Link from "next/link";
import { LayoutDashboard, Settings } from "lucide-react";
import { LogoutButton } from "@/components/admin/LogoutButton";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await requireAuth();

  return (
    <div className="min-h-screen bg-black text-white flex flex-col md:flex-row pt-20">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-[#0a0a0a] border-r border-white/10 md:min-h-[calc(100vh-80px)] p-6">
        <h2 className="text-xl font-black uppercase tracking-widest text-primary mb-8">Admin Panel</h2>
        
        <nav className="space-y-2">
          <Link href="/admin" className="flex items-center gap-3 bg-white/10 text-white p-3 rounded-lg font-bold">
            <LayoutDashboard size={20} /> Dashboard
          </Link>
          <Link href="/admin/settings" className="flex items-center gap-3 text-white/50 hover:bg-white/5 hover:text-white p-3 rounded-lg font-bold transition-colors">
            <Settings size={20} /> Settings
          </Link>
        </nav>

        <div className="mt-auto pt-8">
          <LogoutButton />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-[#111] p-6 md:p-10 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}

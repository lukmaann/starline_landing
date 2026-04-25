"use client";

import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

export function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch('/api/auth', { method: 'DELETE' });
    router.push('/admin/login');
    router.refresh();
  };

  return (
    <button 
      onClick={handleLogout}
      className="flex items-center gap-3 text-red-500 hover:bg-red-500/10 p-3 rounded-lg font-bold transition-colors w-full"
    >
      <LogOut size={20} /> Logout
    </button>
  );
}

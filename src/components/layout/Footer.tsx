import Link from "next/link";
import { Globe, MessageCircle, Navigation, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white mb-4">Starline Batteries</h3>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Engineering high-performance batteries for the toughest conditions. Starline is the choice of champions.
            </p>
            <div className="flex gap-4">
              {[Globe, MessageCircle, Navigation].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Products</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li><Link href="#" className="hover:text-primary transition-colors">Automotive Batteries</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Tractor & Heavy Duty</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Inverter & UPS</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Solar Solutions</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/warranty" className="hover:text-primary transition-colors">Warranty Policy</Link></li>
              <li><Link href="/dealers" className="hover:text-primary transition-colors">Dealer Network</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Support</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary shrink-0" />
                <span>Kanagala Industrial Area, Taluk: Hukkeri, District: Belgavi, State: Karnataka, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary shrink-0" />
                <span>+91 123 456 7890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary shrink-0" />
                <span>info@starlinebatteries.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Starline Batteries. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs text-white/30">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

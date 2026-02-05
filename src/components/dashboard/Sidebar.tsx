"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Monitor,
  BarChart3,
  FileText,
  Trophy,
  FileStack,
  Info,
  LogOut,
} from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/dashboard", label: "Accueil", icon: Home },
  { href: "/dashboard/sequences", label: "Séquences", icon: Monitor },
  { href: "/dashboard/suivi", label: "Suivi péda.", icon: BarChart3 },
  { href: "/dashboard/programme", label: "Programme", icon: FileText },
  { href: "/dashboard/evaluations", label: "Évaluations", icon: Trophy },
  { href: "/dashboard/documents", label: "Documents", icon: FileStack },
  { href: "/dashboard/about", label: "À propos", icon: Info },
];

export function Sidebar() {
  const pathname = usePathname();
  const supabase = createClient();

  async function handleLogout() {
    await supabase.auth.signOut();
    window.location.href = "/";
  }

  return (
    <aside className="flex h-full w-[260px] flex-shrink-0 flex-col border-r border-[#E5E7EB] bg-white">
      <div className="flex items-center gap-2 p-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-primary text-lg font-bold text-white">
          IA
        </div>
        <div>
          <p className="text-sm font-bold text-[#111827]">Crée ton App</p>
          <p className="text-xs text-[#6B7280]">avec l&apos;IA</p>
        </div>
      </div>
      <nav className="flex-1 space-y-0.5 px-3 py-4">
        {navItems.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href !== "/dashboard" && pathname.startsWith(item.href));
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                isActive
                  ? "border-l-[3px] border-primary bg-primary-light text-primary"
                  : "text-[#374151] hover:bg-[#F3F4F6]"
              )}
            >
              <item.icon className="h-5 w-5 flex-shrink-0" />
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="border-t border-[#E5E7EB] p-3">
        <button
          type="button"
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-[#EF4444] hover:bg-red-50"
        >
          <LogOut className="h-5 w-5" />
          Déconnexion
        </button>
      </div>
    </aside>
  );
}

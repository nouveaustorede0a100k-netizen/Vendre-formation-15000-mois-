"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { href: "#modules", label: "Modules" },
  { href: "#formation", label: "Formation" },
  { href: "#avis", label: "Avis" },
  { href: "#tarifs", label: "Tarifs" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#E5E7EB] bg-white shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-[#2563EB] text-lg font-bold text-white">
            AI
          </div>
          <span className="hidden font-semibold text-[#111827] sm:inline">BuildMaster</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[15px] font-medium text-[#374151] transition-colors hover:text-[#111827]"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Link href="/login">
            <Button variant="ghost" size="sm">
              Se connecter
            </Button>
          </Link>
          <Link href="/register">
            <Button variant="primary" size="sm">
              Commencer →
            </Button>
          </Link>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-[#374151] md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-[#E5E7EB] bg-white px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-[15px] font-medium text-[#374151] hover:bg-[#F9FAFB]"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Link href="/login" onClick={() => setMobileOpen(false)}>
              <Button variant="ghost" size="md" className="w-full justify-center">
                Se connecter
              </Button>
            </Link>
            <Link href="/register" onClick={() => setMobileOpen(false)}>
              <Button variant="primary" size="md" className="w-full justify-center">
                Commencer →
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

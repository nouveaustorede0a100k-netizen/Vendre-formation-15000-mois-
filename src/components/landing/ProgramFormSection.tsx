"use client";

import { useState } from "react";
import Link from "next/link";
import { BookOpen } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function ProgramFormSection() {
  const [accepted, setAccepted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const prenom = (form.elements.namedItem("prenom") as HTMLInputElement)?.value || "";
    const nom = (form.elements.namedItem("nom") as HTMLInputElement)?.value || "";
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value || "";
    const params = new URLSearchParams();
    if (prenom) params.set("prenom", prenom);
    if (nom) params.set("nom", nom);
    if (email) params.set("email", email);
    window.location.href = `/register?${params.toString()}`;
  };

  return (
    <section className="bg-gradient-to-br from-[#EFF6FF] to-[#EDE9FE] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-lg sm:p-8">
          <div className="flex items-center gap-2 text-primary">
            <BookOpen className="h-6 w-6" />
            <h2 className="text-xl font-bold">Recevez le programme détaillé</h2>
          </div>
          <p className="mt-2 text-sm text-[#6B7280]">
            Parmi les outils : Cursor, Supabase, Claude, Stripe, Vercel…
          </p>
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="prenom" className="block text-sm font-medium text-[#374151]">
                  Prénom *
                </label>
                <input
                  id="prenom"
                  name="prenom"
                  type="text"
                  required
                  className="mt-1 w-full rounded-xl border border-[#E5E7EB] px-4 py-2 text-[#111827] focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="nom" className="block text-sm font-medium text-[#374151]">
                  Nom *
                </label>
                <input
                  id="nom"
                  name="nom"
                  type="text"
                  required
                  className="mt-1 w-full rounded-xl border border-[#E5E7EB] px-4 py-2 text-[#111827] focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#374151]">
                Adresse email *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 w-full rounded-xl border border-[#E5E7EB] px-4 py-2 text-[#111827] focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-[#374151]">
                Téléphone (optionnel)
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className="mt-1 w-full rounded-xl border border-[#E5E7EB] px-4 py-2 text-[#111827] focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                checked={accepted}
                onChange={(e) => setAccepted(e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-[#E5E7EB] text-primary focus:ring-primary"
              />
              <span className="text-sm text-[#6B7280]">
                J&apos;accepte de recevoir des communications d&apos;AI BuildMaster (programme, actualités). *
              </span>
            </label>
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full"
              disabled={!accepted}
            >
              Recevoir le programme →
            </Button>
          </form>
          <p className="mt-4 text-center text-xs text-[#9CA3AF]">
            Ou{" "}
            <Link href="/register" className="font-medium text-primary hover:underline">
              créer un compte
            </Link>{" "}
            directement.
          </p>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

export function BookingForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          guest_name: name,
          guest_email: email,
          guest_phone: phone || undefined,
          user_message: message || undefined,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Erreur");
      setSent(true);
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur");
    } finally {
      setSubmitting(false);
    }
  }

  if (sent) {
    return (
      <div className="rounded-xl border border-[#10B981] bg-green-50 p-6 text-center text-[#10B981]">
        <p className="font-medium">Demande envoyée.</p>
        <p className="mt-1 text-sm">Nous vous recontacterons rapidement.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-xl border border-[#E5E7EB] bg-white p-6 shadow-sm">
      <h3 className="font-bold text-[#111827]">Demande de rappel</h3>
      <p className="text-sm text-[#6B7280]">
        Laissez vos coordonnées et nous vous recontacterons pour fixer un créneau.
      </p>
      {error && (
        <div className="rounded-lg bg-red-50 p-2 text-sm text-[#EF4444]">{error}</div>
      )}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-[#374151]">
          Nom
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="mt-1 w-full rounded-xl border border-[#E5E7EB] px-4 py-2 text-[#111827] focus:border-[#2563EB] focus:outline-none focus:ring-1 focus:ring-[#2563EB]"
          placeholder="Votre nom"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-[#374151]">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mt-1 w-full rounded-xl border border-[#E5E7EB] px-4 py-2 text-[#111827] focus:border-[#2563EB] focus:outline-none focus:ring-1 focus:ring-[#2563EB]"
          placeholder="votre@email.com"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-[#374151]">
          Téléphone (optionnel)
        </label>
        <input
          id="phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="mt-1 w-full rounded-xl border border-[#E5E7EB] px-4 py-2 text-[#111827] focus:border-[#2563EB] focus:outline-none focus:ring-1 focus:ring-[#2563EB]"
          placeholder="06 12 34 56 78"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[#374151]">
          Message (optionnel)
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={3}
          className="mt-1 w-full rounded-xl border border-[#E5E7EB] px-4 py-2 text-[#111827] focus:border-[#2563EB] focus:outline-none focus:ring-1 focus:ring-[#2563EB]"
          placeholder="Votre question ou objet de l'appel..."
        />
      </div>
      <Button type="submit" variant="primary" size="md" disabled={submitting}>
        {submitting ? "Envoi..." : "Envoyer la demande"}
      </Button>
    </form>
  );
}

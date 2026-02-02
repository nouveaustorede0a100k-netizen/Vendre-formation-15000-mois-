"use client";

import { useState } from "react";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";

const CALENDLY_EMBED_URL = process.env.NEXT_PUBLIC_CALENDLY_EMBED_URL || "https://calendly.com";

export function BookingSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="border-t border-[#E5E7EB] bg-[#F9FAFB] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-[#111827] sm:text-[28px]">
            💬 Besoin d&apos;être accompagné ?
          </h2>
          <p className="mt-4 text-[#6B7280]">
            Réservez un appel gratuit de 15 min avec un conseiller pour discuter
            de votre projet et trouver la formule adaptée à vos objectifs.
          </p>
          <ul className="mt-6 flex flex-col items-center gap-2 text-[#374151]">
            <li className="flex items-center gap-2">
              <span className="text-[#2563EB]">✓</span> Sans engagement
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#2563EB]">✓</span> Conseils personnalisés
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#2563EB]">✓</span> Réponse à toutes vos questions
            </li>
          </ul>
          <Button
            variant="primary"
            size="lg"
            className="mt-8"
            onClick={() => setModalOpen(true)}
          >
            <Calendar className="mr-2 h-5 w-5" />
            Réserver mon créneau
          </Button>
        </div>
      </section>

      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title="Réserver un créneau">
        <div className="min-h-[400px]">
          <iframe
            src={CALENDLY_EMBED_URL}
            width="100%"
            height="500"
            frameBorder="0"
            title="Calendly"
            className="rounded-lg"
          />
          <p className="mt-4 text-center text-sm text-[#6B7280]">
            Ou visitez la page{" "}
            <a href="/booking" className="text-[#2563EB] hover:underline">
              Réservation
            </a>{" "}
            pour plus d&apos;options.
          </p>
        </div>
      </Modal>
    </>
  );
}

"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "C'est quoi AI BuildMaster ?",
    a: "AI BuildMaster est une formation complète pour créer des applications et des SaaS en utilisant l'intelligence artificielle. Vous apprenez à maîtriser les outils (Claude, Cursor, etc.) et à livrer des projets concrets.",
  },
  {
    q: "Faut-il déjà savoir coder ?",
    a: "Non. La formation part des bases et est conçue pour des débutants. Vous apprenez par la pratique, à votre rythme, sans jargon ni prérequis technique.",
  },
  {
    q: "Puis-je suivre la formation en travaillant ?",
    a: "Oui. Les modules sont accessibles en ligne à tout moment. Vous pouvez suivre la formation à votre rythme, même avec un emploi du temps chargé.",
  },
  {
    q: "Comment accéder à la formation après achat ?",
    a: "Après paiement, vous recevez un email de confirmation. Connectez-vous avec le compte utilisé pour l'achat et accédez au tableau de bord depuis le menu.",
  },
];

export function LandingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-[#F9FAFB] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center text-3xl font-extrabold text-[#111827] sm:text-4xl">
          Questions fréquentes
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-[#6B7280]">
          Tout ce que vous devez savoir sur la formation
        </p>
        <ul className="mt-12 space-y-3">
          {faqs.map((faq, i) => (
            <li
              key={i}
              className="rounded-xl border border-[#E5E7EB] bg-white shadow-sm"
            >
              <button
                type="button"
                className="flex w-full items-center justify-between rounded-xl px-6 py-4 text-left font-semibold text-[#111827] transition-colors hover:bg-[#F9FAFB]"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                {faq.q}
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-white transition-transform ${openIndex === i ? "rotate-45" : ""}`}
                >
                  <Plus className="h-5 w-5" />
                </span>
              </button>
              {openIndex === i && (
                <div className="border-t border-[#E5E7EB] px-6 py-4">
                  <p className="text-[15px] text-[#6B7280]">{faq.a}</p>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

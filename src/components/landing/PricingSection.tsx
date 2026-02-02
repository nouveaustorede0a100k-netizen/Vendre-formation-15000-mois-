import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";

const plans = [
  {
    name: "Standard",
    price: "127",
    subtitle: "Parfait pour débuter",
    features: [
      "Accès à tous les modules",
      "12+ heures de contenu vidéo",
      "Projets pratiques inclus",
      "Certificat de completion",
      "Support par email",
    ],
    cta: "Choisir Standard",
    variant: "secondary" as const,
    recommended: false,
    borderClass: "border-[#E5E7EB]",
  },
  {
    name: "Premium",
    price: "297",
    subtitle: "Le plus populaire",
    features: [
      "Tout du plan Standard",
      "Groupe privé Discord",
      "Sessions Q&A mensuelles",
      "Code source complet",
      "Support prioritaire",
      "Mises à jour à vie",
    ],
    cta: "Choisir Premium",
    variant: "primary" as const,
    recommended: true,
    borderClass: "border-2 border-dashed border-[#2563EB]",
  },
  {
    name: "Pro",
    price: "597",
    subtitle: "Formation intensive",
    features: [
      "Tout du plan Premium",
      "Mentorat 1-1 (4 sessions)",
      "Révision de vos projets",
      "Coaching personnalisé",
      "Accès précoce nouveautés",
    ],
    cta: "Choisir Pro",
    variant: "secondary" as const,
    recommended: false,
    borderClass: "border-[#E5E7EB]",
  },
];

export function PricingSection() {
  return (
    <section id="tarifs" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-3xl font-extrabold text-[#111827]">
          Tarification Simple
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-[#6B7280]">
          Choisissez le plan qui correspond à vos objectifs
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-xl border bg-white p-6 ${plan.borderClass}`}
            >
              {plan.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#2563EB] px-4 py-1 text-sm font-medium text-white">
                  Recommandé
                </div>
              )}
              <div className="pt-2">
                <p className="text-2xl font-bold text-[#111827]">
                  {plan.price}€
                </p>
                <p className="text-sm text-[#6B7280]">{plan.subtitle}</p>
              </div>
              <ul className="mt-6 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-[15px] text-[#374151]">
                    <Check className="h-5 w-5 flex-shrink-0 text-[#2563EB]" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link href={`/register?plan=${plan.name.toLowerCase()}`} className="mt-6 block">
                <Button
                  variant={plan.variant}
                  size="md"
                  className="w-full"
                >
                  {plan.cta}
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

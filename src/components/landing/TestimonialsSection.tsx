import { Star } from "lucide-react";

const testimonials = [
  {
    initials: "MD",
    initialsColor: "#EF4444",
    name: "Marie Dubois",
    role: "Développeuse Frontend",
    quote:
      "Cette formation a complètement changé ma carrière. J'ai lancé mon premier SaaS en 3 semaines.",
  },
  {
    initials: "TM",
    initialsColor: "#2563EB",
    name: "Thomas Martin",
    role: "Entrepreneur Tech",
    quote:
      "Le contenu est à jour et très pratique. Les modules sur Stripe m'ont fait gagner un temps fou.",
  },
  {
    initials: "SL",
    initialsColor: "#10B981",
    name: "Sophie Laurent",
    role: "Data Engineer",
    quote:
      "L'approche pédagogique est excellente. Chaque module construit sur le précédent.",
  },
  {
    initials: "AC",
    initialsColor: "#2563EB",
    name: "Alex Chen",
    role: "Full-Stack Developer",
    quote:
      "J'ai adoré les sections sur l'IA. Claude et Cursor sont devenus mes outils quotidiens.",
  },
  {
    initials: "EW",
    initialsColor: "#2563EB",
    name: "Emma Wilson",
    role: "Product Manager",
    quote:
      "Même sans background technique fort, j'ai réussi à créer mon application.",
  },
  {
    initials: "LM",
    initialsColor: "#10B981",
    name: "Lucas Moreau",
    role: "Freelancer",
    quote:
      "Les projets pratiques m'ont permis de construire un portfolio solide.",
  },
];

export function TestimonialsSection() {
  return (
    <section id="avis" className="bg-[#F9FAFB] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-3xl font-extrabold text-[#111827]">
          Avis de nos étudiants
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-[#6B7280]">
          Découvrez ce que disent ceux qui ont suivi la formation
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-xl border border-[#E5E7EB] bg-white p-6 shadow-sm"
            >
              <div className="mb-3 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-[#2563EB] text-[#2563EB]"
                  />
                ))}
              </div>
              <p className="text-[15px] text-[#374151]">&quot;{t.quote}&quot;</p>
              <div className="mt-4 flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white"
                  style={{ backgroundColor: t.initialsColor }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-[#111827]">{t.name}</p>
                  <p className="text-[13px] text-[#6B7280]">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

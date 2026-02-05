import {
  Lightbulb,
  Target,
  Code,
  Puzzle,
  Rocket,
  TrendingUp,
} from "lucide-react";

const modules = [
  {
    icon: Lightbulb,
    title: "Fondations",
    description:
      "Découvrez l'anatomie d'un SaaS et explorez les outils IA (Claude, Replit, Cursor, Bolt.new, v0.dev).",
  },
  {
    icon: Target,
    title: "Planification",
    description:
      "Listez les fonctionnalités essentielles de votre MVP et créez un cahier des charges complet.",
  },
  {
    icon: Code,
    title: "Développement",
    description:
      "Générez le code de base, configurez GitHub, importez et organisez votre projet dans Cursor.",
  },
  {
    icon: Puzzle,
    title: "Intégrations",
    description:
      "Authentification, base de données, paiements Stripe et intégration des APIs IA.",
  },
  {
    icon: Rocket,
    title: "Déploiement",
    description:
      "Déployez sur Vercel/Netlify, configurez votre domaine et optimisez les performances.",
  },
  {
    icon: TrendingUp,
    title: "Croissance",
    description:
      "Landing page optimisée, onboarding utilisateur et lancement sur Product Hunt.",
  },
];

export function ModulesGrid() {
  return (
    <section id="modules" className="bg-[#F9FAFB] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((mod, i) => (
            <div
              key={i}
              className="rounded-xl border border-[#E5E7EB] bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light text-primary">
                <mod.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-[#111827]">
                Module {i + 1}: {mod.title}
              </h3>
              <p className="mt-2 text-[15px] text-[#6B7280]">{mod.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

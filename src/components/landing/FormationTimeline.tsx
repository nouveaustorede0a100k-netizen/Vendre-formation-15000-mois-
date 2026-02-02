const timeline = [
  {
    title: "Module 1 — Introduction et Fondations",
    items: [
      "Présentation de la formation et méthodologie",
      "Comprendre l'anatomie d'un SAAS (Frontend, Backend, BDD, API, Auth)",
      "Panorama des outils IA (Claude, Replit, Cursor, Bolt.new, v0.dev)",
      "Trouver et valider son idée de SAAS",
      "Budget réel et ressources nécessaires",
    ],
  },
  {
    title: "Module 2 — Planification et Cahier des Charges",
    items: [
      "Lister toutes les fonctionnalités essentielles (MVP)",
      "Créer un cahier des charges complet avec Claude",
      "Définir l'architecture technique (choix de stack)",
      "Créer des maquettes/wireframes avec IA",
      "Préparer son environnement de développement",
    ],
  },
  {
    title: "Module 3 — Développement Initial",
    items: [
      "Générer le code de base dans Replit ou Bolt.new",
      "Configurer GitHub et créer son repository",
      "Importer et organiser le projet dans Cursor",
      "Ajuster et améliorer le code avec des prompts ciblés",
      "Tester localement et corriger les bugs",
    ],
  },
  {
    title: "Module 4 — Intégrations Avancées",
    items: [
      "Intégrer l'authentification utilisateur (Clerk/Supabase Auth)",
      "Connecter une base de données (Supabase/Firebase/PostgreSQL)",
      "Intégrer les paiements Stripe (checkout + webhooks)",
      "Intégrer des APIs IA (OpenAI, Anthropic, etc.)",
      "Ajouter analytics et monitoring",
    ],
  },
  {
    title: "Module 5 — Déploiement et Production",
    items: [
      "Préparer l'application pour le déploiement",
      "Déployer sur Vercel/Netlify",
      "Configurer le nom de domaine personnalisé",
      "Résoudre les erreurs de déploiement courantes",
      "Optimiser les performances (SEO, vitesse, sécurité)",
    ],
  },
  {
    title: "Module 6 — Lancement et Croissance",
    items: [
      "Créer une landing page optimisée",
      "Mettre en place l'onboarding utilisateur",
      "Stratégie de lancement (Product Hunt, réseaux sociaux)",
      "Collecter et analyser les retours utilisateurs",
      "Itérer et ajouter de nouvelles fonctionnalités",
    ],
  },
];

export function FormationTimeline() {
  return (
    <section id="formation" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center text-3xl font-extrabold text-[#111827] sm:text-4xl">
          Structure de la Formation
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-[#6B7280]">
          6 modules progressifs pour devenir expert du développement SaaS avec l&apos;IA
        </p>

        <div className="mt-16">
          {timeline.map((module, idx) => (
            <div key={idx} className="relative flex gap-6 pb-12 last:pb-0">
              <div className="flex flex-shrink-0 flex-col items-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2563EB] text-sm font-bold text-white">
                  {idx + 1}
                </div>
                {idx < timeline.length - 1 && (
                  <div className="mt-2 h-full w-0.5 flex-1 bg-[#2563EB]" />
                )}
              </div>
              <div className="min-w-0 flex-1 rounded-xl border border-[#E5E7EB] bg-white p-6">
                <h3 className="text-lg font-bold text-[#111827]">{module.title}</h3>
                <ul className="mt-4 space-y-2">
                  {module.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-[15px] text-[#374151]"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#2563EB]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

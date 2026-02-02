import Link from "next/link";

export const metadata = {
  title: "Cookies — AI Build Master",
  description: "Politique d'utilisation des cookies.",
};

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-[#E5E7EB] px-4 py-4">
        <div className="mx-auto flex max-w-3xl items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-[#2563EB] text-lg font-bold text-white">
              AI
            </div>
            <span className="font-semibold text-[#111827]">BuildMaster</span>
          </Link>
          <Link href="/" className="text-sm font-medium text-[#2563EB] hover:underline">
            Retour à l&apos;accueil
          </Link>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="text-3xl font-extrabold text-[#111827]">
          Utilisation des cookies
        </h1>
        <p className="mt-2 text-[#6B7280]">Dernière mise à jour : janvier 2025</p>
        <div className="mt-8 space-y-6 text-[#374151]">
          <section>
            <h2 className="text-xl font-bold text-[#111827]">1. Qu’est-ce qu’un cookie ?</h2>
            <p className="mt-2">
              Un cookie est un petit fichier texte déposé sur votre appareil lors de
              la visite du site. Il permet de mémoriser des informations (session,
              préférences, analytics).
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-[#111827]">2. Cookies utilisés</h2>
            <p className="mt-2">
              Nous utilisons des cookies strictement nécessaires à l’authentification
              et au bon fonctionnement du site (session Supabase). Des cookies
              d’analyse peuvent être utilisés pour mesurer l’audience (optionnel).
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-[#111827]">3. Gestion des cookies</h2>
            <p className="mt-2">
              Vous pouvez configurer votre navigateur pour refuser ou supprimer les
              cookies. Certaines fonctionnalités (connexion, accès à la formation)
              pourraient ne plus fonctionner correctement.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-[#111827]">4. Contact</h2>
            <p className="mt-2">
              Pour toute question : contact@aibuildmaster.com. Voir aussi notre{" "}
              <Link href="/privacy" className="text-[#2563EB] hover:underline">
                politique de confidentialité
              </Link>
              .
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}

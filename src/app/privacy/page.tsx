import Link from "next/link";

export const metadata = {
  title: "Confidentialité — AI Build Master",
  description: "Politique de confidentialité et protection des données.",
};

export default function PrivacyPage() {
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
          <Link
            href="/"
            className="text-sm font-medium text-[#2563EB] hover:underline"
          >
            Retour à l&apos;accueil
          </Link>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="text-3xl font-extrabold text-[#111827]">
          Politique de confidentialité
        </h1>
        <p className="mt-2 text-[#6B7280]">Dernière mise à jour : janvier 2025</p>
        <div className="mt-8 space-y-6 text-[#374151]">
          <section>
            <h2 className="text-xl font-bold text-[#111827]">1. Responsable du traitement</h2>
            <p className="mt-2">
              AI Build Master est responsable du traitement des données personnelles
              collectées sur ce site. Pour toute question : contact@aibuildmaster.com
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-[#111827]">2. Données collectées</h2>
            <p className="mt-2">
              Nous collectons les données nécessaires à votre inscription et à l&apos;accès
              à la formation : adresse email, nom, et données de progression pédagogique.
              Les paiements sont traités par Stripe ; nous ne stockons pas les numéros
              de carte bancaire.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-[#111827]">3. Finalités</h2>
            <p className="mt-2">
              Les données sont utilisées pour la gestion de votre compte, l&apos;accès aux
              contenus de formation, le suivi de progression, le support et les
              communications liées au service.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-[#111827]">4. Durée de conservation</h2>
            <p className="mt-2">
              Les données sont conservées tant que votre compte est actif, puis selon
              les obligations légales (comptabilité, litiges).
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-[#111827]">5. Vos droits</h2>
            <p className="mt-2">
              Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification,
              d&apos;effacement, de limitation du traitement et de portabilité. Pour les
              exercer : contact@aibuildmaster.com. Vous pouvez introduire une réclamation
              auprès de la CNIL.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}

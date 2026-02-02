import Link from "next/link";

export const metadata = {
  title: "Conditions générales — AI Build Master",
  description: "Conditions générales d'utilisation et de vente.",
};

export default function TermsPage() {
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
          Conditions générales d&apos;utilisation
        </h1>
        <p className="mt-2 text-[#6B7280]">Dernière mise à jour : janvier 2025</p>
        <div className="mt-8 space-y-6 text-[#374151]">
          <section>
            <h2 className="text-xl font-bold text-[#111827]">1. Objet</h2>
            <p className="mt-2">
              Les présentes conditions régissent l&apos;utilisation de la plateforme AI Build
              Master et l&apos;accès aux formations en ligne proposées.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-[#111827]">2. Inscription et compte</h2>
            <p className="mt-2">
              L&apos;utilisateur s&apos;engage à fournir des informations exactes et à maintenir
              la confidentialité de ses identifiants. L&apos;accès au contenu payant est
              réservé aux comptes ayant réglé le montant correspondant au plan choisi.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-[#111827]">3. Tarifs et paiement</h2>
            <p className="mt-2">
              Les prix sont indiqués en euros TTC. Le paiement est effectué via Stripe.
              L&apos;accès est accordé après confirmation du paiement. Les offres « une fois »
              donnent accès au contenu selon les modalités décrites sur la page tarifaire.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-[#111827]">4. Droit de rétractation</h2>
            <p className="mt-2">
              Conformément à la réglementation, vous disposez de 14 jours pour vous
              rétracter après l&apos;achat. Si l&apos;accès au contenu a été consommé avant
              la fin de ce délai, le droit de rétractation peut être limité.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-[#111827]">5. Propriété intellectuelle</h2>
            <p className="mt-2">
              Les contenus de formation (vidéos, textes, supports) sont protégés par le
              droit d&apos;auteur. Toute reproduction ou diffusion non autorisée est interdite.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-[#111827]">6. Contact</h2>
            <p className="mt-2">
              Pour toute question : contact@aibuildmaster.com
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}

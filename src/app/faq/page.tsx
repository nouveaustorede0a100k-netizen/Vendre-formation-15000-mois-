import Link from "next/link";

export const metadata = {
  title: "FAQ — AI Build Master",
  description: "Questions fréquentes sur la formation.",
};

const faqs = [
  {
    q: "Comment accéder à la formation après achat ?",
    a: "Après paiement, vous recevez un email de confirmation. Connectez-vous avec le compte utilisé pour l'achat et accédez au tableau de bord depuis le menu.",
  },
  {
    q: "Puis-je suivre la formation à mon rythme ?",
    a: "Oui. Tous les modules et leçons sont accessibles en illimité. Vous avancez à votre rythme et pouvez reprendre où vous en étiez.",
  },
  {
    q: "Quels prérequis techniques ?",
    a: "Un ordinateur avec connexion internet suffit. Aucun prérequis en programmation n'est obligatoire ; la formation part des bases.",
  },
  {
    q: "Comment contacter le support ?",
    a: "Par email à support@formation-ia.com ou contact@aibuildmaster.com.",
  },
];

export default function FAQPage() {
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
        <h1 className="text-3xl font-extrabold text-[#111827]">FAQ</h1>
        <p className="mt-2 text-[#6B7280]">Questions fréquentes</p>
        <ul className="mt-8 space-y-6">
          {faqs.map((faq, i) => (
            <li key={i} className="rounded-xl border border-[#E5E7EB] bg-white p-6 shadow-sm">
              <h2 className="font-bold text-[#111827]">{faq.q}</h2>
              <p className="mt-2 text-[#374151]">{faq.a}</p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

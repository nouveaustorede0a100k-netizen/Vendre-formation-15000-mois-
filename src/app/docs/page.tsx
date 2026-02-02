import Link from "next/link";

export const metadata = {
  title: "Documentation — AI Build Master",
  description: "Ressources et documentation de la formation.",
};

export default function DocsPage() {
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
        <h1 className="text-3xl font-extrabold text-[#111827]">Documentation</h1>
        <p className="mt-2 text-[#6B7280]">
          Ressources et guides pour accompagner votre formation.
        </p>
        <div className="mt-8 rounded-xl border border-[#E5E7EB] bg-white p-8 shadow-sm">
          <p className="text-[#374151]">
            La documentation détaillée est accessible une fois inscrit, dans l&apos;espace
            formation (onglet Documents). Vous y trouverez les guides, cheatsheets
            et ressources téléchargeables.
          </p>
          <Link
            href="/register"
            className="mt-6 inline-block font-medium text-[#2563EB] hover:underline"
          >
            Créer un compte →
          </Link>
        </div>
      </main>
    </div>
  );
}

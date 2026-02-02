import Link from "next/link";

export const metadata = {
  title: "Communauté — AI Build Master",
  description: "Rejoignez la communauté des étudiants.",
};

const COMMUNITY_URL = process.env.NEXT_PUBLIC_COMMUNITY_URL || "#";

export default function CommunityPage() {
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
        <h1 className="text-3xl font-extrabold text-[#111827]">Communauté</h1>
        <p className="mt-2 text-[#6B7280]">
          Rejoignez les étudiants et échangez sur la formation.
        </p>
        <div className="mt-8 rounded-xl border border-[#E5E7EB] bg-white p-8 shadow-sm">
          <p className="text-[#374151]">
            Les abonnés au plan Premium ont accès à un groupe privé Discord pour
            échanger et poser des questions. Configurez le lien de votre communauté
            via la variable <code className="rounded bg-[#F3F4F6] px-1">NEXT_PUBLIC_COMMUNITY_URL</code>.
          </p>
          {COMMUNITY_URL !== "#" && (
            <a
              href={COMMUNITY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block font-medium text-[#2563EB] hover:underline"
            >
              Rejoindre la communauté →
            </a>
          )}
        </div>
      </main>
    </div>
  );
}

import Link from "next/link";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/Button";

const DEMO_VIDEO_URL = process.env.NEXT_PUBLIC_DEMO_VIDEO_URL;

export const metadata = {
  title: "Voir la démo — AI Build Master",
  description: "Découvrez la formation en vidéo.",
};

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-[#E5E7EB] px-4 py-4">
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-primary text-lg font-bold text-white">
              AI
            </div>
            <span className="font-semibold text-[#111827]">BuildMaster</span>
          </Link>
          <Link href="/">
            <Button variant="ghost" size="sm">
              Retour à l&apos;accueil
            </Button>
          </Link>
        </div>
      </header>
      <main className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="text-2xl font-bold text-[#111827] sm:text-3xl">
          Découvrez la formation en vidéo
        </h1>
        <p className="mt-2 text-[#6B7280]">
          Une présentation rapide du programme et des outils utilisés.
        </p>
        <div className="mt-8 aspect-video w-full overflow-hidden rounded-xl bg-[#1F2937]">
          {DEMO_VIDEO_URL ? (
            <iframe
              src={DEMO_VIDEO_URL}
              title="Démo formation"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full"
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center text-white">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/10">
                <Play className="h-10 w-10 fill-white text-white" />
              </div>
              <p className="mt-4 font-medium">Vidéo démo à venir</p>
              <p className="mt-1 text-sm text-white/70">
                Configurez NEXT_PUBLIC_DEMO_VIDEO_URL pour afficher une vidéo
                (YouTube, Vimeo, etc.).
              </p>
              <Link href="#formation" className="mt-6">
                <Button variant="primary" size="md">
                  Voir la structure de la formation
                </Button>
              </Link>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

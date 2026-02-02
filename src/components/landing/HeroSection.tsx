import Link from "next/link";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section className="bg-white px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#F3F4F6] px-4 py-2 text-sm font-medium text-[#374151]">
          <Sparkles className="h-4 w-4" />
          Nouvelle ère du développement
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-[#111827] sm:text-5xl lg:text-[56px]">
          Créez des Applications et des SaaS avec l&apos;
          <span className="text-[#2563EB]">IA</span>
        </h1>
        <p className="mx-auto mt-6 max-w-[640px] text-lg text-[#6B7280]">
          Maîtrisez les outils et techniques pour construire des produits numériques
          performants en exploitant la puissance de l&apos;intelligence artificielle.
          Formation complète, progressive et orientée résultats.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/register">
            <Button variant="primary" size="lg" className="w-full sm:w-auto">
              Commencer Gratuitement →
            </Button>
          </Link>
          <Link href="/demo">
            <Button variant="secondary" size="lg" className="w-full sm:w-auto">
              Voir la démo
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

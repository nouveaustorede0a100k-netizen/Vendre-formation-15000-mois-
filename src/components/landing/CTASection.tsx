import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function CTASection() {
  return (
    <section className="bg-[#111827] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          Prêt à transformer votre carrière ?
        </h2>
        <p className="mt-4 text-[#9CA3AF]">
          Rejoignez plus de 2,500 étudiants qui ont déjà lancé leurs projets SaaS.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/register">
            <Button variant="primary" size="lg">
              Commencer Maintenant →
            </Button>
          </Link>
          <a
            href="mailto:contact@aibuildmaster.com"
            className="rounded-xl border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white transition-colors hover:bg-white/20"
          >
            Poser une question
          </a>
        </div>
      </div>
    </section>
  );
}

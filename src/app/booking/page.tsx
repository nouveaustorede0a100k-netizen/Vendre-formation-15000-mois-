import Link from "next/link";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { BookingForm } from "./BookingForm";

const CALENDLY_EMBED_URL =
  process.env.NEXT_PUBLIC_CALENDLY_EMBED_URL || "https://calendly.com";

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      <header className="border-b border-[#E5E7EB] bg-white px-4 py-4">
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
          Réserver un appel gratuit
        </h1>
        <p className="mt-2 text-[#6B7280]">
          Choisissez un créneau de 15 min pour discuter de votre projet avec un
          conseiller.
        </p>
        <div className="mt-8 space-y-8">
          <BookingForm />
          <div className="rounded-xl border border-[#E5E7EB] bg-white p-4 shadow-sm sm:p-6">
            <div className="flex items-center gap-2 text-primary">
              <Calendar className="h-6 w-6" />
              <span className="font-medium">Ou choisir un créneau directement</span>
            </div>
            <div className="mt-4 min-h-[500px]">
              <iframe
                src={CALENDLY_EMBED_URL}
                width="100%"
                height="600"
                frameBorder="0"
                title="Calendly"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/Button";

function RegisterForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const plan = searchParams.get("plan") || "standard";
  const supabase = createClient();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const { error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { full_name: fullName } },
    });
    setLoading(false);
    if (signUpError) {
      setError(signUpError.message);
      return;
    }
    setSuccess(true);
    if (plan && plan !== "free") {
      router.push(`/api/checkout?plan=${plan}`);
      return;
    }
    router.push("/dashboard");
    router.refresh();
  }

  if (success) {
    return (
      <div className="rounded-lg bg-green-50 p-4 text-center text-[#10B981]">
        Compte créé ! Vérifiez votre email ou accédez au tableau de bord.
        <Link href="/dashboard" className="mt-2 block font-medium underline">
          Aller au tableau de bord
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
      {error && (
        <div className="rounded-lg bg-red-50 p-3 text-sm text-[#EF4444]">
          {error}
        </div>
      )}
      <div>
        <label htmlFor="fullName" className="block text-sm font-medium text-[#374151]">
          Nom complet
        </label>
        <input
          id="fullName"
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="mt-1 w-full rounded-xl border border-[#E5E7EB] px-4 py-3 text-[#111827] focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          placeholder="Jean Dupont"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-[#374151]">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mt-1 w-full rounded-xl border border-[#E5E7EB] px-4 py-3 text-[#111827] focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          placeholder="vous@exemple.com"
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-[#374151]">
          Mot de passe
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength={6}
          className="mt-1 w-full rounded-xl border border-[#E5E7EB] px-4 py-3 text-[#111827] focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          placeholder="••••••••"
        />
      </div>
      <Button type="submit" variant="primary" size="md" className="w-full" disabled={loading}>
        {loading ? "Inscription..." : "Créer mon compte"}
      </Button>
    </form>
  );
}

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#F9FAFB] px-4">
      <div className="w-full max-w-md rounded-xl border border-[#E5E7EB] bg-white p-8 shadow-sm">
        <Link href="/" className="mb-6 inline-flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-primary text-lg font-bold text-white">
            AI
          </div>
          <span className="font-semibold text-[#111827]">BuildMaster</span>
        </Link>
        <h1 className="text-2xl font-bold text-[#111827]">Créer un compte</h1>
        <p className="mt-1 text-sm text-[#6B7280]">
          Accédez à la formation et commencez à construire avec l&apos;IA
        </p>
        <Suspense fallback={<div className="mt-6">Chargement...</div>}>
          <RegisterForm />
        </Suspense>
        <p className="mt-6 text-center text-sm text-[#6B7280]">
          Déjà un compte ?{" "}
          <Link href="/login" className="font-medium text-primary hover:underline">
            Se connecter
          </Link>
        </p>
      </div>
    </div>
  );
}

import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { Trophy, ChevronRight } from "lucide-react";

export default async function EvaluationsPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const { data: evaluations } = await supabase
    .from("evaluations")
    .select("id, title, description, passing_score, module_id, modules(title, module_number)")
    .eq("is_published", true)
    .order("created_at", { ascending: true });

  const { data: results } = await supabase
    .from("user_evaluation_results")
    .select("evaluation_id, score, passed, completed_at")
    .eq("user_id", user.id);

  const resultsByEval = new Map(
    (results ?? []).map((r) => [r.evaluation_id, r])
  );

  return (
    <div>
      <h1 className="text-2xl font-extrabold text-[#111827]">Évaluations</h1>
      <p className="mt-1 text-[#6B7280]">
        Testez vos connaissances avec les quiz de fin de module.
      </p>
      <div className="mt-8 space-y-4">
        {evaluations?.map((ev) => {
          const result = resultsByEval.get(ev.id);
          return (
            <div
              key={ev.id}
              className="flex items-center justify-between rounded-xl border border-[#E5E7EB] bg-white p-6 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EFF6FF] text-[#2563EB]">
                  <Trophy className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-[#111827]">{ev.title}</h3>
                  <p className="mt-1 text-sm text-[#6B7280]">
                    Module {ev.modules?.module_number} — {ev.modules?.title}
                  </p>
                  {ev.description && (
                    <p className="mt-2 text-sm text-[#374151]">{ev.description}</p>
                  )}
                  {result && (
                    <p className="mt-2 text-sm font-medium text-[#10B981]">
                      Résultat : {result.score}% — {result.passed ? "Réussi" : "Non réussi"}
                    </p>
                  )}
                </div>
              </div>
              <Link
                href={`/dashboard/evaluations/${ev.id}`}
                className="flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium text-[#2563EB] hover:bg-[#EFF6FF]"
              >
                {result ? "Voir le quiz" : "Passer le quiz"}
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          );
        })}
      </div>
      {(!evaluations || evaluations.length === 0) && (
        <div className="mt-8 rounded-xl border border-[#E5E7EB] bg-white p-12 text-center shadow-sm">
          <p className="text-[#6B7280]">
            Les évaluations seront bientôt disponibles.
          </p>
        </div>
      )}
    </div>
  );
}

import { createClient } from "@/lib/supabase/server";
import { redirect, notFound } from "next/navigation";
import Link from "next/link";
import { SubmitQuizForm } from "./SubmitQuizForm";

export default async function EvaluationQuizPage({
  params,
}: {
  params: Promise<{ evaluationId: string }>;
}) {
  const { evaluationId } = await params;
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const { data: evaluation } = await supabase
    .from("evaluations")
    .select("id, title, description, passing_score, module_id, modules(title, module_number)")
    .eq("id", evaluationId)
    .eq("is_published", true)
    .single();

  if (!evaluation) notFound();

  const { data: existingResult } = await supabase
    .from("user_evaluation_results")
    .select("score, passed, completed_at")
    .eq("user_id", user.id)
    .eq("evaluation_id", evaluationId)
    .single();

  const { data: questions } = await supabase
    .from("evaluation_questions")
    .select("id, question_text, question_type, options, question_order")
    .eq("evaluation_id", evaluationId)
    .order("question_order", { ascending: true });

  const questionsList = questions ?? [];

  return (
    <div>
      <Link
        href="/dashboard/evaluations"
        className="mb-6 inline-block text-sm text-[#2563EB] hover:underline"
      >
        ← Retour aux évaluations
      </Link>
      <h1 className="text-2xl font-extrabold text-[#111827]">{evaluation.title}</h1>
      {evaluation.description && (
        <p className="mt-2 text-[#6B7280]">{evaluation.description}</p>
      )}
      {existingResult ? (
        <div className="mt-8 rounded-xl border border-[#E5E7EB] bg-white p-8 shadow-sm">
          <h2 className="text-lg font-bold text-[#111827]">Votre résultat</h2>
          <p className="mt-4 text-2xl font-bold text-[#10B981]">
            {existingResult.score}%
          </p>
          <p className="mt-1 text-[#6B7280]">
            {existingResult.passed ? "Quiz réussi !" : "Score insuffisant pour valider (seuil : " + evaluation.passing_score + "%)."}
          </p>
          <p className="mt-4 text-sm text-[#9CA3AF]">
            Complété le {existingResult.completed_at ? new Date(existingResult.completed_at).toLocaleDateString("fr-FR") : ""}
          </p>
        </div>
      ) : (
        <SubmitQuizForm
          evaluationId={evaluationId}
          questions={questionsList}
          passingScore={evaluation.passing_score ?? 70}
        />
      )}
    </div>
  );
}

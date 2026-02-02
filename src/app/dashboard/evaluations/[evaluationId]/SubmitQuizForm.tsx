"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";

type Option = { text: string; is_correct: boolean };
type Question = {
  id: string;
  question_text: string;
  question_type: string;
  options: Option[] | null;
  question_order: number;
};

export function SubmitQuizForm({
  evaluationId,
  questions,
  passingScore,
}: {
  evaluationId: string;
  questions: Question[];
  passingScore: number;
}) {
  const router = useRouter();
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    const total = questions.length;
    let correct = 0;
    questions.forEach((q, i) => {
      const optIdx = answers[q.id];
      if (optIdx != null && q.options?.[optIdx]?.is_correct) correct++;
    });
    const score = total ? Math.round((correct / total) * 100) : 0;
    const passed = score >= passingScore;

    try {
      const res = await fetch("/api/evaluations/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          evaluationId,
          score,
          passed,
          answers: Object.entries(answers).map(([questionId, optionIndex]) => ({
            questionId,
            optionIndex,
          })),
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Erreur lors de l'envoi");
      }
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur");
    } finally {
      setSubmitting(false);
    }
  };

  if (questions.length === 0) {
    return (
      <p className="mt-8 text-[#6B7280]">Aucune question pour ce quiz.</p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-8">
      {error && (
        <div className="rounded-lg bg-red-50 p-3 text-sm text-[#EF4444]">
          {error}
        </div>
      )}
      {questions.map((q) => (
        <div
          key={q.id}
          className="rounded-xl border border-[#E5E7EB] bg-white p-6 shadow-sm"
        >
          <h3 className="font-bold text-[#111827]">{q.question_text}</h3>
          <ul className="mt-4 space-y-2">
            {(q.options ?? []).map((opt, idx) => (
              <li key={idx}>
                <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-[#E5E7EB] px-4 py-3 hover:bg-[#F9FAFB]">
                  <input
                    type="radio"
                    name={q.id}
                    checked={answers[q.id] === idx}
                    onChange={() =>
                      setAnswers((prev) => ({ ...prev, [q.id]: idx }))
                    }
                    className="h-4 w-4 text-[#2563EB]"
                  />
                  <span className="text-[#374151]">{opt.text}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <Button type="submit" variant="primary" size="lg" disabled={submitting}>
        {submitting ? "Envoi..." : "Valider le quiz"}
      </Button>
    </form>
  );
}

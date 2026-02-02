import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function POST(req: NextRequest) {
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      return NextResponse.json({ error: "Non authentifié" }, { status: 401 });
    }
    const body = await req.json();
    const { evaluationId, score, passed, answers } = body;
    if (!evaluationId || typeof score !== "number") {
      return NextResponse.json(
        { error: "evaluationId et score requis" },
        { status: 400 }
      );
    }
    const { error } = await supabase.from("user_evaluation_results").upsert(
      {
        user_id: user.id,
        evaluation_id: evaluationId,
        score,
        passed: !!passed,
        answers: answers ?? [],
        completed_at: new Date().toISOString(),
      },
      { onConflict: "user_id,evaluation_id" }
    );
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Erreur serveur" },
      { status: 500 }
    );
  }
}

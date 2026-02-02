import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ lessonId: string }> }
) {
  const { lessonId } = await params;
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: "Non authentifié" }, { status: 401 });
  }
  const { data: rows, error } = await supabase
    .from("lesson_discussions")
    .select("id, content, created_at, user_id")
    .eq("lesson_id", lessonId)
    .is("parent_id", null)
    .order("created_at", { ascending: true });
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  const list = rows ?? [];
  const userIds = [...new Set(list.map((r) => r.user_id))];
  const { data: profiles } = await supabase
    .from("profiles")
    .select("id, full_name")
    .in("id", userIds);
  const profileMap = new Map((profiles ?? []).map((p) => [p.id, p]));
  const data = list.map((r) => ({
    ...r,
    profiles: profileMap.get(r.user_id)
      ? { full_name: profileMap.get(r.user_id)!.full_name }
      : null,
  }));
  return NextResponse.json(data);
}

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ lessonId: string }> }
) {
  const { lessonId } = await params;
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: "Non authentifié" }, { status: 401 });
  }
  const body = await req.json();
  const { content, parent_id } = body;
  if (!content || typeof content !== "string" || !content.trim()) {
    return NextResponse.json(
      { error: "Contenu requis" },
      { status: 400 }
    );
  }
  const { data: row, error } = await supabase
    .from("lesson_discussions")
    .insert({
      lesson_id: lessonId,
      user_id: user.id,
      content: content.trim(),
      parent_id: parent_id || null,
    })
    .select("id, content, created_at, user_id")
    .single();
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  const { data: profile } = await supabase
    .from("profiles")
    .select("full_name")
    .eq("id", user.id)
    .single();
  return NextResponse.json({
    ...row,
    profiles: profile ? { full_name: profile.full_name } : null,
  });
}

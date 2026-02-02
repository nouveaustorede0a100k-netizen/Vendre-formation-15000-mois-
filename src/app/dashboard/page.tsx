import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { ResumeCard } from "@/components/dashboard/ResumeCard";

export default async function DashboardHomePage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const { data: profile } = await supabase
    .from("profiles")
    .select("full_name")
    .eq("id", user.id)
    .single();

  const displayName =
    (profile?.full_name as string) ||
    user.email?.split("@")[0] ||
    "Étudiant";

  const { data: modules } = await supabase
    .from("modules")
    .select("id, title")
    .eq("is_published", true)
    .order("module_number", { ascending: true });

  const firstModule = modules?.[0];
  let resumeModuleId = firstModule?.id;
  let resumeModuleTitle = firstModule?.title ?? "Module 1 : Setup & Outils IA";
  let resumeLessonId = "";

  if (firstModule) {
    const { data: firstLesson } = await supabase
      .from("lessons")
      .select("id")
      .eq("module_id", firstModule.id)
      .eq("is_published", true)
      .order("lesson_order", { ascending: true })
      .limit(1)
      .maybeSingle();
    resumeLessonId = firstLesson?.id ?? "";
  }

  const { data: lastProgress } = await supabase
    .from("user_lesson_progress")
    .select("lesson_id, lessons(module_id, modules(title, id))")
    .eq("user_id", user.id)
    .order("last_accessed_at", { ascending: false })
    .limit(1)
    .maybeSingle();

  const lp = lastProgress as unknown as {
    lesson_id: string;
    lessons?: { module_id: string; modules?: { title: string; id: string } };
  } | null;
  if (lp?.lessons?.modules?.id) {
    resumeModuleId = lp.lessons.modules.id;
    resumeModuleTitle = lp.lessons.modules.title;
    resumeLessonId = lp.lesson_id;
  }

  return (
    <div>
      <h1 className="text-3xl font-extrabold text-[#111827]">
        Bonjour, {displayName} 👋
      </h1>
      {resumeModuleId && resumeLessonId && (
        <div className="mt-8">
          <ResumeCard
            moduleTitle={resumeModuleTitle}
            moduleId={resumeModuleId}
            lessonId={resumeLessonId}
          />
        </div>
      )}
    </div>
  );
}

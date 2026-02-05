import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { redirect, notFound } from "next/navigation";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";
import { LessonSidebar } from "@/components/dashboard/LessonSidebar";
import { VideoPlayer } from "@/components/dashboard/VideoPlayer";
import { LessonTabs } from "@/components/dashboard/LessonTabs";
import { Button } from "@/components/ui/Button";

export default async function LessonPage({
  params,
}: {
  params: Promise<{ moduleId: string; lessonId: string }>;
}) {
  const { moduleId, lessonId } = await params;
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const { data: lesson } = await supabase
    .from("lessons")
    .select("id, title, description, video_url, duration_seconds, lesson_order, learning_objectives")
    .eq("id", lessonId)
    .eq("module_id", moduleId)
    .eq("is_published", true)
    .single();

  if (!lesson) notFound();

  await supabase.from("user_lesson_progress").upsert(
    {
      user_id: user.id,
      lesson_id: lessonId,
      last_accessed_at: new Date().toISOString(),
    },
    { onConflict: "user_id,lesson_id" }
  );

  const { data: moduleData } = await supabase
    .from("modules")
    .select("id, title, module_number")
    .eq("id", moduleId)
    .single();

  if (!moduleData) notFound();

  const { data: allModules } = await supabase
    .from("modules")
    .select("id, title, module_number")
    .eq("is_published", true)
    .order("module_number", { ascending: true });

  const modulesWithLessons = await Promise.all(
    (allModules ?? []).map(async (mod) => {
      const { data: lessons } = await supabase
        .from("lessons")
        .select("id, title, duration_seconds, lesson_order")
        .eq("module_id", mod.id)
        .eq("is_published", true)
        .order("lesson_order", { ascending: true });
      return { ...mod, lessons: lessons ?? [] };
    })
  );

  const { data: progress } = await supabase
    .from("user_lesson_progress")
    .select("is_completed")
    .eq("user_id", user.id)
    .eq("lesson_id", lessonId)
    .single();

  const completedPercent = progress?.is_completed ? 100 : 0;

  const currentModuleLessons = modulesWithLessons.find((m) => m.id === moduleId)?.lessons ?? [];
  const currentIndex = currentModuleLessons.findIndex((l) => l.id === lessonId);
  const prevLesson = currentIndex > 0 ? currentModuleLessons[currentIndex - 1] : null;
  const nextLesson =
    currentIndex >= 0 && currentIndex < currentModuleLessons.length - 1
      ? currentModuleLessons[currentIndex + 1]
      : null;

  const { data: resources } = await supabase
    .from("lesson_resources")
    .select("title, file_url")
    .eq("lesson_id", lessonId)
    .order("resource_order", { ascending: true });

  const learningObjectives = lesson.learning_objectives as string[] | null;

  async function markCompleteAction() {
    "use server";
    const supabaseServer = await createClient();
    const { data: { user: u } } = await supabaseServer.auth.getUser();
    if (!u) return;
    await supabaseServer.from("user_lesson_progress").upsert(
      {
        user_id: u.id,
        lesson_id: lessonId,
        is_completed: true,
        completed_at: new Date().toISOString(),
        last_accessed_at: new Date().toISOString(),
      },
      { onConflict: "user_id,lesson_id" }
    );
  }

  return (
    <div className="flex min-h-0 flex-1 overflow-hidden">
      <LessonSidebar
        modules={modulesWithLessons}
        currentModuleId={moduleId}
        currentLessonId={lessonId}
      />
      <div className="flex flex-1 flex-col overflow-y-auto bg-white">
        <div className="border-b border-[#E5E7EB] px-6 py-4">
          <nav className="text-sm text-[#6B7280]">
            <Link href="/dashboard" className="text-primary hover:underline">
              🏠
            </Link>
            <span className="mx-2">›</span>
            <Link
              href={`/dashboard/module/${moduleId}/lesson/${lessonId}`}
              className="text-[#374151] hover:underline"
            >
              Module {moduleData.module_number}
            </Link>
            <span className="mx-2">›</span>
            <span className="text-[#111827]">{lesson.title}</span>
          </nav>
          <div className="mt-2 flex items-center justify-between">
            <h1 className="text-xl font-bold text-[#111827]">{lesson.title}</h1>
            <span
              className={`text-sm font-medium ${
                completedPercent === 0 ? "text-[#EF4444]" : "text-[#10B981]"
              }`}
            >
              {completedPercent}% complété
            </span>
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-4 p-6">
          <div className="flex items-center justify-between gap-4">
            <Link
              href={
                prevLesson
                  ? `/dashboard/module/${moduleId}/lesson/${prevLesson.id}`
                  : "#"
              }
              className={
                prevLesson
                  ? "flex items-center gap-1 rounded-lg border border-[#E5E7EB] px-4 py-2 text-sm font-medium text-[#374151] hover:bg-[#F9FAFB]"
                  : "pointer-events-none flex items-center gap-1 text-[#9CA3AF]"
              }
            >
              <ChevronLeft className="h-4 w-4" />
              Précédente
            </Link>
            <form action={markCompleteAction}>
              <Button type="submit" variant="primary" size="sm">
                <Check className="mr-2 h-4 w-4" />
                Marquer terminée
              </Button>
            </form>
            <Link
              href={
                nextLesson
                  ? `/dashboard/module/${moduleId}/lesson/${nextLesson.id}`
                  : "#"
              }
              className={
                nextLesson
                  ? "flex items-center gap-1 rounded-lg border border-[#E5E7EB] px-4 py-2 text-sm font-medium text-[#374151] hover:bg-[#F9FAFB]"
                  : "pointer-events-none flex items-center gap-1 text-[#9CA3AF]"
              }
            >
              Suivante
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          <VideoPlayer title={lesson.title} videoUrl={lesson.video_url} />

          <LessonTabs
            lessonId={lessonId}
            description={lesson.description}
            learningObjectives={learningObjectives}
            resources={resources ?? []}
          />
        </div>
      </div>
    </div>
  );
}

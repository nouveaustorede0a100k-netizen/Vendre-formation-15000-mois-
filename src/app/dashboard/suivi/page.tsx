import { createClient } from "@/lib/supabase/server";

export default async function SuiviPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return null;

  const { count: totalLessons } = await supabase
    .from("lessons")
    .select("id", { count: "exact", head: true })
    .eq("is_published", true);

  const { count: completedLessons } = await supabase
    .from("user_lesson_progress")
    .select("id", { count: "exact", head: true })
    .eq("user_id", user.id)
    .eq("is_completed", true);

  const { data: moduleProgress } = await supabase
    .from("user_module_progress")
    .select("module_id, is_completed")
    .eq("user_id", user.id);

  const modulesFinished = moduleProgress?.filter((m) => m.is_completed).length ?? 0;
  const progressPercent =
    totalLessons && totalLessons > 0
      ? Math.round(((completedLessons ?? 0) / totalLessons) * 100)
      : 0;

  const { data: progressRows } = await supabase
    .from("user_lesson_progress")
    .select("video_progress_seconds, is_completed, lessons(duration_seconds)")
    .eq("user_id", user.id);

  let totalSeconds = 0;
  for (const row of progressRows ?? []) {
    const lessonData = Array.isArray(row.lessons) ? row.lessons[0] : row.lessons;
    const duration = lessonData?.duration_seconds ?? 0;
    if (row.is_completed && duration > 0) {
      totalSeconds += duration;
    } else {
      totalSeconds += row.video_progress_seconds ?? 0;
    }
  }
  const hoursSpent = Math.round((totalSeconds / 3600) * 10) / 10;

  return (
    <div>
      <h1 className="text-2xl font-extrabold text-[#111827]">
        Suivi Pédagogique
      </h1>
      <div className="mt-8 max-w-2xl rounded-xl border border-[#E5E7EB] bg-white p-6 shadow-sm">
        <h2 className="text-lg font-bold text-[#111827]">
          Vos statistiques détaillées
        </h2>
        <div className="mt-6">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-[#374151]">
              Progression globale
            </span>
            <span
              className={`font-bold ${
                progressPercent === 0 ? "text-[#EF4444]" : "text-[#2563EB]"
              }`}
            >
              {progressPercent}%
            </span>
          </div>
          <div className="mt-2 h-3 overflow-hidden rounded-full bg-[#E5E7EB]">
            <div
              className="h-full rounded-full bg-[#2563EB] transition-all"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-[#E5E7EB] bg-white p-5">
            <p className="text-3xl font-extrabold text-[#111827]">{hoursSpent}</p>
            <p className="mt-1 text-sm text-[#6B7280]">Heures passées</p>
          </div>
          <div className="rounded-xl border border-[#E5E7EB] bg-white p-5">
            <p className="text-3xl font-extrabold text-[#10B981]">
              {modulesFinished}
            </p>
            <p className="mt-1 text-sm text-[#6B7280]">Modules finis</p>
          </div>
        </div>
      </div>
    </div>
  );
}

import { createClient } from "@/lib/supabase/server";
import { ModuleCard } from "@/components/dashboard/ModuleCard";

export default async function SequencesPage() {
  const supabase = await createClient();
  const { data: modules } = await supabase
    .from("modules")
    .select("id, title, subtitle, module_number, duration_label")
    .eq("is_published", true)
    .order("module_number", { ascending: true });

  const modulesWithLessons = await Promise.all(
    (modules ?? []).map(async (mod) => {
      const { data: lessons } = await supabase
        .from("lessons")
        .select("id")
        .eq("module_id", mod.id)
        .eq("is_published", true)
        .order("lesson_order", { ascending: true });
      const first = lessons?.[0];
      return {
        ...mod,
        lessonCount: lessons?.length ?? 0,
        firstLessonId: first?.id ?? "",
      };
    })
  );

  return (
    <div>
      <h1 className="text-2xl font-extrabold text-[#111827]">
        Séquences e-learning
      </h1>
      <p className="mt-1 text-[#6B7280]">
        Retrouvez tous les modules de votre formation.
      </p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {modulesWithLessons.map((mod) => (
          <ModuleCard
            key={mod.id}
            moduleNumber={mod.module_number}
            title={mod.title ?? ""}
            subtitle={mod.subtitle ?? ""}
            lessonCount={mod.lessonCount}
            durationLabel={mod.duration_label ?? "1h"}
            firstLessonId={mod.firstLessonId}
            moduleId={mod.id}
          />
        ))}
      </div>
      {(!modules || modules.length === 0) && (
        <p className="mt-8 text-[#6B7280]">
          Aucun module publié pour le moment. Revenez bientôt !
        </p>
      )}
    </div>
  );
}

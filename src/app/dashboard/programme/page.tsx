import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { FileText } from "lucide-react";

export default async function ProgrammePage() {
  const supabase = await createClient();
  const { data: modules } = await supabase
    .from("modules")
    .select("id, title, subtitle, module_number")
    .eq("is_published", true)
    .order("module_number", { ascending: true });

  const modulesWithLessons = await Promise.all(
    (modules ?? []).map(async (mod) => {
      const { data: lessons } = await supabase
        .from("lessons")
        .select("id, title")
        .eq("module_id", mod.id)
        .eq("is_published", true)
        .order("lesson_order", { ascending: true });
      return { ...mod, lessons: lessons ?? [] };
    })
  );

  return (
    <div>
      <h1 className="text-2xl font-extrabold text-[#111827]">
        Programme de formation
      </h1>
      <div className="mt-8 space-y-4">
        {modulesWithLessons.map((mod) => (
          <div
            key={mod.id}
            className="rounded-xl border border-[#E5E7EB] bg-white p-6 shadow-sm"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                {mod.module_number}
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-lg font-bold text-[#111827]">
                  Module {mod.module_number} : {mod.title}
                </h3>
                <p className="mt-1 text-sm text-[#6B7280]">{mod.subtitle}</p>
                <ul className="mt-4 space-y-2">
                  {mod.lessons.map((lesson) => (
                    <li key={lesson.id}>
                      <Link
                        href={`/dashboard/module/${mod.id}/lesson/${lesson.id}`}
                        className="flex items-center gap-2 text-[15px] text-[#374151] hover:text-primary"
                      >
                        <FileText className="h-4 w-4 flex-shrink-0" />
                        {lesson.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
      {(!modules || modules.length === 0) && (
        <p className="mt-8 text-[#6B7280]">Aucun module pour le moment.</p>
      )}
    </div>
  );
}

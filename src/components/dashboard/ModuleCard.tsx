import Link from "next/link";
import { Clock } from "lucide-react";

interface ModuleCardProps {
  moduleNumber: number;
  title: string;
  subtitle: string;
  lessonCount: number;
  durationLabel: string;
  firstLessonId: string;
  moduleId: string;
}

export function ModuleCard({
  moduleNumber,
  title,
  subtitle,
  lessonCount,
  durationLabel,
  firstLessonId,
  moduleId,
}: ModuleCardProps) {
  return (
    <div className="rounded-xl border border-[#E5E7EB] bg-white shadow-sm overflow-hidden">
      <div className="bg-gradient-to-br from-primary to-primary-dark px-6 py-8 text-white rounded-t-xl relative">
        <h3 className="text-lg font-bold">Module {moduleNumber}</h3>
        <div className="absolute bottom-3 right-3 flex items-center gap-1 text-sm opacity-90">
          <Clock className="h-4 w-4" />
          {durationLabel}
        </div>
      </div>
      <div className="p-6">
        <h4 className="font-bold text-[#111827]">
          Module {moduleNumber} : {title}
        </h4>
        <p className="mt-1 text-sm text-[#6B7280]">{subtitle}</p>
        <div className="mt-4 flex items-center justify-between border-t border-[#E5E7EB] pt-4">
          <span className="text-sm text-[#6B7280]">{lessonCount} leçons</span>
          <Link
            href={`/dashboard/module/${moduleId}/lesson/${firstLessonId}`}
            className="font-medium text-primary hover:underline"
          >
            Commencer ▷
          </Link>
        </div>
      </div>
    </div>
  );
}

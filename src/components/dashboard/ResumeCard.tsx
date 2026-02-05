import Link from "next/link";
import { Zap } from "lucide-react";

interface ResumeCardProps {
  moduleTitle: string;
  moduleId: string;
  lessonId: string;
}

export function ResumeCard({ moduleTitle, moduleId, lessonId }: ResumeCardProps) {
  return (
    <div className="max-w-[400px] rounded-xl border border-[#E5E7EB] bg-white p-6 shadow-sm">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light text-primary">
        <Zap className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-bold text-[#111827]">Reprendre la formation</h3>
      <p className="mt-1 text-sm text-[#6B7280]">{moduleTitle}</p>
      <Link
        href={`/dashboard/module/${moduleId}/lesson/${lessonId}`}
        className="mt-4 inline-block font-medium text-primary hover:underline"
      >
        Continuer →
      </Link>
    </div>
  );
}

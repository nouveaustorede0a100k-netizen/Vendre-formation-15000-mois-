"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { formatDuration } from "@/lib/utils";

interface Lesson {
  id: string;
  title: string;
  duration_seconds: number | null;
  lesson_order: number;
}

interface ModuleWithLessons {
  id: string;
  title: string;
  module_number: number;
  lessons: Lesson[];
}

interface LessonSidebarProps {
  modules: ModuleWithLessons[];
  currentModuleId: string;
  currentLessonId: string;
}

export function LessonSidebar({
  modules,
  currentModuleId,
  currentLessonId,
}: LessonSidebarProps) {
  const [openModules, setOpenModules] = useState<Record<string, boolean>>({
    [currentModuleId]: true,
  });

  const toggle = (id: string) => {
    setOpenModules((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <aside className="w-[300px] flex-shrink-0 border-r border-[#E5E7EB] bg-white p-6">
      <h2 className="text-lg font-bold text-[#111827]">AI Build Master</h2>
      <Link
        href="/dashboard"
        className="mt-2 block text-sm text-primary hover:underline"
      >
        ← Retour au tableau de bord
      </Link>
      <nav className="mt-8 space-y-2">
        {modules.map((mod) => {
          const isOpen = openModules[mod.id] ?? mod.id === currentModuleId;
          return (
            <div key={mod.id}>
              <button
                type="button"
                onClick={() => toggle(mod.id)}
                className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm font-medium text-[#374151] hover:bg-[#F9FAFB]"
              >
                <span>
                  Module {mod.module_number}: {mod.title}
                </span>
                {isOpen ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
                )}
              </button>
              {isOpen && (
                <ul className="ml-2 mt-1 space-y-0.5 border-l border-[#E5E7EB] pl-4">
                  {mod.lessons.map((lesson) => {
                    const isActive = lesson.id === currentLessonId;
                    return (
                      <li key={lesson.id}>
                        <Link
                          href={`/dashboard/module/${mod.id}/lesson/${lesson.id}`}
                          className={cn(
                            "flex items-center justify-between rounded-lg px-3 py-2 text-sm",
                            isActive
                              ? "border-l-2 border-primary bg-primary-light font-medium text-primary"
                              : "text-[#6B7280] hover:bg-[#F9FAFB]"
                          )}
                        >
                          <span className="flex items-center gap-2">
                            <span
                              className={cn(
                                "inline-block h-2 w-2 rounded-full",
                                isActive ? "bg-primary" : "border border-[#9CA3AF] bg-transparent"
                              )}
                            />
                            {lesson.title}
                          </span>
                          <span className="text-xs text-[#9CA3AF]">
                            {lesson.duration_seconds != null
                              ? formatDuration(lesson.duration_seconds)
                              : "—"}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}

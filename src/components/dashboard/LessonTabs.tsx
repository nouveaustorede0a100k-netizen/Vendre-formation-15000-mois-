"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

import { LessonDiscussion } from "./LessonDiscussion";

type TabId = "overview" | "resources" | "discussion";

interface LessonTabsProps {
  lessonId?: string;
  description?: string | null;
  learningObjectives?: string[] | null;
  resources?: { title: string; file_url: string }[];
}

export function LessonTabs({
  lessonId,
  description,
  learningObjectives,
  resources = [],
}: LessonTabsProps) {
  const [active, setActive] = useState<TabId>("overview");

  const tabs: { id: TabId; label: string }[] = [
    { id: "overview", label: "Vue d'ensemble" },
    { id: "resources", label: "Ressources" },
    { id: "discussion", label: "Discussion" },
  ];

  return (
    <div className="mt-6">
      <div className="flex gap-6 border-b border-[#E5E7EB]">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActive(tab.id)}
            className={cn(
              "border-b-2 pb-3 text-sm font-medium transition-colors",
              active === tab.id
                ? "border-[#2563EB] text-[#2563EB]"
                : "border-transparent text-[#6B7280] hover:text-[#111827]"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-6">
        {active === "overview" && (
          <div>
            <h3 className="text-lg font-bold text-[#111827]">
              À propos de cette leçon
            </h3>
            <p className="mt-3 text-[15px] text-[#374151]">
              {description ||
                `Dans cette leçon, nous allons explorer en détail comment fonctionne le sujet. Prenez des notes et n'hésitez pas à poser des questions dans l'onglet Discussion.`}
            </p>
            {learningObjectives && learningObjectives.length > 0 && (
              <div className="mt-6 border-l-4 border-[#F59E0B] bg-[#FFFBEB] p-4">
                <p className="font-medium text-[#92400E]">
                  💡 Ce que vous allez apprendre
                </p>
                <ul className="mt-2 space-y-1 text-[15px] text-[#78350F]">
                  {learningObjectives.map((obj, i) => (
                    <li key={i}>• {obj}</li>
                  ))}
                </ul>
              </div>
            )}
            {(!learningObjectives || learningObjectives.length === 0) && (
              <div className="mt-6 border-l-4 border-[#F59E0B] bg-[#FFFBEB] p-4">
                <p className="font-medium text-[#92400E]">
                  💡 Ce que vous allez apprendre
                </p>
                <ul className="mt-2 space-y-1 text-[15px] text-[#78350F]">
                  <li>• Comprendre les bases fondamentales</li>
                  <li>• Configurer votre environnement de travail</li>
                  <li>• Éviter les erreurs courantes des débutants</li>
                </ul>
              </div>
            )}
          </div>
        )}
        {active === "resources" && (
          <div>
            <h3 className="text-lg font-bold text-[#111827]">Ressources</h3>
            {resources.length > 0 ? (
              <ul className="mt-3 space-y-2">
                {resources.map((r) => (
                  <li key={r.file_url}>
                    <a
                      href={r.file_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#2563EB] hover:underline"
                    >
                      {r.title}
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-3 text-[#6B7280]">
                Aucune ressource pour cette leçon.
              </p>
            )}
          </div>
        )}
        {active === "discussion" && (
          <div>
            <h3 className="text-lg font-bold text-[#111827]">Discussion</h3>
            {lessonId ? (
              <div className="mt-4">
                <LessonDiscussion lessonId={lessonId} />
              </div>
            ) : (
              <p className="mt-3 text-[#6B7280]">
                Les commentaires et questions seront bientôt disponibles.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

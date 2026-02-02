"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { getInitials } from "@/lib/utils";

interface Comment {
  id: string;
  content: string;
  created_at: string;
  user_id: string;
  profiles: { full_name: string | null } | null;
}

export function LessonDiscussion({ lessonId }: { lessonId: string }) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchComments() {
      try {
        const res = await fetch(`/api/lessons/${lessonId}/discussions`);
        if (res.ok) {
          const data = await res.json();
          setComments(data);
        }
      } finally {
        setLoading(false);
      }
    }
    fetchComments();
  }, [lessonId]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!content.trim()) return;
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch(`/api/lessons/${lessonId}/discussions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: content.trim() }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Erreur");
      }
      const newComment = await res.json();
      setComments((prev) => [...prev, newComment]);
      setContent("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur");
    } finally {
      setSubmitting(false);
    }
  }

  if (loading) {
    return <p className="text-[#6B7280]">Chargement des commentaires...</p>;
  }

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-3">
        {error && (
          <div className="rounded-lg bg-red-50 p-2 text-sm text-[#EF4444]">
            {error}
          </div>
        )}
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Posez une question ou partagez un commentaire..."
          rows={3}
          className="w-full rounded-xl border border-[#E5E7EB] px-4 py-3 text-[#111827] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:ring-1 focus:ring-[#2563EB]"
        />
        <Button type="submit" variant="primary" size="sm" disabled={submitting}>
          {submitting ? "Envoi..." : "Publier"}
        </Button>
      </form>
      <div className="space-y-4">
        <h4 className="text-sm font-semibold text-[#374151]">
          Commentaires ({comments.length})
        </h4>
        {comments.length === 0 ? (
          <p className="text-sm text-[#6B7280]">
            Aucun commentaire pour le moment. Soyez le premier à poser une question !
          </p>
        ) : (
          <ul className="space-y-4">
            {comments.map((c) => (
              <li
                key={c.id}
                className="rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2563EB] text-xs font-bold text-white">
                    {getInitials(c.profiles?.full_name ?? undefined)}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#111827]">
                      {c.profiles?.full_name ?? "Utilisateur"}
                    </p>
                    <p className="text-xs text-[#9CA3AF]">
                      {new Date(c.created_at).toLocaleString("fr-FR")}
                    </p>
                  </div>
                </div>
                <p className="mt-2 text-sm text-[#374151]">{c.content}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

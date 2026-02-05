import { createClient } from "@/lib/supabase/server";
import { Download, FileText, Archive } from "lucide-react";

export default async function DocumentsPage() {
  const supabase = await createClient();
  const { data: documents } = await supabase
    .from("documents")
    .select("id, title, file_type, file_size_label, file_url")
    .eq("is_published", true)
    .order("document_order", { ascending: true });

  const list = documents ?? [
    { id: "1", title: "Guide d'installation Cursor.pdf", file_type: "pdf", file_size_label: "2.4 MB", file_url: "#" },
    { id: "2", title: "Cheatsheet Prompt Engineering.pdf", file_type: "pdf", file_size_label: "1.1 MB", file_url: "#" },
    { id: "3", title: "Ressources Supabase.zip", file_type: "zip", file_size_label: "5.0 MB", file_url: "#" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-extrabold text-[#111827]">
        Documents & Ressources
      </h1>
      <div className="mt-8 space-y-4">
        {list.map((doc) => (
          <div
            key={doc.id}
            className="flex items-center justify-between rounded-xl border border-[#E5E7EB] bg-white p-4 shadow-sm"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-100 text-red-600">
                {doc.file_type === "zip" ? (
                  <Archive className="h-6 w-6" />
                ) : (
                  <FileText className="h-6 w-6" />
                )}
              </div>
              <div>
                <p className="font-medium text-[#111827]">{doc.title}</p>
                <p className="text-[13px] text-[#6B7280]">{doc.file_size_label}</p>
              </div>
            </div>
            <a
              href={doc.file_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-[#6B7280] transition-colors hover:bg-primary-light hover:text-primary"
            >
              <Download className="h-4 w-4" />
              Télécharger
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

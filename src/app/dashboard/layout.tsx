import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { HeaderBar } from "@/components/dashboard/HeaderBar";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("full_name")
    .eq("id", user.id)
    .single();

  return (
    <div className="flex h-screen overflow-hidden bg-[#F9FAFB]">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <HeaderBar
          userName={profile?.full_name ?? undefined}
          userEmail={user.email}
        />
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
}

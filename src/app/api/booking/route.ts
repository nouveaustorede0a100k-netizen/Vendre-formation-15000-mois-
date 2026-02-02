import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { guest_name, guest_email, guest_phone, scheduled_at, user_message } = body;
    if (!guest_name || !guest_email) {
      return NextResponse.json(
        { error: "guest_name et guest_email sont requis" },
        { status: 400 }
      );
    }
    const scheduledAt = scheduled_at
      ? new Date(scheduled_at).toISOString()
      : new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString();
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    const { data, error } = await supabase.from("bookings").insert({
      user_id: user?.id ?? null,
      guest_name,
      guest_email,
      guest_phone: guest_phone || null,
      scheduled_at: scheduledAt,
      duration_minutes: 15,
      status: "pending",
      user_message: user_message || null,
      source: "website",
    }).select("id").single();
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ id: data?.id });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Erreur serveur" },
      { status: 500 }
    );
  }
}

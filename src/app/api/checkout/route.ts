import { NextRequest, NextResponse } from "next/server";
import { stripe, PLANS } from "@/lib/stripe";
import { createClient } from "@/lib/supabase/server";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const plan = searchParams.get("plan") as "standard" | "premium" | "pro" | null;
  if (!plan || !["standard", "premium", "pro"].includes(plan)) {
    return NextResponse.redirect(new URL("/register", req.url));
  }
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.redirect(new URL("/login?redirect=/api/checkout?plan=" + plan, req.url));
  }
  const priceId = PLANS[plan]?.priceId;
  if (!priceId) {
    return NextResponse.redirect(new URL("/register?plan=" + plan, req.url));
  }
  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${req.nextUrl.origin}/dashboard?success=1`,
      cancel_url: `${req.nextUrl.origin}/register?plan=${plan}`,
      client_reference_id: user.id,
      customer_email: user.email ?? undefined,
      metadata: { user_id: user.id, plan },
    });
    if (session.url) return NextResponse.redirect(session.url);
  } catch (e) {
    console.error(e);
  }
  return NextResponse.redirect(new URL("/register?plan=" + plan, req.url));
}

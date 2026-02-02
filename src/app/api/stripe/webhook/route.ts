import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { createClient } from "@supabase/supabase-js";

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: NextRequest) {
  try {
    const body = await req.text();
    const sig = req.headers.get("stripe-signature");
    if (!sig || !webhookSecret) {
      return NextResponse.json(
        { error: "Missing signature or webhook secret" },
        { status: 400 }
      );
    }
    const event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
    if (event.type === "checkout.session.completed") {
      const session = event.data.object as { customer_email?: string; client_reference_id?: string; metadata?: { user_id?: string; plan?: string } };
      const userId = session.metadata?.user_id || session.client_reference_id;
      const plan = session.metadata?.plan || "standard";
      if (userId) {
        await supabaseAdmin
          .from("profiles")
          .update({
            plan,
            subscription_status: "active",
            updated_at: new Date().toISOString(),
          })
          .eq("id", userId);
      }
    }
    return NextResponse.json({ received: true });
  } catch (err) {
    console.error("Stripe webhook error:", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Webhook failed" },
      { status: 400 }
    );
  }
}

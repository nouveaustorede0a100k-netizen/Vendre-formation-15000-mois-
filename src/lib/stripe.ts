import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-11-20.acacia",
  typescript: true,
});

export const PLANS = {
  standard: { priceId: process.env.STRIPE_PRICE_STANDARD!, amount: 127 },
  premium: { priceId: process.env.STRIPE_PRICE_PREMIUM!, amount: 297 },
  pro: { priceId: process.env.STRIPE_PRICE_PRO!, amount: 597 },
} as const;

import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-12-18.acacia",
});

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(request: NextRequest) {
  const body = await request.text();
  const signature = request.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json(
      { error: "No signature provided" },
      { status: 400 }
    );
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err) {
    console.error("Webhook signature verification failed:", err);
    return NextResponse.json(
      { error: "Webhook signature verification failed" },
      { status: 400 }
    );
  }

  // Handle the checkout.session.completed event
  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    console.log("✅ Payment successful!");
    console.log("Session ID:", session.id);
    console.log("Customer Email:", session.customer_details?.email);
    console.log("Amount Total:", session.amount_total);
    console.log("Product ID:", session.metadata?.productId);

    // Simulate sending an email
    console.log("\n📧 Simulated Email:");
    console.log("To:", session.customer_details?.email);
    console.log("Subject: Your Purchase is Complete - Download Your Product");
    console.log(
      "Body: Thank you for your purchase! Your payment has been processed successfully."
    );
    console.log(
      `You can download your product here: ${process.env.NEXT_PUBLIC_APP_URL}/download`
    );
    console.log("\n---\n");

    // In a real application, you would:
    // 1. Save the purchase to a database
    // 2. Send an actual email with download links
    // 3. Generate secure download tokens
    // 4. Update user's purchase history
  }

  return NextResponse.json({ received: true });
}

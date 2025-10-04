Create a simple Next.js 14 project called Digital Downloads Store with the following basic features:

Landing Page

Show a grid of 3–4 digital products (e.g., Ebook, Icon Pack, Template).

Each product shows: title, price, short description, and a Buy Now button.

Product Checkout

When clicking Buy Now, redirect the user to a Stripe Checkout Session for one-time payment.

Use Stripe test keys from environment variables.

Success Page

After payment, show a simple message:
“Thank you for your purchase! A download link has been sent to your email.”

Stripe Webhook (basic)

Listen for checkout.session.completed.

On success, log the purchase and send a dummy email message in the console (simulate sending the download link).

Download Page (dummy)

A placeholder page that says: “Download your file here.”

Doesn’t need real file hosting—just a simple page to simulate the flow.

Keep it simple

Use hardcoded product data (JSON or array).

No database, no authentication.

No advanced UI—just Tailwind for a clean layout.

Output: a minimal, working end-to-end app that demonstrates buying a digital product with Stripe Checkout and a success/download flow.
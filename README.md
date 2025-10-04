# Digital Downloads Store

A Next.js 14 application for selling digital products with Stripe integration.

## Features

- Product catalog with hardcoded products
- Stripe Checkout integration
- Payment success page
- Download page for purchased products
- Stripe webhook handler for payment confirmations

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Stripe

1. Create a Stripe account at [https://stripe.com](https://stripe.com)
2. Get your test API keys from the [Stripe Dashboard](https://dashboard.stripe.com/test/apikeys)
3. Create products and prices in Stripe (or use the test mode)

### 3. Update Environment Variables

Edit the `.env.local` file with your actual Stripe keys:

```env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_actual_key
STRIPE_SECRET_KEY=sk_test_your_actual_key
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 4. Update Product Price IDs

Edit `lib/products.ts` and replace the `priceId` values with your actual Stripe Price IDs:

```typescript
priceId: "price_1234567890", // Your actual Stripe Price ID
```

### 5. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the store.

## Testing Stripe Webhooks Locally

### Option 1: Using Stripe CLI (Recommended)

1. Install the [Stripe CLI](https://stripe.com/docs/stripe-cli)
2. Login to Stripe:
   ```bash
   stripe login
   ```

3. Forward webhooks to your local server:
   ```bash
   stripe listen --forward-to localhost:3000/api/webhooks
   ```

4. The CLI will output a webhook signing secret (whsec_...). Add this to your `.env.local`:
   ```env
   STRIPE_WEBHOOK_SECRET=whsec_xxx_from_stripe_cli
   ```

5. Trigger a test payment:
   ```bash
   stripe trigger checkout.session.completed
   ```

### Option 2: Manual Testing

1. Complete a test purchase using a [Stripe test card](https://stripe.com/docs/testing):
   - Card number: `4242 4242 4242 4242`
   - Expiry: Any future date
   - CVC: Any 3 digits

2. Check your terminal/console for webhook logs showing:
   - Payment successful message
   - Session details
   - Simulated email content

## Project Structure

```
├── app/
│   ├── api/
│   │   ├── create-checkout-session/  # Stripe Checkout API
│   │   └── webhooks/                 # Stripe webhook handler
│   ├── download/                     # Download page
│   ├── success/                      # Payment success page
│   ├── layout.tsx                    # Root layout
│   ├── page.tsx                      # Home page (product listing)
│   └── globals.css                   # Global styles
├── components/
│   └── ProductCard.tsx               # Product card component
├── lib/
│   └── products.ts                   # Product data
└── .env.local                        # Environment variables
```

## How It Works

1. **Product Display**: Products are displayed on the home page with "Buy Now" buttons
2. **Checkout**: Clicking "Buy Now" creates a Stripe Checkout Session and redirects to Stripe
3. **Payment**: User completes payment on Stripe's hosted checkout page
4. **Success**: After payment, user is redirected to the success page
5. **Webhook**: Stripe sends a webhook to confirm the payment
6. **Download**: User can access the download page to get their products

## Notes

- This is a demo application for learning purposes
- In production, you should:
  - Implement user authentication
  - Store purchases in a database
  - Generate secure, time-limited download links
  - Send actual emails using a service like SendGrid or AWS SES
  - Add error handling and validation
  - Use environment-specific Stripe keys (test vs. production)

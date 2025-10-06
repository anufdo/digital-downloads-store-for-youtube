const Stripe = require('stripe');
require('dotenv').config({ path: '.env.local' });

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2024-12-18.acacia',
});

const products = [
  {
    name: 'E-Book: Web Development Guide',
    description: 'Complete guide to modern web development with Next.js and React',
    price: 2999, // $29.99 in cents
    currency: 'usd',
  },
  {
    name: 'UI Kit: Professional Dashboard',
    description: 'Premium UI components and templates for dashboard applications',
    price: 4999, // $49.99 in cents
    currency: 'usd',
  },
  {
    name: 'Video Course: TypeScript Mastery',
    description: 'Master TypeScript with 10+ hours of video content and exercises',
    price: 7999, // $79.99 in cents
    currency: 'usd',
  },
];

async function createProducts() {
  console.log('Creating Stripe products and prices...');
  
  for (const product of products) {
    try {
      // Create product
      const stripeProduct = await stripe.products.create({
        name: product.name,
        description: product.description,
        type: 'service',
      });
      
      // Create price for the product
      const price = await stripe.prices.create({
        product: stripeProduct.id,
        unit_amount: product.price,
        currency: product.currency,
      });
      
      console.log(`✅ Created: ${product.name}`);
      console.log(`   Product ID: ${stripeProduct.id}`);
      console.log(`   Price ID: ${price.id}`);
      console.log(`   Price: $${(product.price / 100).toFixed(2)}`);
      console.log('');
    } catch (error) {
      console.error(`❌ Error creating ${product.name}:`, error.message);
    }
  }
}

createProducts().then(() => {
  console.log('Done! Update your products.ts file with these price IDs.');
}).catch(console.error);
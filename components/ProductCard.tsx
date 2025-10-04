"use client";

import { Product } from "@/lib/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const handleBuyNow = async () => {
    try {
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          priceId: product.priceId,
          productId: product.id,
        }),
      });

      const { url } = await response.json();

      if (url) {
        window.location.href = url;
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to initiate checkout. Please try again.");
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col">
      <h2 className="text-2xl font-semibold mb-2">{product.title}</h2>
      <p className="text-gray-600 mb-4 flex-grow">{product.description}</p>
      <div className="mt-4">
        <p className="text-3xl font-bold text-blue-600 mb-4">
          ${(product.price / 100).toFixed(2)}
        </p>
        <button
          onClick={handleBuyNow}
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}

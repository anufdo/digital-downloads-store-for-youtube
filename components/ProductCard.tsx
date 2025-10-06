"use client";

import { Product } from "@/lib/products";

import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Separator } from "./ui/separator";
import { CheckIcon, DownloadCloudIcon, StarIcon } from "./ui/icons";

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
    <Card className="flex h-full flex-col overflow-hidden border-2 border-purple-200 bg-gradient-to-br from-white via-purple-50 to-pink-50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
      <CardHeader className="space-y-4">
        <div className="flex items-center justify-between">
          <Badge variant="secondary" className="text-xs tracking-wide">
            {product.category}
          </Badge>
          {product.popular ? (
            <span className="inline-flex items-center gap-1 text-xs font-medium text-amber-500">
              <StarIcon className="h-4 w-4 fill-amber-400 text-amber-400" /> Popular
            </span>
          ) : null}
        </div>
        <div>
          <CardTitle className="text-2xl font-semibold bg-gradient-to-r from-purple-700 to-pink-700 bg-clip-text text-transparent">
            {product.title}
          </CardTitle>
          <CardDescription className="mt-2 text-base leading-relaxed">
            {product.description}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col justify-between space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between rounded-xl border-2 border-dashed border-purple-300 bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-3 text-sm text-purple-700">
            <span className="font-medium">{product.format}</span>
            <span className="font-bold text-purple-900">{product.level}</span>
          </div>
          <Separator className="bg-slate-200" />
          <ul className="space-y-3 text-sm text-slate-600">
            {product.highlights.map((highlight) => (
              <li key={highlight} className="flex items-start gap-3">
                <span className="mt-0.5 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 p-1 shadow-sm">
                  <CheckIcon className="h-3.5 w-3.5 text-white" />
                </span>
                <span className="leading-snug">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 p-4 text-white shadow-lg">
          <p className="text-xs font-medium uppercase tracking-wide text-white/90">
            ✨ Instant access
          </p>
          <div className="mt-2 flex items-end justify-between">
            <div>
              <p className="text-3xl font-bold text-white">
                ${(product.price / 100).toFixed(2)}
              </p>
              <p className="text-xs text-white/80">One-time purchase</p>
            </div>
            <div className="flex items-center gap-1 text-xs text-white/90">
              <DownloadCloudIcon className="h-4 w-4 text-white" /> Download immediately
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-3">
        <Button className="w-full shadow-lg" onClick={handleBuyNow}>
          Purchase & Download
        </Button>
        <Button variant="outline" className="w-full border-2 border-dashed border-purple-300 text-purple-700 hover:bg-purple-50">
          Preview sample
        </Button>
      </CardFooter>
    </Card>
  );
}

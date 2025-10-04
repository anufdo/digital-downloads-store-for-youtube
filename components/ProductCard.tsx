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
    <Card className="flex h-full flex-col overflow-hidden border border-slate-200 bg-gradient-to-b from-white via-slate-50 to-slate-100">
      <CardHeader className="space-y-4">
        <div className="flex items-center justify-between">
          <Badge variant="outline" className="bg-slate-100 text-xs tracking-wide text-slate-600">
            {product.category}
          </Badge>
          {product.popular ? (
            <span className="inline-flex items-center gap-1 text-xs font-medium text-amber-500">
              <StarIcon className="h-4 w-4 fill-amber-400 text-amber-400" /> Popular
            </span>
          ) : null}
        </div>
        <div>
          <CardTitle className="text-2xl font-semibold text-slate-900">
            {product.title}
          </CardTitle>
          <CardDescription className="mt-2 text-base leading-relaxed">
            {product.description}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col justify-between space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between rounded-xl border border-dashed border-slate-200 bg-slate-100 px-4 py-3 text-sm text-slate-600">
            <span>{product.format}</span>
            <span className="font-medium text-slate-900">{product.level}</span>
          </div>
          <Separator className="bg-slate-200" />
          <ul className="space-y-3 text-sm text-slate-600">
            {product.highlights.map((highlight) => (
              <li key={highlight} className="flex items-start gap-3">
                <span className="mt-0.5 rounded-full bg-sky-100 p-1">
                  <CheckIcon className="h-3.5 w-3.5 text-sky-600" />
                </span>
                <span className="leading-snug">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl bg-gradient-to-r from-sky-100 via-sky-50 to-transparent p-4">
          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
            Instant access
          </p>
          <div className="mt-2 flex items-end justify-between">
            <div>
              <p className="text-3xl font-semibold text-slate-900">
                ${(product.price / 100).toFixed(2)}
              </p>
              <p className="text-xs text-slate-500">One-time purchase</p>
            </div>
            <div className="flex items-center gap-1 text-xs text-slate-500">
              <DownloadCloudIcon className="h-4 w-4 text-sky-600" /> Download immediately
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-3">
        <Button className="w-full" onClick={handleBuyNow}>
          Purchase &amp; Download
        </Button>
        <Button variant="outline" className="w-full border-dashed">
          Preview sample
        </Button>
      </CardFooter>
    </Card>
  );
}

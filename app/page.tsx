import Link from "next/link";

import ProductCard from "@/components/ProductCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  ArrowRightIcon,
  MonitorSmartphoneIcon,
  PaletteIcon,
  ShieldCheckIcon,
  SparklesIcon,
  TimerResetIcon,
} from "@/components/ui/icons";
import { products } from "@/lib/products";

const features = [
  {
    title: "Crafted by experts",
    description:
      "Every resource is built by seasoned creators who ship production-ready experiences.",
    icon: SparklesIcon,
  },
  {
    title: "Polished design systems",
    description:
      "Crisp typography, responsive layouts, and accessible components that feel premium.",
    icon: PaletteIcon,
  },
  {
    title: "Lifetime updates",
    description:
      "Download once and receive updates as we add modules, chapters, and new assets.",
    icon: TimerResetIcon,
  },
];

const trustSignals = [
  {
    title: "Secure checkout",
    description: "Encrypted Stripe payments with instant download links.",
    icon: ShieldCheckIcon,
  },
  {
    title: "Multi-format files",
    description: "Compatible with your favorite tools including Figma and VS Code.",
    icon: MonitorSmartphoneIcon,
  },
];

export default function Home() {
  return (
    <main className="relative pb-24 pt-20">
      <section className="container relative z-10 flex flex-col gap-10 text-center">
        <div className="mx-auto max-w-xl">
          <Badge variant="colorful" className="mb-6 w-fit animate-pulse">
            🎉 Launch collection
          </Badge>
          <h1 className="text-balance text-4xl font-semibold tracking-tight bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent md:text-5xl lg:text-6xl">
            Digital products you can launch this weekend
          </h1>
          <p className="mt-6 text-lg text-white/90 bg-black/20 backdrop-blur-sm rounded-lg p-4">
            Level up your content creation with courses, UI kits, and guides curated for modern makers. Download instantly and start building without the guesswork.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button className="px-8 text-base shadow-xl">Browse the collection</Button>
          <Link
            href="#products"
            className="inline-flex h-11 items-center justify-center rounded-md border-2 border-purple-300 bg-white/90 backdrop-blur px-8 text-base font-medium text-purple-700 transition-all hover:bg-purple-50 hover:border-purple-400 hover:shadow-lg"
          >
            View products <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {features.map(({ title, description, icon: Icon }) => (
            <Card
              key={title}
              className="border-none bg-white/90 p-6 shadow-xl ring-2 ring-purple-200/60 backdrop-blur supports-[backdrop-filter]:bg-white/70 hover:shadow-2xl transition-shadow duration-300"
            >
              <CardHeader className="space-y-4 p-0">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-lg">
                  <Icon className="h-5 w-5" />
                </span>
                <CardTitle className="text-left text-xl font-semibold bg-gradient-to-r from-purple-700 to-pink-700 bg-clip-text text-transparent">
                  {title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 pt-3 text-left text-sm text-slate-700">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section
        id="products"
        className="container relative z-10 mt-20 flex flex-col gap-12"
      >
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent md:text-4xl">
            Curated downloads for modern creators
          </h2>
          <p className="mt-4 text-white/90 bg-black/20 backdrop-blur-sm rounded-lg p-4">
            Choose a resource crafted to accelerate your workflow. Every download is ready to use with zero friction.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="container relative z-10 mt-24 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <Card className="border-none bg-white/90 p-8 shadow-2xl ring-2 ring-purple-200/60 backdrop-blur supports-[backdrop-filter]:bg-white/70">
          <CardHeader className="space-y-3 p-0">
            <CardTitle className="text-3xl font-semibold bg-gradient-to-r from-purple-700 to-pink-700 bg-clip-text text-transparent">
              Stay in the loop
            </CardTitle>
            <p className="text-slate-700">
              Sign up for product drops, launch discounts, and behind-the-scenes lessons. No spam—only actionable resources.
            </p>
          </CardHeader>
          <CardContent className="p-0 pt-6">
            <form className="flex flex-col gap-3 sm:flex-row">
              <Input placeholder="you@example.com" type="email" required />
              <Button type="submit" className="w-full sm:w-auto shadow-lg">
                Join waitlist
              </Button>
            </form>
            <p className="mt-3 text-xs text-slate-500">
              We respect your inbox. Unsubscribe anytime.
            </p>
          </CardContent>
        </Card>

        <Card className="border-none bg-gradient-to-br from-purple-100/70 to-pink-100/70 p-8 shadow-xl ring-2 ring-purple-200/60 backdrop-blur supports-[backdrop-filter]:bg-purple-100/40">
          <CardHeader className="space-y-3 p-0">
            <CardTitle className="text-2xl font-semibold bg-gradient-to-r from-purple-800 to-pink-800 bg-clip-text text-transparent">
              Why creators trust us
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-6 p-0">
            {trustSignals.map(({ title, description, icon: Icon }) => (
              <div
                key={title}
                className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white/70 p-4"
              >
                <span className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white shadow-md">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="space-y-1">
                  <p className="font-medium text-slate-900">{title}</p>
                  <p className="text-sm text-slate-600">{description}</p>
                </div>
              </div>
            ))}
            <Separator className="bg-slate-200" />
            <p className="text-sm text-slate-600">
              "These downloads helped me ship a polished product in days, not weeks. The polish and attention to detail is unmatched."
            </p>
            <p className="text-sm font-semibold text-slate-900">
              — Jordan, indie creator
            </p>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}

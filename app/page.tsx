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
          <Badge className="mb-6 w-fit">
            Launch collection
          </Badge>
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
            Digital products you can launch this weekend
          </h1>
          <p className="mt-6 text-lg text-slate-600">
            Level up your content creation with courses, UI kits, and guides curated for modern makers. Download instantly and start building without the guesswork.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button className="px-8 text-base">Browse the collection</Button>
          <Link
            href="#products"
            className="inline-flex h-11 items-center justify-center rounded-md border border-slate-200 bg-white px-8 text-base font-medium text-slate-900 transition-colors hover:bg-slate-100"
          >
            View products <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {features.map(({ title, description, icon: Icon }) => (
            <Card
              key={title}
              className="border-none bg-white/80 p-6 shadow-lg ring-1 ring-slate-200/60 backdrop-blur supports-[backdrop-filter]:bg-white/60"
            >
              <CardHeader className="space-y-4 p-0">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                  <Icon className="h-5 w-5" />
                </span>
                <CardTitle className="text-left text-xl font-semibold">
                  {title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 pt-3 text-left text-sm text-slate-600">
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
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Curated downloads for modern creators
          </h2>
          <p className="mt-4 text-slate-600">
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
        <Card className="border-none bg-white/90 p-8 shadow-xl ring-1 ring-slate-200/60 backdrop-blur supports-[backdrop-filter]:bg-white/60">
          <CardHeader className="space-y-3 p-0">
            <CardTitle className="text-3xl font-semibold">
              Stay in the loop
            </CardTitle>
            <p className="text-slate-600">
              Sign up for product drops, launch discounts, and behind-the-scenes lessons. No spam—only actionable resources.
            </p>
          </CardHeader>
          <CardContent className="p-0 pt-6">
            <form className="flex flex-col gap-3 sm:flex-row">
              <Input placeholder="you@example.com" type="email" required />
              <Button type="submit" className="w-full sm:w-auto">
                Join waitlist
              </Button>
            </form>
            <p className="mt-3 text-xs text-slate-500">
              We respect your inbox. Unsubscribe anytime.
            </p>
          </CardContent>
        </Card>

        <Card className="border-none bg-slate-100/70 p-8 shadow-lg ring-1 ring-slate-200/60 backdrop-blur supports-[backdrop-filter]:bg-slate-100/40">
          <CardHeader className="space-y-3 p-0">
            <CardTitle className="text-2xl font-semibold">
              Why creators trust us
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-6 p-0">
            {trustSignals.map(({ title, description, icon: Icon }) => (
              <div
                key={title}
                className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white/70 p-4"
              >
                <span className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-600">
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

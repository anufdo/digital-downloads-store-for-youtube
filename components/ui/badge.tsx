import * as React from "react";

import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline";
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide",
        variant === "default" && "border-transparent bg-sky-100 text-sky-700",
        variant === "secondary" && "border-transparent bg-slate-200 text-slate-900",
        variant === "outline" && "border-sky-200 text-sky-600",
        className
      )}
      {...props}
    />
  );
}

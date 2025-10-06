import * as React from "react";

import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline" | "success" | "warning" | "colorful";
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide shadow-sm",
        variant === "default" && "border-transparent bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800",
        variant === "secondary" && "border-transparent bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800",
        variant === "outline" && "border-2 border-purple-300 text-purple-700 bg-white/80 backdrop-blur",
        variant === "success" && "border-transparent bg-gradient-to-r from-green-100 to-emerald-100 text-green-800",
        variant === "warning" && "border-transparent bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800",
        variant === "colorful" && "border-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white shadow-md",
        className
      )}
      {...props}
    />
  );
}

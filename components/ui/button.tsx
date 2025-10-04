import * as React from "react";

import { cn } from "@/lib/utils";

const baseStyles =
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ring-offset-white";

const variantStyles = {
  default: "bg-sky-500 text-white shadow hover:bg-sky-600 hover:shadow-glow",
  secondary: "bg-slate-900 text-white hover:bg-slate-800",
  outline: "border border-slate-200 bg-transparent text-slate-900 hover:bg-slate-100",
  ghost: "text-slate-900 hover:bg-slate-100",
  destructive: "bg-rose-500 text-white shadow-sm hover:bg-rose-600",
  link: "text-sky-600 underline-offset-4 hover:underline",
} as const;

const sizeStyles = {
  default: "h-11 px-6 py-2",
  sm: "h-9 rounded-md px-4",
  lg: "h-12 rounded-lg px-8 text-base",
  icon: "h-10 w-10",
} as const;

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variantStyles;
  size?: keyof typeof sizeStyles;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };

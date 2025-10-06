import * as React from "react";

import { cn } from "@/lib/utils";

const baseStyles =
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ring-offset-white";

const variantStyles = {
  default: "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg hover:from-purple-600 hover:to-pink-600 hover:shadow-xl transform hover:scale-105 transition-all duration-200",
  secondary: "bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:from-blue-700 hover:to-cyan-600 shadow-md",
  outline: "border-2 border-purple-300 bg-transparent text-purple-700 hover:bg-purple-50 hover:border-purple-400 transition-colors",
  ghost: "text-purple-600 hover:bg-purple-100 transition-colors",
  destructive: "bg-gradient-to-r from-red-500 to-rose-500 text-white shadow-sm hover:from-red-600 hover:to-rose-600",
  link: "text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 underline-offset-4 hover:underline font-semibold",
  success: "bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow hover:from-green-600 hover:to-emerald-600",
  warning: "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow hover:from-amber-600 hover:to-orange-600",
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

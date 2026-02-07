import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg" | "xl";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-full font-bold transition-all disabled:opacity-50 disabled:pointer-events-none";
    
    const variants = {
      primary: "bg-[#ffaa00] text-black hover:bg-[#ffaa00]/90 hover:scale-105 shadow-[0_0_20px_rgba(255,170,0,0.3)]",
      secondary: "bg-[#00aaff] text-white hover:bg-[#00aaff]/90 hover:scale-105 shadow-[0_0_20px_rgba(0,170,255,0.3)]",
      outline: "border-2 border-[#00aaff] text-[#00aaff] hover:bg-[#00aaff]/10",
      ghost: "text-gray-400 hover:text-white hover:bg-white/10",
    };

    const sizes = {
      sm: "h-9 px-4 text-sm",
      md: "h-11 px-6 text-base",
      lg: "h-14 px-8 text-lg",
      xl: "h-16 px-10 text-xl",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

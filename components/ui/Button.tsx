import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  external?: boolean;
  className?: string;
}

const sizeClasses = {
  sm: "px-6 py-3 text-[10px]",
  md: "px-10 py-4 text-xs",
  lg: "px-16 py-6 text-xs",
};

const variantClasses = {
  primary:
    "bg-charcoal text-warm-white hover:bg-clay transition-colors duration-300",
  secondary:
    "border border-stone-light text-stone hover:border-charcoal hover:text-charcoal transition-colors duration-300",
  ghost:
    "text-stone border-b border-stone-light hover:text-charcoal hover:border-charcoal transition-colors duration-300 pb-0.5",
};

export default function Button({
  href,
  children,
  variant,
  size = "md",
  external = false,
  className = "",
}: ButtonProps) {
  const baseClasses = "inline-block tracking-widest uppercase font-body";
  const ghostClasses = variant === "ghost" ? "" : sizeClasses[size];
  const classes = `${baseClasses} ${ghostClasses} ${variantClasses[variant]} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

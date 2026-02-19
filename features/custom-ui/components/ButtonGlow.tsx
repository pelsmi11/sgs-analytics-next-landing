import React from "react";
import Link from "next/link";
import { Slot } from "@radix-ui/react-slot";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import styles from "./btnContact.module.css";

export interface ButtonGlowProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "href"> {
  /** Button content */
  children: React.ReactNode;
  /** Show loading spinner and disable interaction */
  loading?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Render as child element (e.g. Link) instead of button */
  asChild?: boolean;
  /** When provided, renders as Next.js Link (styles apply correctly) */
  href?: string;
}

const buttonClassName = (className?: string) => cn(styles.btnGlow, className);

export const ButtonGlow = ({
  children,
  loading = false,
  disabled,
  className,
  type = "button",
  asChild = false,
  href,
  ...props
}: ButtonGlowProps) => {
  if (loading && !href && !asChild) {
    return (
      <button
        type={type}
        disabled
        className={buttonClassName(className)}
        {...props}
      >
        <Loader2 className="h-4 w-4 animate-spin shrink-0" aria-hidden />
        {children}
      </button>
    );
  }

  if (href) {
    return (
      <Link href={href} className={buttonClassName(className)}>
        {children}
      </Link>
    );
  }

  if (asChild) {
    return (
      <Slot className={buttonClassName(className)} {...props}>
        {children}
      </Slot>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      className={buttonClassName(className)}
      {...props}
    >
      {children}
    </button>
  );
};

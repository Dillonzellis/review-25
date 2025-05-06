import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

type TypographyPProps = ComponentPropsWithoutRef<"p">;

export function TypographyP({ children, className }: TypographyPProps) {
  return (
    <p className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}>
      {children}
    </p>
  );
}

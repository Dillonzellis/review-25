import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

type TypographyH3Props = ComponentPropsWithoutRef<"h3">;

export function TypographyH3({ children, className }: TypographyH3Props) {
  return (
    <h3
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight",
        className,
      )}
    >
      {children}
    </h3>
  );
}

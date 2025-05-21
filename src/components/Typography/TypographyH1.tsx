import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

type TypographyH1Props = ComponentPropsWithoutRef<"h1">;

export default function TypographyH1({
  children,
  className,
}: TypographyH1Props) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        className,
      )}
    >
      {children}
    </h1>
  );
}

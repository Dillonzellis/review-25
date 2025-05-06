import { cn } from "@/lib/utils";
import React, { ComponentPropsWithoutRef } from "react";

type MaxWidthWrapperType = ComponentPropsWithoutRef<"div">;

export default function MaxWidthWrapper({
  children,
  className,
}: MaxWidthWrapperType) {
  return (
    <div
      className={cn("mx-auto w-full max-w-[1000px] px-4 md:px-6", className)}
    >
      {children}
    </div>
  );
}

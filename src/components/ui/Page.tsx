import { forwardRef, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export const Page = forwardRef<HTMLDivElement, HTMLAttributes<HTMLElement>>(
  function ({ className, ...props }, ref) {
    return (
      <div
        className={twMerge(
          "w-full max-w-screen-xl h-fit lg:h-full mx-auto",
          className
        )}
        {...props}
        ref={ref}
      />
    );
  }
);

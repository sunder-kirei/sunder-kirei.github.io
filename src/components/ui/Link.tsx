import { AnchorHTMLAttributes, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export function Link({
  className,
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      className={twMerge(
        "px-4 py-2 rounded flex items-center gap-x-2 ring",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}

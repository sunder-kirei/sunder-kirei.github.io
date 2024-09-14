import { AnchorHTMLAttributes } from "react";
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
      target="_blank"
      {...props}
    >
      {children}
    </a>
  );
}

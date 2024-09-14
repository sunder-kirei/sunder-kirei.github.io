import { AnchorHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import { Link } from "../../ui/Link";

export function ConnectTile({
  className,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <Link
      className={twMerge(
        "w-full h-16 max-w-48 shadow-lg shadow-secondary ring-0 bg-white p-4 gap-x-4",
        className
      )}
      {...props}
    />
  );
}

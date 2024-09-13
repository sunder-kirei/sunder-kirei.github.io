import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export function Page({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return <div className={twMerge("w-full h-full", className)} {...props} />;
}

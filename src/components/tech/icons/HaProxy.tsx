import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends HTMLAttributes<HTMLImageElement> {}

export function HaProxy({ className, ...props }: Props) {
  return (
    <img
      className={twMerge("h-full aspect-square object-cover", className)}
      src="/assets/haproxy.png"
      alt="haproxy"
      {...props}
    />
  );
}

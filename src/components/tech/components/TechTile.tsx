import { HTMLMotionProps, motion } from "framer-motion";
import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export function TechTile({ className, ...props }: HTMLMotionProps<"div">) {
  return (
    <motion.div
      whileHover={{
        y: "-1rem",
      }}
      className={twMerge(
        "text-7xl w-full h-full bg-white rounded-md shadow-lg shadow-secondary p-4 grid place-items-center size-32",
        className
      )}
      {...props}
    />
  );
}

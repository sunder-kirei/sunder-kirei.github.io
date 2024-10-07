import { HTMLMotionProps, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

export function TechTile({
  className,
  noAnimation,
  ...props
}: HTMLMotionProps<"div"> & { noAnimation?: boolean }) {
  return (
    <motion.div
      whileHover={
        !noAnimation
          ? {
              y: "-1rem",
            }
          : {}
      }
      className={twMerge(
        "text-7xl w-full h-full bg-white rounded-md shadow-lg shadow-secondary p-4 grid place-items-center size-32",
        className
      )}
      {...props}
    />
  );
}

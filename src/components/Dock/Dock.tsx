import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

import {
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

interface Props extends HTMLAttributes<HTMLElement> {}

export function Dock() {
  let mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="flex h-16 items-end w-fit gap-4 mx-auto rounded-2xl backdrop-blur px-4 pb-3 bg-white/30"
    >
      {[...Array(8).keys()].map((i) => (
        <AppIcon mouseX={mouseX} key={i} />
      ))}
    </motion.div>
  );
}

function AppIcon({ mouseX }: { mouseX: MotionValue }) {
  let ref = useRef<HTMLDivElement>(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  let widthSync = useTransform(distance, [-150, 0, 150], [40, 100, 40]);
  let width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className="aspect-square w-10 rounded-full cursor-pointer bg-gray-400"
    />
  );
}

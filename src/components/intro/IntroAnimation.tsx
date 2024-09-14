import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { HelloEng } from "./HelloEng";
import { HelloHindi } from "./HelloHindi";
import { HelloJp } from "./HelloJp";

const variants = {
  exit: {
    opacity: 0,
  },
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

interface Props {
  show?: boolean;
}

export function IntroAnimation({ show = true }: Props) {
  const [idx, setIdx] = useState(-1);
  const [showIntro, setShowIntro] = useState(show);

  useEffect(() => {
    if (showIntro) {
      const TIME = 2000,
        COUNT = 6;
      setIdx((prev) => (prev + 1) % COUNT);
      const interval = setInterval(() => {
        setIdx((prev) => (prev + 1) % COUNT);
      }, TIME);
      const timeout = setTimeout(() => {
        clearInterval(interval);
        setShowIntro(false);
      }, TIME * COUNT);
      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
      };
    }
    return () => {};
  }, []);

  return (
    <div
      className={twMerge(
        "w-full h-full absolute top-0 left-0 z-[10000] grid place-items-center intro-gradient pointer-events-none opacity-0 transition-opacity duration-1000",
        showIntro && "opacity-100 pointer-events-auto"
      )}
      onClick={(event) => {
        event.stopPropagation();
      }}
      onPointerDown={(event) => {
        event.stopPropagation();
      }}
      onPointerMove={(event) => {
        event.stopPropagation();
      }}
      onPointerUp={(event) => {
        event.stopPropagation();
      }}
    >
      <MotionConfig
        transition={{
          duration: 1,
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            className="size-64 center"
            variants={variants}
            exit="exit"
            initial="initial"
            animate="animate"
            key="eng"
          >
            <HelloEng play={idx === 0} />
          </motion.div>
          <motion.div
            className="size-64 center"
            variants={variants}
            exit="exit"
            initial="initial"
            animate="animate"
            key="hindi"
          >
            <HelloHindi play={idx === 2} />
          </motion.div>
          <motion.div
            className="size-64 center"
            variants={variants}
            exit="exit"
            initial="initial"
            animate="animate"
            key="jp"
          >
            <HelloJp play={idx === 4} />
          </motion.div>
        </AnimatePresence>
      </MotionConfig>
    </div>
  );
}

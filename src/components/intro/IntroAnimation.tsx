import {
  AnimatePresence,
  HTMLMotionProps,
  motion,
  MotionConfig,
} from "framer-motion";
import { HTMLAttributes, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { Page } from "../ui/Page";
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

function getHello(i: number) {
  if (i == 0) {
    return (
      <motion.div
        className="size-64"
        variants={variants}
        exit="exit"
        initial="initial"
        animate="animate"
        key="eng"
      >
        <HelloEng />
      </motion.div>
    );
  }
  if (i == 1) {
    return (
      <motion.div
        className="size-64"
        variants={variants}
        exit="exit"
        initial="initial"
        animate="animate"
        key="hindi"
      >
        <HelloHindi />
      </motion.div>
    );
  }
  return (
    <motion.div
      className="size-64"
      variants={variants}
      exit="exit"
      initial="initial"
      animate="animate"
      key="jp"
    >
      <HelloJp />
    </motion.div>
  );
}

export function IntroAnimation() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const TIME = 4000,
      COUNT = 3;
    const interval = setInterval(() => {
      setIdx((prev) => (prev + 1) % COUNT);
    }, TIME);
    // const timeout = setTimeout(() => {
    //   clearInterval(interval);
    // }, TIME * (COUNT - 1));
    return () => {
      clearInterval(interval);
      // clearTimeout(timeout);
    };
  }, []);

  return (
    <Page className="bg-green-200 grid place-items-center">
      <MotionConfig
        transition={{
          duration: 1,
        }}
      >
        <AnimatePresence mode="wait">{getHello(idx)}</AnimatePresence>
      </MotionConfig>
    </Page>
  );
}

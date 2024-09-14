import { motion, useInView } from "framer-motion";
import { AtSign, Handshake, Heart, Linkedin, Sparkles } from "lucide-react";
import { HTMLAttributes, useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { Pdf } from "../home/Pdf";
import { TechTile } from "../tech/components/TechTile";
import { Github } from "../tech/icons/GitHub";
import { Link } from "../ui/Link";
import { Page } from "../ui/Page";
import { ConnectDialog } from "./components/ConnectDialog";
import { ConnectTile } from "./components/ConnectTile";
import { Later } from "./components/Later";
import { Leetcode } from "./components/Leetcode";
import { Mate } from "./components/Mate";
import { Spotify } from "./components/Spotify";

function Socials({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return (
    <div
      className={twMerge(
        "h-fit w-full flex items-center flex-wrap justify-center gap-4 mt-16",
        className
      )}
    >
      <ConnectTile className="text-blue-600">
        <Linkedin />
        <span>Linkedin</span>
      </ConnectTile>
      <ConnectTile className="text-black">
        <Github className="size-8" />
        <span>GitHub</span>
      </ConnectTile>
      <ConnectTile className="text-red-400">
        <Pdf className="size-8" />
        <span>Resume</span>
      </ConnectTile>
      <ConnectTile className="text-black">
        <AtSign className="size-8" />
        <span>Email</span>
      </ConnectTile>
      <ConnectTile className="text-amber-600">
        <Leetcode className="size-8" />
        <span>Leetcode</span>
      </ConnectTile>
    </div>
  );
}

export function ConnectPage({
  className,
  ...props
}: HTMLAttributes<HTMLElement>) {
  const ref = useRef(null);
  const headRef = useRef(null);
  const laterRef = useRef(null);
  const mateRef = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });
  const laterInView = useInView(laterRef, { amount: 0.8 });
  const mateInView = useInView(mateRef, { amount: 0.8 });
  const headInView = useInView(headRef, { amount: 0.5, once: true });
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isInView) {
      window.history.replaceState({}, "", "#connect");
      const popStateEvent = new PopStateEvent("popstate", { state: {} });
      dispatchEvent(popStateEvent);
    }
  }, [isInView]);

  useEffect(() => {
    function clearID(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setShow(false);
      }
    }
    window.addEventListener("keydown", clearID);

    return () => window.removeEventListener("keydown", clearID);
  }, []);

  return (
    <>
      {
        <div
          className={twMerge(
            "h-full w-full grid place-items-center fixed top-0 left-0 bg-primary/90 z-[1000] opacity-0 pointer-events-none transition-all duration-500",
            show ? "opacity-100 scale-100 pointer-events-auto" : "scale-0"
          )}
          onClick={() => {
            setShow(false);
          }}
        >
          <ConnectDialog />
        </div>
      }
      <Page
        className={twMerge("p-4 lg:mt-32 mt-16 lg:flex lg:flex-col", className)}
        {...props}
        ref={ref}
        id="connect"
      >
        <div
          className={twMerge(
            "mb-8 w-fit text-5xl mx-auto flex items-center gap-x-4 transition-all duration-500 opacity-0 translate-y-full",
            headInView ? "opacity-100 scale-100 translate-y-0" : "scale-0"
          )}
          ref={headRef}
        >
          <Handshake className="size-12" />
          <span
            className={twMerge(
              "after:block after:w-0 after:transition-all after:duration-500 after:h-2 after:bg-primary relative after:absolute after:-bottom-3 after:-z-10",
              headInView && "after:w-full"
            )}
          >
            Connect
          </span>
        </div>
        <div className="flex flex-col gap-4 w-full h-full lg:flex-row lg:items-center">
          <div className="h-full w-full flex flex-col gap-y-4 justify-center">
            <Socials />
            {/* <a
              href=""
              className="h-20 w-fit p-4 flex items-center gap-x-4 rounded-full ring ring-green-300 mx-auto mt-4 spotify cursor-pointer"
            >
              <Spotify className="h-full w-fit aspect-square" />
              <span className="after:transition-all after:duration-300 text-xl relative after:block after:absolute after:h-1 after:bg-primary after:w-0 ">
                Have a listen😎
              </span>
            </a> */}
            <iframe
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/track/6bTCdqB1PN5J93hiiZvQzW?utm_source=generator&theme=0"
              width="100%"
              height="152"
              frameBorder="0"
              allowFullScreen={false}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="w-96 mx-auto"
            ></iframe>
          </div>
          <div className="my-8 lg:my-0 flex items-center gap-4 justify-center flex-wrap h-fit">
            <Later
              play={laterInView}
              ref={laterRef}
              className="w-64 h-fit my-2"
            />
            <Mate play={mateInView} ref={mateRef} className="w-64 h-fit my-2" />
            <div className="size-44 text-9xl grid place-items-center">🤠</div>
          </div>
        </div>
        <motion.button
          whileHover={{
            scale: 1.2,
          }}
          whileTap={{
            scale: 1,
          }}
          onClick={() => {
            setShow(true);
          }}
          className="w-fit h-fit p-4 gap-x-4 mx-auto lg:mx-0 bg-white ring ring-primary mb-24 lg:mb-0 rounded-md flex flex-row items-center text-xl"
        >
          <Heart className="fill-red-500 text-red-500" />
          You like, me happy 🫠
        </motion.button>
      </Page>
    </>
  );
}

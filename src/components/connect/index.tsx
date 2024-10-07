import { useInView } from "framer-motion";
import { AtSign, Handshake, Linkedin } from "lucide-react";
import { HTMLAttributes, useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { Pdf } from "../home/Pdf";
import { Github } from "../tech/icons/GitHub";
import { Page } from "../ui/Page";
import { ConnectTile } from "./components/ConnectTile";
import { Leetcode } from "./components/Leetcode";
import { contactData } from "../../data";

function Socials({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return (
    <div
      className={twMerge(
        "h-fit w-full max-w-2xl mx-auto flex items-center flex-wrap justify-center gap-4",
        className
      )}
    >
      <ConnectTile className="text-blue-600" href={contactData.linkedIn}>
        <Linkedin />
        <span>Linkedin</span>
      </ConnectTile>
      <ConnectTile className="text-black" href={contactData.github}>
        <Github className="size-8" />
        <span>GitHub</span>
      </ConnectTile>
      <ConnectTile className="text-red-400" href={contactData.resume}>
        <Pdf className="size-8" />
        <span>Resume</span>
      </ConnectTile>
      <ConnectTile className="text-black" href={contactData.email}>
        <AtSign className="size-8" />
        <span>Email</span>
      </ConnectTile>
      <ConnectTile className="text-amber-600" href={contactData.leetcode}>
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
    <Page
      className={twMerge(
        "p-4 lg:mt-32 mt-16 lg:flex lg:flex-col pb-28 sm:pb-20 min-h-screen",
        className
      )}
      {...props}
      ref={ref}
      id="connect"
    >
      <div
        className={twMerge(
          "w-fit text-5xl mx-auto flex items-center gap-x-4 transition-all duration-500 opacity-0 translate-y-full mb-8 sm:mb-0",
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
      <div className="flex flex-col gap-4 w-full h-full lg:flex-row items-center">
        <div className="h-full w-full flex flex-col gap-8 sm:justify-center">
          <Socials />

          <iframe
            title="spotify"
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/track/6bTCdqB1PN5J93hiiZvQzW?utm_source=generator&theme=0"
            width="100%"
            height="152"
            allowFullScreen={false}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="w-96 mx-auto max-w-[90%]"
          />
        </div>
      </div>
    </Page>
  );
}

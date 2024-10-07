import { useInView } from "framer-motion";
import { HTMLAttributes, useEffect, useMemo, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { Page } from "../ui/Page";
import { TechTile } from "./components/TechTile";
import { Bash } from "./icons/Bash";
import { Cpp } from "./icons/Cpp";
import { Css3 } from "./icons/CssIcon";
import { Docker } from "./icons/Docker";
import { Express } from "./icons/Express";
import { Firebase } from "./icons/Firebase";
import { Flutter } from "./icons/Flutter";
import { Framer } from "./icons/Framer";
import { Github } from "./icons/GitHub";
import { GitIcon } from "./icons/GitIcon";
import { Html5 } from "./icons/HtmlIcon";
import { Javascript } from "./icons/Javascript";
import { Linux } from "./icons/Linux";
import { Mongodb } from "./icons/MongoDB";
import { Mongoose } from "./icons/Mongoose";
import { MySQL } from "./icons/MySQL";
import { Nextjs } from "./icons/NextJS";
import { Nodejs } from "./icons/Node";
import { Postgresql } from "./icons/Postgres";
import { Powershell } from "./icons/Powershell";
import { Prisma } from "./icons/Prisma";
import { ProudIcon } from "./icons/ProudIcon";
import { Scss } from "./icons/Scss";
import { Sqlite } from "./icons/SQLite";
import { TailwindCSS } from "./icons/TailwindCSS";
import { Typescript } from "./icons/Typescript";
import { Zod } from "./icons/Zod";
import { Redux } from "./icons/Redux";

const AMOUNT = 0.2;
export function TechPage({ className, ...props }: HTMLAttributes<HTMLElement>) {
  const webRef = useRef(null);
  const webInView = useInView(webRef, { amount: AMOUNT, once: true });
  const tiles = useMemo(
    () => [
      <Html5 />,
      <Css3 />,
      <Javascript />,
      <Typescript />,
      <Nextjs />,
      <TailwindCSS />,
      <Redux />,
      <Express />,
      <Docker />,
      <Firebase />,

      <Linux />,
      <Nodejs />,
      <Scss />,
      <Framer />,
      <Sqlite />,
      <GitIcon />,
      <Github />,
      <Mongodb />,
      <Mongoose />,
      <MySQL />,
      <Postgresql />,
      <Prisma />,
      <Zod />,
      <Bash />,
      <Powershell />,
      <Cpp />,
      <Flutter />,
    ],
    []
  );
  const [isSm, setIsSm] = useState(false);

  useEffect(() => {
    function resizeHandler() {
      if (window.innerWidth > 640) {
        setIsSm(false);
      } else {
        setIsSm(true);
      }
    }
    window.addEventListener("resize", resizeHandler);
    resizeHandler();

    return () => window.removeEventListener("resize", resizeHandler);
  }, [setIsSm]);

  return (
    <Page
      className={twMerge("p-4 gap-2 lg:grid place-items-center", className)}
      {...props}
      ref={webRef}
    >
      <ProudIcon
        className={twMerge(
          "size-32 mx-auto opacity-0 translate-y-full transition-all duration-500",
          webInView ? "opacity-100 translate-y-0 scale-100" : "scale-0"
        )}
      />
      <div
        className={twMerge(
          "w-full h-fit flex gap-4 p-4 justify-center flex-wrap opacity-0 translate-y-full transition-all duration-500",
          webInView ? "opacity-100 translate-y-0 scale-100" : "scale-0"
        )}
      >
        {(isSm ? tiles.slice(0, 10) : tiles).map((item, idx) => (
          <TechTile key={idx} title={item.key?.toString()}>
            {item}
          </TechTile>
        ))}
      </div>
    </Page>
  );
}

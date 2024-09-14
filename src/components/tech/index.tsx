import { useInView } from "framer-motion";
import { HTMLAttributes, useRef } from "react";
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

const AMOUNT = 0.2;
export function TechPage({ className, ...props }: HTMLAttributes<HTMLElement>) {
  const webRef = useRef(null);
  const webInView = useInView(webRef, { amount: AMOUNT, once: true });

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
        <TechTile title="HTML5">
          <Html5 />
        </TechTile>
        <TechTile title="CSS3">
          <Css3 />
        </TechTile>
        <TechTile title="Javascript">
          <Javascript />
        </TechTile>
        <TechTile title="Typescript">
          <Typescript />
        </TechTile>
        <TechTile title="NextJS">
          <Nextjs />
        </TechTile>
        <TechTile title="NodeJS">
          <Nodejs />
        </TechTile>
        <TechTile title="ExpressJS">
          <Express />
        </TechTile>
        <TechTile title="SCSS">
          <Scss />
        </TechTile>
        <TechTile title="TailwindCSS">
          <TailwindCSS />
        </TechTile>
        <TechTile title="Framer-motion">
          <Framer />
        </TechTile>
        <TechTile title="SQLite">
          <Sqlite />
        </TechTile>
        <TechTile title="Firebase">
          <Firebase />
        </TechTile>
        <TechTile title="Docker">
          <Docker />
        </TechTile>
        <TechTile title="Git">
          <GitIcon />
        </TechTile>
        <TechTile title="GitHub">
          <Github />
        </TechTile>
        <TechTile title="MongoDB">
          <Mongodb />
        </TechTile>
        <TechTile title="Mongoose">
          <Mongoose />
        </TechTile>
        <TechTile title="MySQL">
          <MySQL />
        </TechTile>
        <TechTile title="PostgreSQL">
          <Postgresql />
        </TechTile>
        <TechTile title="Prisma ORM">
          <Prisma />
        </TechTile>
        <TechTile title="Zod">
          <Zod />
        </TechTile>
        <TechTile title="Linux">
          <Linux />
        </TechTile>
        <TechTile title="Bash">
          <Bash />
        </TechTile>
        <TechTile title="Powershell">
          <Powershell />
        </TechTile>
        <TechTile title="C++">
          <Cpp />
        </TechTile>
        <TechTile title="Flutter">
          <Flutter />
        </TechTile>
      </div>
    </Page>
  );
}

import { Code } from "lucide-react";
import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import { Framer } from "../../tech/icons/Framer";
import { Github } from "../../tech/icons/GitHub";
import { Markdown } from "../../tech/icons/Markdown";
import { ReactIcon } from "../../tech/icons/ReactIcon";
import { TailwindCSS } from "../../tech/icons/TailwindCSS";
import { Typescript } from "../../tech/icons/Typescript";
import { ConnectTile } from "./ConnectTile";
import { Cookie } from "./Cookie";

export function ConnectDialog({
  className,
  ...props
}: HTMLAttributes<HTMLElement>) {
  return (
    <div
      className={twMerge(
        "max-w-4/5 w-fit h-4/5 bg-white rounded-md p-4 flex flex-col",
        className
      )}
      onClick={(e) => e.stopPropagation()}
      {...props}
    >
      <div className="_header flex flex-col items-center">
        <Cookie className="size-24" />
        <span className="text-xl mt-2 italic">Merci, mon ami</span>
        <span className="text-sm font-light">Here have a cookie🍪</span>
      </div>
      <div className="_seperator w-full h-0.5 bg-accent my-2"></div>
      <div className="text-2xl my-4 underline decoration-primary mx-auto w-fit">
        Built using
      </div>
      <div className="_main grid grid-cols-2 gap-2">
        <ConnectTile className="w-full text-blue-300">
          <ReactIcon className="text-3xl" />
          React
        </ConnectTile>
        <ConnectTile className="w-full">
          <Framer className="text-7xl" />
          Motion
        </ConnectTile>
        <ConnectTile className="w-full">
          <Markdown className="text-3xl" />
          Markdown
        </ConnectTile>
        <ConnectTile className="w-full text-blue-600">
          <Typescript className="text-3xl" />
          Typescript
        </ConnectTile>
        <ConnectTile className="w-full text-blue-400">
          <TailwindCSS className="text-3xl" />
          Tailwind CSS
        </ConnectTile>
        <ConnectTile className="w-full">
          <Github className="text-3xl" />
          GitHub Pages
        </ConnectTile>
      </div>
      <ConnectTile className="mt-auto mx-auto">
        <Code />
        Source Code
      </ConnectTile>
    </div>
  );
}

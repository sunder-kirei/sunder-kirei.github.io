import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import { Page } from "../ui/Page";
import { Css3 } from "./icons/CssIcon";
import { Html5 } from "./icons/HtmlIcon";
import { Javascript } from "./icons/Javascript";
import { ReactIcon } from "./icons/ReactIcon";
import { Typescript } from "./icons/Typescript";

function TechTile({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return (
    <div
      className={twMerge(
        "text-7xl w-fit h-fit bg-white rounded-md shadow-lg shadow-secondary p-4",
        className
      )}
      {...props}
    />
  );
}

export function TechPage({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return (
    <Page className={twMerge("flex p-4 gap-x-2", className)} {...props}>
      <TechTile>
        <Html5 />
      </TechTile>
      <TechTile>
        <Css3 />
      </TechTile>
      <TechTile>
        <Javascript />
      </TechTile>
      <TechTile>
        <ReactIcon />
      </TechTile>
      <TechTile>
        <Typescript />
      </TechTile>
    </Page>
  );
}

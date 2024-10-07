import { Earth, Github } from "lucide-react";
import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import { ProjectData } from "../../../data";
import { Carousel } from "../../carousel/Carousel";
import { TechTile } from "../../tech/components/TechTile";
import { Nextjs } from "../../tech/icons/NextJS";
import { ReactIcon } from "../../tech/icons/ReactIcon";
import { Express } from "../../tech/icons/Express";
import { Docker } from "../../tech/icons/Docker";

interface ProjectTileProps extends HTMLAttributes<HTMLElement> {
  data: ProjectData;
}

export function ProjectTile({
  data,
  className,
  onClick,
  ...props
}: ProjectTileProps) {
  return (
    <div
      className={twMerge(
        "w-[30rem] max-w-full rounded-md flex flex-col gap-y-2 transition-all duration-500",
        className
      )}
      {...props}
    >
      <div
        className="rounded-md aspect-video w-full overflow-clip cursor-pointer ring ring-primary p-1"
        style={{
          backgroundColor: data.bgColor,
        }}
        onClick={onClick}
      >
        <div
          className={twMerge(
            "w-full h-full rounded-md bg-center bg-no-repeat overflow-hidden tech-stack",
            data.isMobile ? "bg-contain" : "bg-cover"
          )}
          style={{
            backgroundImage: `url(${data.imgs[0]})`,
          }}
        >
          <div
            className="hidden h-full w-full translate-y-full transition-all ease-in-out duration-300 p-4 sm:flex flex-wrap gap-2 items-center justify-center"
            style={{
              background: `linear-gradient(0deg, rgba(0,0,0,0.8016456582633054) 0%, rgba(255,255,255,0) 100%)`,
            }}
          >
            {data.tech.map((item) => item)}
          </div>
        </div>
      </div>
      <div className="w-4/5 mx-auto bg-white ring ring-accent rounded-full px-8 py-4 flex justify-between items-center font-md font-semibold">
        <span className="text-xl">{data.title}</span>
        <span className="flex items-center justify-center gap-x-4">
          <a href={`${process.env.REACT_APP_GITHUB_BASE}/${data.github}`}>
            <Github className="text-black" />
          </a>
          <a
            href={data.live}
            className={twMerge(data.live ? "text-blue-600" : "text-gray-400")}
          >
            <Earth />
          </a>
        </span>
      </div>
    </div>
  );
}

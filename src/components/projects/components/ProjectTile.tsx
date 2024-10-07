import { Earth, Radio } from "lucide-react";
import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import { ProjectData } from "../../../data";
import { Link } from "../../ui/Link";
import { Github } from "../../tech/icons/GitHub";

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
            "transition-all duration-300 w-full h-full rounded-md overflow-hidden tech-stack relative"
          )}
        >
          <img
            src={data.imgs[0]}
            alt="poster"
            className={twMerge(
              "absolute top-0 left-0 w-full aspect-video transition-all duration-300",
              data.isMobile ? "object-contain" : "object-cover"
            )}
          />
          <div
            className="hidden h-full w-full translate-y-full transition-all ease-in-out duration-300 p-4 sm:flex flex-wrap gap-2 items-end justify-end"
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
          <Link
            href={`${process.env.REACT_APP_GITHUB_BASE}/${data.github}`}
            className="rounded-full transition-all duration-300 hover:scale-125 h-full aspect-square ring-0 p-0"
          >
            <Github className="text-black size-6" />
          </Link>
          {data.live && (
            <Link
              href={data.live}
              className={twMerge(
                "rounded-full transition-all duration-300 hover:scale-125 h-full aspect-square ring-0 p-0",
                data.live ? "text-blue-600" : "text-gray-400"
              )}
              target="_blank"
              rel="noreferrer"
            >
              <Radio />
            </Link>
          )}
        </span>
      </div>
    </div>
  );
}

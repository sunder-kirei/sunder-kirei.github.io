import { Earth, Github } from "lucide-react";
import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import { ProjectData } from "../../../data";

interface ProjectTileProps extends HTMLAttributes<HTMLElement> {
  data: ProjectData;
}

export function ProjectTile({
  data,
  className,
  onClick,
  ...props
}: ProjectTileProps) {
  const imgSrc = `/assets/${data.id}/${data.id}.png`;

  return (
    <div
      className={twMerge(
        "w-[30rem] max-w-full rounded-md flex flex-col gap-y-2 transition-all duration-500",
        className
      )}
      {...props}
    >
      <div
        className="bg-white rounded-md aspect-video w-full overflow-clip cursor-pointer ring ring-primary p-1"
        onClick={onClick}
      >
        <img
          src={imgSrc}
          className="w-full h-full object-contain rounded-md"
          title={data.title}
        />
      </div>
      <div className="w-4/5 mx-auto bg-white ring ring-accent rounded-full px-8 py-4 flex justify-between items-center">
        <span className="text-xl">{data.title}</span>
        <span className="flex items-center justify-center gap-x-4">
          <a href={data.github}>
            <Github className="text-black" />
          </a>
          <a href={data.live}>
            <Earth className="text-blue-600" />
          </a>
        </span>
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import { MarkdownViewer } from "react-github-markdown";
import { ProjectData } from "../../../data";
import { Carousel } from "../../carousel/Carousel";
import { Link } from "../../ui/Link";
import { Earth, Radio } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { Github } from "../../tech/icons/GitHub";

interface Props {
  project: ProjectData | null;
}

export function ProjectDialog({ project }: Props) {
  const [markdownContent, setMarkdownContent] = useState("");
  const filePath = `/${project?.github}/README.md`;

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        const response = await fetch(filePath);
        const text = await response.text();
        setMarkdownContent(text);
      } catch (error) {
        console.error("Error fetching Markdown:", error);
      }
    };
    if (project) {
      fetchMarkdown();
    } else {
      setMarkdownContent("");
    }
  }, [project, filePath]);

  return (
    <div
      className="lg:flex w-[90%] max-w-screen-xl h-4/5 bg-white lg:overflow-hidden overflow-y-auto rounded-md"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="w-full aspect-video overflow-hidden border-r">
        {project && (
          <Carousel
            className="rounded-md rounded-tr-none rounded-br-none"
            images={project.imgs}
            bgColor={project.bgColor}
          />
        )}
      </div>

      <div className="overflow-hidden lg:overflow-y-auto lg:h-full font-md h-fit w-full p-4 relative">
        <div className="w-full flex justify-end items-center mb-4 gap-4">
          <Link
            href={`${process.env.REACT_APP_GITHUB_BASE}/${project?.github}`}
            className="rounded-full transition-all duration-300 hover:scale-105 h-full aspect-square ring-black"
          >
            <Github className="text-black" />
          </Link>
          {project?.live && (
            <Link
              href={project?.live}
              className={twMerge(
                "rounded-full transition-all duration-300 hover:scale-105 h-full aspect-square ring-blue-600",
                project?.live ? "text-blue-600" : "text-gray-400"
              )}
              target="_blank"
              rel="noreferrer"
            >
              <Radio className="size-4" />
            </Link>
          )}
        </div>
        {markdownContent.length > 0 && (
          <MarkdownViewer value={markdownContent} isDarkTheme={false} />
        )}
      </div>
    </div>
  );
}

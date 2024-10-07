import { useEffect, useState } from "react";
import { MarkdownViewer } from "react-github-markdown";
import { ProjectData } from "../../../data";
import { Carousel } from "../../carousel/Carousel";

interface Props {
  project: ProjectData | null;
}

export function ProjectDialog({ project }: Props) {
  const [markdownContent, setMarkdownContent] = useState("");
  const filePath = `/${project?.github}/README.md`;

  console.log(filePath);
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
    if (filePath) {
      fetchMarkdown();
    } else {
      setMarkdownContent("");
    }
  }, [filePath]);

  return (
    <div
      className="lg:flex w-[90%] max-w-screen-xl h-4/5 bg-white lg:overflow-hidden overflow-y-auto rounded-md"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="w-full aspect-video overflow-hidden">
        {project && (
          <Carousel
            className="rounded-md"
            images={project.imgs}
            bgColor={project.bgColor}
          />
        )}
      </div>

      <div className="overflow-hidden lg:overflow-y-auto lg:h-full font-md h-fit w-full p-4 relative">
        {markdownContent.length > 0 && (
          <MarkdownViewer value={markdownContent} isDarkTheme={false} />
        )}
      </div>
    </div>
  );
}

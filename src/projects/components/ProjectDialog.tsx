import { useState, useEffect } from "react";
import { MarkdownViewer } from "react-github-markdown";

interface Props {
  dirName?: string;
}

export function ProjectDialog({ dirName }: Props) {
  const [markdownContent, setMarkdownContent] = useState("");
  const filePath = `/assets/${dirName}/${dirName}.md`;
  const imgSrc = `/assets/${dirName}/${dirName}.png`;

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
    if (dirName) {
      fetchMarkdown();
    } else {
      setMarkdownContent("");
    }
  }, [dirName]);

  return (
    <div
      className="lg:flex w-4/5 max-w-screen-xl h-4/5 bg-white lg:overflow-hidden overflow-y-auto rounded-md"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="w-full aspect-video bg-black overflow-hidden">
        <img src={imgSrc} alt="" className="w-full h-full object-contain" />
      </div>

      <div className="overflow-hidden lg:overflow-y-auto lg:h-full font-md h-fit w-full p-4 relative">
        {markdownContent.length > 0 && (
          <MarkdownViewer value={markdownContent} isDarkTheme={false} />
        )}
      </div>
    </div>
  );
}

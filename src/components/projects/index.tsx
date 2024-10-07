import { useInView } from "framer-motion";
import { Sparkles } from "lucide-react";
import { HTMLAttributes, useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { projectData, ProjectData } from "../../data";
import { Page } from "../ui/Page";
import { ProjectDialog } from "./components/ProjectDialog";
import { ProjectTile } from "./components/ProjectTile";

const DELAY = 200;

export function ProjectsPage({
  className,
  ...props
}: HTMLAttributes<HTMLElement>) {
  const ref = useRef(null);
  const headRef = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });
  const headInView = useInView(headRef, { amount: 0.5, once: true });

  const [project, setProject] = useState<ProjectData | null>(null);

  useEffect(() => {
    if (isInView) {
      window.history.replaceState({}, "", "#projects");
      const popStateEvent = new PopStateEvent("popstate", { state: {} });
      dispatchEvent(popStateEvent);
    }
  }, [isInView]);

  useEffect(() => {
    function clearID(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setProject(null);
      }
    }
    window.addEventListener("keydown", clearID);

    return () => window.removeEventListener("keydown", clearID);
  }, []);

  return (
    <>
      {
        <div
          className={twMerge(
            "h-full w-full grid place-items-center fixed top-0 left-0 bg-primary/90 z-[1000] opacity-0 pointer-events-none transition-all duration-500",
            project ? "opacity-100 scale-100 pointer-events-auto" : "scale-0"
          )}
          onClick={() => {
            setProject(null);
          }}
        >
          <ProjectDialog project={project} />
        </div>
      }
      <Page
        className={twMerge("p-4 lg:mt-32 mt-16 lg:h-fit", className)}
        {...props}
        ref={ref}
        id="projects"
      >
        <div
          className={twMerge(
            "mb-8 w-fit text-5xl mx-auto flex items-center gap-x-4 transition-all duration-500 opacity-0 translate-y-full",
            headInView ? "opacity-100 scale-100 translate-y-0" : "scale-0"
          )}
          ref={headRef}
        >
          <Sparkles className="size-12" />
          <span
            className={twMerge(
              "after:block after:w-0 after:transition-all after:duration-500 after:h-2 after:bg-primary relative after:absolute after:-bottom-3 after:-z-10",
              headInView && "after:w-full"
            )}
          >
            Projects
          </span>
        </div>
        <div className="w-full flex flex-wrap mt-16">
          <div className="h-full w-full rounded-md flex flex-wrap justify-center gap-x-4 gap-y-8">
            {projectData.map((item, idx) => (
              <ProjectTile
                key={idx}
                data={item}
                onClick={() => {
                  setProject(item);
                }}
                className={twMerge(
                  "opacity-0 translate-y-full transition-all duration-500",
                  headInView ? "opacity-100 translate-y-0 scale-100" : "scale-0"
                )}
                style={{
                  transitionDelay: `${idx * DELAY}ms`,
                }}
              />
            ))}
          </div>
        </div>
      </Page>
    </>
  );
}

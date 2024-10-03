import {
  IframeHTMLAttributes,
  LegacyRef,
  MouseEventHandler,
  useRef,
  useState,
} from "react";
import { Dock } from "./components/Dock/Dock";
import { twMerge } from "tailwind-merge";

function App() {
  const [expand, setExpand] = useState(true);
  const [origin, setOrigin] = useState({ x: 0, y: 0 });
  const [mouseHeld, setMouseHeld] = useState(false);

  const iframe = useRef<HTMLDivElement>(null);

  const handleExpand: MouseEventHandler = (e) => {
    setOrigin({ x: e.pageX, y: e.pageY });
    console.log(origin);

    setExpand((prev) => !prev);
  };

  const handleMouseMove: MouseEventHandler = (e) => {
    console.log(mouseHeld);
    console.log(iframe.current);
    console.log(e.clientX);
    if (!iframe.current || !mouseHeld) return;

    iframe.current.style.width = `${e.clientX}px`;
  };

  return (
    <main className="flex flex-col h-full w-full overflow-hidden">
      {/* <HomePage />
      <TechPage />
      <ProjectsPage />
      <ConnectPage /> */}
      <section
        className={twMerge(
          "p-1 w-full h-full transition-all genie duration-300 overflow-hidden bg-green-200",
          expand ? "scale-y-100 scale-x-100" : "scale-x-[0.1] scale-y-0"
        )}
        style={{
          transformOrigin: `${origin.x}px bottom`,
        }}
        onMouseMove={handleMouseMove}
      >
        <div className="h-full w-full flex bg-pink-200" ref={iframe}>
          {!mouseHeld && (
            <iframe
              className="bg-white max-w-full max-h-full w-full h-full rounded-lg resize border overflow-auto p-4"
              src={"https://bocchi-next.vercel.app/"}
            ></iframe>
          )}
          <div
            className="horizontal-resize bg-purple-300 w-2 cursor-e-resize ml-auto"
            onDoubleClick={(e) => {
              setMouseHeld(true);
            }}
            onClick={(e) => {
              setMouseHeld(false);
            }}
          ></div>
        </div>
      </section>
      <button
        className="bg-green-400 px-4 py-2 rounded-lg w-fit mx-auto"
        onClick={handleExpand}
      >
        shrink
      </button>
      <Dock />
    </main>
  );
}

export default App;

import { useInView } from "framer-motion";
import { Handshake, House, Sparkles } from "lucide-react";
import {
  AnchorHTMLAttributes,
  HTMLAttributes,
  useEffect,
  useRef,
  useState,
} from "react";
import { twMerge } from "tailwind-merge";

function NavTile({
  className,
  children,
  active,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { active: boolean }) {
  return (
    <a
      className={twMerge(
        "flex gap-x-2 items-center p-2 sm:p-3 rounded-full transition-colors",
        active && "bg-primary",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}

function NavBar({ className, ...props }: HTMLAttributes<HTMLElement>) {
  const [link, setLink] = useState("");

  useEffect(() => {
    function set() {
      const id = window.location.href.split("#");
      if (id.length > 1) setLink(id[1]);
    }
    window.addEventListener("popstate", set);
    set();

    return () => {
      window.removeEventListener("popstate", set);
    };
  }, []);

  return (
    <nav
      className={twMerge(
        "w-full h-20 z-100 transition-all duration-500 flex items-center justify-center gap-x-4",
        className
      )}
      {...props}
    >
      <NavTile href="#home" active={`#${link}` === "#home" || link === ""}>
        <House />
        Home
      </NavTile>
      <NavTile href="#projects" active={`#${link}` === "#projects"}>
        <Sparkles />
        Projects
      </NavTile>
      <NavTile href="#connect" active={`#${link}` === "#connect"}>
        <Handshake />
        Connect
      </NavTile>
    </nav>
  );
}

export function Nav({ className, ...props }: HTMLAttributes<HTMLElement>) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: 0.6,
  });

  return (
    <div
      className={twMerge("w-full h-20 z-[1000]", className)}
      {...props}
      ref={ref}
    >
      <NavBar
        className={
          !isInView ? "opacity-0  -translate-y-32 scale-0" : "scale-100"
        }
      />

      <NavBar
        className={twMerge(
          "fixed bottom-4 bg-white ring ring-accent w-fit left-1/2 -translate-x-1/2 sm:p-4 p-3 rounded-full",
          isInView ? "opacity-0  translate-y-32 scale-0" : "scale-100"
        )}
      />
    </div>
  );
}

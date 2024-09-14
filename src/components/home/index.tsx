import { Github, Linkedin } from "lucide-react";
import { HelloHindi } from "../intro/HelloHindi";
import { Nav } from "../layout/Nav";
import { Link } from "../ui/Link";
import { Page } from "../ui/Page";
import { Arrow } from "./Arrow";
import { Pdf } from "./Pdf";

export default function HomePage() {
  return (
    <Page className="flex flex-col">
      <Nav />
      <section className="w-full p-4 flex flex-col lg:flex-row items-center gap-x-12 gap-y-24 justify-self-center my-auto lg:-translate-y-10">
        <div className="w-full flex flex-col items-center gap-y-2">
          <HelloHindi play={true} className="w-32" />
          <div className="flex flex-col items-center gap-y-12 lg:gap-y-6">
            <div className="text-4xl">
              I am <span className="text-accent">Sunder Kumar</span>
            </div>
            <div className="flex gap-x-4">
              <Link
                className="ring-blue-600 text-blue-600"
                href="/"
                title="LinkedIn"
              >
                <Linkedin />
              </Link>
              <Link className="ring-black text-black" href="/" title="GitHub">
                <Github />
              </Link>
              <Link
                className="ring-[#ed8796] text-[#ed8796]"
                href="/"
                title="Resume"
              >
                <Pdf className="w-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex gap-x-2 items-center md:flex-row flex-col">
          <div className="w-52 hidden md:flex flex-col items-end -translate-y-1/2">
            <Arrow className="w-24" />
            <div className="font-handwriting font-semibold text-4xl text-nowrap -translate-y-full -translate-x-1/2">
              that's me
            </div>
          </div>
          <div
            className="aspect-square w-96 -z-10 rounded-full relative"
            style={{
              backgroundImage: 'url("/assets/sunder-kirei.png")',
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          />
          <div className="font-handwriting font-semibold text-4xl md:hidden underline underline-offset-8 decoration-primary">
            that's me
          </div>
        </div>
      </section>
    </Page>
  );
}

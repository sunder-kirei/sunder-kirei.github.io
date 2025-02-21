import { TechTile } from "./components/tech/components/TechTile";
import { Cloudinary } from "./components/tech/icons/Cloudinary";
import { Docker } from "./components/tech/icons/Docker";
import { Express } from "./components/tech/icons/Express";
import { Firebase } from "./components/tech/icons/Firebase";
import { Flutter } from "./components/tech/icons/Flutter";
import { HaProxy } from "./components/tech/icons/HaProxy";
import { Kafka } from "./components/tech/icons/Kafka";
import { Mongodb } from "./components/tech/icons/MongoDB";
import { Nextjs } from "./components/tech/icons/NextJS";
import { Nodejs } from "./components/tech/icons/Node";
import { Prisma } from "./components/tech/icons/Prisma";
import { ReactIcon } from "./components/tech/icons/ReactIcon";
import { Redis } from "./components/tech/icons/Redis";
import { Redux } from "./components/tech/icons/Redux";
import { Sqlite } from "./components/tech/icons/SQLite";
import { TailwindCSS } from "./components/tech/icons/TailwindCSS";
import { Zod } from "./components/tech/icons/Zod";

export interface ProjectData {
  title: string;
  github: string;
  live?: string;
  imgs: string[];
  tech: JSX.Element[];
  isMobile?: boolean;
  bgColor?: string;
}

export interface ContactData {
  linkedIn: string;
  github: string;
  email: string;
  resume: string;
  leetcode: string;
}

export const contactData: ContactData = {
  linkedIn: "https://www.linkedin.com/in/sunder-kirei/",
  github: "https://github.com/sunder-kirei",
  email: "mailto:sunder-kirei@outlook.com",
  resume: "/assets/Sunder_Resume.pdf",
  leetcode: "https://leetcode.com/sunder-kirei/",
};

export const projectData: ProjectData[] = [
  {
    github: "code-engine-client",
    title: "Code Engine Client",
    live: "https://code-engine-client.vercel.app/",
    imgs: [
      "/code-engine-client/imgs/landing.png",
      "/code-engine-client/imgs/dashboard.png",
      "/code-engine-client/imgs/note.png",
      "/code-engine-client/imgs/code.png",
      "/code-engine-client/imgs/nav.png",
      "/code-engine-client/imgs/profile.png",
    ],
    tech: [
      <TechTile className="size-12 p-2 shadow-black">
        <Nextjs className="size-full" />
      </TechTile>,
      <TechTile className="size-12 p-2 shadow-black">
        <TailwindCSS className="size-full" />
      </TechTile>,
      <TechTile className="size-12 p-2 shadow-black">
        <Redux className="size-full" />
      </TechTile>,
      <TechTile className="size-12 p-2 shadow-black">
        <Prisma className="size-full" />
      </TechTile>,
      <TechTile className="size-12 p-2 shadow-black">
        <Cloudinary className="size-full" />
      </TechTile>,
      <TechTile className="size-12 p-2 shadow-black">
        <Mongodb className="size-full" />
      </TechTile>,
    ],
  },
  {
    github: "code-engine-server",
    title: "Code Engine Server",
    imgs: ["/code-engine-server/imgs/api-canvas.png"],
    tech: [
      <TechTile className="size-12 p-2 shadow-black">
        <Express className="size-full" />
      </TechTile>,
      <TechTile className="size-12 p-2 shadow-black">
        <Prisma className="size-full" />
      </TechTile>,
      <TechTile className="size-12 p-2 shadow-black">
        <Docker className="size-full" />
      </TechTile>,
      <TechTile className="size-12 p-2 shadow-black">
        <Redis className="size-full" />
      </TechTile>,
      <TechTile className="size-12 p-2 shadow-black">
        <Kafka className="size-full" />
      </TechTile>,
      <TechTile className="size-12 p-2 shadow-black">
        <Zod className="size-full" />
      </TechTile>,
    ],
  },
  {
    github: "video-conference",
    title: "SFU Video Conferencing",
    imgs: [
      "/video-conference/imgs/auth.png",
      "/video-conference/imgs/call.png",
      "/video-conference/imgs/home.png",
    ],
    tech: [
      <TechTile className="size-12 p-2 shadow-blue-300">
        <ReactIcon className="size-full" />
      </TechTile>,
      <TechTile className="size-12 p-2 shadow-black">
        <Express className="size-full" />
      </TechTile>,
      <TechTile className="size-12 p-2 shadow-blue-500">
        <Docker className="size-full" />
      </TechTile>,
      <TechTile className="size-12 shadow-blue-800 p-0 overflow-hidden">
        <HaProxy />
      </TechTile>,
    ],
  },
  {
    github: "bocchi_next",
    live: "https://bocchi-next.vercel.app/",
    title: "Bocchi Web",
    imgs: [
      "/bocchi_next/imgs/home.png",
      "/bocchi_next/imgs/home_sm.jpg",
      "/bocchi_next/imgs/anime.png",
      "/bocchi_next/imgs/anime_sm.jpg",
      "/bocchi_next/imgs/watch.png",
      "/bocchi_next/imgs/watch_sm.jpg",
    ],
    bgColor: "black",
    tech: [
      <TechTile className="size-12 p-2 shadow-black">
        <Nextjs className="size-full" />
      </TechTile>,
      <TechTile className="size-12 p-2 shadow-blue-500">
        <TailwindCSS className="size-full" />
      </TechTile>,
    ],
  },
  {
    github: "expense-tracker",
    live: "https://expense-tracker-ebon-six.vercel.app/",
    title: "Expense Tracker",
    imgs: [
      "/expense-tracker/imgs/add-transaction.png",
      "/expense-tracker/imgs/add-transaction_sm.jpg",
      "expense-tracker/imgs/home.png",
      "/expense-tracker/imgs/home_sm.jpg",
      "/expense-tracker/imgs/transactions.png",
      "/expense-tracker/imgs/transaction_sm.jpg",
      "/expense-tracker/imgs/profile.png",
      "/expense-tracker/imgs/profile_sm.jpg",
    ],
    bgColor: "black",
    tech: [
      <TechTile className="size-12 p-2 shadow-black">
        <Nextjs className="size-full" />
      </TechTile>,
      <TechTile className="size-12 p-2 shadow-green-300">
        <Prisma className="size-full" />
      </TechTile>,
      <TechTile className="size-12 p-2 shadow-purple-300">
        <Redux className="size-full" />
      </TechTile>,
    ],
  },
  {
    github: "chats_app_flutter",
    title: "Chats App",
    imgs: [
      "/chats_app_flutter/imgs/home.png",
      "/chats_app_flutter/imgs/auth.png",
      "/chats_app_flutter/imgs/global_chat.png",
      "/chats_app_flutter/imgs/personal_chat.png",
      "/chats_app_flutter/imgs/users.png",
    ],
    isMobile: true,
    bgColor: "black",
    tech: [
      <TechTile className="size-12 p-2 shadow-blue-600">
        <Flutter className="size-full" />
      </TechTile>,
      <TechTile className="size-12 p-2 shadow-amber-300">
        <Firebase className="size-full" />
      </TechTile>,
    ],
  },
  {
    github: "bocchi_flutter",
    title: "Bocchi Flutter",
    imgs: [
      "/bocchi_flutter/imgs/home.png",
      "/bocchi_flutter/imgs/anime.png",
      "/bocchi_flutter/imgs/episodes.png",
      "/bocchi_flutter/imgs/preferences.png",
      "/bocchi_flutter/imgs/search.png",
      "/bocchi_flutter/imgs/watch.png",
    ],
    isMobile: true,
    bgColor: "black",
    tech: [
      <TechTile className="size-12 p-2 shadow-blue-600">
        <Flutter className="size-full" />
      </TechTile>,
      <TechTile className="size-12 p-2 shadow-black">
        <Express className="size-full" />
      </TechTile>,
      <TechTile className="size-12 p-2 shadow-blue-300">
        <Sqlite className="size-full" />
      </TechTile>,
    ],
  },
];

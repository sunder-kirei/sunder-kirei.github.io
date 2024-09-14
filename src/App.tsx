import React from "react";
import HomePage from "./components/home";
import { HelloEng } from "./components/intro/HelloEng";
import { HelloHindi } from "./components/intro/HelloHindi";
import { HelloJp } from "./components/intro/HelloJp";
import { IntroAnimation } from "./components/intro/IntroAnimation";
import { Nav } from "./components/layout/Nav";
import { TechPage } from "./components/tech";
import { Page } from "./components/ui/Page";

function App() {
  return (
    <>
      <HomePage />
      <TechPage />
      <Page />
      <Page />
      <Page />
    </>
  );
}

export default App;

import React from "react";
import { HelloEng } from "./components/intro/HelloEng";
import { HelloHindi } from "./components/intro/HelloHindi";
import { HelloJp } from "./components/intro/HelloJp";
import { IntroAnimation } from "./components/intro/IntroAnimation";

function App() {
  return (
    <div className="h-full w-full">
      <IntroAnimation />
    </div>
  );
}

export default App;

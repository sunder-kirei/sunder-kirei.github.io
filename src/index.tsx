import ReactDOM from "react-dom/client";
import App from "./App";
import { IntroAnimation } from "./components/intro/IntroAnimation";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <IntroAnimation show={true} />
    <App />
  </>
);

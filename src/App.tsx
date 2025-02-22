import { ConnectPage } from "./components/connect";
import HomePage from "./components/home";
import { ProjectsPage } from "./components/projects";
import { TechPage } from "./components/tech";

function App() {
  return (
    <>
      <HomePage />
      <TechPage />
      <ProjectsPage />
      <ConnectPage />
    </>
  );
}

export default App;

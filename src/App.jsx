import ButtonGradient from "./assets/svg/ButtonGradient";
import Collaboration from "./components/Collaboration";
import Features from "./components/Features";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProjectsBen from "./components/ProjectsBen";

function App() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <ProjectsBen />
        <Collaboration />
        <Features />
      </div>

      <ButtonGradient />
    </>
  );
}

export default App;

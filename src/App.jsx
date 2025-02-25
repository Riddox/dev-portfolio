import ButtonGradient from "./assets/svg/ButtonGradient";
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
      </div>

      <ButtonGradient />
    </>
  );
}

export default App;

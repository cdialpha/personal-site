import Navbar from "./components/Navbar";
import Bio from "./components/Bio";
import Connect from "./components/Thoughts";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import DevJourney from "./components/DevJourney";
import Intro from "./components/Intro";
import Branches from "./components/Branches";
import ScrollWrapper from "./components/ScrollWrapper";
import SideBranches from "./components/SideBranches";

const Home = () => {
  return (
    <>
      <Navbar />
      <Branches />
      <ScrollWrapper>
        <Intro />
        <SideBranches />
        <Bio />
        <DevJourney />
        <Skills />
        <Projects />
        <Connect />
      </ScrollWrapper>
    </>
  );
};

export default Home;

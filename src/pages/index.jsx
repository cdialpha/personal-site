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
import tw from "twin.macro";
import styled from "styled-components";

const Container = styled.div`
${tw`
w-screen
bg-white
`}
`

const Home = () => {
  return (
    <Container>
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
    </Container>
  );
};

export default Home;

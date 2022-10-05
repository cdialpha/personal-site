import React from "react";
import tw from "twin.macro";
import styled from "styled-components";

const Container = styled.div`
  ${tw`
flex flex-col
height[1000px]
width[80%]
ml-auto
mr-auto
mt-20
`}
`;

const SectionTitle = styled.div`
  ${tw`
  text-6xl  
  font-weight[900]
    text-blue-900    
`}
`;

const SubTitle = styled.h2`
  ${tw`
  font-weight[900]
  text-blue-900
  mt-5   
`}
`;

const SectionText = styled.h1`
  ${tw`
    text-black
    width[80%]
    text-2xl
`}
`;

const Projects = () => {
  return (
    <Container id="projects">
      <SectionTitle> Projects </SectionTitle>
      <SubTitle> Boston Spread </SubTitle>
      <SubTitle> Open Source Poultry Initiative (ospi) </SubTitle>
    </Container>
  );
};

export default Projects;

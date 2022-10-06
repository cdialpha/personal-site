import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import Image from "next/image";

const Container = styled.div`
  ${tw`
flex flex-col
height[1000px]
width[80%]
ml-auto
mr-auto
margin-top[1000px]
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
      <SectionText className="mt-5"> For projects are extra exciting when they can solve a problem in the real world. Below I have three projects that highlight some of the skills I have been learning over the past few months. In each case, there is very little borrowed code and these are projects that I have invested many hours into. 
      </SectionText>
      <SubTitle> Boston Spread </SubTitle>
      <Image src={"/Boston_Spread_screenshot.png"} height={1000} width={1000}/> 
      <SectionText> Boston Spread is a </SectionText>
      <SubTitle> Open Source Poultry Initiative (ospi) </SubTitle>
    </Container>
  );
};

export default Projects;

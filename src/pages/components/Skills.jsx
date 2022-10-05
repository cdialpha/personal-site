import React from "react";
import Image from "next/image";
import tw from "twin.macro";
import styled from "styled-components";

const Container = styled.div`
  ${tw`
    grid-cols-1
    grid-rows-6
    lg:flex
    lg:flex-col
    relative
    text-black
    width[80%]
    ml-auto
    mr-auto
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

const Skills = () => {
  return (
    <Container id="skills" className="mt-20 height[1000px]">
      <SectionTitle>Skills</SectionTitle>

      <SubTitle className="text-2xl"> Project Management </SubTitle>
      <SectionText> Risk Analysis </SectionText>
      <SectionText> Schedule Management </SectionText>
      <SectionText> Stakeholder Analysis & Management </SectionText>

      <SubTitle className="text-2xl"> Front End </SubTitle>
      <SectionText> React </SectionText>
      <SectionText> TypeScript </SectionText>
      <SectionText>
        State Management Libraries: (React Query, Redux, RTK, Zustand, Jotai)
      </SectionText>
      <SectionText>Form Management (Formik, React Hook Forms)</SectionText>

      <SubTitle className="text-2xl"> Back End </SubTitle>
      <SectionText> Node, Express </SectionText>
      <SectionText> tRPC </SectionText>
      <SectionText> NextJS </SectionText>
      <SectionText> Django </SectionText>

      <SubTitle className="text-2xl"> DataBases </SubTitle>
      <SectionText> MongoDB, DocumentDB </SectionText>
      <SectionText> MySQL, Postgres </SectionText>
      <SectionText> Prisma </SectionText>

      <SubTitle className="text-2xl"> Graphic Design </SubTitle>
      <SectionText> Figma </SectionText>
      <SectionText> Gimp </SectionText>
      <SectionText> Inkscpae </SectionText>

      <SubTitle className="text-2xl"> DevOps </SubTitle>
      <SectionText> Git, Github </SectionText>
      <SectionText> Azure DeveOps (ADO) </SectionText>
      <SectionText> Docker </SectionText>
      <SectionText> AWS DevOps tools </SectionText>
    </Container>
  );
};

export default Skills;

// UX design
//freepik

//DB techs
// phatplus
// <a href="https://www.flaticon.com/free-icons/database" title="database icons">
//   Database icons created by phatplus - Flaticon
// </a>;

// stakeholder mgmt
//Eucalyp

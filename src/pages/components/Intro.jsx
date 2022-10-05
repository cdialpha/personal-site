import React, { useState, useEffect } from "react";
import Image from "next/image";
import tw from "twin.macro";
import styled from "styled-components";

const Container = styled.div`
  ${tw`
    flex
    flex-col
    justify-start
    align-items[center]
    text-black
    width[80%]
    ml-auto
    mr-auto
    height[1500px]
    padding-top[200px]

`}
`;

const HitBoxCalvin = styled.div`
  ${tw`
  absolute
    height[500px]
    width[150px]
    left[150px]
    top[50px]
    z-50
    overflow-visible
`}
`;

const HitBoxMaliza = styled.div`
  ${tw`
    absolute
    height[400px]
    width[150px]
    left[300px]
    top[150px]
    z-50
`}
`;

const ImageContainer = styled.div`
  ${tw`
    height[600px]
    width[600px]
    relative
    mt-20
`}
`;

const PointMe = styled.div`
  ${tw`
  relative
  invisible
  group-hover:visible

  z-10
  top[100px]
  left[-200px]
  height[150px]
  width[300px]

`}
`;

const PointNotMe = styled.div`
  ${tw`
  relative
  invisible
  group-hover:visible
  top[100px]
  left[200px]
  height[150px]
  width[300px]
 `}
`;

const SectionTitle = styled.div`
  ${tw`
  text-2xl  
  font-weight[900]
    text-blue-900
    mt-10    
`}
`;

const Greeting = styled.div`
  ${tw`
  text-4xl
`}
  opacity:${({ display }) => (display ? "1" : "0")};
  transition-duration: 1000ms;
  transition-timing-function: linear;
`;

const Intro = () => {
  const [display, setDisplay] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 600) setDisplay(true);
    if (window.pageYOffset <= 600) setDisplay(false);
    console.log(display);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <Container>
      <ImageContainer className="relative">
        <HitBoxCalvin className="group">
          <PointMe>
            <Image src={"/pointme.png"} width={200} height={200} />{" "}
          </PointMe>
        </HitBoxCalvin>
        <div>
          <HitBoxMaliza className="group">
            <PointNotMe>
              <Image src={"/partner.png"} width={400} height={200} />
            </PointNotMe>
          </HitBoxMaliza>
        </div>
        <Image src={"/wedding.png"} width={600} height={600} />{" "}
      </ImageContainer>
      <SectionTitle> Ope, hey there. </SectionTitle>
      <SectionTitle>
        <Greeting display={display}>I'm Calvin, pleasure to meet you.</Greeting>
      </SectionTitle>
    </Container>
  );
};

export default Intro;

import React, { useEffect, useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { Parallax } from "react-scroll-parallax";
import Image from "next/image";

const View = styled.div`
  ${tw`
    absolute    
    z-10
    mt-10
`}
`;

const Container = styled.div`
  ${tw`
    flex
    justify-center
`}
`;

const Branches = () => {
  const [windowX, setWindowX] = useState(0);
  const [windowY, setWindowY] = useState(0);

  useEffect(() => {
    const initialWindowHeight = window.innerHeight;
    const initialWindowWidth = window.innerWidth;
    setWindowX(initialWindowWidth);
    setWindowY(initialWindowHeight);
    console.log("x", windowX, "y", windowY);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const handleResize = () => {
    setWindowX(window.innerWidth);
    setWindowY(window.innerHeight);
    console.log("x", windowX, "y", windowY);
  };

  return (
    <View>
      <Container>
        <Parallax translateX={[`${windowX / 2 + 2500}px`, `${-windowX}px`]}>
          <Image
            src={"/treetopleft.png"}
            width={windowX + 1000}
            height={windowX + 1000}
          />
        </Parallax>
        <Parallax translateX={[`${-windowX / 2 - 2500}px`, `${windowX}px`]}>
          <Image
            src={"/treetopright.png"}
            width={windowX + 1000}
            height={windowX + 1000}
            className="top[100px]"
          />
        </Parallax>
      </Container>
    </View>
  );
};

export default Branches;

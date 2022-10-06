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
    flex
`}
`;

const LeftBranch = styled.div`
  ${tw`
  justify-self-start
  width[50vw]
`}
`;

const RightBranch = styled.div`
  ${tw`
  justify-self-end
  width[50vw]
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
      <LeftBranch>
        <Parallax translateX={[`150`, `-80`]}>
          <Image
            src={"/treetopleft.png"}
            width={windowX}
            height={windowX}
          />
        </Parallax>
        </LeftBranch>
        <RightBranch> 
        <Parallax translateX={[`-50`, `0`]}>
          <Image
            src={"/treetopright.png"}
            width={windowX}
            height={windowX}
            className="top[100px]"
          />
        </Parallax>
        </RightBranch>
    </View>
  );
};

export default Branches;

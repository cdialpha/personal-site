import React, { useEffect, useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import Image from "next/image";

const View = styled.div`
  ${tw`
    absolute
    z-50
    flex
    flex-col
`}
`;

const TopTrees = styled.div`
  ${tw`
    flex
    justify-between 
    w-screen 
    sm:invisible
    md:visible
`}
`;

const BottomTrees = styled.div`
  ${tw`
    flex
    justify-between
    w-screen 
    sm:invisible
    md:visible
    `}
`;

const TreeOne = styled.div`
  ${tw`
    height[1000px]
    width[1000px]
    self-end
    `}
  transform:translateX(${(props) => -props.translatex}px);
  transition-duration: 500ms;
  transition-timing-function: linear;
`;

const TreeTwo = styled.div`
  ${tw`
    height[1000px]
    width[1000px]
    `}
  transform:translateX(${(props) => props.translatex}px);
  transition-duration: 500ms;
  transition-timing-function: linear;
`;

const TreeThree = styled.div`
  ${tw`
    height[1000px]
    width[1000px]
    `}
  transform:translateX(${(props) => -props.translatex}px);
  transition-duration: 500ms;
  transition-timing-function: linear;
`;

const TreeFour = styled.div`
  ${tw`
    height[1000px]
    width[1000px]
    `}
  transform:translateX(${(props) => props.translatex}px);
  transition-duration: 500ms;
  transition-timing-function: linear;
`;

const SideBranches = () => {
  const [gCoords, setGCoords] = useState({ x: 0, y: 0 });
  const [translateTreeOne, setTranslateTreeOne] = useState(0);
  const [translateTreeTwo, setTranslateTreeTwo] = useState(0);
  const [translateTreeThree, setTranslateTreeThree] = useState(0);
  const [translateTreeFour, setTranslateTreeFour] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", handleWindowMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleWindowMouseMove);
    };
  });

  const handleWindowMouseMove = (event) => {
    setGCoords({
      x: event.clientX,
      y: event.clientY,
    });
    const treeOneCoord = getOffsets("one");
    const treeTwoCoord = getOffsets("two");
    const treeThreeCoord = getOffsets("three");
    const treeFourCoord = getOffsets("four");

    const treeOneDetails = calcDistance(gCoords, treeOneCoord);
    const treeTwoDetails = calcDistance(gCoords, treeTwoCoord);
    const treeThreeDetails = calcDistance(gCoords, treeThreeCoord);
    const treeFourDetails = calcDistance(gCoords, treeFourCoord);

    const treeOneTranslation = calcTranslation1(treeOneDetails);
    const treeTwoTranslation = calcTranslation2(treeTwoDetails);
    const treeThreeTranslation = calcTranslation3(treeThreeDetails);
    const treeFourTranslation = calcTranslation4(treeFourDetails);

    // console.log(
    //   "t1",
    //   treeOneDetails,
    //   "t2",
    //   treeTwoDetails,
    //   "t3",
    //   treeThreeDetails,
    //   "t4",
    //   treeFourDetails
    // );
  };

  const getOffsets = (id) => {
    const element = document.getElementById(id);
    const rect = element.getBoundingClientRect();

    if (id == "one" || id == "three") {
      const elCoordinates = {
        x: rect.right,
        y: rect.top,
      };
      return elCoordinates;
    }
    if (id == "two" || id == "four") {
      const elCoordinates = {
        x: rect.left,
        y: rect.top,
      };
      return elCoordinates;
    }
  };

  const calcDistance = (gCoords, elCoordinates) => {
    const dx = gCoords.x - elCoordinates.x;
    const dy = elCoordinates.y - gCoords.y;
    const distance = Math.sqrt(dx ** 2 + dy ** 2);

    const mouseDetails = {
      dx: dx,
      dy: dy,
      dist: distance,
    };
    return mouseDetails;
  };

  const calcTranslation1 = (treeOneDetails) => {
    if (treeOneDetails.dx < 0) {
      return;
    }
    if (
      treeOneDetails.dx > 0 &&
      treeOneDetails.dx < 100 &&
      treeOneDetails.dy < 100
    ) {
      setTranslateTreeOne((x) => x + treeOneDetails.dx);
    }
  };

  const calcTranslation2 = (treeTwoDetails) => {
    if (treeTwoDetails.dx < 0) {
      return;
    }
    if (
      treeTwoDetails.dx > 0 &&
      treeTwoDetails.dx < 100 &&
      treeTwoDetails.dy < 100
    ) {
      setTranslateTreeTwo((x) => x + treeTwoDetails.dx);
    }
  };

  const calcTranslation3 = (treeThreeDetails) => {
    if (treeThreeDetails.dx < 0) {
      return;
    }
    if (
      treeThreeDetails.dx > 0 &&
      treeThreeDetails.dx < 100 &&
      treeThreeDetails.dy < 100
    ) {
      setTranslateTreeThree((x) => x + treeThreeDetails.dx);
    }
  };

  const calcTranslation4 = (treeFourDetails) => {
    if (treeFourDetails.dx < 0) {
      return;
    }
    if (
      treeFourDetails.dx > 0 &&
      treeFourDetails.dx < 100 &&
      treeFourDetails.dy < 100
    ) {
      setTranslateTreeFour((x) => x + treeFourDetails.dx);
    }
  };

  return (
    <View>
      <TopTrees>
        <TreeOne translatex={translateTreeOne}>
          <Image id="one" src={"/treebranch7.png"} width={1000} height={600} />
        </TreeOne>
        <TreeTwo translatex={translateTreeTwo}>
          <Image id="two" src={"/treebranch3.png"} width={1000} height={600} />
        </TreeTwo>
      </TopTrees>
      <BottomTrees>
        <TreeThree translatex={translateTreeThree}>
          <Image
            id="three"
            src={"/treebranch2.png"}
            width={1000}
            height={600}
          />
        </TreeThree>
        <TreeFour translatex={translateTreeFour}>
          <Image id="four" src={"/treebranch1.png"} width={1000} height={600} />
        </TreeFour>
      </BottomTrees>
    </View>
  );
};

export default SideBranches;

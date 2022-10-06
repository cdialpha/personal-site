import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { Link } from "react-scroll";

const View = styled.div`
  ${tw`
    z-50
    fixed
    flex
    justify-between
    bg-blue-300
    text-blue-50
    height[75px]
    width[100vw]
`}
`;

const NavItem = styled.div`
  ${tw`
  bg-blue-300
  text-blue-700
  font-weight[900]
  hover:text-blue-200
  hover:cursor-pointer
  ml-5
  mr-5
  mt-auto
  mb-auto
`}
`;

const Navbar = () => {
 
  return (
    <View>
          <NavItem>
            <Link to="bio" spy={true} smooth={true} offset={10} duration={500}>
              bio
            </Link>
          </NavItem>
          <NavItem>
            <Link to="dev" spy={true} smooth={true} offset={-90} duration={500}>
              dev journey
            </Link>
          </NavItem>
          <NavItem>
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
            >
              skills
            </Link>
          </NavItem>
          <NavItem>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
            >
              projects
            </Link>
          </NavItem>
    </View>
  );
};

export default Navbar;


// ml-auto
// mr-auto
// mt-5
// max-width[2000px]
// align-self[center]
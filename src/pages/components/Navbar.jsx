import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { Link } from "react-scroll";

const View = styled.div`
  ${tw`
    z-50
    bg-blue-300
    text-blue-50
    height[100px]
    md:height[75px]
    w-screen
    ml-0
    pr-10
fixed
`}
`;

const Container = styled.div`
  ${tw`
    flex
    justify-between
    ml-auto
    mr-auto
    mt-5
    max-width[2000px]
`}
`;

const NavItems = styled.div`
  ${tw`
        flex
`}
`;

const NavItem = styled.div`
  ${tw`
  bg-blue-300
  text-blue-700
  ml-5
  mr-5
  mt-auto
  mb-auto
`}
`;

const NavItemLink = styled(NavItem)`
  ${tw`
  hover:text-blue-200
  hover:cursor-pointer
`}
`;

const Navbar = () => {
  return (
    <View>
      <Container>
        <NavItem> calvin irwin </NavItem>
        <NavItems>
          <NavItemLink>
            <Link to="bio" spy={true} smooth={true} offset={10} duration={500}>
              bio
            </Link>
          </NavItemLink>
          <NavItemLink>
            <Link to="dev" spy={true} smooth={true} offset={-90} duration={500}>
              dev journey
            </Link>
          </NavItemLink>
          <NavItemLink>
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
            >
              skills
            </Link>
          </NavItemLink>
          <NavItemLink>
            {" "}
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
            >
              projects
            </Link>
          </NavItemLink>
          <NavItemLink>
            {" "}
            <Link
              to="connect"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
            >
              connect
            </Link>{" "}
          </NavItemLink>
        </NavItems>
      </Container>
    </View>
  );
};

export default Navbar;

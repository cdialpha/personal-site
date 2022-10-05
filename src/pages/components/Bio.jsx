import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import Image from "next/image";

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
    pl-10
`}
`;

const SectionContainer = styled.div`
  ${tw`
    flex
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

const ImageContainer = styled.div`
  ${tw`
    height[200px]
    width[200px]
    
`}
`;
const BGImgContainer = styled.div`
  ${tw`
absolute
top[150px]
left[-400px]
`}
`;
const BackgroundImg = styled(Image)`
  ${tw`
  `}
`;

const Bio = () => {
  return (
    <Container id="bio">
      <SectionTitle>Bio</SectionTitle>

      <SectionContainer>
        <ImageContainer className="mr-5 mt-auto mb-auto">
          <Image src={"/missouri.jpg"} width={200} height={200} />
        </ImageContainer>

        <SectionText className="mt-10">
          <p>
            I have spent nearly my entire adult life in St. Louis in what I
            would consider a quitessential 90's suburban childhood. From the few
            other places around the world that I've been, I've come to
            appreciate my birthplace more than I used to. Previously, I had seen
            missouri, and more broadly the midwest, as boring. But after seeing
            how some places struggle to find water in the dry dessert, expensive
            goods shipped up into the mountains, no timber to stoke a fire,
            tough exhuasted soil unkind to crops' roots... It makes you see the
            midwest in a different light. Kind, forgiving, bountiful.
          </p>
          <br />
          <p>
            Moreover, how lucky was I to be born in the suburbs. A stone's throw
            from the country side. Contiguous common ground, by which you needed
            only your feet to make it to the lake and park.
          </p>
        </SectionText>
      </SectionContainer>
      <SectionContainer>
        <SectionText className="mt-20">
          <p>
            Between 2017 and 2019, I lived in different parts of Cameroon,
            teaching English and Computer Science in highschools and elementry
            schools. As time passes, chapters of your life dillute in
            significance. However, I believe that my few years in the Peace
            Corps will always define who I am.
          </p>
          <br />
          <p>
            My first post was in the highlands of the anglophone Northwest
            region, a small village called Ntumbaw. I was taught Pidgin &
            Fufulde, and desparately a few sentences of the local language,
            Limbum. I was told Ntumbaw literally meant "Ntu, Mountain" "Mbaw,
            plain", which was fitting, since it was on the shoulder of the
            mountain, peering over the vast Mbot plains. After only three
            months, I had to leave abruptly due to the escalating Anglophone
            crisis. Everything about leaving was terrible, but nothing compared
            to the malaise that the region would endure, til present day.
          </p>
          <br />
          <p>
            I would finish the rest of my service (2 more years) in the Adamawa
            region -- seemingly the polar opposite of the Northwest. The Adamawa
            was up on a plateau, mostly flat with a few ancient volcanic hills,
            poking randomly through the landscape. It was cattle country,
            francophone, very muslim. I stayed in the regional capital,
            Ngaoundere & continued to teach at the government highschool.
          </p>
          <br />
          <p>
            Since returning, I have invested in a few of my Cameroonian friends'
            agricultural projects, with a strong desire to do more in the
            future.
          </p>
        </SectionText>
        <ImageContainer className="ml-10  mt-auto mb-auto">
          <Image src={"/cameroon.png"} width={200} height={300} />
        </ImageContainer>
      </SectionContainer>

      <SectionContainer className="pt-10">
        <ImageContainer className="pt-10 mr-10 mt-auto mb-auto">
          <Image src={"/mass.png"} width={350} height={200} />
        </ImageContainer>
        <SectionText>
          <p>
            I recently moved to Boston to follow my partner, Maliza, for their
            residency program. Inspired by new beginings, In May, I quit my job
            for a desire to learn some hard technical skills and pivot into a
            more tech-based role. Becoming a developer was a particularly
            attractive option, because problem solving had a more creative
            element to it. Moreover, it could be accomplished with open source
            tools, little upfront capital, and reach anyone with a phone.
            Something that didn't seem as attainable with my background in
            biological and systems engineering.
          </p>
          <br />
          <p>
            In addition to employment, I am actively seeking volunteering
            opportunities
          </p>
        </SectionText>
      </SectionContainer>
    </Container>
  );
};

export default Bio;

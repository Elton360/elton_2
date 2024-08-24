import {
  Header as HeaderStyled,
  Content,
  HeaderBg,
} from "./styles/Header.styled";
import React from "react";
import "./App.css";
import {
  H1,
  H2,
  HighLightedText,
  Overlay,
  P,
  PrimaryButton,
  SecondaryButton,
  Flex,
  DimmedText,
} from "./styles/Utilities.styled";
import Resume from "./EltonLucienResume.pdf";
import HeaderBackground from "./HeaderBackground";
import Nav from "./Nav";

const Header = () => {
  return (
    <HeaderStyled>
      <HeaderBackground />
      <Overlay />
      <Flex align="center" justify="space-between" $m="auto">
        <H2>
          <HighLightedText>Elton</HighLightedText> Lucien
        </H2>
        <Nav />
      </Flex>
      <Content>
        <Flex vertical>
          <H2>
            <HighLightedText>Software Engineer</HighLightedText>
          </H2>
          <H1>Elton Lucien</H1>
          <P>
            <DimmedText>
              I build pixel-perfect, engaging, and accessible digital
              experiences.
            </DimmedText>
          </P>
          <Flex gap="1.5rem" wrap $mt="1.5rem">
            <PrimaryButton type="primary">Contact</PrimaryButton>
            <SecondaryButton>
              <a href={Resume} target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </SecondaryButton>
          </Flex>
        </Flex>
        <HeaderBg />
      </Content>
    </HeaderStyled>
  );
};

export default Header;

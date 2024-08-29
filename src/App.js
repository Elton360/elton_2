import React, { useState } from "react";
import "./App.css";
import { MainContainer } from "./styles/Layout.styled";
import { Main } from "./styles/Main.styled";
import Skills from "./Skills";
import Experiences from "./Experiences";
import Header from "./Header";
import AboutSection from "./AboutSection";
import Section from "./Section";
import Projects from "./Projects";

function App() {
  return (
    <>
      <MainContainer>
        <Header />
        <Main>
          <Section title="About Me" id="about">
            <AboutSection />
          </Section>
          <Section title="Skills" id="skills">
            <Skills />
          </Section>
          <Section title="Experience" id="experience">
            <Experiences />
          </Section>
          <Section title="Work and Projects" id="projects">
            <Projects />
          </Section>
        </Main>
      </MainContainer>
    </>
  );
}

export default App;

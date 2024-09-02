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
import Footer from "./Footer";
import Contact from "./Contact";
import { IntlProvider } from "react-intl";
import { navItems } from "./Nav";
import locales from "./locales/locales";

const sections = {
  ABOUT_ME: <AboutSection />,
  SKILLS: <Skills />,
  EXPERIENCE: <Experiences />,
  PROJECTS: <Projects />,
};

const App = () => {
  const contactModalState = useState(false);
  const [locale, setLocale] = useState(window.navigator.language);

  const messages = locales[locale]?.JSON;

  return (
    <>
      <IntlProvider locale={locale} messages={messages}>
        <Contact contactModalState={contactModalState} />
        <MainContainer>
          <Header contactModalState={contactModalState} setLocale={setLocale} />
          <Main>
            {navItems.map(({ key, name }) => (
              <Section key={key} title={name} id={key}>
                {sections[key]}
              </Section>
            ))}
          </Main>
          <Footer />
        </MainContainer>
      </IntlProvider>
    </>
  );
};

export default App;

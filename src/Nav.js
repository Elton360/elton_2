import React from "react";
import { Anchor } from "./styles/Header.styled";
import { Flex } from "./styles/Utilities.styled";
import scrollToSection from "./helpers/scrollTo";

const sections = ["about", "skills", "experience" /*"projects",*/, "contact"];
const items = sections.map((section) => ({
  key: section,
  href: `#${section}`,
  title: section.charAt(0).toUpperCase() + section.slice(1),
}));

const Nav = () => (
  <Flex gap="2rem">
    {items.map(({ key, href, title }) => (
      <Anchor href={href} onClick={(e) => scrollToSection(e, key)}>
        {title}
      </Anchor>
    ))}
  </Flex>
);

export default Nav;

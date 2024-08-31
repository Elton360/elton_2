import React from "react";
import { Flex } from "./styles/Utilities.styled";
import { aboutLinkIcons } from "./icons/getIcon";
import { IconLink } from "./styles/AboutSection";

const Socials = ({ lightIcons, justify, small }) => {
  return (
    <Flex justify={justify}>
      {aboutLinkIcons.map(({ key, icon, href }) => (
        <IconLink
          key={key}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          $light={lightIcons}
          $small={small}
        >
          {icon}
        </IconLink>
      ))}
    </Flex>
  );
};

export default Socials;

import React from "react";
import { Flex, H4 } from "./styles/Utilities.styled";
import Socials from "./Socials";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <Flex
      vertical
      align="center"
      $h={"12rem"}
      $mt={"12rem"}
      justify="space-evenly"
    >
      <Socials lightIcons justify="center" small />
      <H4>Copyright Elton Lucien © {year}. All Rights Reserved</H4>
    </Flex>
  );
};

export default Footer;

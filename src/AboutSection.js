import React from "react";
import { Flex, P } from "./styles/Utilities.styled";
import Socials from "./Socials";
import { Image } from "./styles/AboutSection";

const AboutSection = () => (
  <Flex vertical justify="space-around" align="center" id="about" gap="3rem">
    <Flex vertical align="center" gap="3rem">
      <Image src="https://avatars.githubusercontent.com/u/61792119?v=4" />
      <Socials lightIcons justify="soace-between" />
    </Flex>
    <P $mw="80rem" $p="0 1.6rem">
      I thrive on the process of turning ideas into reality, one line of code at
      a time. In particular, developing web projects allows me to channel my
      creative energy while applying the logical principles that define my work.
      <br />
      <br />
      I'm always learning and expanding my skill set, adding new capabilities to
      my repertoire. My approach involves careful communication and analysis to
      ensure that each project aligns with my team or clients' goals.
      <br />
      <br />I strive for a seamless, fluid user experience. Currently based in
      Miami, FL, I’m open to new opportunities and would love to connect. If
      you'd like to chat, simply click here, and we can share a few cups of
      coffee—my treat!
    </P>
  </Flex>
);

export default AboutSection;

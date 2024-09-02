import React from "react";
import { Flex, P } from "./styles/Utilities.styled";
import Socials from "./Socials";
import { Image } from "./styles/AboutSection";
import { FormattedMessage } from "react-intl";
import messages from "./locales/messages";
import profile from "./config/profile";

const AboutSection = () => (
  <Flex vertical justify="space-around" align="center" id="about" gap="3rem">
    <Flex vertical align="center" gap="3rem">
      <Image src={profile.img} />
      <Socials lightIcons justify="space-between" />
    </Flex>
    <P $mw="80rem" $p="0 1.6rem">
      <FormattedMessage {...messages.aboutMeMessage} values={{ br: <br /> }} />
    </P>
  </Flex>
);

export default AboutSection;

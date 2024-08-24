import React from "react";
import { Flex, H4 } from "./styles/Utilities.styled";

const Skill = ({ name, icon }) => {
  return (
    <Flex vertical align="center">
      {icon}
      <H4>{name.toUpperCase()}</H4>
    </Flex>
  );
};

export default Skill;

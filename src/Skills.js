import React from "react";
import Skill from "./Skill";
import { getSkillIcon } from "./icons/getIcon";
import { SkillsContainer } from "./styles/SkillsSection";

const orderedIcons = [
  "html",
  "css",
  "javascript",
  "typescript",
  "react",
  "node",
  "java",
  "spring",
  "firebase",
  "mongo",
  "sql",
  "graphql",
  "git",
];

const Skills = () => {
  return (
    <SkillsContainer>
      {orderedIcons.map((icon) => (
        <Skill key={icon} {...getSkillIcon(icon)} />
      ))}
    </SkillsContainer>
  );
};

export default Skills;

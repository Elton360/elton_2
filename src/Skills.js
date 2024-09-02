import React from "react";
import Skill from "./Skill";
import { getSkillIcon } from "./icons/getIcon";
import { SkillsContainer } from "./styles/SkillsSection";

const orderedIconKeys = [
  "HTML",
  "CSS",
  "JAVASCRIPT",
  "TYPESCRIPT",
  "REACT",
  "NODE",
  "JAVA",
  "SPRING",
  "FIREBASE",
  "MONGO",
  "SQL",
  "GRAPHQL",
  "GIT",
];

const Skills = () => {
  return (
    <SkillsContainer>
      {orderedIconKeys.map((icon) => (
        <Skill key={icon} {...getSkillIcon(icon)} />
      ))}
    </SkillsContainer>
  );
};

export default Skills;

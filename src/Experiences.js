import React from "react";
import { Flex, Tag } from "antd";
import { DimmedText, H3, HighLightedText, P } from "./styles/Utilities.styled";
import { Collapse } from "./styles/ExperienceSection.styled";
import { StyledMinusIcon, StyledPlusIcon } from "./icons/getIcon";
import getRandomTagColor from "./helpers/getRandomTagColor";

const experiences = [
  {
    name: "Kaseya (Datto)",
    title: "Software Engineer",
    from: "2022",
    to: "Present",
    tags: [
      "React",
      "TypeScript",
      "AntD",
      "Node",
      "Express",
      "GraphQL",
      "Java",
      "Spring Boot",
    ],
    text: "As a front-end developer on Datto's second-largest product, I played a key role in collaborating with product owners, designers, and developers to translate and create dozens of UI-based user stories into seamless user experiences using React and Node. I proactively identified, investigated, and resolved numerous customer-facing issues, including high-priority bugs, in partnership with the QA team. My contributions were recognized with an elevation to code reviewer/approver, where I ensured high standards of code quality and maintainability across the project. I also focused on enhancing test coverage by crafting and integrating tests to ensure robust and reliable code. Additionally, I authored and updated technical documentation, which streamlined the onboarding process for new developers and captured complex solutions not previously documented. My efforts to address and resolve technical debt paved the way for seamless library upgrades, ensuring the product’s technological relevance.",
  },
  {
    name: "Freelance",
    title: "Web Developer ",
    from: "2020",
    to: "Present",
    text: "successfully created and deployed more than 20 projects for various businesses, including e-commerce platforms, educational sites, investment portals, and personal websites. He has consistently implemented responsive user interfaces from Figma designs and PSDs using HTML, CSS, JavaScript, and associated frameworks and libraries like React and SCSS. His expertise includes redesigning existing applications to enhance user experience, integrating applications with APIs to manage emails, payments, and data reports, and developing robust content management systems with secure authentication to streamline efficiency and facilitate updates. Additionally, he has written security rules to protect databases from accidental or malicious threats and managed various aspects of web servers, including DNS records, emails, and FTP services.",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "TypeScript",
      "Node",
      "Express",
      "AntD",
      "SCSS",
      "Firebase",
      "SQL",
      "MongoDB",
    ],
  },
];

const items = experiences.map(({ name, title, from, to, tags, text }, idx) => ({
  key: idx,
  label: (
    <Flex justify="space-between" style={{ fontSize: "2rem" }} wrap>
      <DimmedText>{`${from} - ${to}`}</DimmedText>
      <H3>
        {`${title} - `} <HighLightedText>{name}</HighLightedText>
      </H3>
    </Flex>
  ),
  children: (
    <Flex vertical>
      <P>{text}</P>
      <br />
      <Flex gap="4px 0" wrap>
        {tags.map((tag) => (
          <Tag key={`${tag}-${name}`} color={getRandomTagColor()}>
            {tag}
          </Tag>
        ))}
      </Flex>
    </Flex>
  ),
}));

const Experiences = () => {
  return (
    <Collapse
      items={items}
      bordered
      ghost
      defaultActiveKey={0}
      expandIconPosition="end"
      expandIcon={({ isActive }) =>
        isActive ? <StyledMinusIcon /> : <StyledPlusIcon />
      }
    />
  );
};

export default Experiences;

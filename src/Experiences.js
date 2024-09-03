import React from "react";
import { Flex, Tag } from "antd";
import { DimmedText, H3, HighLightedText, P } from "./styles/Utilities.styled";
import { Collapse } from "./styles/ExperienceSection.styled";
import { StyledMinusIcon, StyledPlusIcon } from "./icons/getIcon";
import getRandomTagColor from "./helpers/getRandomTagColor";
import { FormattedMessage } from "react-intl";
import profile from "./config/profile";
import messages from "./locales/messages";

const { experiences } = profile;

const items = experiences.map(({ name, title, from, to, tags, text }, idx) => ({
  key: idx,
  label: (
    <Flex justify="space-between" style={{ fontSize: "2rem" }} wrap>
      <DimmedText>
        {`${from} - ${to || ""}`}
        {!to && <FormattedMessage {...messages.present} />}
      </DimmedText>
      <H3>
        <FormattedMessage {...title} />
        {" - "} <HighLightedText>{name}</HighLightedText>
      </H3>
    </Flex>
  ),
  children: (
    <Flex vertical>
      <P>
        <FormattedMessage {...text} />
      </P>
      <br />
      <Flex gap="1rem 0.4rem" wrap>
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

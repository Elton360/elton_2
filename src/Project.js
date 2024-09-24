import React from "react";
import { Card, Tag } from "antd";
import { Item, ItemImage, ItemTagsWrap } from "./styles/ProjectSection";
import { EyeOutlined, GithubFilled } from "@ant-design/icons";
import getRandomTagColor from "./helpers/getRandomTagColor";
import { FormattedMessage } from "react-intl";
const { Meta } = Card;

const getActions = (github, link) => [
  ...(github
    ? [
        <a href={github} target="_blank" rel="noopener noreferrer">
          <GithubFilled key="github" />
        </a>,
      ]
    : []),
  ...(link
    ? [
        <a href={link} target="_blank" rel="noopener noreferrer">
          <EyeOutlined key="link" />
        </a>,
      ]
    : []),
];

const Project = ({
  link,
  github,
  imageSrc,
  title,
  description,
  tags,
  firstChild,
  lastChild,
}) => (
  <Item key={link || github} $firstChild={firstChild} $lastChild={lastChild}>
    <ItemTagsWrap>
      {tags.map((tag) => (
        <Tag key={`${tag}`} color={getRandomTagColor()}>
          {tag}
        </Tag>
      ))}
    </ItemTagsWrap>
    <Card
      hoverable
      style={{
        width: 346,
      }}
      cover={
        <ItemImage>
          <img alt="" src={imageSrc} />
        </ItemImage>
      }
      actions={getActions(github, link)}
    >
      <Meta
        title={<FormattedMessage {...title} />}
        description={<FormattedMessage {...description} />}
      />
    </Card>
  </Item>
);

export default Project;

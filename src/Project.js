import React from "react";
import { Card, Tag } from "antd";
import { Item, ItemImage, ItemTagsWrap } from "./styles/ProjectSection";
import { EyeOutlined, GithubFilled } from "@ant-design/icons";
import getRandomTagColor from "./helpers/getRandomTagColor";
const { Meta } = Card;
const Project = ({
  link,
  github,
  imageSrc,
  title,
  isWebsite,
  description,
  tags,
}) => (
  <Item key={link || github}>
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
          <img alt="example" src={imageSrc} />
        </ItemImage>
      }
      actions={[
        <a href={github} target="_blank" rel="noopener noreferrer">
          <GithubFilled key="setting" />
        </a>,
        <a href={link} target="_blank" rel="noopener noreferrer">
          <EyeOutlined key="setting" />
        </a>,
      ]}
    >
      <Meta
        title={`${title}${isWebsite && " Website"}`}
        description={description}
      />
    </Card>
  </Item>
);
export default Project;

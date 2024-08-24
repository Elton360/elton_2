import HtmlIcon from "./Html";
import CssIcon from "./Css";
import JavasScriptIcon from "./JavaScript";
import JavaIcon from "./Java";
import TypeScript from "./TypeScript";
import ReactIcon from "./React";
import GitIcon from "./Git";
import NodeIcon from "./Node";
import SpringBootIcon from "./Spring";
import FirebaseIcon from "./Firebase";
import MongoIcon from "./Mongo";
import SqlIcon from "./Sql";
import GraphQLIcon from "./Graphql";
import {
  GithubOutlined,
  LinkedinFilled,
  MailOutlined,
  MinusCircleOutlined,
  PlusCircleOutlined,
  SpotifyOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import styled from "styled-components";

const defaultDimension = { width: "6rem", height: "6rem" };

const skillIcons = [
  { code: "html", name: "Html", icon: <HtmlIcon {...defaultDimension} /> },
  { code: "css", name: "Css", icon: <CssIcon {...defaultDimension} /> },
  { code: "java", name: "Java", icon: <JavaIcon {...defaultDimension} /> },
  { code: "react", name: "React", icon: <ReactIcon {...defaultDimension} /> },
  { code: "node", name: "Node", icon: <NodeIcon {...defaultDimension} /> },
  { code: "mongo", name: "Mongo", icon: <MongoIcon {...defaultDimension} /> },
  { code: "sql", name: "SQL", icon: <SqlIcon {...defaultDimension} /> },
  {
    code: "graphql",
    name: "GraphQL",
    icon: <GraphQLIcon {...defaultDimension} />,
  },
  {
    code: "firebase",
    name: "Firebase",
    icon: <FirebaseIcon {...defaultDimension} />,
  },
  {
    code: "spring",
    name: "Spring Boot",
    icon: <SpringBootIcon {...defaultDimension} />,
  },
  {
    code: "git",
    name: "Git",
    icon: <GitIcon {...defaultDimension} />,
  },

  {
    code: "javascript",
    name: "JavaScript",
    icon: <JavasScriptIcon {...defaultDimension} />,
  },
  {
    code: "typescript",
    name: "TypeScript",
    icon: <TypeScript {...defaultDimension} />,
  },
];

const getSkillIcon = (code) => skillIcons.find((icon) => code === icon.code);

const aboutLinkIcons = [
  {
    key: "email",
    href: "mailto:contact@eltonlucien.com",
    icon: <MailOutlined />,
  },
  {
    key: "github",
    href: "https://github.com/Elton360",
    icon: <GithubOutlined />,
  },
  {
    key: "spotify",
    href: "https://open.spotify.com/user/ba8p1wtfbr4nlg65ardpmyn8a",
    icon: <SpotifyOutlined />,
  },
  {
    key: "whatsapp",
    href: "https://wa.me/7864064185",
    icon: <WhatsAppOutlined />,
  },
  {
    key: "linkedin",
    href: "https://www.linkedin.com/in/elton-lucien-b739348b/",
    icon: <LinkedinFilled />,
  },
];

const StyledMinusIcon = styled(MinusCircleOutlined)`
  font-size: 2.5rem !important;
  margin-top: 0.8rem;
`;

const StyledPlusIcon = styled(PlusCircleOutlined)`
  font-size: 2.5rem !important;
  margin-top: 0.8rem;
`;

export { getSkillIcon, aboutLinkIcons, StyledMinusIcon, StyledPlusIcon };

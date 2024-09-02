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
import profile from "../config/profile";

const defaultDimension = { width: "6rem", height: "6rem" };

const skillIcons = [
  { code: "HTML", name: "Html", icon: <HtmlIcon {...defaultDimension} /> },
  { code: "CSS", name: "Css", icon: <CssIcon {...defaultDimension} /> },
  { code: "JAVA", name: "Java", icon: <JavaIcon {...defaultDimension} /> },
  { code: "REACT", name: "React", icon: <ReactIcon {...defaultDimension} /> },
  { code: "NODE", name: "Node", icon: <NodeIcon {...defaultDimension} /> },
  { code: "MONGO", name: "Mongo", icon: <MongoIcon {...defaultDimension} /> },
  { code: "SQL", name: "SQL", icon: <SqlIcon {...defaultDimension} /> },
  {
    code: "GRAPHQL",
    name: "GraphQL",
    icon: <GraphQLIcon {...defaultDimension} />,
  },
  {
    code: "FIREBASE",
    name: "Firebase",
    icon: <FirebaseIcon {...defaultDimension} />,
  },
  {
    code: "SPRING",
    name: "Spring Boot",
    icon: <SpringBootIcon {...defaultDimension} />,
  },
  {
    code: "GIT",
    name: "Git",
    icon: <GitIcon {...defaultDimension} />,
  },

  {
    code: "JAVASCRIPT",
    name: "JavaScript",
    icon: <JavasScriptIcon {...defaultDimension} />,
  },
  {
    code: "TYPESCRIPT",
    name: "TypeScript",
    icon: <TypeScript {...defaultDimension} />,
  },
];

const getSkillIcon = (key) => skillIcons.find(({ code }) => key === code);

const { links, email, phone } = profile;
const aboutLinkIcons = [
  {
    key: "email",
    href: `mailto:${email}`,
    icon: <MailOutlined />,
  },
  {
    key: "github",
    href: links.github,
    icon: <GithubOutlined />,
  },
  {
    key: "linkedin",
    href: links.linkedin,
    icon: <LinkedinFilled />,
  },
  {
    key: "whatsapp",
    href: `https://wa.me/${phone}`,
    icon: <WhatsAppOutlined />,
  },
  {
    key: "spotify",
    href: links.spotify,
    icon: <SpotifyOutlined />,
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

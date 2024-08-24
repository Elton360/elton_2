import { Header as AntDHeader } from "antd/es/layout/layout";
import styled from "styled-components";
import {
  Flex,
  lightText,
  primaryColor,
  primaryColorDark,
} from "./Utilities.styled";

const Header = styled(AntDHeader)`
  height: 60rem;
  max-width: 160rem;
  margin: auto;
  padding: 0 3rem;
  background: transparent;
  svg {
    position: absolute;
    left: 0;
  }
  .ant-anchor-wrapper {
    .ant-anchor-link-title {
      color: white;
    }
    &:before {
      display: none;
    }
  }
`;

const Content = styled(Flex)`
  justify-content: space-between;
  align-items: center;
  max-width: 120rem;
  margin: auto;
  h1,
  h2,
  p {
    z-index: 1;
    line-height: normal;
  }
`;

const HeaderBg = styled.span`
  z-index: 1;
  line-height: normal;
  height: 40rem;
  width: 40rem;
  background-image: url("/main-illustration.png");
  background-position: left;
  background-size: contain;
  background-repeat: no-repeat;
`;

const Anchor = styled.a`
  color: ${lightText};
  font-size: 1.75rem;
  line-height: 1.75;
  border-bottom: 0.3rem solid transparent;
  &:hover {
    color: ${primaryColor} !important;
    border-bottom: 0.3rem solid ${primaryColorDark};
  }
`;

export { Header, Content, HeaderBg, Anchor };

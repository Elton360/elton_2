import { Header as AntDHeader } from "antd/es/layout/layout";
import styled, { css } from "styled-components";
import {
  Flex,
  lightText,
  primaryColor,
  primaryColorDark,
  secondaryColorDark,
} from "./Utilities.styled";
import { Button } from "antd";

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

const anchorStyles = css`
  flex-shrink: 0;
  color: ${lightText};
  font-size: 1.75rem;
  line-height: 1.75;
  border-bottom: 0.3rem solid transparent;
`;

const Anchor = styled.a`
  ${anchorStyles}
  &:hover {
    color: ${primaryColor} !important;
    border-bottom: 0.3rem solid ${primaryColorDark};
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const AnchorButton = styled.button`
  border: 0;
  ${anchorStyles}
  background-color: transparent;
  &:hover {
    color: ${primaryColor} !important;
    border-bottom: 0.3rem solid ${primaryColorDark};
    cursor: pointer;
  }
`;

const LocaleDropDownButton = styled(Button)`
  color: ${secondaryColorDark};
  font-weight: 600;

  & anticon svg {
    position: relative;
  }

  &&&:hover {
    border-color: ${primaryColorDark};
    color: ${secondaryColorDark};
  }

  & .ant-dropdown-trigger .anticon {
    position: absolute;
    top: 50%;
    left: 23%;
  }
`;

const LocaleDropDownOptionText = styled.span`
  color: ${secondaryColorDark};
`;

export {
  Header,
  Content,
  HeaderBg,
  Anchor,
  AnchorButton,
  LocaleDropDownButton,
  LocaleDropDownOptionText,
};

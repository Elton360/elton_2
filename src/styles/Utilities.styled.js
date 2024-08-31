import { Button as AntDButton, Flex as AntDFlex } from "antd";
import styled from "styled-components";

const primaryColor = "#5eced4";
const primaryColorDark = "#3db2b8";
const secondaryColor = "#27496D";
const secondaryColorDark = "#263751";
const lightText = "#fff";
const grayText = "#64748b";

const HighLightedText = styled.span`
  color: ${primaryColor};
`;

const DimmedText = styled.span`
  color: ${grayText};
`;

const Flex = styled(AntDFlex)`
  ${({ $w }) => $w && `width: ${$w};`}
  ${({ $mw }) => $mw && `max-width: ${$mw};`}
  ${({ $h }) => $h && `height: ${$h};`}
  ${({ $mh }) => $mh && `max-height: ${$mh};`}

  ${({ $m }) => $m && `margin: ${$m};`}
  ${({ $mt }) => $mt && `margin-top: ${$mt};`}
  ${({ $mr }) => $mr && `margin-right: ${$mr};`}
  ${({ $mb }) => $mb && `margin-bottom: ${$mb};`}
  ${({ $ml }) => $ml && `margin-left: ${$ml};`}
  
  ${({ $p }) => $p && `padding: ${$p};`}
  ${({ $pt }) => $pt && `padding-top: ${$pt};`}
  ${({ $pr }) => $pr && `padding-right: ${$pr};`}
  ${({ $pb }) => $pb && `padding-bottom: ${$pb};`}
  ${({ $pl }) => $pl && `padding-left: ${$pl};`}
  
  ${({ $backgroundColor }) =>
    $backgroundColor && `background-color: ${$backgroundColor};`}
`;

const Button = styled(AntDButton)`
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  &:hover {
    -webkit-transform: translateY(-3px);
    transform: translateY(-3px);
    -webkit-box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  }

  &:hover::after {
    -webkit-transform: scaleX(1.4) scaleY(1.6);
    transform: scaleX(1.4) scaleY(1.6);
    opacity: 0;
  }

  &:active,
  &:focus {
    outline: none;
    -webkit-transform: translateY(-1px);
    transform: translateY(-1px);
    -webkit-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  }

  &.ant-btn-primary: disabled {
    border: 0;
  }
`;

const PrimaryButton = styled(Button).attrs({ type: "primary" })`
  &,
  &:hover {
    background-color: ${primaryColorDark} !important;
  }
`;
const SecondaryButton = styled(Button)`
  &,
  &:hover {
    color: ${lightText} !important;
    border-color: ${lightText} !important;
    background-color: transparent !important;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.5) 70%,
    rgba(0, 0, 0, 1) 100%
  );
  pointer-events: none; /* Allows clicks to pass through the overlay */
`;

const H1 = styled.h1`
  font-size: 6rem;
  ${({ $p }) => $p && `padding: ${$p};`}
`;

const H2 = styled.h2`
  font-size: 2.75rem;
  ${({ $p }) => $p && `padding: ${$p};`}
`;

const H3 = styled.h3`
  font-size: 2rem;
  ${({ $p }) => $p && `padding: ${$p};`}
`;

const H4 = styled.h4`
  font-size: 1.5rem;
  ${({ $p }) => $p && `padding: ${$p};`}
`;

const SectionSubHeader = styled(H3)`
  border-bottom: 4px solid teal;
  margin-bottom: 2rem;
  margin-top: 10rem;
`;

const P = styled.p`
  font-size: 1.6rem;
  ${({ $mw }) => $mw && `max-width: ${$mw};`}
  ${({ $p }) => $p && `padding: ${$p};`}
`;

export {
  HighLightedText,
  DimmedText,
  PrimaryButton,
  SecondaryButton,
  Overlay,
  SectionSubHeader,
  H1,
  H2,
  H3,
  H4,
  P,
  Flex,
  primaryColor,
  primaryColorDark,
  secondaryColor,
  secondaryColorDark,
  lightText,
  grayText,
};

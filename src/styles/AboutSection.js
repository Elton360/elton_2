import { Image as AntDImage } from "antd";
import styled from "styled-components";
import {
  lightText,
  primaryColorDark,
  secondaryColor,
  secondaryColorDark,
} from "./Utilities.styled";

const IconLink = styled.a`
  font-size: ${({ $small }) => ($small ? "2.5rem" : " 3.5rem")};
  margin: 0 2rem;
  color: ${({ $light }) => ($light ? lightText : secondaryColor)};
  &:hover {
    color: ${({ $light }) => ($light ? primaryColorDark : secondaryColorDark)};
  }
`;

const Image = styled(AntDImage).attrs({ width: "15rem", preview: false })`
  border-radius: 50%;
  border: 0.4rem solid ${primaryColorDark};
`;

export { IconLink, Image };

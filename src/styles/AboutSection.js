import { Image as AntDImage } from "antd";
import styled from "styled-components";
import { primaryColorDark } from "./Utilities.styled";

const IconLink = styled.a`
  font-size: 3.5rem;
  margin: 0 2rem;
`;

const Image = styled(AntDImage).attrs({ width: "15rem", preview: false })`
  border-radius: 50%;
  border: 0.4rem solid ${primaryColorDark};
`;

export { IconLink, Image };

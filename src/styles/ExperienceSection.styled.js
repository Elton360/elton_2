import { Collapse as AntDCollapse } from "antd";
import styled from "styled-components";
import { lightText } from "./Utilities.styled";

const Collapse = styled(AntDCollapse)`
  max-width: 120rem;

  .ant-collapse-header {
    width: 120rem;
    max-width: 95vw;
    margin-bottom: 1rem;
  }
  .ant-collapse-expand-icon {
    color: ${lightText};
  }
`;

export { Collapse };

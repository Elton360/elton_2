import { Collapse as AntDCollapse } from "antd";
import styled from "styled-components";

const Collapse = styled(AntDCollapse)`
  max-width: 120rem;

  .ant-collapse-header {
    width: 120rem;
    max-width: 95vw;
    margin-bottom: 1rem;
  }
`;

export { Collapse };

import { Form, Modal } from "antd";
import styled from "styled-components";
import { H2, secondaryColor } from "./Utilities.styled";

const ContactModal = styled(Modal)`
  text-align: center;
  color: #333;
  &&& .ant-modal {
    top: 0;
  }
`;

const ModalHeader = styled(H2)`
  color: ${secondaryColor};
  margin: 4rem;
  text-align: center;
`;

const ContactForm = styled(Form)`
  margin: 4rem 0;
  .ant-row.ant-form-item-row {
    align-items: center;
  }

  .ant-input-outlined:focus,
  .ant-input-outlined:hover {
    border-color: ${secondaryColor};
  }
`;

export { ContactModal, ModalHeader, ContactForm };

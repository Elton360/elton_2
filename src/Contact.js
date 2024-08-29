import { Modal } from "antd";
import React from "react";

const Contact = ({ contactModalState }) => {
  const [contactModalOpen, setContactModalOpen] = contactModalState;
  return (
    <>
      <Modal
        title="Contact Me"
        style={{
          top: 20,
        }}
        open={contactModalOpen}
        onOk={() => setContactModalOpen(false)}
        onCancel={() => setContactModalOpen(false)}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
    </>
  );
};

export default Contact;

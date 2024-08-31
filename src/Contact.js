import React from "react";
import { Form, Input, Select } from "antd";
import { secondaryColor } from "./styles/Utilities.styled";
import TextArea from "antd/es/input/TextArea";
import {
  ContactForm,
  ContactModal,
  ModalHeader,
} from "./styles/Contact.styled";
import Socials from "./Socials";

const Contact = ({ contactModalState }) => {
  const [contactModalOpen, setContactModalOpen] = contactModalState;

  return (
    <>
      <ContactModal
        getContainer={(x) => x}
        width={900}
        closable
        centered
        size="large"
        title={
          <>
            <ModalHeader>
              Looking to bring your vision to life? Let’s chat!
            </ModalHeader>
            <Socials justify="center" small />
          </>
        }
        okText="Submit"
        okButtonProps={{
          style: {
            backgroundColor: secondaryColor,
            color: "#fff",
            border: "none",
          },
          disabled: false,
        }}
        style={{
          top: 20,
        }}
        open={contactModalOpen}
        onOk={() => setContactModalOpen(false)}
        onCancel={() => setContactModalOpen(false)}
      >
        <ContactForm
          centered
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 14,
          }}
          layout="vertical"
          initialValues={{
            size: "large",
          }}
          //   onValuesChange={onFormLayoutChange}
          size={"large"}
        >
          <Form.Item>
            <Input placeholder="Name" />
          </Form.Item>
          <Form.Item>
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item>
            <Input placeholder="Phone" />
          </Form.Item>
          <Form.Item>
            <Select placeholder="Preferred">
              <Select.Option value="demo">Email</Select.Option>
              <Select.Option value="demo">Phone</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <TextArea rows={4} placeholder="Text" />
          </Form.Item>
        </ContactForm>
      </ContactModal>
    </>
  );
};

export default Contact;

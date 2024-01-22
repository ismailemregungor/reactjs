import React, { useEffect } from "react";
import { Form, Input, Button, Select } from "antd";
import TextArea from "antd/es/input/TextArea";

const UserForm = ({ user, roles, flows, handleFormSubmit, color }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({
      firstname: user?.firstname || "",
      lastname: user?.lastname || "",
      email: user?.email || "",
      age: user?.age || "",
      address: user?.address || "",
      roles: user?.roles || [],
      flows: user?.flows || [],
    });
  }, [user, form]);

  const onFinish = (values) => {
    handleFormSubmit(values);
  };

  return (
    <Form form={form} onFinish={onFinish} layout="vertical">
      <Form.Item
        name="firstname"
        label="Firstname"
        rules={[{ required: true, message: "Please input the firstname!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="lastname"
        label="Lastname"
        rules={[{ required: true, message: "Please input the lastname!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="email"
        label="Email"
        rules={[{ required: true, message: "Please input the email!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="age"
        label="Age"
        rules={[{ required: true, message: "Please input the age!" }]}
      >
        <Input type="number" />
      </Form.Item>
      <Form.Item
        name="address"
        label="Address"
        rules={[{ required: true, message: "Please input the address!" }]}
      >
        <TextArea />
      </Form.Item>
      <Form.Item
        name="roles"
        label="Roles"
        rules={[{ required: true, message: "Please select the roles!" }]}
      >
        <Select mode="multiple">
          {roles.map((role) => (
            <Select.Option key={role.id} value={role.name}>
              {role.name}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        name="flows"
        label="Flows"
        rules={[{ required: true, message: "Please select the flows!" }]}
      >
        <Select mode="multiple">
          {flows.map((flow) => (
            <Select.Option key={flow.id} value={flow.name}>
              {flow.name}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          style={{ backgroundColor: color }}
        >
          {user ? "Update User" : "Add User"}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default UserForm;

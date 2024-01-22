import React, { useEffect } from "react";
import { Form, Input, Button, Space } from "antd";

const PermissionForm = ({ permission, handleFormSubmit, color }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (permission) {
      form.setFieldsValue(permission);
    } else {
      form.resetFields();
    }
  }, [form, permission]);

  const onFinish = (values) => {
    handleFormSubmit(values);
  };

  return (
    <Space direction="vertical">
      <Form
        form={form}
        onFinish={onFinish}
        layout="vertical"
        initialValues={permission}
      >
        <Form.Item
          name="name"
          label="Permission Name"
          rules={[
            { required: true, message: "Please input the permission name!" },
          ]}
        >
          <Input placeholder="Enter permission name" />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{ backgroundColor: color }}
          >
            {permission ? "Update Permission" : "Add Permission"}
          </Button>
        </Form.Item>
      </Form>
    </Space>
  );
};

export default PermissionForm;

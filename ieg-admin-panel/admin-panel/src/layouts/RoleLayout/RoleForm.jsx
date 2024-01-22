import React, { useEffect } from "react";
import { Form, Input, Button, Select } from "antd";

const RoleForm = ({ role, permissions, handleFormSubmit, color }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    const rolePermissions = role
      ? role.permissions
          .map((permissionId) => {
            const perm = permissions.find((p) => p.id === permissionId);
            return perm ? perm.id : null;
          })
          .filter((p) => p !== null)
      : [];

    form.setFieldsValue({
      name: role ? role.name : "",
      permissions: rolePermissions,
    });
  }, [role, permissions, form]);

  const onFinish = (values) => {
    handleFormSubmit(values);
  };

  return (
    <Form form={form} onFinish={onFinish} layout="vertical">
      <Form.Item
        name="name"
        label="Role Name"
        rules={[{ required: true, message: "Please input the role name!" }]}
      >
        <Input placeholder="Enter role name" />
      </Form.Item>
      <Form.Item
        name="permissions"
        label="Permissions"
        rules={[{ required: true, message: "Please select permissions!" }]}
      >
        <Select mode="multiple" placeholder="Select permissions">
          {permissions.map((p) => (
            <Select.Option key={p.id} value={p.id}>
              {p.name}
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
          {role ? "Update Role" : "Add Role"}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RoleForm;

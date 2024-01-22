import React, { useEffect } from "react";
import { Form, Input, Button, Select } from "antd";

const FlowForm = ({ flow, tasks, handleFormSubmit, color }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    const taskIds = flow && flow.tasks ? flow.tasks : [];
    form.setFieldsValue({
      name: flow ? flow.name : "",
      tasks: taskIds,
    });
  }, [flow, form]);

  const onFinish = (values) => {
    handleFormSubmit(values);
  };

  return (
    <Form form={form} onFinish={onFinish} layout="vertical">
      <Form.Item
        name="name"
        label="Flow Name"
        rules={[{ required: true, message: "Please input the flow name!" }]}
      >
        <Input placeholder="Enter flow name" />
      </Form.Item>
      <Form.Item
        name="tasks"
        label="Tasks"
        rules={[{ required: true, message: "Please select tasks!" }]}
      >
        <Select mode="multiple" placeholder="Select tasks">
          {tasks.map((task) => (
            <Select.Option key={task.id} value={task.id}>
              {task.name}
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
          {flow ? "Update Flow" : "Add Flow"}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FlowForm;

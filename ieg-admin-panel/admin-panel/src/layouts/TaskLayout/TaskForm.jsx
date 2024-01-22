import React, { useEffect } from "react";
import { Form, Input, Button } from "antd";

const TaskForm = ({ task, handleFormSubmit, color }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (task) {
      form.setFieldsValue(task);
    } else {
      form.resetFields();
    }
  }, [form, task]);

  const onFinish = (values) => {
    handleFormSubmit(values);
  };

  return (
    <Form form={form} onFinish={onFinish} layout="vertical">
      <Form.Item
        name="name"
        label="Task Name"
        rules={[{ required: true, message: "Please input the task name!" }]}
      >
        <Input placeholder="Enter task name" />
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          style={{ backgroundColor: color }}
        >
          {task ? "Update Task" : "Add Task"}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default TaskForm;

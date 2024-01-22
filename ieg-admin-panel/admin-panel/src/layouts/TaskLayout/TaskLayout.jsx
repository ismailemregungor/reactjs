import React, { useState, useEffect, useContext } from "react";
import { Table, Button, Modal, Space, message, Row, Col } from "antd";
import { PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import TaskForm from "./TaskForm";
import { getTask, addTask, deleteTask, updateTask } from "../../services/task";
import { useColor } from "../../context/ColorContext";
import { PermissionContext } from "../../context/PermissionContext";

const TaskLayout = ({ superAdmin, standartUser, viewer }) => {
  const [tasks, setTasks] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);
  const { color } = useColor();
  const { permissions } = useContext(PermissionContext);
  const canEdit = permissions.includes("user.edit");
  const canDelete = permissions.includes("user.delete");
  const canAdd = permissions.includes("user.add");

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    const data = await getTask();
    setTasks(data);
  };

  const showAddModal = () => {
    setCurrentTask(null);
    setIsModalVisible(true);
  };

  const showEditModal = (task) => {
    setCurrentTask(task);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    loadTasks();
    message.success("Task deleted successfully");
  };

  const handleFormSubmit = async (task) => {
    if (currentTask) {
      await updateTask({ ...currentTask, ...task });
      message.success("Task updated successfully");
    } else {
      await addTask(task);
      message.success("Task added successfully");
    }
    setIsModalVisible(false);
    loadTasks();
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      align: "left",
    },
    {
      title: "Action",
      key: "action",
      align: "right",
      render: (_, record) => (
        <Space size="middle">
          {canEdit && (
            <Button
              onClick={() => showEditModal(record)}
              icon={<EditOutlined />}
              shape="circle"
              type="primary"
              style={{ backgroundColor: color }}
            />
          )}

          {canDelete &&(
            <Button
              onClick={() => handleDelete(record.id)}
              icon={<DeleteOutlined />}
              shape="circle"
              type="primary"
              danger
            />
          )}
        </Space>
      ),
    },
  ];

  return (
    
    <>
      <Row justify="end">
        <Col>
          {canAdd && (
            <Button
              type="primary"
              onClick={showAddModal}
              icon={<PlusOutlined />}
              shape="circle"
              style={{ backgroundColor: color }}
            ></Button>
          )}
        </Col>
      </Row>
      <Table columns={columns} dataSource={tasks} rowKey="id" />
      <Modal
        title={currentTask ? "Edit Task" : "Add Task"}
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <TaskForm
          task={currentTask}
          handleFormSubmit={handleFormSubmit}
          color={color}
        />
      </Modal>
    </>
  );
};

export default TaskLayout;

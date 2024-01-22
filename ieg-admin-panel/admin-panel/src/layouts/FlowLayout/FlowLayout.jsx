import React, { useState, useEffect, useContext } from "react";
import { Table, Button, Modal, Space, message, Tag, Row, Col } from "antd";
import { PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import FlowForm from "./FlowForm";
import { getFlow, addFlow, deleteFlow, updateFlow } from "../../services/flow";
import { getTask } from "../../services/task";
import { useColor } from "../../context/ColorContext";
import { PermissionContext } from "../../context/PermissionContext";

const FlowLayout = () => {
  const [flows, setFlows] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentFlow, setCurrentFlow] = useState(null);
  const { color } = useColor();

  const { permissions } = useContext(PermissionContext);

  const canEdit = permissions.includes("user.edit");
  const canDelete = permissions.includes("user.delete");
  const canAdd = permissions.includes("user.add");

  useEffect(() => {
    loadFlowsAndTasks();
  }, []);

  const loadFlowsAndTasks = async () => {
    try {
      const flowsData = await getFlow();
      const tasksData = await getTask();
      setFlows(flowsData);
      setTasks(tasksData.map((t) => ({ id: t.id, name: t.name })));
    } catch (error) {
      message.error("Failed to load data: " + error.message);
    }
  };

  const showAddModal = () => {
    setCurrentFlow(null);
    setIsModalVisible(true);
  };

  const showEditModal = (flow) => {
    setCurrentFlow(flow);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleDelete = async (id) => {
    try {
      await deleteFlow(id);
      message.success("Flow deleted successfully");
      loadFlowsAndTasks();
    } catch (error) {
      message.error("Failed to delete flow: " + error.message);
    }
  };

  const handleFormSubmit = async (flow) => {
    try {
      if (currentFlow) {
        await updateFlow({ ...currentFlow, ...flow });
        message.success("Flow updated successfully");
      } else {
        await addFlow(flow);
        message.success("Flow added successfully");
      }
      setIsModalVisible(false);
      loadFlowsAndTasks();
    } catch (error) {
      message.error("Failed to submit the flow: " + error.message);
    }
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      align: "left",
    },
    {
      title: "Tasks",
      dataIndex: "tasks",
      key: "tasks",
      render: (taskIds) => (
        <>
          {taskIds.map((taskId) => {
            const task = tasks.find((t) => t.id === taskId);
            return task ? (
              <Tag color="blue" key={taskId}>
                {task.name}
              </Tag>
            ) : null;
          })}
        </>
      ),
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
          {canDelete && (
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
      <Table columns={columns} dataSource={flows} rowKey="id" />
      <Modal
        title={currentFlow ? "Edit Flow" : "Add Flow"}
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <FlowForm
          flow={currentFlow}
          tasks={tasks}
          handleFormSubmit={handleFormSubmit}
          color={color}
        />
      </Modal>
    </>
  );
};

export default FlowLayout;

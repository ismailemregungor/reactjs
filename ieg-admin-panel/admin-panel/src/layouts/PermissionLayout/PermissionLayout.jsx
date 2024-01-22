import React, { useState, useEffect} from "react";
import { Table, Button, Modal, message, Form, Row, Col, Space } from "antd";
import { PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import PermissionForm from "./PermissionForm";
import {
  getPermission,
  addPermission,
  deletePermission,
  updatePermission,
} from "../../services/permission";
import { useColor } from "../../context/ColorContext";


const PermissionLayout = () => {
  const [permission, setPermissions] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentPermission, setCurrentPermission] = useState(null);
  const [form] = Form.useForm();
  const { color } = useColor();

  useEffect(() => {
    loadPermissions();
  }, []);

  const loadPermissions = async () => {
    const data = await getPermission();
    setPermissions(data);
  };

  const showAddModal = () => {
    setCurrentPermission(null);
    form.resetFields();
    setIsModalVisible(true);
  };

  const showEditModal = (permission) => {
    setCurrentPermission(permission);
    form.setFieldsValue(permission);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleDelete = async (id) => {
    await deletePermission(id);
    loadPermissions();
    message.success("Permission deleted successfully");
  };

  const handleFormSubmit = async (values) => {
    if (currentPermission) {
      await updatePermission({ ...currentPermission, ...values });
      message.success("Permission updated successfully");
    } else {
      await addPermission(values);
      message.success("Permission added successfully");
    }
    setIsModalVisible(false);
    loadPermissions();
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

          <Button
            onClick={() => showEditModal(record)}
            icon={<EditOutlined />}
            shape="circle"
            type="primary"
            style={{ backgroundColor: color }}
          />

          <Button
            onClick={() => handleDelete(record.id)}
            icon={<DeleteOutlined />}
            shape="circle"
            type="primary"
            danger
          />
        </Space>
      ),
    },
  ];
  return (
    <>
      <Row justify="end">
        <Col>

          <Button
            type="primary"
            onClick={showAddModal}
            icon={<PlusOutlined />}
            shape="circle"
            style={{ backgroundColor: color }}
          ></Button>
        </Col>
      </Row>

      <Table columns={columns} dataSource={permission} rowKey="id" />
      <Modal
        title={currentPermission ? "Edit Permission" : "Add Permission"}
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <PermissionForm
          permission={currentPermission}
          handleFormSubmit={handleFormSubmit}
          color={color}
        />
      </Modal>
    </>
  );
};

export default PermissionLayout;

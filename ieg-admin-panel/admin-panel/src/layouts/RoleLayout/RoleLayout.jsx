import React, { useState, useEffect} from "react";
import { Table, Button, Modal, Space, message, Tag, Col, Row } from "antd";
import { PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import RoleForm from "./RoleForm";
import { getRole, addRole, deleteRole, updateRole } from "../../services/role";
import { getPermission } from "../../services/permission";
import { useColor } from "../../context/ColorContext";

const RoleLayout = () => {
  const [roles, setRoles] = useState([]);
  const [permissions, setPermissions] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentRole, setCurrentRole] = useState(null);
  const { color } = useColor();

  useEffect(() => {
    loadRolesAndPermissions();
  }, []);

  const loadRolesAndPermissions = async () => {
    try {
      const rolesData = await getRole();
      const permissionsData = await getPermission();
      setRoles(rolesData);
      setPermissions(permissionsData);
    } catch (error) {
      message.error("Failed to load roles and permissions: " + error.message);
    }
  };

  const showAddModal = () => {
    setCurrentRole(null);
    setIsModalVisible(true);
  };

  const showEditModal = (role) => {
    setCurrentRole(role);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setCurrentRole(null);
    setIsModalVisible(false);
  };

  const handleDelete = async (id) => {
    try {
      await deleteRole(id);
      message.success("Role deleted successfully");
      loadRolesAndPermissions();
    } catch (error) {
      message.error("Failed to delete role: " + error.message);
    }
  };

  const handleFormSubmit = async (role) => {
    try {
      if (currentRole) {
        await updateRole({ ...currentRole, ...role });
        message.success("Role updated successfully");
      } else {
        await addRole(role);
        message.success("Role added successfully");
      }
      setIsModalVisible(false);
      await loadRolesAndPermissions();
    } catch (error) {
      message.error("Failed to submit the role: " + error.message);
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
      title: "Permissions",
      dataIndex: "permissions",
      key: "permissions",

      render: (_, record) => (
        <>
          {record.permissions.map((perm) => {
            const permissionName = permissions.find((p) => p.id === perm)?.name;
            return (
              <Tag color="blue" key={perm}>
                {permissionName}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      align: "right",
      render: (text, record) => (
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
      <Table columns={columns} dataSource={roles} rowKey="id" />
      <Modal
        title={currentRole ? "Edit Role" : "Add Role"}
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <RoleForm
          role={currentRole}
          permissions={permissions}
          handleFormSubmit={handleFormSubmit}
          color={color}
        />
      </Modal>
    </>
  );
};

export default RoleLayout;

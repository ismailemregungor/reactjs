import React, { useState, useEffect, useContext } from "react";
import {
  Table,
  Button,
  Modal,
  Space,
  message,
  Row,
  Col,
  Tag,
  Form,
} from "antd";
import { PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import UserForm from "./UserForm";
import { getUsers, addUser, deleteUser, updateUser } from "../../services/user";
import { getRole } from "../../services/role";
import { getFlow } from "../../services/flow";
import { useColor } from "../../context/ColorContext";
import { PermissionContext } from "../../context/PermissionContext";

const UserLayout = () => {
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);
  const [flows, setFlows] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [form] = Form.useForm();
  const { color } = useColor();
  const { permissions } = useContext(PermissionContext);
  const canEdit = permissions.includes("user.edit");
  const canDelete = permissions.includes("user.delete");
  const canAdd = permissions.includes("user.add");

  useEffect(() => {
    loadUsersRolesAndFlows();
  }, []);

  const loadUsersRolesAndFlows = async () => {
    try {
      const usersData = await getUsers();
      const rolesData = await getRole();
      const flowsData = await getFlow();
      setUsers(usersData);
      setRoles(rolesData);
      setFlows(flowsData);
    } catch (error) {
      message.error("Failed to load data: " + error.message);
    }
  };

  const showAddModal = () => {
    // setCurrentUser(null);
    form.resetFields();
    setIsModalVisible(true);
  };

  const showEditModal = (user) => {
    setCurrentUser(user);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setCurrentUser(null);
    setIsModalVisible(false);
  };

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      message.success("User deleted successfully");
      loadUsersRolesAndFlows();
    } catch (error) {
      message.error("Failed to delete user: " + error.message);
    }
  };

  const handleFormSubmit = async (user) => {
    try {
      if (currentUser) {
        await updateUser({ ...currentUser, ...user });
        message.success("User updated successfully");
      } else {
        await addUser(user);
        message.success("User added successfully");
      }
      setIsModalVisible(false);
      loadUsersRolesAndFlows();
    } catch (error) {
      message.error("Failed to submit the user: " + error.message);
    }
  };

  const columns = [
    {
      title: "Firstname",
      dataIndex: "firstname",
      key: "firstname",
    },
    {
      title: "Lastname",
      dataIndex: "lastname",
      key: "lastname",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Roles",
      dataIndex: "roles",
      key: "roles",
      render: (roles) => <span>{roles.join(", ")}</span>,
    },
    {
      title: "Flows",
      dataIndex: "flows",
      key: "flows",
      render: (flows) => (
        <>
          {flows.map((flow) => (
            <Tag color="blue" key={flow}>
              {flow}
            </Tag>
          ))}
        </>
      ),
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
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
      <Table columns={columns} dataSource={users} rowKey="id" />
      {isModalVisible && (
        <Modal
          title={currentUser ? "Edit User" : "Add User"}
          visible={isModalVisible}
          onCancel={handleCancel}
          footer={null}
        >
          <UserForm
            user={currentUser}
            roles={roles}
            flows={flows}
            handleFormSubmit={handleFormSubmit}
            color={color}
          />
        </Modal>
      )}
    </>
  );
};

export default UserLayout;

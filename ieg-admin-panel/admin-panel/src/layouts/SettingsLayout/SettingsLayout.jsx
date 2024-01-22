import React, { useState, useEffect, useContext } from "react";
import { Select, Form, Button, Spin } from "antd";
import { useColor } from "../../context/ColorContext";
import { getUsers } from "../../services/user";
import { useTitle } from "../../context/TitleContext";
import { PermissionContext } from "../../context/PermissionContext"; // Adjust the path as necessary
import { getRole } from "../../services/role";
import { getPermission } from "../../services/permission";
const { Option } = Select;

const SettingsLayout = () => {
  const [selectedUser, setSelectedUser] = useState();
  const [users, setUsers] = useState(null);
  const { color, updateColor } = useColor();
  const { updateTitle } = useTitle();

  const { updatePermissions } = useContext(PermissionContext);
  const [roles, setRoles] = useState([]);
  const [permissions, setPermissions] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getUsers();
        const rolesData = await getRole();
        const permissionsData = await getPermission();
        setUsers(response);
        setRoles(rolesData);
        setPermissions(permissionsData);
      } catch (error) {
        console.error("Failed to fetch data", error);
      }
    };
    fetchUsers();
  }, []);

  const handleColorChange = (value) => {
    updateColor(value);
  };

  const handleUserChange = (userId) => {
    const user = users?.find((u) => u.id === userId);
    setSelectedUser(user);
    updateTitle(user);

    if (Array.isArray(roles) && Array.isArray(permissions)) {
      const userRoles = user?.roles || [];
      const userPermissions = roles
        .filter((role) => userRoles.includes(role.name))
        .flatMap((role) =>
          role.permissions.map(
            (p) => permissions.find((permission) => permission.id === p)?.name
          )
        );
      updatePermissions(userPermissions);
    } else {
      console.error("Roles or permissions data is null");
    }
  };

  return (
    <Form layout="vertical">
      <Form.Item label="User:">
        {users ? (
          <Select onChange={handleUserChange} value={selectedUser?.id}>
            {users.map((user) => (
              <Option key={user.id} value={user.id}>
                {user.firstname} {user.lastname}
              </Option>
            ))}
          </Select>
        ) : (
          <Spin />
        )}
      </Form.Item>
      <Form.Item label="Theme Color:">
        <input
          type="color"
          value={color}
          onChange={(e) => handleColorChange(e.target.value)}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" onClick={() => console.log("Settings saved")}>
          Save
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SettingsLayout;

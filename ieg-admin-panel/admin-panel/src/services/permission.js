import axios from "axios";
import { permissionUrl } from "../constants/apiUrl";

export async function getPermission() {
  const response = await axios.get(permissionUrl);
  return response.data;
}

export async function addPermission(permission) {
  const response = await axios.post(permissionUrl, permission);
  return response.data;
}

export async function deletePermission(id) {
  const response = await axios.delete(`${permissionUrl}/${id}`);
  return response.data;
}

export async function updatePermission(permission) {
  const response = await axios.put(
    `${permissionUrl}/${permission.id}`,
    permission
  );
  return response.data;
}

export async function getPermissionCount() {
  const response = await axios.get(permissionUrl);
  return response.data.length;
}

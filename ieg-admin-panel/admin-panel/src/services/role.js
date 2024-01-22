import axios from "axios";
import { roleUrl } from "../constants/apiUrl";

export async function getRole() {
  const response = await axios.get(roleUrl);
  return response.data;
}

export async function addRole(role) {
  const response = await axios.post(roleUrl, role);
  return response.data;
}

export async function deleteRole(id) {
  const response = await axios.delete(`${roleUrl}/${id}`);
  return response.data;
}

export async function updateRole(role) {
  const response = await axios.put(`${roleUrl}/${role.id}`, role);
  return response.data;
}

export async function getRoleCount() {
  const response = await axios.get(roleUrl);
  return response.data.length;
}


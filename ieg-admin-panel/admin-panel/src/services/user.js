import axios from "axios";
import { userUrl } from "../constants/apiUrl";

export async function getUsers() {
  const response = await axios.get(userUrl);
  return response.data;
}

export async function addUser(user) {
  const response = await axios.post(userUrl, user);
  return response.data;
}

export async function deleteUser(id) {
  const response = await axios.delete(`${userUrl}/${id}`);
  return response.data;
}

export async function updateUser(user) {
  const response = await axios.put(`${userUrl}/${user.id}`, user);
  return response.data;
}

export async function getUserCount() {
  const response = await axios.get(userUrl);
  return response.data.length;
}


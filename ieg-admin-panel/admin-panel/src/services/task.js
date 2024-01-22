import axios from "axios";
import { taskUrl} from "../constants/apiUrl";

export async function getTask() {
  const response = await axios.get(taskUrl);
  return response.data;
}

export async function addTask(task) {
  const response = await axios.post(taskUrl, task);
  return response.data;
}

export async function deleteTask(id) {
  const response = await axios.delete(`${taskUrl}/${id}`);
  return response.data;
}

export async function updateTask(task) {
  const response = await axios.put(`${taskUrl}/${task.id}`, task);
  return response.data;
}

export async function getTaskCount() {
  const response = await axios.get(taskUrl);
  return response.data.length;
}


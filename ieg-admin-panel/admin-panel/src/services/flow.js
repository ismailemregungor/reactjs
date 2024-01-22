import axios from "axios";
import { flowUrl } from "../constants/apiUrl";

export async function getFlow() {
  const response = await axios.get(flowUrl);
  return response.data;
}

export async function addFlow(flow) {
  const response = await axios.post(flowUrl, flow);
  return response.data;
}

export async function deleteFlow(id) {
  const response = await axios.delete(`${flowUrl}/${id}`);
  return response.data;
}

export async function updateFlow(flow) {
  const response = await axios.put(`${flowUrl}/${flow.id}`, flow);
  return response.data;
}

export async function getFlowCount() {
  const response = await axios.get(flowUrl);
  return response.data.length;
}

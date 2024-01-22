import axios from "axios";

import { productsURL } from "../constant/apiUrl";

export async function getProducts() {
  const response = await axios.get(productsURL);
  return response.data;
}

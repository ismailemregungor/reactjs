import axios from "axios";
import { bookUrl } from "../constant/apiUrl";

export async function getBooks() {
  const response = await axios.get(bookUrl);
  return response.data;
}

export async function addBook(book) {
  const response = await axios.post(bookUrl, book);
  return response.data;
}

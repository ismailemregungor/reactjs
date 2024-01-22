import axios from "axios";
import { characterUrl } from "../constants/apiUrl";

export async function getCharacters() {
  const response = await axios.get(characterUrl);
  return response.data;
}

export async function getEpisode(characterUrl) {
  const response = await axios.get(characterUrl);
  return response.data;
}

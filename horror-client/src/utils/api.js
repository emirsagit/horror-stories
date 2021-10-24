import axios from "axios";
import { BASE_URL } from "../constants/env";

export default function api() {
  const api = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
    headers: { Accept: "application/json", "Content-Type": "application/json" },
  });

  return api;
}

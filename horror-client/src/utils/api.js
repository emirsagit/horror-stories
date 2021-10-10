import axios from "axios";

export default function api() {
  const api = axios.create({
    baseURL: "http://localhost:8000",
    withCredentials: true,
    headers: { Accept: "application/json", "Content-Type": "application/json" },
  });

  return api;
}

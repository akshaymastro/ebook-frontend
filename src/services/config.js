import axios from "axios";

export const BaseConfig = axios.create({
  baseURL: "http://localhost:8000/api",
});

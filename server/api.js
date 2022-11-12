import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001",
  timeout: 800,
  
});

export default api;
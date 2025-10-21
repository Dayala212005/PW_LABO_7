import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000", // Asegúrate de que el puerto coincida con tu backend
});

// Añadir token automáticamente al header
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export default API;

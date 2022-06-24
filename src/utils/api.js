import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_API,
  headers: { "Content-Type": "application/json" },
});

export const fetchWeather = async () => {
  const response = await api.get("weather");
  return response.data;
};

export default api;

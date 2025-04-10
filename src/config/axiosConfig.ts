import axios from "axios";

const options = {
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true,
};

const API = axios.create(options);

API.interceptors.response.use(
  (response) => {
    // console.log(response.data);
    return response.data;
  },
  (error) => {
    // console.log(error.response.data);
    return Promise.reject(error.response.data);
  }
);

export default API;

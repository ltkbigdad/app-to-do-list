import axios from "axios";

const api = axios.create({
  baseURL: "https://api-nodejs-todolist.heroKuapp.com",
});

export default api;

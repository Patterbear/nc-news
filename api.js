import axios from "axios";

const api = axios.create({
    baseURL: "https://nc-news-ch8f.onrender.com/api"
});

export default api;
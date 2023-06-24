import axios from "axios";

const apiService = axios.create({
    baseURL: 'https://etiket-server.vercel.app/',
});

export default apiService;

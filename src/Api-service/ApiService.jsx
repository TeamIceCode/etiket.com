import axios from "axios";

const apiService = axios.create({
    baseURL: 'https://etiket-be.vercel.app/',
});

export default apiService;

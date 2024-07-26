import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";
// import { setUser } from "../../store/store.reducer";
// import { store } from "../../store/store.config";

const axiosInstance = axios.create({
    baseURL: "http://localhost:3000",
    headers: {
        "Content-Type": "application/json",
    },
});

axiosInstance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        return config;
    }, (error) => {
        return Promise.reject(error);
    });

axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
        const method = response?.config?.method?.toUpperCase() ?? '';

        if (method === 'POST') {
            console.log('POST:', response.data)
        }

        return response;
    }
);

export default axiosInstance;
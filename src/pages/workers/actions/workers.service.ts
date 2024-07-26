import { API } from "../../../core/configs/api.config";
import axiosInstance from "../../../core/configs/axios.config";
import { IWorker } from "../../../store/store";

export const getWorkersService = async (): Promise<IWorker[]> => {
    const response = await axiosInstance.get(API.workers);
    return response.data;
}


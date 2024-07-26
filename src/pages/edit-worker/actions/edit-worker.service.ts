import { API } from "../../../core/configs/api.config";
import axiosInstance from "../../../core/configs/axios.config";
import { IWorker } from "../../../store/store";

export const editWorkerService = async (credentials: IWorker): Promise<IWorker[]> => {
    const response = await axiosInstance.patch(`${API.workers}/${credentials.id}`, credentials);
    return response.data;
}


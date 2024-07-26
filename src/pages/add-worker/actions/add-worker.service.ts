import { API } from "../../../core/configs/api.config";
import axiosInstance from "../../../core/configs/axios.config";
import { IWorker } from "../../../store/store";

export const addWorkerService = (credentials: IWorker): Promise<IWorker[]> => {
    return axiosInstance.post(API.workers, credentials).then((response) => response.data);
}


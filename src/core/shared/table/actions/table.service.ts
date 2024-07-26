import { API } from "../../../configs/api.config";
import axiosInstance from "../../../configs/axios.config";

export const deleteWorker = async (id: string) => {
    const res = await axiosInstance.delete(`${API.workers}/${id}`);
    return console.log(res.data);
}

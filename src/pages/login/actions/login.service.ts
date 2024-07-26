import { API } from "../../../core/configs/api.config";
import axiosInstance from "../../../core/configs/axios.config";
import { IUser } from "../../../store/store";
import { ILoginFormValues } from "../login";

export const login = (credentials: ILoginFormValues): Promise<IUser> => {
    return axiosInstance.post(API.users, credentials)
        .then(response => response.data);
}
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { ILoginFormValues } from "../login";
import { setToken } from "../../../core/helpers/get-token";
import { store } from "../../../store/store.config";
import { setUser } from "../../../store/store.reducer";
import { Routes } from "../../../router/routes";
import { login } from "./login.service";

export const useLogin = () => {
    const navigate = useNavigate();

    return useMutation({
        mutationFn: (values: ILoginFormValues) => {
            return login(values);
        },
        onSuccess: (response) => {
            setToken('token');
            console.log('Login success:', response);
            store.dispatch(setUser(response));
            navigate(Routes.default);
        }
    })
}
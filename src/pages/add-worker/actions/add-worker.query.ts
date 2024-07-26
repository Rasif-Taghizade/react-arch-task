import { useMutation } from "@tanstack/react-query";
import { addWorkerService } from "./add-worker.service";
import { IWorker } from "../../../store/store";

export const useAddWorkerQuery = () => {
    return useMutation({
        mutationFn: (values: IWorker) => {
            return addWorkerService(values);
        },
        onSuccess: (response) => {
            console.log('Add worker success:', response);
        }
    });
};

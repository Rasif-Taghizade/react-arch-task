import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IWorker } from "../../../store/store";
import { editWorkerService } from "./edit-worker.service";

export const useEditWorkerQuery = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (values: IWorker) => {
            return editWorkerService(values);
        },
        onSuccess: () => {
            queryClient.invalidateQueries('workers');
        },
    });
};

import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteWorker } from "./table.service"


export const useDeleteWorker = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id: string) => deleteWorker(id),

        onMutate: async (id: string) => {
            console.log('onMutate:', id);
        },

        onSuccess: () => {
            queryClient.invalidateQueries('workers');
        },

        onError: () => {
            console.log('onError');
        },

        onSettled: () => {
            console.log('onSettled');
        },
    })
}   
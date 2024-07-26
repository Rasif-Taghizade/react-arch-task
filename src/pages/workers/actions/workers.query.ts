import { useQuery } from "@tanstack/react-query"
import { getWorkersService } from "./workers.service"


export const useWorkersQuery = () => {
    return useQuery({
        queryKey: ['workers'],
        queryFn: getWorkersService,
        refetchOnWindowFocus: true,
        refetchOnMount: true,
    })
}   
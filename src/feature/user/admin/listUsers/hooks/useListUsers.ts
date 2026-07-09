import { useQuery } from "@tanstack/react-query";
import { adminUserService } from "../../services/adminUserService";

export function useListUsers(name?: string) {

    const FIVE_MINUTES = 1000 * 60 * 5;

    const listUsers = useQuery({
        queryKey: ["users", name],
        queryFn: () => adminUserService.listUsers(name),
        staleTime: FIVE_MINUTES
    })

    return{
        users: listUsers?.data?.content ?? [],
        loadingUsers: listUsers.isPending
    }

}
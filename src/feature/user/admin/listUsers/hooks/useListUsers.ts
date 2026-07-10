import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { adminUserService } from "../../services/adminUserService";
import type { UpdateRoleRequestMutation } from "../types/updateRoleRequestMutation";

export function useListUsers(name?: string) {

    const queryClient = useQueryClient();

    const FIVE_MINUTES = 1000 * 60 * 5;

    const listUsers = useQuery({
        queryKey: ["users", name],
        queryFn: () => adminUserService.listUsers(name),
        staleTime: FIVE_MINUTES
    });

    const updateRole = useMutation({
        mutationFn: (request: UpdateRoleRequestMutation) => adminUserService.updateRole(request.id, request.role),

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["users"]
            });
        }
    })

    return{
        users: listUsers?.data?.content ?? [],
        loadingUsers: listUsers.isPending,

        updateRole: updateRole.mutateAsync
    }

}
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { readingService } from "../../services/readingService";

export function useReaderProgress(idBook: string) {

    const queryClient = useQueryClient();

    const getReadingProgress = useQuery({
        queryKey: ["readingProgress"],
        queryFn: () => readingService.getReadingProgress(idBook)
    });

    const updateProgress = useMutation({
        mutationFn: () => readingService.updateReading(idBook),

        onSuccess: async() => {
            queryClient.invalidateQueries({
                queryKey: ["readingProgress"]
            })
        }

    });

    return {
        reading: getReadingProgress.data,
        loadingReading: getReadingProgress.isLoading,

        update: updateProgress.data
    }
}
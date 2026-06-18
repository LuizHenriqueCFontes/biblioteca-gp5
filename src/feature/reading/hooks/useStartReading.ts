import { useMutation } from "@tanstack/react-query";
import { readingService } from "../services/readingService";

export function useStartReading() {

    const startReading = useMutation({
        mutationFn: readingService.startReading
    });

    return{
        startReading: startReading.mutateAsync
    }
}
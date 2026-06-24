import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { readingService } from "../../services/readingService";
import { useEffect, useRef } from "react";
import type { ReadingRequestDTO } from "../../types/request/readingRequestDTO";

export function useReaderProgress(idBook: string) {

    const queryClient = useQueryClient();

    const readingProgressRef = useRef<ReadingRequestDTO>({epubCfi: "", percentage: 0});

    const lastReadingProgressRef = useRef<ReadingRequestDTO>({epubCfi: "", percentage: 0});

    const updateProgressReference = (epubCfi: string, percentage: number) => {
        readingProgressRef.current = ({epubCfi, percentage})
    }

    const hasChangeReading = lastReadingProgressRef.current.epubCfi !== readingProgressRef.current.epubCfi || lastReadingProgressRef.current.percentage !== readingProgressRef.current.percentage;

    const getReadingProgress = useQuery({
        queryKey: ["readingProgress", idBook],
        queryFn: () => readingService.getReadingProgress(idBook)
    });

    const updateProgress = useMutation({
        mutationFn: (readingProgress: ReadingRequestDTO) => readingService.updateReading(idBook, readingProgress),

        onSuccess: (newData) => {
            lastReadingProgressRef.current = readingProgressRef.current;

            queryClient.setQueryData(["readingProgress", idBook], newData);
        }
    });

    useEffect(() => {
        const saveProgressInterval = setInterval(() => {
            if(readingProgressRef.current.epubCfi) {
                updateProgress.mutate(readingProgressRef.current);
            }

        }, 30000);

        return () => {
            clearInterval(saveProgressInterval);

            if(hasChangeReading) {
                updateProgress.mutate(readingProgressRef.current);
            }
        }

    }, [idBook, updateProgress]);


    return {
        reading: getReadingProgress.data,
        loadingReading: getReadingProgress.isLoading,

        updateReading: updateProgressReference
    }
}
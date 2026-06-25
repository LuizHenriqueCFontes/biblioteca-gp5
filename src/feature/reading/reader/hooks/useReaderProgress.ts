import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { readingService } from "../../services/readingService";
import { useEffect, useRef } from "react";
import type { ReadingRequestDTO } from "../../types/request/readingRequestDTO";
import { Rendition } from "epubjs"

export function useReaderProgress(idBook: string) {

    const renditionRef = useRef<Rendition | null>(null);

    const readingProgressRef = useRef<ReadingRequestDTO>({epubCfi: "", percentage: 0});

    const lastReadingProgressRef = useRef<ReadingRequestDTO>({epubCfi: "", percentage: 0});

    const getReadingProgress = useQuery({
        queryKey: ["readingProgress", idBook],
        queryFn: () => readingService.getReadingProgress(idBook)
    });

    const updateProgress = useMutation({
        mutationFn: (readingProgress: ReadingRequestDTO) => readingService.updateReading(idBook, readingProgress),

        onSuccess: () => {
            lastReadingProgressRef.current = readingProgressRef.current;

            //queryClient.setQueryData(["readingProgress", idBook], newData);
        }
    });


    const handleLocationChange = (epubCfi: string) => {
        if(readingProgressRef.current.epubCfi === epubCfi) {
            return;
        }

        console.log(epubCfi)
        let percentage = 0;

        if(renditionRef.current) {
            percentage = renditionRef.current.location.start.percentage;
        }

        readingProgressRef.current = ({epubCfi, percentage});
    }


    useEffect(() => {
        const saveProgressInterval = setInterval(() => {

            const hasChangeReading = lastReadingProgressRef.current.epubCfi !== readingProgressRef.current.epubCfi;


            if(hasChangeReading && !updateProgress.isPending) {
                updateProgress.mutate(readingProgressRef.current);
            }

        }, 30000);

        return () => {

            clearInterval(saveProgressInterval);

            const hasChangeReading = lastReadingProgressRef.current.epubCfi !== readingProgressRef.current.epubCfi;

            if(hasChangeReading) {
                updateProgress.mutate(
                    readingProgressRef.current
                );
            }
        }
    }, [idBook]);


    return {
        reading: getReadingProgress.data,
        loadingReading: getReadingProgress.isLoading,

        renditionRef,
        handleLocationChange
    }
}
import { api } from "../../../services/api";
import type { ReadingRequestDTO } from "../types/request/readingRequestDTO";
import type { ReadingResponseDTO } from "../types/response/readingResponseDTO";
import type { UpdateReadingResponseDTO } from "../types/response/updateReadingResponseDTO";

const BASE_ENDPOINT = "/reading";

export const readingService = {
    startReading: async(idBook: string): Promise<ReadingResponseDTO> => {
        const endpoint = `${BASE_ENDPOINT}/${idBook}`;

        const { data } = await api.post<ReadingResponseDTO>(endpoint);

        return data;
    },

    getReadingProgress: async(idBook: string): Promise<ReadingResponseDTO> => {
        const endpoint = `${BASE_ENDPOINT}/${idBook}`;

        const { data } = await api.get<ReadingResponseDTO>(endpoint);

        return data;
    },

    updateReading: async(idBook: string, readingRequestDTO: ReadingRequestDTO): Promise<UpdateReadingResponseDTO> => {
        const endpoint = `${BASE_ENDPOINT}/${idBook}`;

        const { data } =  await api.patch<UpdateReadingResponseDTO>(endpoint, {
            epubCfi: readingRequestDTO.epubCfi,
            percentage: readingRequestDTO.percentage
        });

        return data;
    }
}
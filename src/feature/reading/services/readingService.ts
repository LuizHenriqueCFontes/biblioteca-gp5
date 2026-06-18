import { api } from "../../../services/api";
import type { ReadingResponseDTO } from "../types/readingResponseDTO";

const BASE_ENDPOINT = "/reading";

export const readingService = {
    startReading: async(idBook: string): Promise<ReadingResponseDTO> => {
        const endpoint = `${BASE_ENDPOINT}/${idBook}`;

        const { data } = await api.post<ReadingResponseDTO>(endpoint);

        return data;
    }
}
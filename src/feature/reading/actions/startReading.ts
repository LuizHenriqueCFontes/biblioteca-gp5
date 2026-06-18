import { executeWithToast } from "../../../utils/toast";
import type { ReadingResponseDTO } from "../types/readingResponseDTO";

export async function startReadingAction(idBook: string, startReading: (idBook: string) => Promise<ReadingResponseDTO>): Promise<ReadingResponseDTO> {
    const response = await executeWithToast(() => startReading(idBook), "Carregando leitura...", "Redirecionando...");

    return response;
}
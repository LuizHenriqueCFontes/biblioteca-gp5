import { useNavigate } from "react-router-dom";
import type { ReadingResponseDTO } from "../../reading/types/response/readingResponseDTO";

const navigate = useNavigate();

export async function handleStartReading(idBook: string, startReadingAction: (idBook: string) => Promise<ReadingResponseDTO>) {
    await startReadingAction(idBook);

    navigate(`/reading/${idBook}`);
}

export async function handleContinueReading(idBook: string) {
    navigate(`/reading/${idBook}`);
}
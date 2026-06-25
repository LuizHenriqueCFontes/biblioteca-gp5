export function formatDate(date: string) {
    const formattedDate = new Date(date).toLocaleDateString("pt-BR");

    return formattedDate;
}
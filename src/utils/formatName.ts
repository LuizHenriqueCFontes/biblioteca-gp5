export function formatName(fullName: string): string {
    return fullName.trim().split(/\s+/)[0];
}
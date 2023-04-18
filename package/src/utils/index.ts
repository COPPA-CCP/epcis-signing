
export function isURL(string: string): boolean {
    let url;
    try {
        url = new URL(string);
    } catch (_) {
        return false;
    }
    return url.protocol === "http:" || url.protocol === "https:";
}

export function isIRI(string: string): boolean {
    if (string.startsWith('did:')) return true;
    return isURL(string);
}
export const date = createdAt => {
    const date = new Date(createdAt);
    const dateString = date.toDateString();
    const idx = dateString.indexOf(" ")
    return dateString.slice(idx + 1);
}
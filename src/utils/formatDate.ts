export const formatDate = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    return `${String(date.getDate()).padStart(2, '0')}.${String(date.getMonth() + 1).padStart(2, '0')}.${date.getFullYear()}`;
};

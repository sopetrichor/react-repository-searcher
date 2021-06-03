export const createRepoIds = (items: { [key: string]: any }[], ids = []): number[] => {
    const newIds = items.map((item) => {
        const { id } = item;
        return id;
    });

    return [...ids, ...newIds];
};

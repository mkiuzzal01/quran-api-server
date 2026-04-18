export const textNormalize = (text: string) =>
    text
        .toLowerCase()
        .replace(/[\u064B-\u065F\u0670]/g, '')
        .trim()

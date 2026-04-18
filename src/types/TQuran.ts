export interface TQuran {
    surah: number;
    name_ar: string;
    name_en: string;
    ayahs: TAyah[];
}

export interface TAyah {
    number: number;
    text_en: string;
    text_ar: string;
}

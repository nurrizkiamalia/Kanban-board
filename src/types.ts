export type CardDetail = {
    image?: string[];
    title: string;
    description?: string;
    task?: string[];
    tag?: string[];
};

export interface CardData {
    id: number;
    valueName: string;
    cardDetail: CardDetail | CardDetail[];
}

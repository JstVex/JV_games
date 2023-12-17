export interface SquareData {
    id: number;
    text: string;
    category: string;
    selected: boolean;
    isCorrect: boolean;
}

export interface CorrectGuessDetails {
    category: string;
    words: string[];
}
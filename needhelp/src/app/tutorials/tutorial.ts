/**
 * Objeto tutorial retornado pela API
 */
export interface ITutorial {
    id: number;
    title: string;
    materials: string;
    steps: string;
    imageUrl: string;
    category: string;
}
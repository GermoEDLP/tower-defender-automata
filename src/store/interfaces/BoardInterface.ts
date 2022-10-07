import { Card } from ".";

export interface Tower extends Card {
    position: Position;
    ruins: number;
    destroyed: boolean;
    cost: number;
    range: 1;
}

export type Position = "front" | "middle" | "back";

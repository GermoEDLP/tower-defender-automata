import { Clase, Ord, OrdType } from "../store/interfaces";

export const ord_deck: Ord[] = [
  {
    id: 1,
    name: "Warriors",
    type: OrdType.BLUE,
    damage: 1,
    health: 1,
    abilities: [],
    clase: Clase.PRIMARY,
    description: "Warriors",
  },
  {
    id: 2,
    name: "Archers",
    type: OrdType.BLUE,
    damage: 1,
    health: 1,
    clase: Clase.PRIMARY,
    abilities: [],
    description: "Archers",
  },
];

import { Ability, Card } from ".";

export interface Ord extends Card {
  type: OrdType;
  clase: Clase;
}

export enum Clase {
  LIGHT = "ligth",
  DARK = "dark",
  PRIMARY = "primary",
  SUCCESS = "success",
  DANGER = "danger",
}

export enum OrdType {
  BLUE = "blue",
  GREEN = "green",
  RED = "red",
  BLACK = "black",
}

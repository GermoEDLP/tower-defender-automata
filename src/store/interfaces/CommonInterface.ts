export interface Card {
  id: number;
  name: string;
  description: string;
  damage: number;
  health: number;
  initialDamage: number;
  initialHealth: number;
  abilities: Ability[];
}

export interface Ability {
  name: string;
  description: string;
  level: number;
}

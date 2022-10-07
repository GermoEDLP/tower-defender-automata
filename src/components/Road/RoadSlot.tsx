import { Ord } from "../../store/interfaces";
import { Card } from "../Card";
import { Slot } from "../Slot";

export const RoadSlot = ({ card }: { card: Ord | null }) => {
  return <div className="col-2">{card ? <Card card={card} /> : <Slot />}</div>;
};

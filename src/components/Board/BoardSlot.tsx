import { Ord, Tower } from "../../store/interfaces";
import { Card } from "../Card";
import { Slot } from "../Slot";

export const BoardSlot = ({ card }: { card: Tower | null }) => {
  return <div className="col-2">{card ? <Card card={card} /> : <Slot />}</div>;
};

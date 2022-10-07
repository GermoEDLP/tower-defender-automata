import { Card } from "../Card";
import { useAppSelector } from "../../store/hooks";
import { Slot } from "../Slot";
import { RoadActions } from "./RoadActions";
import { Deck } from "./Deck";
import { RoadSlot } from "./RoadSlot";
import { Explanations } from "./Explanations";

export const Road = () => {
  const { deck, road, revelada } = useAppSelector((state) => state.road);
  return (
    <>
      <p>Mazo de Hordas: {deck.length}</p>
      <div className="row">
        <div className="col-2">
          <Deck />
        </div>
        <div className="col-2">{revelada && <Card card={revelada} />}</div>
        {road.map((card, i) => (
          <RoadSlot key={i} card={card} />
        ))}
      </div>
      <Explanations />
      <RoadActions />
    </>
  );
};

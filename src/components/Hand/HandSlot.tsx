import { Tower } from "../../store/interfaces";
import { Card } from "../Card";
import { Slot } from "../Slot";
import { ExplanationsActions } from "./ExplanationsActions";

export const HandSlot = ({ card, indice }: { card: Tower; indice: number }) => {
  return (
    <>
      <div className="col-2">
        <Card card={card} />
        <ExplanationsActions card={card} />
      </div>
    </>
  );
};

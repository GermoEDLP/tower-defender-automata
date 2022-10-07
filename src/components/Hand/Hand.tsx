import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { stole } from "../../store/slices";
import { Deck } from "./Deck";
import { HandSlot } from "./HandSlot";
import { PlayerData } from "./PlayersData";

export const Hand = () => {
  const { hand, deck } = useAppSelector((state) => state.hand);
  const dispatch = useAppDispatch();
  const robar = () => {
    dispatch(stole());
  };
  return (
    <>
      <PlayerData />
      <div className="row">
        <div className="col-2">{deck.length > 0 ? <Deck /> : null}</div>
        <div className="col-2">
          <button
            className="btn btn-secondary"
            onClick={robar}
            disabled={deck.length === 0}
          >
            Robar
          </button>
        </div>
        {hand.map((card, i) => (
          <HandSlot key={i} card={card} indice={i} />
        ))}
      </div>
    </>
  );
};

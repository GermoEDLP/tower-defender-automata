import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { Tower } from "../../store/interfaces";
import { locate, use } from "../../store/slices";
import { reduceCristals } from "../../store/slices/PlayerSlice";

export const ExplanationsActions = ({ card }: { card: Tower }) => {
  const [select, setSelect] = useState("1");
  const dispatch = useAppDispatch();
  const {
    hand: { hand },
    board: { board },
    player,
  } = useAppSelector((state) => state);

  const handlePlay = () => {
    if (board[parseInt(select) - 1] !== null) {
      alert("No puedes colocar una torre en una casilla ocupada");
      return;
    }
    if (card.cost > player.cristals) {
      alert("No tienes cristales suficientes para colocar esta torre");
      return;
    }
    dispatch(locate({ indice: parseInt(select) - 1, tower: card }));
    dispatch(reduceCristals(card.cost));
    dispatch(use(card.id));
    setSelect("1");
  };
  return (
    <div className="col-2 mt-2 d-flex w-100">
      <a className="btn btn-secondary w-50" onClick={handlePlay}>
        Jugar
      </a>
      <select
        className="form-select"
        value={select}
        onChange={(e) => setSelect(e.target.value)}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
    </div>
  );
};

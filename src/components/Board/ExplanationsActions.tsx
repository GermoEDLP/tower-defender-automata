import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { Tower } from "../../store/interfaces";
import { makeDamageToOrd, recoveryTower } from "../../store/slices";
import { reduceCristals } from "../../store/slices/PlayerSlice";

export const ExplanationsActions = ({
  title,
  indice,
}: {
  title: string;
  indice: number;
}) => {
  const dispatch = useAppDispatch();
  const {
    board: { board },
    player,
  } = useAppSelector((state) => state);
  const [show, setShow] = useState(false);
  const [damage, setDamage] = useState(0);
  const handleChange = (e: any) => {
    e.preventDefault();
    setDamage(e.target.value);
  };
  const makeDamage = () => {
    dispatch(makeDamageToOrd({ indice, damage }));
    setDamage(0);
  };
  const reconstruir = () => {
    if (board[indice] && (board[indice] as Tower).ruins > player.cristals) {
      alert("No tienes cristales suficientes para reconstruir esta torre");
      return;
    }

    dispatch(recoveryTower({ indice }));
    dispatch(reduceCristals((board[indice] as Tower).ruins));
  };
  return (
    <div className="col-2">
      {title}
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          onClick={() => setShow((prev) => !prev)}
        >
          Acciones
        </button>
        <ul
          className="dropdown-menu"
          style={{ display: show ? "block" : "none" }}
        >
          <li className="d-flex align-items-center">
            <input
              type="text"
              className="m-2 w-25"
              name="damage"
              value={damage}
              onChange={handleChange}
            />
            <a className="dropdown-item" href="#" onClick={makeDamage}>
              Hacer daño
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Agregar habilidad
            </a>
          </li>
          <li>
            <button
              className="dropdown-item"
              disabled={!board[indice]?.destroyed}
              onClick={reconstruir}
            >
              Reconstruir
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

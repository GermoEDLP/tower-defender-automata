import { useState } from "react";
import { useAppDispatch } from "../../store/hooks";
import { makeDamageToOrd } from "../../store/slices";

export const ExplanationsActions = ({
  title,
  indice,
}: {
  title: string;
  indice: number;
}) => {
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
  const dispatch = useAppDispatch();
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
              Recibir daño
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Agregar habilidad
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Crear Horda
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

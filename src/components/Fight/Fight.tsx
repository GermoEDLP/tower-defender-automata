import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { makeDamageToOrd } from "../../store/slices";
import { makeDamageToTower } from "../../store/slices/BoardSlice";

export const Fight = () => {
  const {
    board: { board },
    road: { road },
  } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const figth = (i: number) => {
    if (board[i] && road[i]) {
      dispatch(makeDamageToOrd({ indice: i, damage: board[i]?.damage ?? 0 }));
      dispatch(makeDamageToTower({ indice: i, damage: road[i]?.damage ?? 0 }));
    }
  };
  return (
    <div className="row">
      <div className="col-2"></div>
      <div className="col-2"></div>

      {[0, 1, 2, 3].map((space) => (
        <div className="col-2" key={space}>
          <a className="btn btn-info" onClick={() => figth(space)}>
            Pelear
          </a>
        </div>
      ))}
    </div>
  );
};

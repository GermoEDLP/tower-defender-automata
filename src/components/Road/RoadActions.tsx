import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { avanzar, revelar } from "../../store/slices";

export const RoadActions = () => {
  const dispatch = useAppDispatch();
  const { deck, revelada, road } = useAppSelector((state) => state.road);
  return (
    <div className="mt-3">
      <button
        type="button"
        className="btn btn-outline-primary me-1"
        onClick={() => {
          dispatch(revelar(deck[0]));
        }}
        disabled={deck.length === 0 || !!revelada}
      >
        Revelar
      </button>
      <button
        type="button"
        className="btn btn-outline-primary me-1"
        onClick={() => dispatch(avanzar())}
        disabled={!revelada && !(!!road[0] || !!road[1] || !!road[2] || !!road[3])}
      >
        Avanzar
      </button>
    </div>
  );
};

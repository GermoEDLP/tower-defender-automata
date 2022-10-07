import { useAppSelector } from "../../store/hooks";

export const Deck = () => {
  const { deck } = useAppSelector((state) => state.hand);
  return (
    <div
      className={`card h-100 bg-light`}
      style={{ minHeight: "130px" }}
    >
      <div className="card-body"></div>
    </div>
  );
};

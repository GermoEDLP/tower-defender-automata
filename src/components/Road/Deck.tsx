import { useAppSelector } from "../../store/hooks";

export const Deck = () => {
  const { deck } = useAppSelector((state) => state.road);
  return (
    <div
      className={`card h-100 bg-${deck.length > 0 ? deck[0].clase : "ligth"}`}
      style={{ minHeight: "130px" }}
    >
      <div className="card-body"></div>
    </div>
  );
};

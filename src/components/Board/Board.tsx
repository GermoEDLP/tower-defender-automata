import { useAppSelector } from "../../store/hooks";
import { BoardSlot } from "./BoardSlot";
import { Explanations } from "./Explanations";

export const Board = () => {
  const { board } = useAppSelector((state) => state.board);
  return (
    <>
      <div className="row">
        <div className="col-2"></div>
        <div className="col-2"></div>
        {board.map((card, i) => (
          <BoardSlot key={i} card={card} />
        ))}
      </div>
        <Explanations />
    </>
  );
};

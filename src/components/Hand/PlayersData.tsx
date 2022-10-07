import { useAppSelector } from "../../store/hooks";

export const PlayerData = () => {
  const {
    hand: { deck },
    player,
  } = useAppSelector((state) => state);
  return (
    <div className="row">
      <div className="col-2">Mazo de Jugador: {deck.length}</div>
      <div className="col-2"></div>
      <div className="col-2">Jugador: {player.name}</div>
      <div className="col-2">Cristales disponibles: {player.cristals}</div>
      <div className="col-2">Vida: {player.health}</div>
      <div className="col-2"></div>
    </div>
  );
};

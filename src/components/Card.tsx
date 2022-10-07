import { Ord } from "../store/interfaces";
import { Tower } from "../store/interfaces/BoardInterface";

export const Card = ({ card }: { card: Ord | Tower }) => {
  return (
    <div
      className={`card text-${"clase" in card ? 'white' : "secondary"} h-100 bg-${
        "clase" in card ? card.clase : "light"
      }`}
    >
      <div className="card-body">
        <h5 className="card-title">{card.name}</h5>
        <h6 className="card-subtitle mb-2">Daño: {card.damage}</h6>
        <h6
          className={`card-subtitle mb-2 ${
            card.health <= 0 ? "text-danger" : ""
          }`}
        >
          Defensa: {card.health}
        </h6>
        {"cost" in card ? (
          <>
            <h6 className="card-subtitle mb-2">Coste: {card.cost}</h6>
            <h6
              className={`card-subtitle mb-2 text-${
                card.destroyed ? "danger" : "success"
              }`}
            >
              {card.destroyed ? `Ruinas (${card.ruins})` : "Funcional"}
            </h6>
          </>
        ) : null}
        <p className="card-text">
          {card.abilities.map((ab, i) => (
            <span key={i}>{ab.name}</span>
          ))}
        </p>
      </div>
    </div>
  );
};

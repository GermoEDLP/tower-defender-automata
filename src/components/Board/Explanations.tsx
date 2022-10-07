import { useState } from "react";
import { ExplanationsActions } from "./ExplanationsActions";

export const ExplanationsItems = [
  {
    title: "1er Espacio",
  },
  {
    title: "2do Espacio",
  },
  {
    title: "3er Espacio",
  },
  {
    title: "4to Espacio",
  },
];

export const Explanations = () => {
  return (
    <div className="row">
      <div className="col-2"></div>
      <div className="col-2"></div>
      {ExplanationsItems.map((item, index) => (
        <ExplanationsActions key={index} title={item.title} indice={index} />
      ))}
    </div>
  );
};

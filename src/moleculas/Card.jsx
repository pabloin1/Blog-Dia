import React from "react";
import { Img } from "../atomos/Img";
import { TextoMasPequeño } from "../atomos/TextoMasPequeño";

export function Card({ url }) {
  return (
    <div className="card">
      <div className="card-image">
        <Img url={url} />
      </div>
      <div className="card-content">
        <TextoMasPequeño texto="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas accusamus ullam totam at aliquid blanditiis error provident beatae et. Minus maxime a sit optio autem, cum qui tempore adipisci quibusdam." />
      </div>
    </div>
  );
}


import { Enlaces } from "./Enlaces";
import { ImgRedonda } from "../atomos/ImgRedonda";
import { useState } from "react";

export function Links() {
  const [names, setNames] = useState(["Home", "Recientes", "Ranking", "Nosotros"]);

  return (
    <>
      <Enlaces names={names} />
      <ImgRedonda url="https://w7.pngwing.com/pngs/741/68/png-transparent-user-computer-icons-user-miscellaneous-cdr-rectangle-thumbnail.png" />
    </>
  );
}

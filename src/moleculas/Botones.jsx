import { Boton } from "../atomos/Boton";

export function Botones({ names }) {
  return (
    <>
      {names.map((e, index) => (
        <Boton text={e} key={index} />
      ))}
    </>
  );
}

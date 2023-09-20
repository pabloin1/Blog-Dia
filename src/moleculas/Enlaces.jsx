import { Enlace } from "../atomos/Enlace";
export function Enlaces({ names }) {
  return (
    <>
      {names.map((e, index) => {
        <Enlace name={e} key={index} />;
      })}
    </>
  );
}


import { Input } from "../atomos/Input";

export function Inputs() {
  const inputNames = ["Ingrese su nombre", "Ingrese sus apellidos", "Ingrese su correo"];

  return (
    <>
      {inputNames.map((name, index) => (
        <Input name={name} key={index} />
      ))}
    </>
  );
}

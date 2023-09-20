import { TextoPequeño } from "../atomos/TextoPequeño";
import { Boton } from "../atomos/Boton";

export function TextoBoton() {
  const texto =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi eveniet perspiciatis rem vitae molestias ullam mollitia libero enim sit cupiditate dolore fugit tenetur, accusamus similique quas sed amet iste consequuntur.";
  const botones = ["Button1", "Button2"];

  return (
    <>
      <TextoPequeño texto={texto} />
      {botones.map((textoBoton, index) => (
        <Boton text={textoBoton} key={index} />
      ))}
    </>
  );
}

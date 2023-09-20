import { TextoPequeño } from "../atomos/TextoPequeño"
import { Boton } from "../atomos/Boton"
export function CardSE(){
    return(
       
        <>
         <TextoPequeño texto={
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ea ex fugit numquam officia. Vero, harum, excepturi facere odio accusantium aperiam cupiditate illo rerum voluptatibus alias impedit quas saepe corporis."
         }/>
          <Boton text={"Aceptar"}/>
        </>
    )
}
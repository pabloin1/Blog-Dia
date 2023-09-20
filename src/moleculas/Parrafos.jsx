import { useState } from "react"
import { TextoMasPequeño } from "../atomos/TextoMasPequeño"
export function Parrafos(){

    const [text,setText] = useState("    Lorem ipsum dolor sit amet consectetur adipisicing elit sit amet consectetur.")
    return (
        <>
           <TextoMasPequeño texto={text}/>
           <TextoMasPequeño texto={text}/>
           <TextoMasPequeño texto={text}/>
        </>
    )
}
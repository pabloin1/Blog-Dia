import { useState } from "react"
import { Imgs } from "../js/Imgs";
import { Card } from "../moleculas/Card";
export function OrganismoCards(){
    const [info,setInfo] = useState(Imgs());
    
    return (<>
         
         {
           info.map( (e,i) =>{
               return <Card key={i} url={e}/>
           })
         }
    </>)
}
import { Header } from "../organismos/Navbar";
import { OrganismoForm } from "../organismos/OrganismoForm";
import { OrganismoCards } from "../organismos/OrganismoCard";
import { OrganismoPrin } from "../organismos/OrganismoPrin";
import { Footer } from "../organismos/Footer";
export function Blog(){
   return <>
     <Header/>
     <OrganismoForm/>
     <OrganismoCards/>
     <OrganismoPrin/>
     <Footer/>
    </>
}
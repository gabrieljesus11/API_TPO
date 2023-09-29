import NavBar from "../components/Navbar/Navbar";
//import { Link } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import Card from "../components/Cards/CardsHome/CardHome";
import Categorias from "../components/Categorias/Categorias";



export default function Home(){
    return <div className="flex-wrap place-items-center">
    <section>
    <NavBar />
    </section>

    <section className="">
    <Banner />
    </section>

    <section className="grid gap-4 md:grid-cols-4">
    <Categorias />
    </section>

    <section
    className="grid gap-4 md:grid-cols-4"> 
    <Card />
    <Card />
    <Card />
    </section>

    
    </div>
}
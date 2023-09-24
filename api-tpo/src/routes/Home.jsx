import NavBar from "../components/Navbar/Navbar";
//import { Link } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import Card from "../components/Cards/CardsHome/CardHome";
import Categorias from "../components/Categorias/Categorias";



export default function Home(){
    return <div>
    <section>
    <NavBar />
    </section>

    <section className="grid gap-4">
    <Banner />
    </section>

    <section className="grid gap-4 md:grid-cols-4">
    <Categorias />
    </section>

    <section
    className="grid gap-4 md:grid-cols-4"
    > 
    <Card />
    <Card />
    <Card />
    </section>

    
    </div>
}
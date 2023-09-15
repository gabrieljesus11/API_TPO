import NavBar from "../components/Navbar/Navbar";
//import { Link } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import Card from "../components/Cards/CardsHome/CardHome";
import Categorias from "../components/Categorias/Categorias";



export default function Home(){
    return <div>
    <NavBar />
    <div className="landing">
    <Banner />
    <div className="h2">Categorías</div>
    <Categorias />
    <Card />
    <br/>
    <Card />
    <br/>
    <Card />
    </div>
    </div>
}
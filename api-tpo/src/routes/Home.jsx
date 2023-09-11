import NavBar from "../components/Navbar/Navbar";
//import { Link } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import Card from "../components/Cards/CardsHome/CardHome";



export default function Home(){
    return <div>
    <NavBar />
    <h1>Home</h1>
    <Banner />
    <h2>Lista de cursos</h2>
    <Card />
    <br/>
    <Card />
    <br/>
    <Card />
    </div>


}
import NavBar from "../components/Navbar/Navbar";
import Card from "../components/Cards/CardsHome/CardHome";

export default function CursosDisponibles(){
    return <div>
    <NavBar />
    <div className="landing">
    <div className="h2">Lista completa de cursos</div>
    <Card />
    <br/>
    <Card />
    <br/>
    <Card />
    </div>
    </div>
}
import Filtros from "../components/Filtros/Filtros";
import NavBar from "../components/Navbar/Navbar";



export default function Login(){
    return <div>
    <NavBar />
    <div className="landing">
    <div className="h2">Filtrar</div>
        <Filtros />
    </div>
        
    </div>
}
import ABMcursos from "../components/ABMcursos/ABMcursos";
import NavBar from "../components/Navbar/Navbar";
import fondo from "../img/fondoContacto.png";


export default function Contratos(){
    return <div>
    <NavBar />
    <div id="login-container" className="landing" style={{backgroundImage:`url(${fondo})`,backgroundRepeat:"no-repeat",backgroundSize:"cover" }}>
    <section className="abm">
    <ABMcursos />
    </section>

    </div>
    </div>

}
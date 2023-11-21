import Recupero from "../components/RecuperoContraseña/RecuperoContraseña";
import NavBar from "../components/Navbar/Navbar";
import fondo from "../img/fondoContacto.png";


export default function RecuperoContraseña(){
    return <div>
        <NavBar />
        <div  id="login-container" className="landing" style={{backgroundImage:`url(${fondo})`,backgroundRepeat:"no-repeat",backgroundSize:"cover" }}>
            <div className="h2">Recuperar contraseña</div>
            <section>
                <Recupero />
            </section>
        </div>   
    </div>
}
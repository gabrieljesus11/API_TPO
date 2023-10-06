import Recupero from "../components/RecuperoContraseña/RecuperoContraseña";
import NavBar from "../components/Navbar/Navbar";



export default function RecuperoContraseña(){
    return <div>
        <NavBar />
        <div  id="login-container" className="landing">
            <div className="h2">Recuperar contraseña</div>
            <section>
                <Recupero />
            </section>
        </div>   
    </div>
}
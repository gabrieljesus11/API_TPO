import ModuloLogin from "../components/Login/Login";
import NavBar from "../components/Navbar/Navbar";
import fondo from "../img/fondoContacto.png";


export default function Login(){
    return <div>
        <NavBar />
        <div  id="login-container" className="landing" style={{backgroundImage:`url(${fondo})`,backgroundRepeat:"no-repeat",backgroundSize:"cover" }}>
            <div className="h2">Ingresar</div>
            <section>
                <ModuloLogin />
            </section>
        </div>   
    </div>
}
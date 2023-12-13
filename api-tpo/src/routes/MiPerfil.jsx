import NavBar from "../components/Navbar/Navbar";
import Perfil from "../components/MiPerfil/Perfil";
import fondo from "../img/fondoContacto.png";

export default function MiPerfil(){
    return <div>
    <NavBar />

    <div  id="login-container" className="landing" 
    style={{backgroundImage:`url(${fondo})`,
    backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh'
        
        }}>
            <div className="h2">Mi Perfil</div>
            <section>
                <Perfil />
            </section>
        </div>   

    </div>
}
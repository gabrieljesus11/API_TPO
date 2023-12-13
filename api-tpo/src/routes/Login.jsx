import ModuloLogin from "../components/Login/Login";
import NavBar from "../components/Navbar/Navbar";
import fondo from "../img/fondoLogin.png";


export default function Login(){
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
            <div className="h2">Ingresar</div>
            <section>
                <ModuloLogin />
            </section>
        </div>   
    </div>
}



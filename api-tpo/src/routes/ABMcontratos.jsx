import ABMcontratos from "../components/ABMcontratos/ABMcontratos";
import NavBar from "../components/Navbar/Navbar";
import fondo from "../img/fondoContacto.png";



export default function Contratos(){
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
            <div className="h2">Solicitudes de cursos</div>
            <section className="abm">
                <ABMcontratos />
            </section>
        </div>   

    </div>

}
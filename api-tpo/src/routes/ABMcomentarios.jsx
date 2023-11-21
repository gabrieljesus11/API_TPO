import ABMcomentarios from "../components/ABMcomentarios/ABMcomentarios";
import NavBar from "../components/Navbar/Navbar";
import fondo from "../img/fondoContacto.png";



export default function Comentarios(){
    return <div>
    <NavBar />


    <div  id="login-container" className="landing" style={{backgroundImage:`url(${fondo})`,backgroundRepeat:"no-repeat",backgroundSize:"cover" }}>
            <div className="h2">Comentarios de los clientes</div>
            <section>
                <ABMcomentarios />
            </section>
        </div>   

    </div>

}
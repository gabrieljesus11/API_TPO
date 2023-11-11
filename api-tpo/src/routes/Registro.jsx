import Registro from "../components/Registro/Registro"
import NavBar from "../components/Navbar/Navbar";
import fondo from "../img/fondoContacto.png";


export default function Login(){
    return <div>
    <NavBar />
    <div className="landing" style={{backgroundImage:`url(${fondo})`,backgroundRepeat:"no-repeat",backgroundSize:"cover" }}>
    
    
    
    <section id="contacto-container">
        <div className="h2 contacto-element">
            <h2>Registrate</h2>
        </div>
    
        <div className="contacto-element">
            <Registro />
        </div>
    </section>
    


    </div>
        
    </div>
}
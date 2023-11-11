import NavBar from "../components/Navbar/Navbar";
import FormContratar from "../components/FormContratar/Form";
import fondo from "../img/fondoContacto.png";

export default function Contratar(){
    return <div>
    <NavBar />
    <div className="landing" style={{backgroundImage:`url(${fondo})`,backgroundRepeat:"no-repeat",backgroundSize:"cover" }}>


    <section id="contacto-container">
        <div className="h2 contacto-element">
            <h2>Contratar servicio</h2>
        </div>
    
        <div className="contacto-element">
            <FormContratar />
        </div>
    </section>
    
    </div>
    </div>

}
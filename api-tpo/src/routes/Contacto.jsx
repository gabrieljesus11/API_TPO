import NavBar from "../components/Navbar/Navbar";
import FormContacto from "../components/Contacto/Contacto";

export default function Contacto(){
    return <div>
    <NavBar />
    <div className="landing">
    
    <section id="contacto-container">
        <div className="h2 contacto-element">
            <h2>Contacto</h2>
            <p>¡Queremos escucharte! <br /> Envíanos un mensaje</p>
        </div>
    
        < div className="contacto-element">
            <FormContacto />
        </div>
    </section>
    </div>
    </div>
}
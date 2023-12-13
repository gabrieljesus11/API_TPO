import NavBar from "../components/Navbar/Navbar";
import FormContacto from "../components/Contacto/Contacto";
import fondo from "../img/fondoContacto.png";

export default function Contacto(){


    return <div > 
    <NavBar />
    <div className="landing" style={{backgroundImage:`url(${fondo})`,
       backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh'
        
        }}>
    
    <section id="contacto-container">
        <div className="h2 contacto-element">
            <h2>Contacto</h2>
            <p>¡Queremos escucharte! <br /> Envíanos un mensaje</p>
        </div>
    
        <div className="contacto-element">
            <FormContacto />
        </div>
    </section>
    </div>
    </div>
}
import NavBar from "../components/Navbar/Navbar";
import FormContratar from "../components/FormContratar/Form";
import fondo from "../img/fondoContacto.png";

export default function Contratar(){

    const contract = [
        {
          nombre: "Camila Fernandez",
          curso: "Cerámica",
          teléfono: "+54 1232 1232",
          mail: "cfernandez@mail.com",
          comentario: "me interesa participar del curso"
        }
      ]

    return <div>
    <NavBar />
    <div className="landing" style={{backgroundImage:`url(${fondo})`,backgroundRepeat:"no-repeat",backgroundSize:"cover" }}>


    <section id="contacto-container">
        <div className="h2 contacto-element">
            <h2>Contratar servicio</h2>
        </div>
    
        <div className="contacto-element">
        <FormContratar/>
        </div>
    </section>
    
    </div>
    </div>

}
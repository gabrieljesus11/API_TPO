import NavBar from "../components/Navbar/Navbar";
import FormContacto from "../components/Contacto/Contacto";

export default function Contacto(){
    return <div>
    <NavBar />
    <div className="landing">
    <div className="h2">Contacto</div>
    <FormContacto />
    </div>
    </div>
}
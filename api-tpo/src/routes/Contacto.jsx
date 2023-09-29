import NavBar from "../components/Navbar/Navbar";
import FormContacto from "../components/Contacto/Contacto";

export default function Contacto(){
    return <div>
    <NavBar />
    <div className="landing">
    <div className="h2">Contacto</div>
    
    <section className="grid gap-4 xl:grid-cols-8">
    <FormContacto />
    </section>
    </div>
    </div>
}
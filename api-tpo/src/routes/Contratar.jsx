import NavBar from "../components/Navbar/Navbar";
import FormContratar from "../components/FormContratar/Form";

export default function Contratar(){
    return <div>
    <NavBar />
    <div className="landing">
    <div className="h2">Contratar servicio</div>
    
    <section className="grid gap-4 xl:grid-cols-8">
    <FormContratar />
    </section>
    </div>
    </div>

}
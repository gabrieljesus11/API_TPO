import Registro from "../components/Registro/Registro"
import NavBar from "../components/Navbar/Navbar";


export default function Login(){
    return <div>
    <NavBar />
    <div className="landing">
    <div className="h2">Registrate</div>
    <section className="grid gap-4 md:grid-cols-8">
    <Registro />
    </section>

    </div>
        
    </div>
}
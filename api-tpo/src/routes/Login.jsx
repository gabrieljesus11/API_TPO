import ModuloLogin from "../components/Login/Login";
import NavBar from "../components/Navbar/Navbar";



export default function Login(){
    return <div>
    <NavBar />
    <div className="landing">
    <div className="h2">Ingresar</div>
    <section className="grid gap-4 md:grid-cols-8">
    <ModuloLogin />
    </section>

    </div>
        
    </div>
}
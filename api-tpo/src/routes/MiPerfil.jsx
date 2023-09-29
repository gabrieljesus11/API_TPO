import NavBar from "../components/Navbar/Navbar";
import Perfil from "../components/MiPerfil/Perfil";

export default function MiPerfil(){
    return <div>
    <NavBar />
    <div className="landing">
    <div className="h2">Mi Perfil</div>
    <section className="grid gap-4 xl:grid-cols-8">
    <Perfil />
    </section>
    </div>
    </div>
}
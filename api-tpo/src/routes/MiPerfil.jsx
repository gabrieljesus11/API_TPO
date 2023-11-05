import NavBar from "../components/Navbar/Navbar";
import Perfil from "../components/MiPerfil/Perfil";

export default function MiPerfil(){
    return <div>
    <NavBar />
    <div className="landing">
    <div className="h2">Mi Perfil</div>
    <section className="">
    <Perfil />
    </section>
    </div>
    </div>
}
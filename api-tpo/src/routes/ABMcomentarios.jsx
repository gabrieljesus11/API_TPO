import ABMcomentarios from "../components/ABMcomentarios/ABMcomentarios";
import NavBar from "../components/Navbar/Navbar";



export default function Comentarios(){
    return <div>
    <NavBar />
    <div className="landing">
    <section className="grid gap-4 md:grid-cols-8">
    <ABMcomentarios />
    </section>

    </div>
    </div>

}
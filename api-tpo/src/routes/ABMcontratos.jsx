import ABMcontratos from "../components/ABMcontratos/ABMcontratos";
import NavBar from "../components/Navbar/Navbar";



export default function Contratos(){
    return <div>
    <NavBar />
    <div className="landing">
    <section className="grid gap-4 md:grid-cols-8">
    <ABMcontratos />
    </section>

    </div>
    </div>

}
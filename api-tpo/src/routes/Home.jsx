import NavBar from "../components/Navbar/Navbar";
import Banner from "../components/Banner/Banner";
import Categorias from "../components/Categorias/Categorias";
import Footer from "../components/Footer/Footer";
import CarruselHome from "../components/CarruselHome/CarruselHome";
import ModuloPasos from "../components/ModuloPasos/ModuloPasos";
import ModuloInfoHome from "../components/ModuloInfoHome/ModuloInfoHome";


export default function Home(){
    return <div className="sm:w-full">
    <section>
        <NavBar/>
    </section>

    <section className="">
        <Banner />
    </section>

    <section className="" align="center">
        <Categorias />
    </section>

    <section className="" align="center">
        <ModuloPasos />
    </section>

    <section className="" align="center">
        <CarruselHome />
    </section>

    <section className="" align="center">
        <ModuloInfoHome />
    </section>

    <section>
        <Footer />
    </section>
    
    </div>
}
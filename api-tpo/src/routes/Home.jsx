import NavBar from "../components/Navbar/Navbar";
import Banner from "../components/Banner/Banner";
import Card from "../components/Cards/CardsHome/CardHome";
import Categorias from "../components/Categorias/Categorias";



export default function Home(){
    return <div className="flex-wrap place-items-center">
    <section>
        <NavBar/>
    </section>

    <section className="">
        <Banner />
    </section>

    <section className="grid gap-1 md:grid-cols-1 xl:grid-cols-1 lg:grid-cols-1">
        <Categorias />
    </section>

    <section>
        <div className="h2" style={{"margin-left": "2rem"}}>Cursos Destacados</div>
        <div className="curso-card-container">
        <div
        className="grid gap-4 md:grid-cols-4 xl:grid-cols-3 lg:grid-cols-6 "> 
            <Card />
            <Card />
            <Card />
        </div>
        </div>
    </section>
    
    </div>
}
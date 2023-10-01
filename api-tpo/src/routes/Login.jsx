import ModuloLogin from "../components/Login/Login";
import NavBar from "../components/Navbar/Navbar";



export default function Login(){
    return <div>
        <NavBar />
        <div  id="login-container" className="landing">
            <div className="h2">Ingresar</div>
            <section>
                <ModuloLogin />
            </section>
        </div>   
    </div>
}
import NavBar from "../components/Navbar/Navbar";
import FormContratar from "../components/FormContratar/Form";

export default function Contratar(){
    return <div>
    <NavBar />
    <div className="landing">
    <div className="h2">Contratar servicio</div>
    <FormContratar />
    </div>
    </div>

}
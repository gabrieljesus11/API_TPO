import ABMcomentarios from "../components/ABMcomentarios/ABMcomentarios";
import NavBar from "../components/Navbar/Navbar";
import fondo from "../img/fondoContacto.png";



export default function Comentarios(){

    const comments = [
        {
            usuario: "Camila",
            comentario: "Me gusto mucho el curso",
            categoria: "Marketing",
            estrellas: "4",
        }
      ]


    return <div>
    <NavBar />


    <div  id="login-container" className="landing" style={{backgroundImage:`url(${fondo})`,backgroundRepeat:"no-repeat",backgroundSize:"cover" }}>
            <div className="h2">Comentarios de los clientes</div>
            <section>

        {comments.map((comment, index) => (
        <ABMcomentarios
          key={index}
          usuario={comment.usuario}
          comentario={comment.comentario}
          categoria={comment.categoria}
          estrellas={comment.estrellas}
        />
      ))}
                
            </section>
        </div>   

    </div>

}
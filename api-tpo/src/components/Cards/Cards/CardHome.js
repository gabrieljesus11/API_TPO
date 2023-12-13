import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import PersonIcon from '@mui/icons-material/Person';
import Chip from '@mui/material/Chip';
import { Link } from "react-router-dom";
import './CardHome.css';


function CardHome(props) {

  const {titulo, fecha, duracion, responsable, precio, moneda, actualId} = props;
  const handleContratar = ()=>{
    localStorage.setItem('idCursoActivo', actualId)
  }

  return (
    <div className='cardHome'>
      <Card>

      <div className="cardContenedor">
        
        <div className="tituloCardHome">
          {titulo}
        </div>

        <div className='modulo1Home'>

        <div className="fechaCardHome">
          Empieza el {fecha}
        </div>

        <div className="chipCardHome">
          <Chip label={duracion} color="primary" />
        </div>

        </div>

        <div className='modulo2Home'>

        <div className="responsableCardHome">
          <PersonIcon />
          Responsable: {responsable}
        </div>

        <div className="precioCardHome">
        {moneda}{precio}
        </div>

        </div>


      <div className='botonesCardHome'>

      <div className="botonSecundario">
        <Link to={"/pdp"} className="linkSecundario">Ver más</Link>
      </div>

      <div className="botonPrimario">
        <Link to={"/contratar"} className="linkPrimario" underline="none" onClick={handleContratar}>Contratar</Link>
      </div>
        
      </div>
      </div>
      </Card>
    </div>




  );
}

export default CardHome;
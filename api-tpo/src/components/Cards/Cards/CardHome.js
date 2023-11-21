import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import PersonIcon from '@mui/icons-material/Person';
import Chip from '@mui/material/Chip';
import { Link } from "react-router-dom";
import './CardHome.css';


export default function MediaCard() {
  return (
    <div className='cardHome'>
      <Card>

      <div className="card">
        
        <div className="tituloCardHome">
          Curso de Marketing
        </div>

        <div className='modulo1Home'>

        <div className="fechaCardHome">
          Empieza el 09/10/2023
        </div>

        <div className="chipCardHome">
          <Chip label="Duración 3 meses" color="primary" />
        </div>

        </div>

        <div className='modulo2Home'>

        <div className="responsableCardHome">
          <PersonIcon />
          Responsable: Lucia Vazquez
        </div>

        <div className="precioCardHome">
          $30.000
        </div>

        </div>


      <div className='botonesCardHome'>

      <div className="botonSecundario">
        <Link to={"/pdp"} className="linkSecundario">Ver más</Link>
      </div>

      <div className="botonPrimario">
        <Link to={"/contratar"} className="linkPrimario" underline="none">Contratar</Link>
      </div>
        
      </div>
      </div>
      </Card>
    </div>




  );
}
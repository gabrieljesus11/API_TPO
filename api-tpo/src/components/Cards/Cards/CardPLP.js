import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import PersonIcon from '@mui/icons-material/Person';
import Chip from '@mui/material/Chip';
import { Link } from "react-router-dom";
import './CardPLP.css';


export default function MediaCard() {
  return (
    <div className='cardPLP'>
      <Card>

      <div className="card">
        
        <div className="tituloCard">
          Curso de Marketing
        </div>

        <div className='modulo1'>

        <div className="fechaCard">
          Empieza el 09/10/2023
        </div>

        <div className="chipCard">
          <Chip label="Duración 3 meses" color="primary" />
        </div>

        </div>

        <div className='modulo2'>

        <div className="responsableCard">
          <PersonIcon />
          Responsable: Lucia Vazquez
        </div>

        <div className="precioCard">
          $20.000
        </div>

        </div>


      <div className='botonesCard'>

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
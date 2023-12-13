import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import PersonIcon from '@mui/icons-material/Person';
import Chip from '@mui/material/Chip';
import { Link } from "react-router-dom";
import './CardPLP.css';


export default function CardPLP(props) {

  const {titulo, fecha, duracion, responsable, precio} = props;

  return (
    <div className='cardPLP'>
      <Card>

      <div className="cardContenedorPLP">
        
        <div className="tituloCard">
          {titulo}
        </div>

        <div className='modulo1'>

        <div className="fechaCard">
          Empieza el {fecha}
        </div>

        <div className="chipCard">
          <Chip label={duracion} color="primary" />
        </div>

        </div>

        <div className='modulo2'>

        <div className="responsableCard">
          <PersonIcon />
          Responsable: {responsable}
        </div>

        <div className="precioCard">
          $ {precio}
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
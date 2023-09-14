import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PersonIcon from '@mui/icons-material/Person';
import Chip from '@mui/material/Chip';
import { Link } from "react-router-dom";
import './CardHome.css';


export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 350, display: 'grid' }}>

    <div className="card">
    <div className="titulo">
        Curso de Marketing
      </div>

      <div className="fecha">
        Empieza el 09/10/2023
      </div>

      <div className="chip">
        <Chip label="Duración 3 meses" color="primary" />
      </div>

      <div className="responsable">
        <PersonIcon />
        Responsable: Lucia Vazquez
      </div>

      <div className="precio">
        $20.000
      </div>

    </div>

    
    <CardActions>

    <div className="botonSecundario">
      <Link to={"/pdp"} className="linkSecundario">Ver más</Link>
    </div>

    <div className="botonPrincipal">
      <Link to={"/contratar"} className="linkPrimario">Contratar</Link>
    </div>
      
    </CardActions>

    </Card>
  );
}
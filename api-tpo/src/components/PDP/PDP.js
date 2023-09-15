import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ListItemIcon from '@mui/material/ListItemIcon';
import ReviewsIcon from '@mui/icons-material/Reviews';
import { ListItemButton } from '@mui/material';
import EditNoteIcon from '@mui/icons-material/EditNote';
import PersonIcon from '@mui/icons-material/Person';
import Chip from '@mui/material/Chip';
import Rating from '@mui/material/Rating';
import { Link } from "react-router-dom";
import foto from "../../img/cursoMKT.png";
import './PDP.css';

export default function MediaCard() {
  return (
    
    <Card sx={{ maxWidth: 500 }}>
    <div className='cardPDP'>

      <div className='imagenPDP'>
        <img src={foto} alt="foto" />
      </div>

        <CardContent>
          <div className="titulo">
           Curso de Marketing
          </div>

         <div className="fecha">
            Empieza el 09/10/2023
          </div>
          <div className="chip">
        <Chip label="Duración 3 meses" color="primary" />
      </div>

      <div className="precio">
        $20.000
      </div>
      </CardContent>

      <CardActions>
      
        <div className="botonPrincipal">
          <Link to={"/contratar"} className="linkPrimario">Contratar</Link>
        </div>

      </CardActions>
 

      <CardContent>
      <ListItemButton>
      <ListItemIcon>
            <PersonIcon />
        </ListItemIcon>
        <Typography variant="body2" color="text.secondary">
          Responsable: Lucia Vazquez
        </Typography>
      </ListItemButton>
        <Typography variant="body2" color="text.secondary">
          Titulo Universitario Administración de Empresas
          Cursos de Negocios
          Posgrado Marketing
        </Typography>
      </CardContent>
      <CardContent>
      <ListItemButton>
      <ListItemIcon>
            <EditNoteIcon />
        </ListItemIcon>
      <Typography variant="body2" color="text.secondary">
          Descripción del curso
        </Typography>
      </ListItemButton>
        <Typography variant="body2" color="text.secondary">
        Lorem ipsum dolor sit amet consectetur. Lobortis eget augue sed et. Suspendisse tempus tristique consequat sed imperdiet aliquet condimentum etiam diam.
        </Typography>
      </CardContent>
      <CardContent>
      <ListItemButton>
      <ListItemIcon>
            <ReviewsIcon />
        </ListItemIcon>
      <Typography variant="body2" color="text.secondary">
          Comentarios
        </Typography>
      </ListItemButton>
      <Rating name="read-only" value={5} readOnly />
      <Typography variant="body2" color="text.secondary">
          Romina
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Excelente el curso
        </Typography>
      </CardContent>

      </div>
    </Card>
    
  );
}
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ListItemIcon from '@mui/material/ListItemIcon';
import ReviewsIcon from '@mui/icons-material/Reviews';
import { ListItem, ListItemButton, colors } from '@mui/material';
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

      <div className='modulo'>

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

      <div className="dias">
        Lunes y Miercoles 20hs.
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

      </div>
 

      <CardContent>

      <ListItemButton>
      <ListItemIcon>
          <div className='icono'>
          <PersonIcon />
          </div>
        </ListItemIcon>
        <div className='subtitulo'>
        Responsable: Lucia Vazquez
        </div>
      </ListItemButton>


        <Typography variant="body2" color="text.secondary">
        <ListItem>Titulo Universitario: Administración de Empresas</ListItem>
        <ListItem>Cursos de Negocios</ListItem>
        <ListItem>Posgrado Marketing</ListItem>
        </Typography>
      </CardContent>
      <CardContent>

      <ListItemButton>
      <ListItemIcon>
          <div className='icono'>
          <EditNoteIcon />
          </div>
        </ListItemIcon>
        <div className='subtitulo'>
        Descripción del curso
        </div>
      </ListItemButton>


        <Typography variant="body2" color="text.secondary">
        Lorem ipsum dolor sit amet consectetur. Lobortis eget augue sed et. Suspendisse tempus tristique consequat sed imperdiet aliquet condimentum etiam diam.
        </Typography>
      </CardContent>
      <CardContent>

      <ListItemButton>
      <ListItemIcon>
          <div className='icono'>
          <ReviewsIcon />
          </div>
        </ListItemIcon>
        <div className='subtitulo'>
          Comentarios
        </div>
      </ListItemButton>

      <div className='comentario'>
      <Rating name="read-only" value={5} readOnly />
      <div className='tituloComentario'>
        Romina
      </div>
        <div className='descripcionComentario'>
        Excelente el curso
        </div>
      </div>
      
        <div className='comentario'>
        <Rating name="read-only" value={5} readOnly />
        <div className='tituloComentario'>
        Karina
        </div>
        <div className='descripcionComentario'>
        Los temas vistos en el curso fueron interesantes y me aportaron mucho en mi carrera laboral.
        </div>
        </div>
        
      </CardContent>

      </div>
    </Card>
    
  );
}
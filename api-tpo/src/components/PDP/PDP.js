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
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function MediaCard() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [value, setValue] = React.useState(2);

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

        <div>


        <div className="botonPrincipal">
          <div className="linkPrimario" onClick={handleOpen}>
          Comentar
          </div>
        </div>
        

      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Agregar Comentario
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2}}>
            Completá tus datos y dejanos tu comentario sobre este curso.
          </Typography>

          <div className='contenedor'>
          
              <TextField
              className='formComentario'
              required
              id="outlined-required"
              label="Nombre"
              defaultValue=""
            />
              <TextField
              className='formComentario'
              required
              id="outlined-required"
              label="Mail"
              defaultValue=""
            />
            <TextField
            className='formComentario'
              id="outlined-required"
              label="Comentario"
              defaultValue=""
              multiline
            />
    
          </div>


        <div className="rating">
      <Typography component="legend">Puntuación del curso</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      </div>

      <div className="botones">

      <div className="botonSecundario">
          <div className="linkSecundario" onClick={handleClose}>
          Volver
          </div>
        </div>

      <div className="botonPrincipal">
          <div className="linkPrimario" onClick={handleClose}>
          Enviar
          </div>
        </div>

        </div>

        </Box>
      </Modal>
    </div>
      </CardContent>

      </div>
    </Card>
    
  );
}
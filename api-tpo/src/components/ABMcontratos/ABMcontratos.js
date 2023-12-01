import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { Link } from "react-router-dom";
import CardActions from '@mui/material/CardActions';
import Chip from '@mui/material/Chip';
import './ABMcontratos.css';

export default function AlignItemsList(props) {

  const {nombre, curso, telefono, mail, comentario} = props;

  return (
    
<div className='listadoCompleto'>
    <div className="chip">
    <Chip label="Solicitudes" color="primary" />
  </div>

  <div className='listadoSolicitudes'>
  <div className='cardSolicitud'>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="usuario" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
        
          primary={nombre}
          secondary={
            <React.Fragment>
            
            <div className='textoCurso'>
                {curso}
              </div>


            <div className='moduloInfo'>
              <div className='textoContacto'>
                {telefono}
              </div>
              <div className='textoContacto'>
                {mail}
              </div>
            <div className='textoContacto'>
                {comentario}
              </div>

              </div>




            <div className='botonesContratacion'>

              <div className="botonAceptada">
                  <Link to={"/"} className="linkAceptada">Aceptar solicitud</Link>
                </div>

                <div className="botonCancelada">
                  <Link to={"/"} className="linkCancelada">Cancelar solicitud</Link>
                </div>

                </div>


              
            </React.Fragment>
          }
        />
      </ListItem>
      </div>

      </div>


<br/>

      <div className="chip">
    <Chip label="Aceptadas" color="primary" />
  </div>

  <div className='listadoSolicitudes'>

  <div className='cardSolicitud'>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="usuario" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
        
          primary={nombre}
          secondary={
            <React.Fragment>
            
            <div className='textoCurso'>
                {curso}
              </div>
              <div className='moduloInfo'>
              <div className='textoContacto'>
                {telefono}
              </div>
              <div className='textoContacto'>
               {mail}
              </div>
            <div className='textoContacto'>
                {comentario}
              </div>

              </div>


            <div className='botonesContratacion'>

              <div className="botonAceptada">
                  <Link to={"/"} className="linkAceptada">Finalizar solicitud</Link>
                </div>

                <div className="botonCancelada">
                  <Link to={"/"} className="linkCancelada">Cancelar solicitud</Link>
                </div>

                </div>
              
            </React.Fragment>
          }
        />
      </ListItem>
      </div>

      </div>




      <div className="chip">
    <Chip label="Finalizadas" color="primary" />
  </div>

  <div className='listadoSolicitudes'>

  <div className='cardSolicitud'>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="usuario" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>

        <ListItemText
        
          primary={nombre}
          secondary={
            <React.Fragment>
            
            <div className='textoCurso'>
                {curso}
              </div>
              <div className='moduloInfo'>
              <div className='textoContacto'>
                {telefono}
              </div>
              <div className='textoContacto'>
                {mail}
              </div>
            <div className='textoContacto'>
                {comentario}
              </div>

              </div>

              <div className='finalizada'>
                Solicitud Finalizada
              </div>
              
            </React.Fragment>
          }
        />
      </ListItem>
      </div>

      </div>

      </div>



  );
}

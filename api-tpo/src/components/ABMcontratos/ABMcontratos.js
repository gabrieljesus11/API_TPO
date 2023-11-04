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

export default function AlignItemsList() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>

    <div className="chip">
    <Chip label="Solicitudes" color="primary" />
  </div>

  <div className='listadoSolicitudes'>
  <div className='cardSolicitud'>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Tomás Rodriguez" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
        
          primary="Tomás Rodriguez"
          secondary={
            <React.Fragment>
            
            <div className='textoCurso'>
                Programación web
              </div>


            <div className='moduloInfo'>
              <div className='textoContacto'>
                +54 11 43234543
              </div>
              <div className='textoContacto'>
                arodriguez@gmail.com
              </div>
            <div className='textoContacto'>
                “Me interesa comenzar este curso para aprender más sobre programación”
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

      
      <div className='cardSolicitud'>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Agustina Gutierrez" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
        
          primary="Agustina Gutierrez"
          secondary={
            <React.Fragment>
            
            <div className='textoCurso'>
                Negocios tecnológicos
              </div>
              
              <div className='moduloInfo'>
              <div className='textoContacto'>
                +54 11 43234543
              </div>
              <div className='textoContacto'>
                arodriguez@gmail.com
              </div>
            <div className='textoContacto'>
                “Me interesa comenzar este curso para aprender más sobre programación”
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



      <div className='cardSolicitud'>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Camila Fernandez" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
        
          primary="Camila Fernandez"
          secondary={
            <React.Fragment>
        

              <div className='textoCurso'>
                Marketing digital
              </div>

              <div className='moduloInfo'>
              <div className='textoContacto'>
                +54 11 43234543
              </div>
              <div className='textoContacto'>
                arodriguez@gmail.com
              </div>
            <div className='textoContacto'>
                “Me interesa comenzar este curso para aprender más sobre programación”
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
          <Avatar alt="Esteban Lopez" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
        
          primary="Esteban Lopez"
          secondary={
            <React.Fragment>
            
            <div className='textoCurso'>
                Diseño UX
              </div>
              <div className='moduloInfo'>
              <div className='textoContacto'>
                +54 11 43234543
              </div>
              <div className='textoContacto'>
                arodriguez@gmail.com
              </div>
            <div className='textoContacto'>
                “Me interesa comenzar este curso para aprender más sobre programación”
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
          <Avatar alt="Romina Rodriguez" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>

        <ListItemText
        
          primary="Romina Rodriguez"
          secondary={
            <React.Fragment>
            
            <div className='textoCurso'>
                Marketing digital
              </div>
              <div className='moduloInfo'>
              <div className='textoContacto'>
                +54 11 43234543
              </div>
              <div className='textoContacto'>
                arodriguez@gmail.com
              </div>
            <div className='textoContacto'>
                “Me interesa comenzar este curso para aprender más sobre programación”
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



    </List>






  );
}

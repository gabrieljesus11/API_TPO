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
import './ABMcomentarios.css';

export default function AlignItemsList() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>

    <div className="chip">
    <Chip label="Curso Marketing" color="primary" />
  </div>
  <div className='cardComentario'>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Tomás Rodriguez" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
        
          primary="Tomás Rodriguez"
          secondary={
            <React.Fragment>
            
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Muy buen curso, lo recomiendo 100%
              </Typography>
              <CardActions>

                <div className="botonPrincipal">
                  <Link to={"/"} className="linkPrimario">Aceptar</Link>
                </div>

                <div className="botonSecundario">
                  <Link to={"/"} className="linkSecundario">Bloquear</Link>
                </div>

            </CardActions>
              
            </React.Fragment>
          }
        />
      </ListItem>
      </div>

      <div className='cardComentario'>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Martin Gomez" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>

        <ListItemText
          primary="Martin Gomez"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Me gusto. Le agregaría más horas semanales.
              </Typography>
              <br/>
              <Rating name="read-only" value={4} readOnly />

              <CardActions>

              <div className="botonPrincipal">
                <Link to={"/"} className="linkPrimario">Aceptar</Link>
            </div>

            <div className="botonSecundario">
                <Link to={"/"} className="linkSecundario">Bloquear</Link>
            </div>

            </CardActions>
              
            </React.Fragment>
          }
        />
      </ListItem>
      </div>


      <div className='cardComentario'>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Sandra Geller" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Sandra Geller"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                <Rating name="read-only" value={3} readOnly />
              </Typography>

              <CardActions>

            <div className="botonPrincipal">
              <Link to={"/"} className="linkPrimario">Aceptar</Link>
            </div>

            <div className="botonSecundario">
              <Link to={"/"} className="linkSecundario">Bloquear</Link>
            </div>

</CardActions>
              
            </React.Fragment>
          }
        />
      </ListItem>
      </div>


<br/>

      <div className="chip">
    <Chip label="Curso Diseño" color="primary" />
  </div>

  <div className='cardComentario'>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Tomás Rodriguez" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
        
          primary="Tomás Rodriguez"
          secondary={
            <React.Fragment>
            
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Muy buen curso, lo recomiendo 100%
              </Typography>
              <CardActions>

                <div className="botonPrincipal">
                  <Link to={"/"} className="linkPrimario">Aceptar</Link>
                </div>

                <div className="botonSecundario">
                  <Link to={"/"} className="linkSecundario">Bloquear</Link>
                </div>

            </CardActions>
              
            </React.Fragment>
          }
        />
      </ListItem>

      </div>




    </List>






  );
}

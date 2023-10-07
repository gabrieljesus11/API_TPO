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
import { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import {UserContext} from '../UserProvider/UserProvider'
import {useContext } from 'react';

export default function AlignItemsList() {
  const UserProvider = useContext(UserContext)
  const [showCard, setShowCard] = useState(true)
  const [blockCard, setBlockCard] = useState(true)
  const [openSuccess, setOpenSuccess] = React.useState(false);
  const [openError, setOpenError] = React.useState(false);

  const foo = ()=>{
    
  }
  
  const handleAceptar = (event)=>{
    event.preventDefault();
    setShowCard(false)
    setOpenSuccess(true)
  }
  const handleBloquear = (event)=>{
    event.preventDefault();
    setBlockCard(false)
    setOpenError(true)
  }

  const handleCloseSuccess = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSuccess(false);
  };

  const handleCloseError = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenError(false);
  };
  return (
    <div>
      {foo}
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <div className="chip">
        <Chip label="Curso Marketing" color="primary" />
      </div>
      <ListItem alignItems="flex-start" sx={{display: showCard ? 'default' : 'none'}}>
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
          <Link onClick={handleAceptar} className="linkPrimario">Aceptar</Link>
        </div>

        <div className="botonSecundario">
          <Link onClick={handleBloquear} className="linkSecundario">Bloquear</Link>
        </div>

        </CardActions>

        </React.Fragment>
        }
        />
      </ListItem>
      <Divider variant="inset" component="li" />     
      <ListItem alignItems="flex-start" sx={{display: blockCard ? 'default' : 'none'}}>
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
                <Link onClick={handleBloquear} className="linkSecundario">Bloquear</Link>
            </div>

            </CardActions>
              
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
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
      <br/>
      <div className="chip">
      <Chip label="Curso Diseño" color="primary" />
      </div>
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
      </List>
      <Snackbar open={openSuccess} autoHideDuration={5000} onClose={handleCloseSuccess}>
      <Alert onClose={handleCloseSuccess} severity="success" sx={{ width: '100%' }}>
        Se ha aceptado el comentario 👍
      </Alert>
      </Snackbar>
      <Snackbar open={openError} autoHideDuration={5000} onClose={handleCloseError}>
      <Alert onClose={handleCloseError} severity="error" sx={{ width: '100%' }}>
        Se ha bloqueado el comentario 🚫
      </Alert>
      </Snackbar>
    </div>);
}

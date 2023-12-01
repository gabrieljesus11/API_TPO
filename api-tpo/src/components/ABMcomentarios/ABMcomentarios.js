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
import { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import {UserContext} from '../UserProvider/UserProvider'
import {useContext } from 'react';

export default function AlignItemsList(props) {
  const UserProvider = useContext(UserContext)
  const [showCard, setShowCard] = useState(true)
  const [blockCard, setBlockCard] = useState(true)
  const [openSuccess, setOpenSuccess] = React.useState(false);
  const [openError, setOpenError] = React.useState(false);

  const {usuario, comentario, categoria, estrellas} = props;

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
      <List sx={{ width: '100%', maxWidth: 360}}>
      <div className="chip">
        <Chip label={categoria} color="primary" />
      </div>
      <div className='cardComentario'>
      <ListItem alignItems="flex-start" sx={{display: showCard ? 'default' : 'none'}}>

        <ListItemAvatar>
          <Avatar alt="usuario" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText 
        primary={usuario}
        secondary={
        <React.Fragment>
        <Typography
        sx={{ display: 'inline' }}
        component="span"
        variant="body2"
        color="text.primary"
        >
        {comentario}

        <Rating name="read-only" value={estrellas} readOnly />
        </Typography>
        <CardActions>

        <div className='botonesContratacion'>


        <div className="bPrimarioComentarios">
          <Link onClick={handleAceptar} className="linkPrimarioComentarios">Aceptar</Link>
        </div>

        <div className="bSecundarioComentarios">
          <Link onClick={handleBloquear} className="linkSecundarioComentarios">Bloquear</Link>
        </div>

        </div>

        

        </CardActions>

        </React.Fragment>
        }
        />
      </ListItem>
      </div>

      
            
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

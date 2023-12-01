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
import {useContext, useEffect } from 'react';
import {TokenContext} from '../TokenProvider/TokenProvider';

export default function AlignItemsList(props) {
  const UserProvider = useContext(UserContext)
  const [showCard, setShowCard] = useState(true)
  const [blockCard, setBlockCard] = useState(true)
  const [openSuccess, setOpenSuccess] = React.useState(false);
  const [openError, setOpenError] = React.useState(false);
  const {usuario, comentario, categoria, estrellas} = props;

=======
export default function AlignItemsList() {
  const TokenProvider = useContext(TokenContext)
  const UserProvider = useContext(UserContext)
  const [showCard, setShowCard] = useState(true)
  const [blockCard, setBlockCard] = useState(true)
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openError, setOpenError] = useState(false);
>>>>>>> Stashed changes
  
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


  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
  }
    setOpenSuccess(false);
    setOpenError(false);
  };

  const [comments, setComments] = useState([]);
  const [commentsFetched, setCommentsFetched] = useState(false);

  async function getCommentsForCourses(url, body){
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers:{
        'Content-Type' : 'application/json',
        'Access-Control-Allow-Origin' : 'http://localhost:4000',
        'x-access-token' : TokenProvider.token
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(body)
    })
    return response;
  }

  useEffect(() => {
    const getCommentsResponse = async ()=>{
      const body = {"courses": UserProvider.user.courses,} 

      
      try {
        getCommentsForCourses('http://localhost:4000/api/comments/commentsForCourse', body)
        .then(response =>{
          if(response.ok){
            console.log("Respuesta Exitosa")
          }
          else{
            console.log(response)
          }
          return response.json()
        })
        .then(data =>{
          setComments(data.data.docs)
        })
      } catch (error) {
        console.log(error)
      }
    }

    if(!commentsFetched){
      getCommentsResponse()
    }
  
  }, [commentsFetched])

  return (
    <div>
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
      <Snackbar open={openSuccess} autoHideDuration={5000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
        Se ha aceptado el comentario 👍
      </Alert>
      </Snackbar>
      <Snackbar open={openError} autoHideDuration={5000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
        Se ha bloqueado el comentario 🚫
      </Alert>
      </Snackbar>
    </div>);
}

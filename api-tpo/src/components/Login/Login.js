import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import { Link, Navigate, RouterProvider, redirect, useNavigate } from "react-router-dom";
import './Login.css'
import { CardContent } from '@mui/material';
import { useState, useContext } from 'react';
import loginMock from './loginMock.json'
import { BrowserRouter as Router, Switch, 
  Route, redirectDocument, withRouter } from "react-router-dom";
import {UserContext} from '../UserProvider/UserProvider'
import {TokenContext} from '../TokenProvider/TokenProvider';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

export default function Login() {
async function login(url, data = {}){
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers:{
      'Content-Type' : 'application/json',
      'Access-Control-Allow-Origin' : 'http://localhost:4000'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data),
  })
  return response;
}

const [userName, setUserName] = useState('')
const [password, setPassword] = useState('')
const navigate = useNavigate()
const [openSuccess, setOpenSuccess] = useState(false);
const [openError, setOpenError] = useState(false);
const [errorMessage, setErrorMessage] = useState('');
const [iniciado, setIniciado] = useState(false);
const [isSubmitted, setIsSubmitted] = useState(false);
const UserProvider = useContext(UserContext)
const TokenProvider = useContext(TokenContext);


const handleClose = (event, reason) => {
  if (reason === 'clickaway') {
    return;
}
  setOpenSuccess(false);
  setOpenError(false);
};
const handleRedirection = async () =>{
  await new Promise( resolve => setTimeout(resolve, 1000));
  navigate('/')
}
const handleSubmit = (event) =>{
  event.preventDefault();
  const body = {
    "email": userName,
    "password": password
  } 
  
  const loginResponse = login('http://localhost:4000/api/users/login', body)
  .then(response => {
    if(response.ok){
      setIsSubmitted(true);
      setOpenSuccess(true)
    }
    else{
      console.log(response)
    }
    return response.json();
  })
  .then(data =>{
    console.log(data)
    if(data.loginUser != undefined){
      UserProvider.setUser(data.loginUser.user)
      TokenProvider.setToken(data.loginUser.token)
      handleRedirection()
    }
    else{
      setErrorMessage(data.message)
      setOpenError(true)
    }
  })
  .catch(error => {
    console.log("Error: ", error)
  }); 

}

const renderForm = (
  <div >
    <div id="login-container">
      <TextField
        required
        fullWidth
        id="outlined-required"
        label="Correo electrónico"
        defaultValue=""
        value={userName}
        onChange={(event) => {
          setUserName(event.target.value);
        }}
      />

      <TextField
        required
        fullWidth
        type='password'
        id="outlined-required"
        label="Contraseña"
        defaultValue=""
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
    </div>

    <div className='olvideContrasena'>
        <Link to={"/recuperoContrasena"} className='recupero'>Olvidé mi contraseña</Link>
      </div>


    <div className='registrarse'>
      <div className='registro'>
        ¿No eres miembro?
      </div>
      <div className='registro2'>
        <Link to={"/Registro"} className="registro2">Registrate acá</Link>
      </div>
    </div>

 
    <div className='botonesLogin'>
      <div className="bPrincipalLog">
        <Link className="linkPrimario" onClick={handleSubmit}>Ingresar</Link>
      </div>
      <div className="bSecundarioLog">
        <Link to={"/"} className="linkSecundario">Volver</Link>
      </div>
    </div>


    <Snackbar open={openSuccess} autoHideDuration={5000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Se inició sesión correctamente. Redireccionando a Home
        </Alert>
    </Snackbar>
    <Snackbar open={openError} autoHideDuration={5000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          Ha ocurrido un error: {errorMessage}
        </Alert>
    </Snackbar>
  </div>

);


return (
    <Box 
      className="login-container"
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '45ch' },
      }}
      noValidate
      autoComplete="off"
    >
      {renderForm}
    </Box>
);
}
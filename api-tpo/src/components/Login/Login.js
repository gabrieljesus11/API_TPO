import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import { Link, Navigate, useNavigate } from "react-router-dom";
import './Login.css'
import { CardContent } from '@mui/material';
import { useState, useContext } from 'react';
import loginMock from './loginMock.json'
import { BrowserRouter as Router, Switch, 
  Route, Redirect, withRouter } from "react-router-dom";
import {UserContext} from '../UserProvider/UserProvider'

export default function Login() {

const [userName, setUserName] = useState('')
const [password, setPassword] = useState('')
const navigate = useNavigate()
const [errorMessages, setErrorMessages] = useState({});
const [isSubmitted, setIsSubmitted] = useState(false);
const UserProvider = useContext(UserContext)
const handleSubmit = (event) =>{
  event.preventDefault();

  const userData = loginMock.database.find((user) => user.usuario === userName);
  
  if(userData){
    if(userData.password !== password){
      setErrorMessages({"name" : "password", message: loginMock.errors.password})
    }
    else{
      setIsSubmitted(true);
      UserProvider.setUser(userData)
      navigate('/')
    }
  }
  else{
    setErrorMessages({name: "username", message: loginMock.errors.username})
  }


}

// Generate JSX code for error message
const renderErrorMessage = (name) =>{
  if(name === errorMessages.name){ 
    return (<div className="error">{errorMessages.message}</div>);}
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
      {renderErrorMessage(errorMessages.name)}
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
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import { Link, Navigate } from "react-router-dom";
import './Login.css'
import { CardContent } from '@mui/material';
import { useState } from 'react';
import loginMock from './loginMock.json'
import { BrowserRouter as Router, Switch, 
  Route, Redirect,} from "react-router-dom";

export default function FormPropsTextFields() {

const [userName, setUserName] = useState('')
const [password, setPassword] = useState('')
const [errorMessages, setErrorMessages] = useState({});
const [isSubmitted, setIsSubmitted] = useState(false);

const handleSubmit = (event) =>{
  event.preventDefault();

  const userData = loginMock.database.find((user) => user.usuario === userName);
  
  if(userData){
    if(userData.password !== password){
      setErrorMessages({"name" : "password", message: loginMock.errors.password})
    }
    else{
      setIsSubmitted(true)
      window.location.href = './'
    }
  }
  else{
    setErrorMessages({name: "username", message: loginMock.errors.username})
  }


}

// Generate JSX code for error message
const renderErrorMessage = (name) =>{
  console.log(name, name === errorMessages.name)
  if(name === errorMessages.name){ 
    return (<div className="error">{errorMessages.message}</div>);}
}

const renderForm = (
  <div >
    <div id="login-container">
      <TextField
        required
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

      <div className='olvideContrasena'>
        Olvidé mi contraseña
      </div>
    </div>

    <CardActions>
    <div className='registro'>
      ¿No eres miembro?
    </div>
    <div className='registro2'>
      <Link to={"/Registro"} className="registro2">Registrate acá</Link>
    </div>
    </CardActions>

    <CardActions id='botones-login'>
    <div className="botonSecundario">
      <Link to={"/"} className="linkSecundario">Volver</Link>
    </div>
    <div className="botonPrincipal">
      <Link className="linkPrimario" onClick={handleSubmit}>Ingresar</Link>
    </div>
    </CardActions>
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
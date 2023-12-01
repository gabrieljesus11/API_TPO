import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link, useNavigate } from "react-router-dom";
import './Perfil.css';
import {UserContext} from '../UserProvider/UserProvider'
import { useContext, useState, useEffect } from 'react';
import {TokenContext} from '../TokenProvider/TokenProvider';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

export default function FormPropsTextFields() {

  const TokenProvider = useContext(TokenContext);
  const navigate = useNavigate()
  const UserProvider = useContext(UserContext)
  const [userName, setUserName] = useState('')
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [telefono, setTelefono] = useState('')
  const [titulo, setTitulo] = useState('')
  const [experiencia, setExperiencia] = useState('')
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openError, setOpenError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  async function editUser(url, data = {}){
    const response = await fetch(url, {
      method: 'PUT',
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
      body: JSON.stringify(data),
    })
    return response;
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
  }
    setOpenSuccess(false);
    setOpenError(false);
  };
  
  const handleSubmit = (event) =>{
    event.preventDefault();
    const body = {
      "nombre": nombre == '' ? UserProvider.user.nombre: nombre,
      "apellido": apellido == '' ? UserProvider.user.apellido: apellido,
      "usuario": userName == '' ? UserProvider.user.usuario: userName,
      "telefono": telefono == '' ? UserProvider.user.telefono: telefono,
      "titulo": titulo == '' ? UserProvider.user.titulo: titulo,
      "experiencia": experiencia == '' ? UserProvider.user.experiencia: experiencia
    } 
    
    const editUserResponse = editUser('http://localhost:4000/api/users/update', body)
    .then(response => {
      console.log(body)
      if(response.ok){
        setOpenSuccess(true)
      }
      else{
        console.log(response)
      }
      return response.json();
    })
    .then(data =>{
      console.log(data)
      if(data.status == 200){
        UserProvider.setUser(data.data)
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

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%' },
        'display':'flex',
        'justifyContent': 'center',
        'flexDirection': 'column',
        'alignItems':'center',
      }}
      noValidate
      autoComplete="off"
    >

    <div>
        <TextField
          required
          className='form'
          id="outlined-required"
          label="Nombre"
          defaultValue={UserProvider.user.nombre}
          onChange={(event) => {
            setNombre(event.target.value);
          }}
          InputProps={{
            readOnly: false,
          }}
        />

        <TextField
          required
          className='form'
          id="outlined-required"
          label="Apellido"
          defaultValue={UserProvider.user.apellido }
          onChange={(event) => {
            setApellido(event.target.value);
          }}
          InputProps={{
            readOnly: false,
          }}
        />

        <TextField
          required
          className='form'
          id="outlined-required"
          label="Correo electrónico"
          defaultValue={UserProvider.user.usuario}
          onChange={(event) => {
            setUserName(event.target.value);
          }}
          InputProps={{
            readOnly: false,
          }}
        />

        <TextField
          required
          className='form'
          id="outlined-required"
          label="Teléfono"
          defaultValue={UserProvider.user.telefono}
          onChange={(event) => {
            setTelefono(event.target.value);
          }}
          InputProps={{
            readOnly: false,
          }}
        />

        <TextField
          className='form'
          id="standard-helperText"
          label="Título"
          defaultValue={UserProvider.user.titulo}
          onChange={(event) => {
            setTitulo(event.target.value);
          }}
          InputProps={{
            readOnly: false,
          }}
        />

        <TextField
          className='form'
          id="outlined-multiline-flexible"
          label="Experiencia"
          defaultValue={UserProvider.user.experiencia}
          onChange={(event) => {
            setExperiencia(event.target.value);
          }}
          multiline
          maxRows={4}
          InputProps={{
            readOnly: false,
          }}
        />


    </div>

    <div className='botonesPerfil'>
      <div className="bPrincipalPerfil">
        <Link className="linkPrimario" onClick={handleSubmit}>Editar información</Link>
      </div>
      <div className="bSecundarioPerfil">
        <Link to={"/"} className="linkSecundario">Volver</Link>
      </div>
    </div>
    <Snackbar open={openSuccess} autoHideDuration={5000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Se inició sesión correctamente
        </Alert>
    </Snackbar>
    <Snackbar open={openError} autoHideDuration={5000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          Ha ocurrido un error: {errorMessage}
        </Alert>
    </Snackbar>
    </Box>
    
  );
}

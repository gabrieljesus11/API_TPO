import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import Divider from '@mui/material/Divider';
import { useState} from 'react';
import './Contacto.css';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

export default function FormPropsTextFields() {
  
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [telefono, setTelefono] = useState('')
  const [correo, setCorreo] = useState('')
  const [comentario, setComentario] = useState('')
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openError, setOpenError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
  }
    setOpenSuccess(false);
    setOpenError(false);
  };

  async function sendEmail(url, data = {}){
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

  const handleSubmit = (event) =>{
    event.preventDefault();
    const body = {
      "nombre": nombre,
      "apellido": apellido,
      "correo": correo,
      "telefono": telefono,
      "comentario": comentario
    }

    console.log(body)
    
    const emailResponse = sendEmail('http://localhost:4000/api/contact/createContact', body)
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
    .catch(error => {
      setErrorMessage(error)
      setOpenError(true);
      console.log("Error: ", error)
    }); 
  
  }

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '90%' },
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
        className='form'
          required
          id="outlined-required"
          label="Nombre"
          onChange={(event) => {
            setNombre(event.target.value);
          }}
        />

        <TextField
        className='form'
          required
          id="outlined-required"
          label="Apellido"
          onChange={(event) => {
            setApellido(event.target.value);
          }}
        />

        <TextField
        className='form'
          required
          id="outlined-required"
          label="Correo electrónico"
          onChange={(event) => {
            setCorreo(event.target.value);
          }}
        />

        <TextField
        className='form'
          required
          id="outlined-required"
          label="Teléfono"
          onChange={(event) => {
            setTelefono(event.target.value);
          }}
        />

        <TextField
        className='form'
          id="outlined-multiline-flexible"
          label="Comentarios"
          onChange={(event) => {
            setComentario(event.target.value);
          }}
          multiline
          maxRows={4}
        />
    </div>


    <div className='botonesContacto'>
      <div className="bPrincipalContacto">
        <Link className="linkPrimario" onClick={handleSubmit}>Enviar</Link>
      </div>
      <div className="bSecundarioContacto">
        <Link to={"/"} className="linkSecundario">Volver</Link>
      </div>
    </div>

    <Snackbar open={openSuccess} autoHideDuration={5000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Se editó el usuario correctamente
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

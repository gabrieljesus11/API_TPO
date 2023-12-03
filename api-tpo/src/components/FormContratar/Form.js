import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './Form.css';
import CardActions from '@mui/material/CardActions';
import { Link } from "react-router-dom";
import { useState, useContext } from 'react'
import {UserContext} from '../UserProvider/UserProvider'
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { useNavigate } from "react-router-dom";


export default function FormPropsTextFields() {
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [telefono, setTelefono] = useState('')
  const [correo, setCorreo] = useState('')
  const [horarioReferencia, setHorarioReferencia] = useState('')
  const [interes, setInteres] = useState('')
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openError, setOpenError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate()

  async function postContract(url, data = {}){
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

  const handleRedirection = async () =>{
    await new Promise( resolve => setTimeout(resolve, 2000));
    navigate('/')
  }

  const handleSubmit = (event) =>{
    event.preventDefault();
    const body = {
      "nombreEstudiante": nombre,
      "apellidoEstudiante": apellido,
      "correo": correo,
      "telefono": telefono,
      "horarioReferencia": horarioReferencia,
      "campoInteres": interes,
      "idCurso": localStorage.getItem("idCursoActivo").replace(/^"|"$/g, ''),
      "estaAceptado": false,
      "estaFinalizado": false,
      "estaCancelado": false
    } 
    
    const postContractResponse = postContract('http://localhost:4000/api/contracts/createContract', body)
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
      if(data.status == 201){
        console.log("Respuesta Exitosa!")
        handleRedirection();
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

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
  }
    setOpenSuccess(false);
    setOpenError(false);
  };


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
          required
          id="outlined"
          label="Horario de referencia"
          onChange={(event) => {
            setHorarioReferencia(event.target.value);
          }}
        />

        <TextField
        className='form'
          id="outlined-multiline-flexible"
          label="Interés por servicio"
          multiline
          maxRows={4}
          onChange={(event) => {
            setInteres(event.target.value);
          }}
        />
    </div>

    <div className="botonContratar">
      <Link className="linkContratar" onClick={handleSubmit}>Contratar</Link>
    </div>

    <Snackbar open={openSuccess} autoHideDuration={5000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Se envió el contrato del servicio correctamente. Redireccionando a Home
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

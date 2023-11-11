import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './Registro.css';

export default function FormPropsTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '60%' },
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
          defaultValue=""
        />

        <TextField
        className='form'
          required
          id="outlined-required"
          label="Apellido"
          defaultValue=""
        />

        <TextField
        className='form'
          required
          id="outlined-required"
          label="Correo electrónico"
          defaultValue=""
        />

        <TextField
        className='form'
          required
          id="outlined-required"
          label="Teléfono"
          defaultValue=""
        />

        <TextField
        className='form'
          required
          id="outlined"
          label="Titulo"
          defaultValue=""
        />

<TextField
        className='form'
          required
          id="outlined"
          label="Experiencia"
          defaultValue=""
        />

<TextField
        className='form'
          required
          id="outlined-required"
          label="Usuario"
          defaultValue=""
        />

<TextField
        className='form'
          required
          id="outlined-required"
          label="Contraseña"
          defaultValue=""
        />

<TextField
        className='form'
          required
          id="outlined-required"
          label="Repetir Contraseña"
          defaultValue=""
        />

    </div>

    <div className='botonesRegistro'>
      <div className="botonRegistro">
        <Link className="linkRegistro">Registrarme</Link>
      </div>
      <div className="botonRegistroVolver">
        <Link to={"/login"} className="linkVolver">Volver</Link>
      </div>
    </div>

    </Box>
  );
}

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
        '& .MuiTextField-root': { m: 1, width: '35ch' },
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
          
          id="outlined-required"
          label="Título"
          defaultValue=""
        />

<TextField
        className='form'
          
          id="outlined-required"
          label="Experiencia"
          defaultValue=""
          multiline
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
          label="Repetir contraseña"
          defaultValue=""
        />




    </div>

    <div className="bSecundario">
      <Link to={"/miPerfil"} className="blink">Registrarme</Link>
    </div>

    </Box>
  );
}

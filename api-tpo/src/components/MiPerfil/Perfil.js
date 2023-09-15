import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './Perfil.css';

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
          required
          className='form'
          id="outlined-required"
          label="Nombre"
          defaultValue="Agustina"
          InputProps={{
            readOnly: true,
          }}
        />

        <TextField
          required
          className='form'
          id="outlined-required"
          label="Apellido"
          defaultValue="Cafiero"
          InputProps={{
            readOnly: true,
          }}
        />

        <TextField
          required
          className='form'
          id="outlined-required"
          label="Correo electrónico"
          defaultValue="acafiero@gmail.com"
          InputProps={{
            readOnly: true,
          }}
        />

        <TextField
          required
          className='form'
          id="outlined-required"
          label="Teléfono"
          defaultValue="1145678909"
          InputProps={{
            readOnly: true,
          }}
        />

        <TextField
          className='form'
          id="standard-helperText"
          label="Título"
          defaultValue="Ing. en Sistemas"
          InputProps={{
            readOnly: true,
          }}
        />

        <TextField
          className='form'
          id="outlined-multiline-flexible"
          label="Experiencia"
          defaultValue="Base de Datos, Java, Cobol"
          multiline
          maxRows={4}
          InputProps={{
            readOnly: true,
          }}
        />


    </div>

    <div className="bSecundario">
      <Link to={"/"} className="blink">Editar información</Link>
    </div>

    </Box>
  );
}

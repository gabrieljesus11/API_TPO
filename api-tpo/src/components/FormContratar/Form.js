import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './Form.css';
import CardActions from '@mui/material/CardActions';
import { Link } from "react-router-dom";


export default function FormPropsTextFields() {
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
          label="Horario de referencia"
          defaultValue=""
        />

        <TextField
        className='form'
          id="outlined-multiline-flexible"
          label="Interés por servicio"
          multiline
          maxRows={4}
        />
    </div>

    <div className="botonContratar">
      <Link to={"/"} className="blink">Contratar</Link>
    </div>

    </Box>



  );
}

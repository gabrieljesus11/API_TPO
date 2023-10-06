import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";
import './RecuperoContraseña.css';

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

    <div className='moduloRecupero'>

    <div className='texto'>Ingresá tu mail para recuperar tu contraseña.</div>
        
        <TextField
        className='form'
          required
          id="outlined-required"
          label="Correo electrónico"
          defaultValue=""
        />



    </div>

<div className='botonesRecupero'>
    <div className="bPrincipalRec">
      <Link className="linkPrimario" onClick={""}>Enviar</Link>
    </div>
    <div className="bSecundarioRec">
      <Link to={"/login"} className="linkSecundario">Volver</Link>
    </div>

    </div>

    </div>

    

    </Box>
  );
}

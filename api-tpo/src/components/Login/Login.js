import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import { Link } from "react-router-dom";
import './Login.css'
import { CardContent } from '@mui/material';

export default function FormPropsTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '45ch' },
      }}
      noValidate
      autoComplete="off"
    >


    <div>
        <TextField
          required
          id="outlined-required"
          label="Correo electrónico"
          defaultValue=""
        />

        <TextField
          required
          id="outlined-required"
          label="Contraseña"
          defaultValue=""
        />

        
        <div className='olvideContrasena'>
          Olvidé mi contraseña
        </div>

<CardActions>
<div className='registro'>
          ¿No sos miembro?
        </div>
        <div className='registro2'>
          <Link to={"/Registro"} className="registro2">Registrate acá</Link>
        </div>
</CardActions>



        <CardActions>

    <div className="botonSecundario">
      <Link to={"/"} className="linkSecundario">Volver</Link>
    </div>

    <div className="botonPrincipal">
      <Link to={"/miPerfil"} className="linkPrimario">Ingresar</Link>
    </div>
      
    </CardActions>


    </div>

    </Box>
  );
}

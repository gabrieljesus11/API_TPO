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
        '& .MuiTextField-root': { m: 1, width: '35ch'},
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
          id="standard-helperText"
          label="Horario de referencia"
          defaultValue=""
        />

        <TextField
              className='form'
          id="outlined-multiline-flexible"
          label="Interés por el servicio"
          multiline
          maxRows={4}
        />


    </div>

    <CardActions>
      
    <div className="bSecundario">
      <Link to={"/pdp"} className="blink">Contratar</Link>
    </div>

    </CardActions>

    </Box>
  );
}

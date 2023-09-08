import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

export default function FormPropsTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >

    <Typography gutterBottom variant="h5" component="div">
          Contratar servicio
        </Typography>

    <div>
        <TextField
          required
          id="outlined-required"
          label="Nombre"
          defaultValue=""
        />

        <TextField
          required
          id="outlined-required"
          label="Apellido"
          defaultValue=""
        />

        <TextField
          required
          id="outlined-required"
          label="Correo electrónico"
          defaultValue=""
        />

        <TextField
          required
          id="outlined-required"
          label="Teléfono"
          defaultValue=""
        />

        <TextField
          id="standard-helperText"
          label="Horario de referencia"
          defaultValue=""
        />

        <TextField
          id="outlined-multiline-flexible"
          label="Interés por el servicio"
          multiline
          maxRows={4}
        />


    </div>

    </Box>
  );
}

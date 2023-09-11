import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

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
          Contacto
        </Typography>

        <div>
        <TextField
          required
          id="outlined-required"
          label="Nombre *"
          defaultValue=""
        />

        <TextField
          required
          id="outlined-required"
          label="Apellido *"
          defaultValue=""
        />

        <TextField
          required
          id="outlined-required"
          label="Correo electrónico *"
          defaultValue=""
        />

        <TextField
          required
          id="outlined-required"
          label="Teléfono *"
          defaultValue=""
        />

        <TextField
          id="outlined-multiline-flexible"
          label="Comentarios"
          multiline
          maxRows={4}
        />


    </div>

    <Button variant="contained" color="secondary">Enviar solicitud</Button>

    </Box>
  );
}

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
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
          Ingresar
        </Typography>


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

        <Typography variant="caption" display="block" gutterBottom>
          Olvidé mi contraseña
        </Typography>

        <Typography variant="body2" color="text.secondary">
          ¿No sos miembro? Registrate acá
        </Typography>
        
        <Button variant="contained" color="primary">Ingresar</Button>

    </div>

    </Box>
  );
}

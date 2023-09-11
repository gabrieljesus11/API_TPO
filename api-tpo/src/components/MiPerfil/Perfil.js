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
          Mi Perfil
        </Typography>

    <div>
        <TextField
          required
          id="outlined-required"
          label="Nombre"
          defaultValue="Agustina"
          InputProps={{
            readOnly: true,
          }}
        />

        <TextField
          required
          id="outlined-required"
          label="Apellido"
          defaultValue="Cafiero"
          InputProps={{
            readOnly: true,
          }}
        />

        <TextField
          required
          id="outlined-required"
          label="Correo electrónico"
          defaultValue="acafiero@gmail.com"
          InputProps={{
            readOnly: true,
          }}
        />

        <TextField
          required
          id="outlined-required"
          label="Teléfono"
          defaultValue="1145678909"
          InputProps={{
            readOnly: true,
          }}
        />

        <TextField
          id="standard-helperText"
          label="Título"
          defaultValue="Ing. en Sistemas"
          InputProps={{
            readOnly: true,
          }}
        />

        <TextField
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

    <Button variant="contained" color="secondary">Editar información</Button>

    </Box>
  );
}

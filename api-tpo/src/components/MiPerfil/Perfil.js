import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './Perfil.css';
import {UserContext} from '../UserProvider/UserProvider'
import { useContext } from 'react';

export default function FormPropsTextFields() {
  const userProvider = useContext(UserContext);
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
          defaultValue={userProvider.user.nombre}
          InputProps={{
            readOnly: true,
          }}
        />

        <TextField
          required
          className='form'
          id="outlined-required"
          label="Apellido"
          defaultValue={userProvider.user.apellido}
          InputProps={{
            readOnly: true,
          }}
        />

        <TextField
          required
          className='form'
          id="outlined-required"
          label="Correo electrónico"
          defaultValue={userProvider.user.usuario}
          InputProps={{
            readOnly: true,
          }}
        />

        <TextField
          required
          className='form'
          id="outlined-required"
          label="Teléfono"
          defaultValue={userProvider.user.telefono}
          InputProps={{
            readOnly: true,
          }}
        />

        <TextField
          className='form'
          id="standard-helperText"
          label="Título"
          defaultValue={userProvider.user.titulo}
          InputProps={{
            readOnly: true,
          }}
        />

        <TextField
          className='form'
          id="outlined-multiline-flexible"
          label="Experiencia"
          defaultValue={userProvider.user.experiencia}
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

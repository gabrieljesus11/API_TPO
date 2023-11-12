import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";
import './Perfil.css';
import {UserContext} from '../UserProvider/UserProvider'
import { useContext } from 'react';

export default function FormPropsTextFields() {
  const userProvider = useContext(UserContext);
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%' },
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

    <div className='botonesPerfil'>
      <div className="bPrincipalPerfil">
        <Link className="linkPrimario">Editar información</Link>
      </div>
      <div className="bSecundarioPerfil">
        <Link to={"/"} className="linkSecundario">Volver</Link>
      </div>
    </div>

    </Box>
  );
}

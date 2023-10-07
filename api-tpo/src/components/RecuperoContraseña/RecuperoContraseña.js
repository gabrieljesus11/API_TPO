import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";
import './RecuperoContraseña.css';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import loginMock from '../Login/loginMock.json'

export default function FormPropsTextFields() {
  const [openSuccess, setOpenSuccess] = React.useState(false);
  const [openError, setOpenError] = React.useState(false);
  const [email, setEmail] = React.useState(null);
  
  const handleRecupero = ()=>{
    loginMock.database.find((user) => user.usuario === email) != undefined ? 
    setOpenSuccess(true) : setOpenError(true);
  }

  const handleCloseSuccess = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSuccess(false);
  };

  const handleCloseError = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenError(false);
  };



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
                value = {email}
                onChange = {(event) => {
                  setEmail(event.target.value);
                }}
              />
        </div>

        <div className='botonesRecupero'>
          <div className="bPrincipalRec">
            <Link className="linkPrimario" onClick={handleRecupero}>Enviar</Link>
          </div>
          <div className="bSecundarioRec">
            <Link to={"/login"} className="linkSecundario">Volver</Link>
          </div>
        </div>
      </div>
      <Snackbar open={openSuccess} autoHideDuration={5000} onClose={handleCloseSuccess}>
      <Alert onClose={handleCloseSuccess} severity="success" sx={{ width: '100%' }}>
        Se ha enviado el correo de recuperación exitosamente 😄
      </Alert>
      </Snackbar>
      <Snackbar open={openError} autoHideDuration={5000} onClose={handleCloseError}>
      <Alert onClose={handleCloseError} severity="error" sx={{ width: '100%' }}>
        El correo electrónico ingresado no está en nuestros registros 😓
      </Alert>
      </Snackbar>
    </Box>
  );
}

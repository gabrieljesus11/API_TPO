import * as React from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from "react-router-dom";
import { Button } from '@mui/material';

export default function CheckboxesGroup() {
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { mkt, diseno, it, ind, gru, uni, sem, men} = state;
  

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend">Categorías</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={mkt} onChange={handleChange} name="gilad" />
            }
            label="Marketing"
          />
          <FormControlLabel
            control={
              <Checkbox checked={diseno} onChange={handleChange} name="jason" />
            }
            label="Diseño"
          />
          <FormControlLabel
            control={
              <Checkbox checked={it} onChange={handleChange} name="antoine" />
            }
            label="IT"
          />
        </FormGroup>
      </FormControl>

      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend">Tipo de Clase</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={ind} onChange={handleChange} name="gilad" />
            }
            label="Individual"
          />
          <FormControlLabel
            control={
              <Checkbox checked={gru} onChange={handleChange} name="jason" />
            }
            label="Grupál"
          />
        </FormGroup>
      </FormControl>

      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend">Frecuencia</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={uni} onChange={handleChange} name="gilad" />
            }
            label="Única"
          />
          <FormControlLabel
            control={
              <Checkbox checked={sem} onChange={handleChange} name="jason" />
            }
            label="Semanal"
          />
          <FormControlLabel
            control={
              <Checkbox checked={men} onChange={handleChange} name="antoine" />
            }
            label="Mensual"
          />
        </FormGroup>
      </FormControl>
      
      <Button>
      <div className="botonPrincipal">
          <Link to={"/cursosDisponibles"} className="linkPrimario">Filtrar</Link>
        </div>
      </Button>

    </Box>
  );
}


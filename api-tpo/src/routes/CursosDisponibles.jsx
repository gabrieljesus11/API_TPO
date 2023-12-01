import NavBar from "../components/Navbar/Navbar";
import * as React from 'react';
import CardPLP from "../components/Cards/Cards/CardPLP";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import FilterListIcon from '@mui/icons-material/FilterList';
import { Link } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import fondo from "../img/fondoContacto.png";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function CursosDisponibles(){

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

    return <div>
    <NavBar />
    <div className="PLP" style={{backgroundImage:`url(${fondo})`,backgroundRepeat:"no-repeat",backgroundSize:"cover" }} >
   

    <div className="PLPhead">
      <div className="h2">Lista completa de cursos</div>
        <Button startIcon={<FilterListIcon />}>

          <div className="botonFiltro">
          <div className="linkFiltro" onClick={handleOpen}>
          Filtrar
          </div>
          </div>
        <Button/>
        

      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
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
            label="Grupal"
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


      <div className="botonFiltrar">
          <div className="linkFiltrar" onClick={handleClose}>
          Filtrar
          </div>
        </div>
        </Box>

      </Modal>



        </Button>
        </div>

    <section className="cardsPLP"> 
    <CardPLP titulo="Curso de Marketing" fecha="02/10/2023" duracion="3 meses" responsable="Lucía Vazquez" precio= {20000} />
    </section>

    </div>
    </div>
}
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { Link } from "react-router-dom";


export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Curso de Marketing
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Empieza el 09/10/2023
        </Typography>
        <Chip label="Duración 3 meses" color="primary" />
        <Typography variant="body2" color="text.secondary">
          Responsable: Lucia Vazquez
        </Typography>
        <Typography variant="body2" color="text.secondary">
          $20.000
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined">
          <Link to={"/pdp"}>Ver más</Link>
        </Button>
        <Button variant="contained" color="secondary">
        <Link to={"/contratar"}>Contratar</Link>
        </Button>
      </CardActions>
    </Card>
  );
}
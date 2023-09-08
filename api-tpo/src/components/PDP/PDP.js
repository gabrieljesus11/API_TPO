import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ListItemIcon from '@mui/material/ListItemIcon';
import ReviewsIcon from '@mui/icons-material/Reviews';
import { ListItemButton } from '@mui/material';
import EditNoteIcon from '@mui/icons-material/EditNote';
import PersonIcon from '@mui/icons-material/Person';
import Chip from '@mui/material/Chip';

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 500 }}>
    <CardMedia
        sx={{ height: 300 }}
        image=".../images/cursoDiseno.png"
        title="mkt"
      />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
          Curso de Marketing
        </Typography>
        </CardContent>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Empieza el 09/10/2023
        </Typography>
        <Chip label="Duración 3 meses" color="primary" />
        <Typography variant="body2" color="text.secondary">
          $20.000
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="secondary">Contratar</Button>
      </CardActions>
      <CardContent>
      <ListItemButton>
      <ListItemIcon>
            <PersonIcon />
        </ListItemIcon>
        <Typography variant="body2" color="text.secondary">
          Responsable: Lucia Vazquez
        </Typography>
      </ListItemButton>
        <Typography variant="body2" color="text.secondary">
          Titulo Universitario Administración de Empresas
          Cursos de Negocios
          Posgrado Marketing
        </Typography>
      </CardContent>
      <CardContent>
      <ListItemButton>
      <ListItemIcon>
            <EditNoteIcon />
        </ListItemIcon>
      <Typography variant="body2" color="text.secondary">
          Descripción del curso
        </Typography>
      </ListItemButton>
        <Typography variant="body2" color="text.secondary">
        Lorem ipsum dolor sit amet consectetur. Lobortis eget augue sed et. Suspendisse tempus tristique consequat sed imperdiet aliquet condimentum etiam diam.
        </Typography>
      </CardContent>
      <CardContent>
      <ListItemButton>
      <ListItemIcon>
            <ReviewsIcon />
        </ListItemIcon>
      <Typography variant="body2" color="text.secondary">
          Comentarios
        </Typography>
      </ListItemButton>
      <Typography variant="body2" color="text.secondary">
          Romina
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Excelente el curso
        </Typography>
      </CardContent>
    </Card>
  );
}
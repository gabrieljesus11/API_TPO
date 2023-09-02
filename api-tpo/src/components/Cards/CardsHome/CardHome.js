import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import diseno from '../../images/cursoDiseno.jpg';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
//import props from './nombresCurso'

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={diseno}
          alt="curso Diseno"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Curso de Diseno
          </Typography>
          <Stack direction="row" spacing={1}>
            <Chip label="primary" color="primary" />
           </Stack>
          <Typography variant="body2" color="text.secondary">
            50
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
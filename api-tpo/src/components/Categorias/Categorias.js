import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import BarChartIcon from '@mui/icons-material/BarChart';
import ComputerIcon from '@mui/icons-material/Computer';
import BrushIcon from '@mui/icons-material/Brush';
import Divider from '@mui/material/Divider';
import './Categorias.css';
import { deepPurple } from '@mui/material/colors';

export default function InsetDividers() {
  return (
    <List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
      }}
    >
      <ListItem>
        <ListItemAvatar>
          <Avatar className='avatar'>
            <BarChartIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Cursos Negocios" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar className='avatar'>
            <ComputerIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Cursos IT" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar className='avatar'>
            <BrushIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Cursos Diseño" />
      </ListItem>
    </List>
  );
}

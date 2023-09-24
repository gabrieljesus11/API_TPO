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


export default function InsetDividers() {
  return (

    <section className="md-mb-4">
    <div className="h2">Categorías</div>
        
    <List
      sx={{
        flexGrow: 1 ,
        display: "flex",
        alignContent: "center" ,
        position: "static" ,
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
          <Avatar>
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
    </section>

    
  );
}

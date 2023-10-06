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

    <section style={{margin: '2rem'}}>
    <div className="h2">Categorías</div>
        
    <List
      sx={{
        display: "flex",
        justifyContent: "space-around",
        alignContent: "center",
        flexWrap: 'wrap',
        flexDirection: 'row',
      }}
      
    >
      <ListItem className="categoria" sx={{width: '20%'}}>
        <ListItemAvatar>
          <Avatar sx={{backgroundColor: '#7F6BB6'}}>
            <BarChartIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Cursos Negocios" />
      </ListItem>
      <ListItem className="categoria" sx={{width: '20%'}}> 
        <ListItemAvatar>
          <Avatar >
            <ComputerIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Cursos IT" />
      </ListItem>
      <ListItem className='categoria' sx={{width: '20%'}}>
        <ListItemAvatar>
          <Avatar sx={{backgroundColor: '#7F6BB6'}}>
            <BrushIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Cursos Diseño" />
      </ListItem>
    </List>
    </section>

    
  );
}

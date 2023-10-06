import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ClassIcon from '@mui/icons-material/Class';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import CallIcon from '@mui/icons-material/Call';
import { Link, useNavigate } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import RateReviewIcon from '@mui/icons-material/RateReview';
import './SideMenu.css';
import {UserContext} from '../UserProvider/UserProvider'
import {useContext } from 'react';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


export default function TemporaryDrawer() {
  const navigate = useNavigate();
  const UserProvider = useContext(UserContext)
  const [state, setState] = React.useState({
    left: false,
});
  const [searchInput, setSearchInput] = React.useState('')
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      navigate('./cursosDisponibles')
    }
  }

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <section>
    <div className='search-bar'>
      <Search 
      style={{display: "flex", width: '90%', margin: 'auto 0', backgroundColor: '#eee'}} 
     >
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        onChange={(event) => {
          setSearchInput(event.target.value);
        }}
        onKeyDown={handleKeyDown}
        placeholder="Buscar"
        inputProps={{ 'aria-label': 'buscar' }}
      />
      </Search>
    </div>
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >

      <List>

      <ListItem disablePadding>
            <ListItemButton to={"../"}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              Inicio
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{display: UserProvider.user != null ? 'contents' : 'none'}}>
            <ListItemButton>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <Link to={"/miPerfil"}>Mi perfil</Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{display: UserProvider.user != null ? 'contents' : 'none'}}>
            <ListItemButton to={"/abmcomentarios"}>
              <ListItemIcon>
                <RateReviewIcon />
              </ListItemIcon>
              Comentarios
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton to={"/cursosDisponibles"}>
              <ListItemIcon>
                <ClassIcon />
              </ListItemIcon>
              Cursos Disponibles
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton to={"/contacto"}>
              <ListItemIcon>
                <CallIcon />
              </ListItemIcon>
              Contacto
            </ListItemButton>
          </ListItem>
        </List>
    </Box>
  </section>
  );


  return (
    <div>
      <React.Fragment key={"left"}>
        <Button onClick={toggleDrawer("left", true)}>{
            <MenuIcon 
                size="large"
                edge="start"
                color="white"
                aria-label="open drawer"/>
        }
        </Button>
        <Drawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          {list("left")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
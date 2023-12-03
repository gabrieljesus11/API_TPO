import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import logo from '../../img/logo.png';
import TemporaryDrawer from '../SideMenu/SideMenu';
import Avatar from '@mui/material/Avatar';
import './Navbar.css'
import PersonIcon from '@mui/icons-material/Person';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IconButton, Typography } from '@mui/material';
import { Link } from "react-router-dom";
import {UserContext} from '../UserProvider/UserProvider'
import { useState, useContext } from 'react';
import imgDocente from '../../img/perfilDocente.png';

export default function NavBar(){
  const userProvider = useContext(UserContext);
  const [userIsLogged, setUserIsLogged] = useState(false)

  const handleLogOut = ()=>{
    userProvider.setUser(null);
    setUserIsLogged(false)
    console.log(userProvider.user)
    console.log(userIsLogged)
  }

  const settings = userProvider.user != null ? 
  [<Link to={"/miPerfil"} className='miPerfil'>Mi Perfil</Link>, 
  <Link to={"/"} className='cerrarSesion' onClick={handleLogOut}>Cerrar Sesión</Link>]:
  [<Link to={"/login"} className='ingresar'>Ingresar</Link>];
  
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
    console.log(userProvider.user)
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleAvatarIcon = () =>{
    return userProvider.user.imageSource != null ? userProvider.user.imageSource : ''
  }

  return (
      <Box sx={{ flexGrow: 1}}>
        <AppBar position="static" color="grey" display="flex" alignContent='center'>
          <Toolbar style = {{justifyContent: 'space-between'}}>
            <div className='menu-and-logo' >
              <TemporaryDrawer className='top-element'/>
              <a href='./'><img  src={logo} alt= 'Education Hub Logo' className='top-element'/></a>
            </div>
          
            
            <div className='login-register-button'>
              <IconButton onClick={handleOpenUserMenu}sx={{display: userIsLogged ? 'none' : 'default'}}>
              <Avatar alt='Usuario'  > 
                <PersonIcon/>
              </Avatar>
              </IconButton>              
              <IconButton onClick={handleOpenUserMenu} sx={{display: userIsLogged ? 'default' : 'none'}}>
              <Avatar alt='Usuario' imgProps={{}} > 
                <img src={handleAvatarIcon} alt=""/>
              </Avatar>

              <Avatar alt="perfil" src='../../img/perfilDocente.png' />
              
              </IconButton>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                  ))}
                  </Menu>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
  );
}
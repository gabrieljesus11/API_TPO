import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
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

const settings = [<Link to={"/login"}>Ingresar</Link>];





export default function SearchAppBar(){

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" color="grey" display="flex" alignContent='center'>
        <Toolbar style = {{justifyContent: 'space-between'}}>
          <div className='menu-and-logo' >
            <TemporaryDrawer className='top-element'/>
            <img src={logo} alt= 'Education Hub Logo' className='top-element'/>
          </div>
          
          <div className='login-register-button'>
            <IconButton onClick={handleOpenUserMenu}>
              <Avatar alt='Mr Nobody' > 
                <PersonIcon/> 
              </Avatar>
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
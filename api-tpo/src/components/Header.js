import React from 'react'
import './Header.css'
import PersonIcon from '@mui/icons-material/Person'
import IconButton from '@mui/material/IconButton'
import ForumIcon from '@mui/icons-material/Forum'
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
    return (
    <div className="header">
    <IconButton> 
    <MenuIcon fontSize="large" className="header__icon" />
    </IconButton>
    <img className="header__logo" src="logo192.png" alt="header" />
    
    <div className='login-container'>
    <IconButton>
    <PersonIcon fontSize="large" className="header__icon" />
    </IconButton>
    <p>Iniciar Sesion</p>
    </div>
    </div>
    )
    }
    export default Header
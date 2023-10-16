import * as React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Avatar from '@mui/material/Avatar';
import './Footer.css';


export default function Footer() {
    return (

    <div className='listadoRedes'>

        <div className='icono'>
        <Avatar alt='instagram'  > 
            <InstagramIcon/>
        </Avatar>
        </div>

        <div className='icono'>
        <Avatar alt='facebook'  > 
            <FacebookIcon/>
        </Avatar>
        </div>

        <div className='icono'>
        <Avatar alt='youtube'  > 
            <YouTubeIcon/>
        </Avatar>
        </div>

        <div className='icono'>
        <Avatar alt='linkedin'  > 
            <LinkedInIcon/>
        </Avatar>
        </div>

    </div>

    )
}
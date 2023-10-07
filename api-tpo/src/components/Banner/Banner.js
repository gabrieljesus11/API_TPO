import React from 'react'
import imagen1 from "../../img/imagenGrupo.png";
import imagen2 from "../../img/cursoMKT.jpg";
import imagen3 from "../../img/grupoReunion.jpg";
import './Banner.css';
import { Carousel } from "@material-tailwind/react";

function Banner() {
  return (
    <Carousel className='rounded-xl'>
      <div class= "bannerImageContainer">
        <img src={imagen1} alt="banner" class=  "bannerImage"/>
      </div>
      <div class= "bannerImageContainer">
        <img src={imagen2} alt="banner" class= "bannerImage"/>
      </div>
      <div class= "bannerImageContainer">
        <img src={imagen3} alt="banner" class= "bannerImage"/>
      </div>
    </Carousel>
  )
}

export default Banner
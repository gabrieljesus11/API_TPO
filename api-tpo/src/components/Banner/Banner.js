import React from 'react'
import imagen from "../../img/bannerCursoMobile.png";
import './Banner.css';
import { Carousel } from "@material-tailwind/react";

function Banner() {
  return (
    <Carousel>
    <div className="banner">
        <img src={imagen} alt="banner"
         />

    </div>
    </Carousel>
  )
}

export default Banner
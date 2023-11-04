import React from 'react'
import banner from "../../img/bannerHome.png";
import './Banner.css';
import { Carousel } from "@material-tailwind/react";

function Banner() {
  return (
    <div className='bannerHome'>
      <img class= "sm:h-full sm:w-full lg:w-full" src={banner} alt="banner"/>
    </div>

  )
}

export default Banner
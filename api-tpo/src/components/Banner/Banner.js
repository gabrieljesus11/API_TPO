import React from 'react'
import imagen from "../../img/bannerCursoMobile.png";
import banner from './Banner.css';

function Banner() {
  return (
    <div className={banner.Banner}>
        <img src={imagen} alt="banner" />
    </div>
  )
}

export default Banner
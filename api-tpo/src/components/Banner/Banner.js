import React from 'react'
import imagen from "../../img/bannerCursoMobile.png";
import './Banner.css';

function Banner() {
  return (
    <div className="banner">
        <img src={imagen} alt="banner" />
    </div>
  )
}

export default Banner
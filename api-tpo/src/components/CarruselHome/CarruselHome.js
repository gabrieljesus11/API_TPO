import React from 'react'
import './CarruselHome.css';
import { Carousel } from "@material-tailwind/react";
import Card from "../Cards/Cards/CardHome";


function Carrusel() {
  return (

    <div className='carruselHome'>
        <div className='tituloCarruselHome'>
            Cursos más populares
        </div>

        <div className='cards'>
            <Card />
            <Card />
            <Card />
            <Card />
        </div>

    </div>

  )
}

export default Carrusel
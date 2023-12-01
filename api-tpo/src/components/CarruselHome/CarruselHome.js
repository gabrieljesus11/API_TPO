import React from 'react'
import './CarruselHome.css';
import CardHome from "../Cards/Cards/CardHome"
import Card from '@mui/material/Card';

function Carrusel() {
  return (

    <div className='carruselHome'>
        <div className='tituloCarruselHome'>
            Cursos más populares
        </div>

        <div className='cards'>

        console.log(cardsData)
    
      {CardHome.map((card, index) => (
        <Card
          key={index}
          titulo={card.titulo}
          fecha={card.fecha}
          duracion={card.duracion}
          responsable={card.responsable}
          precio={card.precio}
        />
      ))}
    </div>

    </div>

  )
}

export default Carrusel
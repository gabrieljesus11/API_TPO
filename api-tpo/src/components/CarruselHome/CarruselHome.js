import React from 'react'
import './CarruselHome.css';
import CardHome from "../Cards/Cards/CardHome"
import Card from '@mui/material/Card';

function Carrusel() {

  const courses = [
    {
      titulo: "Curso de Marketing",
      fecha: "02/10/2023",
      duracion: "3 meses",
      responsable: "Lucía Vazquez",
      precio: 20000
    }
  ]

  return (

    <div className='carruselHome'>
        <div className='tituloCarruselHome'>
            Cursos más populares
        </div>

        <div className='cards'>

    
      {courses.map((card, index) => (
        <CardHome
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
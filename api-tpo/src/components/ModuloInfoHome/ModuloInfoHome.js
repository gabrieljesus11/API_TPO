import * as React from 'react';
import './ModuloInfoHome.css';
import infoImagen from "../../img/info.png";



export default function InsetDividers() {
  return (

    <div className='moduloInfo'>
        <div className='moduloTextoInfo'>
            <div className='tituloInfo'>
            Calidad academica con Education HUB
            </div>
            <div className='descripcionInfo'>
            Encuentra miles de cursos gratis sobre diferentes temáticas diseñados por expertos en pedagogía, a partir de contenidos académicos con licencia abierta provenientes de YouTube e instituciones prestigiosas como Harvard University o MIT.
                </div>
        </div>
        <img src={infoImagen} alt="foto" class= "foto"/>
    </div>

    
  );
}
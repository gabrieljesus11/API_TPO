import * as React from 'react';
import './ModuloPasos.css';
import paso1 from "../../img/paso1.png";
import paso2 from "../../img/paso2.png";
import paso3 from "../../img/paso3.png";
import paso4 from "../../img/paso4.png";

import i1 from "../../img/1.png";
import i2 from "../../img/2.png";
import i3 from "../../img/3.png";
import i4 from "../../img/4.png";



export default function InsetDividers() {
  return (
<div className='pasos'>
    <div className='tituloPasos'>
            Cómo funciona
        </div>
<div className='listadoPasos' align="center">

  <div className='paso' align="center">
  <img src={i1} alt="foto" class= "foto"/>
  <div className='moduloPaso'>
  <img src={paso1} alt="foto" class= "foto"/>
  <div className='textoPasos'>
  <div className='tituloPaso'>
  Inscríbete al curso de tu interés
        </div>
        <div className='descripcionPaso'>
        Todos los cursos son de acceso gratis para que puedas aprender desde cualquier lugar del mundo utilizando un dispositivo conectado a internet.
        </div>
  </div>
  </div>
  </div>


  <div className='paso' align="center">
  <img src={i2} alt="foto" class= "foto"/>
  <div className='moduloPaso'>
  <img src={paso2} alt="foto" class= "foto"/>
  <div className='textoPasos'>
  <div className='tituloPaso'>
  Aprende de forma práctica
        </div>
        <div className='descripcionPaso'>
        Los cursos incluyen lecturas, videos, proyectos y actividades de la vida real que te ayudarán a colocar en práctica tu aprendizaje.
        </div>
  </div>
  </div>
  </div>
  
  <div className='paso' align="center">
  <img src={i3} alt="foto" class= "foto"/>
  <div className='moduloPaso'>
  <img src={paso3} alt="foto" class= "foto"/>
  <div className='textoPasos'>
  <div className='tituloPaso'>
  Recibe y ofrece ayuda
        </div>
        <div className='descripcionPaso'>
        Cada curso cuenta con su propia comunidad de aprendizaje, donde estudiantes de todo el mundo formulan y responden preguntas al instante.
        </div>
  </div>
  </div>
  </div>

  <div className='paso' align="center">
  <img src={i4} alt="foto" class= "foto"/>
  <div className='moduloPaso'>
  <img src={paso4} alt="foto" class= "foto"/>
  <div className='textoPasos'>
  <div className='tituloPaso'>
  Obtén un certificado de estudios
        </div>
        <div className='descripcionPaso'>
        Los cursos gratis también incluyen la opción de obtener un certificado de estudios verificable a nivel internacional, por un precio ajustado a tu país.        </div>
  </div>
  </div>
  </div>
  
</div>
</div>

    
  );
}

import * as React from 'react';
import './Categorias.css';
import imagen1 from "../../img/categoria1.png";
import imagen2 from "../../img/categoria2.png";
import imagen3 from "../../img/categoria3.png";
import imagen4 from "../../img/categoria4.png";



export default function InsetDividers() {
  return (

<div className='listadoCategoria'>
  <div className='categoria'>
    <div className='fotoCategoria'>
    <img src={imagen1} alt="banner" class= "bannerImage"/>
    </div>
    <div className='textoCategoria'>
      Cursos de Negocios
    </div>
  </div>
  <div className='categoria'>
    <div className='fotoCategoria'>
    <img src={imagen2} alt="banner" class= "bannerImage"/>
    </div>
    <div className='textoCategoria'>
      Cursos de Programación
    </div>
  </div>
  <div className='categoria'>
    <div className='fotoCategoria'>
    <img src={imagen3} alt="banner" class= "bannerImage"/>
    </div>
    <div className='textoCategoria'>
      Cursos de Marketing
    </div>
  </div>
  <div className='categoria'>
    <div className='fotoCategoria'>
    <img src={imagen4} alt="banner" class= "bannerImage"/>
    </div>
    <div className='textoCategoria'>
      Cursos de Diseño
    </div>
  </div>
</div>

    
  );
}

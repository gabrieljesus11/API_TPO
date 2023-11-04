import * as React from 'react';
import './Categorias.css';
import imagen1 from "../../img/cat1.png";
import imagen2 from "../../img/cat2.png";
import imagen3 from "../../img/cat3.png";
import { Carousel } from "@material-tailwind/react";



export default function InsetDividers() {
  return (
<div className='categorias'>
    <div className='tituloCategorias'>
            Categorías destacadas
        </div>
<div className='listadoCategoria' align="center">

  <div className='categoria' align="center">
  <img src={imagen1} alt="foto" class= "foto"/>
  </div>
  <div className='categoria' align="center">
  <img src={imagen2} alt="foto" class= "foto"/>
  </div>  <div className='categoria' align="center">
  <img src={imagen3} alt="foto" class= "foto"/>
  </div>
</div>
</div>

    
  );
}

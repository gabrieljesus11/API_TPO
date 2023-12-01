import React, { useEffect, useState } from 'react'
import './CarruselHome.css';
import { Carousel } from "@material-tailwind/react";
import Card from "../Cards/Cards/CardHome";


function Carrusel() {
  const [courses, setCourses] = useState([]);
  const [coursesFetched, setCoursesFetched] = useState(false);
  async function getCourses(url){
    const response = await fetch(url, {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers:{
        'Content-Type' : 'application/json',
        'Access-Control-Allow-Origin' : 'http://localhost:4000'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer'
    })
    return response;
  }

  useEffect(() => { 
    const getCoursesResponse = async () =>{
      try{
        getCourses('http://localhost:4000/api/courses/allCourses?limit=4')
        .then(response => {
          if(response.ok){
            console.log("Respuesta Exitosa")
          }
          else{
            console.log(response)
          }
          console.log(courses)
          return response.json()
        })
        .then(data =>{
          var responseJson = data.data.docs
          setCourses(responseJson)
        })
      }
      catch(error){
        console.log(error)
      }
    }
    if(!coursesFetched){
      getCoursesResponse()
    }
    
  },[coursesFetched])
  
  

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
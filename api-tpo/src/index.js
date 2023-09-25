import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
import MiPerfil from "./routes/MiPerfil";
import CursosDisponibles from "./routes/CursosDisponibles";
import Contacto from "./routes/Contacto";
import Error from "./routes/Error";
import PDP from "./routes/PDP";
import Contratar from "./routes/Contratar";
import Login from "./routes/Login";
import Filtros from "./routes/Filtros";
//import Registro from "./routes/Registro";
import { AuthProvider } from './auth/AuthProvider';
import App from './App';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/",
    element: <MiPerfil />,
    children: [
      {
        path: "/miPerfil",
        element: <MiPerfil />,
      },
    ],
  },
  {
    path: "/cursosDisponibles",
    element: <CursosDisponibles />,
  },
  {
    path: "/contacto",
    element: <Contacto />,
  },
  {
    path: "/pdp",
    element: <PDP />,
  },
  {
    path: "/contratar",
    element: <Contratar />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/filtro",
    element: <Filtros />,
  },

  {
    path: "/login",
    element: <Login />,
  },



]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <RouterProvider router={router} />
  </React.StrictMode>
);

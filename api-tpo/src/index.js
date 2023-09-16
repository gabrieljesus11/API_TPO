import React from 'react';
import ReactDOM from 'react-dom/client';
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


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/miPerfil",
    element: <MiPerfil />,
    errorElement: <Error />,
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

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
import MiPerfil from "./routes/MiPerfil";
import CursosDisponibles from "./routes/CursosDisponibles";
import Contacto from "./routes/Contacto";
import Error from "./routes/Error";


const router = createBrowserRouter([
  {
    path: "/home",
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

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

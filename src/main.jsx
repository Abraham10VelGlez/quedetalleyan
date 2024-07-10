import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    {/* AQUI IMPORTAMOS EL BrowserRouter PARA PODER TENER ENVUELTA TODA LA APLICCACION SOBRE ESTA LIBRERIA PARA USARLA CON LAS RUTAS QUE YA TENEMOS */}
    <BrowserRouter>
      <PrimeReactProvider>
        <App />
      </PrimeReactProvider>
    </BrowserRouter>
  </React.StrictMode>
)

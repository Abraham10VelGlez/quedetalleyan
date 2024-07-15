import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate, Link } from 'react-router-dom';
import Welcome from './Welcomequedetalle';
import Boxs from './Boxs';
import CarruselPrime from './Caruselprime';
export default function Navigatetalle() {

    return (
        /*<Router>*/
        <Routes>
            <Route path="/" index element={<Welcome/>} />
            <Route path="/me" element={<About />} />
            <Route path="/QueDetalleBox" element={<Boxs />} />
            {/* comodin para dar por defecto la pagina que no sirve */}
            <Route path="*" element={<NotFound />} />
        </Routes>
        /*</Router>*/
    );
}

function Boxes(){
    return <>asd</>
}

function Navbar() {
    // visible on every page
    return <> <h1>NAVEGACION DE RUTAS QUEDETALLE </h1></>
}

function Home() {
    return (
        <>
            <p>NAVEGACION DE RUTAS ABRAHAM</p>
            <ul>
                <li><Link to='/regixpress'>Registro de Usuarios</Link></li>
                <li><Link to='/json'>ejemplo de json</Link></li>
                <li><Link to='/world8'>MUNDO 8 Buscador de gifs</Link></li>
                <li><Link to='/world9'>MUNDO 9 Fronted con backend ExpressJS</Link></li>
                <li><Link to='/world10'>MUNDO 10 Fronted con backend Laravel 10</Link></li>
            </ul>
        </>);
}

function About() {
    return (
        <>
            <p>ACERCA DE</p>
            <ul>
                PAGINAS PROTEGIDAS VERSION NATIVA QUE DETALLE
            </ul>
        </>);
}


function NotFound() {
    return (<><p>Ha llegado a una página que no existe :| </p></>);
}
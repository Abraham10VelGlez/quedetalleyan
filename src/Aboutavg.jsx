import './App.css'
import styles from './styles.module.css'

import React from 'react';
import { Button } from 'primereact/button';
import "primereact/resources/themes/lara-light-cyan/theme.css";

import { useState } from 'react';
import reactLogo from './assets/react.svg';

import { InputText } from 'primereact/inputtext';

import 'primereact/resources/themes/lara-light-indigo/theme.css'; //theme
import 'primereact/resources/themes/arya-purple/theme.css'; //core css

function AboutAvg() {
  const [count, setCount] = useState(0);


  return (
    <>
      {/* MENU */}
      {/* SLIDER */}
      {/* CONTENIDO */}
      {/* FOOTER*/}

      <h1>Que Detalle</h1>

      <div className="App">
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + PrimeReact</h1>

        <div className="card">
          <Button
            icon="pi pi-plus"
            className="mr-2"
            label="Increment"
            onClick={() => setCount((count) => count + 1)}
          ></Button>
          <InputText value={count} />
        </div>
        <div className="flex flex-column md:flex-row justify-content-between my-5">
          <Button type="button" label="Button 1" className="mb-3 md:mb-0"></Button>
          <Button type="button" label="Button 2" className="p-button-secondary mb-3 md:mb-0"></Button>
          <Button type="button" label="Button 3" className="p-button-help"></Button>
        </div>
      </div>





    </>
  )
}

export default AboutAvg;



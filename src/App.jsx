import React from 'react';
import Navigatetalle from './Navigatetalle';
import CarruselPrime from './Caruselprime';
import Cardsprime from './Cardsprime';
import 'primereact/resources/themes/saga-purple/theme.css'; //theme
import 'primereact/resources/primereact.min.css'; //core css
import 'primeicons/primeicons.css'; //icons
import 'primeflex/primeflex.css'; // flex
import Footer from './Footer';
import Logo from './Logo';


export default function App() {
  return (
    <>
      <Logo></Logo>
      <br />
      <Navigatetalle />
      <br />
      <CarruselPrime />
      <br />
      <Cardsprime />
      <br />
      <br />
      <Footer />
    </>
  );
}




import React from 'react';
import Sidebar from '../components/Sidebar'
import '../styleSheets/About-us.css'

const AboutUs = () => {
  return (
    <>
      <Sidebar />
      <div className='about-us'>
        <h1>CONOCE MAS ACERCA DE NOSOTROS</h1>
        <h2>Somos una empresa de vanguardia que vela por su clientes.</h2>
        <h2>Buscamos la mejora solucion al mejor costo, tecnologia de vanguardia.</h2>
        <h2>No dude en contactarnos!</h2>
      </div>
    </>
  );
};

export default AboutUs;

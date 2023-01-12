import React from 'react';
import Navbar from './componentes/Navbar';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import './styleSheets/App.css';
import Home from './componentes/pages/Home';
import Services from './componentes/pages/Services';
import Products from './componentes/pages/Products';
import SignUp from './componentes/pages/SignUp';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes >
          <Route path='/' element={<Home></Home>} />
          <Route path='/services' element={<Services></Services>} />
          <Route path='/products' element={<Products></Products>} />
          <Route path='/sign-up' element={<SignUp></SignUp>} />
        </Routes >
      </BrowserRouter>
    </>
  );
}

export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import NavbarCustom from './componentes/narbar/narbar';
import Seccion from './componentes/Seccion/Seccion';
import Footer from './componentes/Footer/footer';
import ContactForm from './componentes/Contacto/Contacto.jsx';
import Servicios from './componentes/Servicios/Servicios.jsx';
import Nosotros from './componentes/Nosotros/Nosotros.jsx';

function App() {
  return (
    <Router>
      <div className='contenedor'>
        <NavbarCustom />
        <main>
          <Routes>
            <Route path="/Fumitecno" element={<Navigate to="/Fumitecno" />} />
            <Route path='/Fumitecno' element={<Seccion />} />
            <Route path='/Servicios' element={<Servicios/>} />
            <Route path='/Nosotros' element={<Nosotros/>} />
            <Route path='/Contacto' element={<ContactForm />} />
          </Routes>
        </main>
        </div> 
        <Footer />
    </Router>
  );
}

export default App;

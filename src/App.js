import Home from './pages/Home'
import Register from './pages/Register'
import Contact from './pages/Contact'
import React from 'react';
import Layout from './sections/Layout';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
     
      <Routes>
        <Route path='/' element={<Home />} />
      <Route path='/register' element={<Register />} />
      <Route path='/contact' element={<Contact />} />    
      </Routes>
     
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;

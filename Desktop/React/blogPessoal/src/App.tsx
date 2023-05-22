import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import cadastroUsuario from './paginas/cadastroUsuario/cadastroUsuario';
import Navbar from './components/estaticos/navbar/NavBar';
import Footer from './components/estaticos/footer/Footer';
import './App.css';
import { Switch } from '@mui/material';
import CadastroUsuario from './paginas/cadastroUsuario/cadastroUsuario';


function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <div style={{ minHeight: '100vh' }}>
        
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cadastroUsuario" element={<cadastroUsuario />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App;

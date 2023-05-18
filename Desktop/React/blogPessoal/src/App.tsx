import React from 'react';
import { Grid } from '@material-ui/core';
import './App.css';
import Home from './paginas/home/Home';
import NavBar from './components/estaticos/navbar/NavBar';
import Footer from './components/estaticos/footer/Footer';

function App() {

  return (
    <>
    <NavBar />
    <Home />
    <Footer />
    {/* <Grid container spacing={3}>
    <Grid item xs={12} sm={12}>
      <Home />
    </Grid>
    <Grid item xs={12} sm={6}>
    <Home />
    </Grid>
    <Grid item xs={12} sm={6}>
    <Home />
    </Grid>
    <Grid item xs={12} sm={3}>
    <Home />
    </Grid>
    <Grid item xs={12} sm={3}>
    <Home />
    </Grid>
    <Grid item xs={12} sm={3}>
    <Home />
    </Grid>
    <Grid item xs={12} sm={3}>
    <Home />
    </Grid>
     
    </Grid>
     */}
      {/* <BrowserRouter>
        <NavBar />
        <Routes>
          <Routes path="/" element={<Home />} />
          <Routes path="/home" element={<Home />} />
          <Routes path="/login" element={<Login />} />
        </Routes>
        <footer />
      </BrowserRouter> */}
    </>
  )
}

export default App;

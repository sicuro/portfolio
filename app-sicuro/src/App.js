import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import Artigos from './components/Artigos'
import Menu from './components/Menu'

function App() {
  return (
  <BrowserRouter>
    <div className="App">   
      <Menu />
      <Header />
      <Home />
      <Artigos />
      <Footer />
    </div>
  </BrowserRouter>
  );
}


export default App;

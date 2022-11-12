import React from 'react';
import Topo from './components/Header';
import Rodape from './components/Bottom';
import MainPage from './components/Pages/HomePage';
import Carteiras from './components/Pages/Carteiras';
import Campeoes from './components/Campeoes';
import Campeonatos from './components/Pages/Campeonatos';
import Pilotos from './components/Pages/Pilotos';
import Noticias from './components/Pages/Noticias';
import CadastroNoticias from './components/Pages/CadastroNoticias'; 

import { BrowserRouter, Routes,Route } from "react-router-dom"


import './App.css';


function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Topo/>
        <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='home' element={<MainPage/>}/>
        <Route path='carteiras' element={<Carteiras/>}/>
        <Route path='campeoes' element={<Campeoes/>}/>
        <Route path='campeonatos' element={<Campeonatos/>}/>
        <Route path='pilotos' element={<Pilotos/>}/>
        <Route path='noticias' element={<Noticias/>}/>
        <Route path='cdnoticias' element={<CadastroNoticias/>}/>
        </Routes>
        <Rodape/>
      </BrowserRouter>
    </div>
  );
}

export default App;

/*
<header className='App-header'>
       <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>*/
     
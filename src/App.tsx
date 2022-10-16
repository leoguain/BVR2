import React from 'react';
import Topo from './components/Header';
import Rodape from './components/Bottom';
import MainPage from './components/Pages/HomePage';
import Carteiras from './components/Pages/Carteiras';
import Campeonatos from './components/Pages/Campeonatos';

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
        <Route path='campeonatos' element={<Campeonatos/>}/>
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
     
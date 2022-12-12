import React from "react";
import Topo from "./components/Header";
import Footer from "./components/Footer";
import MainPage from "./components/Pages/HomePage";
import Carteiras from "./components/Pages/Carteiras";
import Campeonatos from "./components/Pages/Campeonatos";
import Documentos from "./components/Pages/Documentos";
import HallFama from "./components/Pages/HallFama";
import Noticias from "./components/Pages/Noticias";
import Pilotos from "./components/Pages/Pilotos";
import Recordes from "./components/Pages/Recordes";
import CadastroNoticias from "./components/Pages/CadastroNoticias";
import AdmNoticias from "./components/Pages/ADM_Noticias";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Topo />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="home" element={<MainPage />} />
          <Route path="carteiras" element={<Carteiras />} />
          <Route path="campeoes" element={<HallFama />} />
          <Route path="campeonatos" element={<Campeonatos />} />
          <Route path="documentos" element={<Documentos />} />
          <Route path="pilotos" element={<Pilotos />} />
          <Route path="recordes" element={<Recordes />} />
          <Route path="noticias" element={<Noticias />} />
          <Route path="cdnoticias" element={<CadastroNoticias />} />
          <Route path="admnoticias" element={<AdmNoticias />} />
        </Routes>
        <Footer />
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

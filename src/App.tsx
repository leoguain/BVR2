import React from 'react';
import Topo from './components/Header';
import logo from './liga_bvr_gt_branco.png';
import './App.css';


function App() {
  return (
    <div className="App">
      <Topo />
      <header className="App-header">
        <img src={logo} alt="logo" />
        <p>
          Liga BVR
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

import './App.css';
import React, { useState } from 'react';
import BubbleSort from './components/BubbleSort';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom"

function App() {
  const [numbers,setNumbers] = useState('');

  return (
    <BrowserRouter>
      <div className='App'>
        <h1>Live Algos</h1>
        <div className='form-group'></div>
          <label className=''>Numbers:</label>
          <input onChange={(e) => setNumbers(e.target.value)}></input>
      </div>
      <div>
        <BubbleSort numbers={numbers}></BubbleSort>
      </div>
    </BrowserRouter>
  );
}

export default App;

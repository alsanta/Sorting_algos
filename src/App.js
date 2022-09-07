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
  const [numbers,setNumbers] = useState("");

  const submitHandler = (e) =>{
    e.preventDefault()
    setNumbers(e.target.value)
    console.log(numbers);
  }

  return (
    <BrowserRouter>
      <div className='App'>
        <h1>Live Algos</h1>
          <form onSubmit={(e) => submitHandler(e)}>
            <label className=''>Numbers:</label>
            <input className='ms-2' onChange={(e) => setNumbers(e.target.value)}></input>
            <button className='ms-2'>Submit</button>
          </form>
      </div>
      <div>
        <BubbleSort numbers={numbers}></BubbleSort>
      </div>
    </BrowserRouter>
  );
}

export default App;

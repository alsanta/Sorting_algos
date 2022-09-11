import './App.css';
import React, { useState } from 'react';
import {
  BrowserRouter
} from "react-router-dom"

// Sort components
import BubbleSort from './components/BubbleSort';

function App() {
  const [temp,setTemp] = useState("");
  const [numbers,setNumbers] = useState("");

  const submitHandler = (e) =>{
    e.preventDefault()
    if (temp.length > 0){
    setNumbers(temp)
    // console.log(numbers);
    setTemp("")
    e.target.reset();
    }

  }
  

  return (
    <BrowserRouter>
      <div className='App'>
        <h1>Live Algos</h1>
          <form onSubmit={(e) => submitHandler(e)}>
            <label className=''>Numbers:</label>
            <input className='ms-2' onChange={(e) => setTemp(e.target.value)}></input>
            <input className='ms-2' type="submit" value="Submit" />
          </form>
          <p className='text-danger' >Only numbers seperated by a space</p>
          <p className=''>Original: {numbers}</p>
      </div>
      <div>
        <BubbleSort className='mt-3' numbers={numbers}></BubbleSort>
      </div>
    </BrowserRouter>
  );
}

export default App;

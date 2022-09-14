import './App.css';
import React, { useState } from 'react';
import {
  BrowserRouter
} from "react-router-dom"

// Sort components
import BubbleSort from './components/BubbleSort';
import SelectionSort from './components/SelectionSort';
import InsertionSort from './components/InsertionSort';
import MergSort from './components/MergSort';

function App() {
  const [temp, setTemp] = useState("");
  const [numbers, setNumbers] = useState("");

  const submitHandler = (e) => {
    e.preventDefault()
    if (temp.length > 0) {
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
      <BubbleSort numbers={numbers}></BubbleSort>
      <SelectionSort numbers={numbers}></SelectionSort>
      <InsertionSort numbers={numbers}></InsertionSort>
      <MergSort numbers={numbers}></MergSort>
    </BrowserRouter>
  );
}

export default App;

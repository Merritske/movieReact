import React from 'react';

import './App.css';
import { useSelector, useDispatch } from "react-redux"

//https://www.youtube.com/watch?v=zrs7u6bdbUw
//start op 17 minuten
//info:
//https://redux-toolkit.js.org/

function App() {
  const counter = useSelector((state)=>{
    return state.counter
  })
  const dispatch = useDispatch()

  function increment(){
dispatch({ type: "INC" })
  }
  function decrement(){
dispatch({ type: "DEC"})
  }
  const addBy = ()=>{
    dispatch({ type: "ADD", payload: 10 })
  }
  return (
    <div >
  <h1>Counter App</h1>
<h2>{counter}</h2>

<button onClick={increment}>+</button>
<button onClick={decrement}>-</button>
<button onClick={addBy}>Add value by 10</button>
    </div>
  );
}

export default App;

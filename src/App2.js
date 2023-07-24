/** @format */

import React from "react";
import './Sass/_app.scss'
import { useSelector,useDispatch } from "react-redux";
import { decrement, decrementByValue, increment, incrementByValue, reset } from "./features/counter/counterSlice";

function App() {
   
    const count = useSelector(state => state.counter.count)
    const dispatch = useDispatch()
    
    const handleIncrement = () => {
        dispatch(increment())
    }

    const handleIncrementByVal = () => {
        dispatch(incrementByValue(5))
    }
    const handleDecrement = () => {
        dispatch(decrement())
    }
    const handleDecrementByVal = () => {
        dispatch(decrementByValue(5))
    }
    const Reset = () => {
        dispatch(reset())
    }


  return (<div className="App">
    <h1>Counter</h1>
    <h2>Count: {count}</h2>
    <button 
    onClick={handleIncrement}>
        Increment</button>
    <button onClick={handleIncrementByVal}>Increment by value</button>
    <button onClick={handleDecrement}>Decrement</button>
    <button onClick={handleDecrementByVal}>Decrement by value</button>
    <button onClick={Reset}>Reset</button>
  </div>)
}

// test comment

export default App;

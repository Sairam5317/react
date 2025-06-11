import React from 'react';
import { useState } from 'react';
function Counter(){
    const[count,setCount] = useState(0)
    const increment = ()=>{
        setCount(count +1)
    }
    const decrement = ()=>{
        setCount(count -1)
    }
    const reset =()=>{
        setCount(0)
    }
    return(
        <>
          <div className='container'>
            <h1>No.of Counts: {count}</h1>
            <button className = "incrementBtn" onClick={increment}>Increment</button>
            <button className = "resetBtn"  onClick={reset}>Reset</button>
            <button className = "decrementBtn"  onClick={decrement}>Decrement</button>
          </div>
        </>
    )
}
export default Counter
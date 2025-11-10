import React,{useState} from 'react'

function Statehandling() {
    const[count,SetCount]=useState(20);
    function increaseValue(){
        SetCount(count+10);
    }
    function decreaseValue(){
        SetCount(count-10);
    }
  return (
    <div>StateHandling
        <h2>Counter Value= {count}</h2>
        <button onClick= {increaseValue}>Increment value </button>
        <button onClick= {decreaseValue}>decrement value </button>
      
    </div>
  )
}

export default Statehandling

import { useState } from 'react';

const CounterApp = () => {
        const [firstValue , setFirstValue] = useState(0);
        
        const addValue = ()=>{
          setFirstValue(firstValue + 1)
        }
        const removeValue = ()=>{
          if(firstValue > 0){
            setFirstValue(firstValue - 1)
          }
        }
        const delValue = ()=>{
          if(firstValue > 0){
            setFirstValue(0)
          }else{
            alert("Value is already 0")
          }
        }
  return (
    <div>
        <center><h1>Counter App</h1> 
       <h2>Count value : {firstValue}</h2> 
       <button onClick={addValue} className="btn">Add Value</button>
       <button onClick={removeValue} className="btn">Remove Value</button>
       <button onClick={delValue} className="btn">Reset Value</button></center>
    </div>
  )
}

export default CounterApp

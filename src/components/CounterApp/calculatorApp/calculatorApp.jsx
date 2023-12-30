import { useState } from "react";
import React from "react";

const CalculatorApp = () => {
  const [inputValue, setInputValue] = useState('');
  const foo = (abc) => {
    const updatedValue = inputValue + abc;
    setInputValue(updatedValue);
  };

  const clear = ()=>{
    setInputValue("");
  };

  const result = ()=>{
    try{
      let res = eval(inputValue);
      setInputValue(res.toString());
      }catch(e){
        alert("Invalid Input");
      };
  };

  return (
    <>
    <div className='mainContainer'>
        <center><h1>Calculator App</h1>
        <p>This is a simple Calculator App built using React.JS.</p></center>
          <center><input placeholder="0" disabled type="text" id="text" value={inputValue}/>
          <div className="btnContainer">
            <div className="btn1">
              <button className="first" onClick={()=>foo('9')}>9</button>
              <button className="first" onClick={()=>foo('8')}>8</button>
              <button className="first" onClick={()=>foo('7')}>7</button>
              <button className="addSMDel" onClick={()=>foo('+')}>+</button>
            </div>
            <div className="btn1">
              <button className="first" onClick={()=>foo('6')}>6</button>
              <button className="first" onClick={()=>foo('5')}>5</button>
              <button className="first" onClick={()=>foo('4')}>4</button>
              <button className="addSMDel" onClick={()=>foo('-')}>-</button>
            </div>
            <div className="btn1">
              <button className="first" onClick={()=>foo('3')}>3</button>
              <button className="first" onClick={()=>foo('2')}>2</button>
              <button className="first" onClick={()=>foo('1')}>1</button>
              <button className="addSMDel" onClick={()=>foo('*')}>*</button>
            </div>
            <div className="btn1">
              <button className="first" onClick={()=>foo('0')}>0</button>
              <button className="clrRes" onClick={()=>clear()}>C</button>
              <button className="clrRes" onClick={()=>result()}>=</button>
              <button className="addSMDel" onClick={()=>foo('/')}>/</button>
            </div>
            {/* <div className="image">
              <img src="https://sharpcalculators.com/cdn/shop/collections/EL334WB_Lifestyle_1.jpg?v=1670956942&width=1500" alt="" />
            </div> */}
          </div></center>
        </div>
    
    </>
  )
}

export default CalculatorApp

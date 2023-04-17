import React, {useState} from "react";

export default function Calculator(props) {

    const [num1,setnum1] = useState("Enter Number 1")
    const [num2,setnum2] = useState("Enter Number 2")
    const [output,setoutput] = useState("")

    const handleOnChangen1 = (event) => {
        setnum1(event.target.value)
    }
    const handleOnChangen2 = (event) => {
        setnum2(event.target.value)
    }
    const handleAdd = () => {
        let sum = parseInt(num1) + parseInt(num2)
        setoutput(sum)
        props.showalert('Numbers added Successfully','success')
    }
    const handleSubtract = () => {
        let sum = parseInt(num1) - parseInt(num2)
        setoutput(sum)
    }
    const handleMultiply = () => {
        let sum = parseInt(num1) * parseInt(num2)
        setoutput(sum)
    }
    const handleDivide = () => {
        let sum = parseInt(num1) / parseInt(num2)
        setoutput(sum)
    }

  return (
    <>
      <div className="container">
        <h1>Simple Calculator</h1>
        <input value={num1} onChange={handleOnChangen1}/>
        <br/><br/>
        <input  value={num2} onChange={handleOnChangen2}/>
        <br/><br/>
        <button className="btn btn-primary mx-2" onClick={handleAdd}>+</button>
        <button className="btn btn-primary mx-2" onClick={handleSubtract}>-</button>
        <button className="btn btn-primary mx-2" onClick={handleMultiply}>*</button>
        <button className="btn btn-primary mx-2" onClick={handleDivide}>/</button>
        <br/><br/>
        <h4>Output is : {output}</h4>
      </div>
    </>
  );
}

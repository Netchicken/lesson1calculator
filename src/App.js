//https://morioh.com/p/2a4e533711d0  https://bobbyhadz.com/blog/react-enter-key-submit-form
import "./App.css";
import { useEffect, useState } from "react";
import CalcButtons from "./Components/calcbuttons";
import Inputs from "./Components/inputs";
import ButtonKeyPad from "./Components/buttonkeypad";

function App() {
  const [calculation, setCalculation] = useState("");

  // useEffect(() => {
  //   console.log("useEffect", first);
  // }, [first]);

  const updateCalculation = (value) => {
    console.log("updateCalculation", value + " " + calculation);
    setCalculation(calculation + String(value)); //add the value to the growing string

    //if you press = then evaluate the calculation
    if (value == "=") {
      setCalculation(new Function("return " + calculation));
    }
    if (value == "clear") {
      setCalculation("");
    }
    if (value == "del") {
      const result = calculation.slice(0, -1); //removes the last element from the string
      console.log("updateCalculation DEL", result);
      setCalculation(result);
    }
  };

  // const Calculate = (value) => {
  //   console.log("value", value);
  //   if (value !== "") {
  //     switch (value) {
  //       case "-":
  //         setAnswer(first - second);
  //         break;
  //       case "+":
  //         setAnswer(first + second);
  //         break;
  //       case "X":
  //         setAnswer(first * second);
  //         break;
  //       case "/":
  //         setAnswer(first / second);
  //         break;

  //       default:
  //         setAnswer("error");
  //         break;
  //     }
  //   }
  // };

  return (
    <div className='calc-box'>
      <h1>Simple Calculator</h1>

      <div className='output'>{calculation || "Enter a number"}</div>

      <CalcButtons updateCalculation={updateCalculation} />
      <div className='digits'>
        <ButtonKeyPad updateCalculation={updateCalculation} />
      </div>
    </div>
  );
}
export default App;

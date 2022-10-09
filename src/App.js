//https://morioh.com/p/2a4e533711d0  https://bobbyhadz.com/blog/react-enter-key-submit-form
import "./App.css";
import { useEffect, useState } from "react";
import CalcButtons from "./Components/calcbuttons";
import Inputs from "./Components/inputs";
import ButtonKeyPad from "./Components/buttonkeypad";

function App() {
  const [answer, setAnswer] = useState("");

  const [second, setSecond] = useState();
  const actionArray = ["+", "-", "*", "/"]; //all the actions that can be performed on the calculator
  //---new code -------------
  const [first, setFirst] = useState("");
  const [calculation, setCalculation] = useState("");

  // useEffect(() => {
  //   console.log("useEffect", first);
  // }, [first]);

  const updateCalculation = (value) => {
    console.log("updateCalculation", value + " " + calculation);
    setCalculation(calculation + String(value)); //add the value to the growing string
    setFirst(calculation + String(value)); //add the value to the growing string
    //if you press = then evaluate the calculation
    if (value == "=") {
      setAnswer(new Function("return " + calculation)());
    }
  };

  const Calculate = (value) => {
    console.log("value", value);
    if (value !== "") {
      switch (value) {
        case "-":
          setAnswer(first - second);
          break;
        case "+":
          setAnswer(first + second);
          break;
        case "X":
          setAnswer(first * second);
          break;
        case "/":
          setAnswer(first / second);
          break;

        default:
          setAnswer("error");
          break;
      }
    }
  };

  return (
    <div className='App'>
      <h1>Simple Calculator</h1>
      <Inputs
        first={first}
        second={second}
        setFirst={setFirst}
        setSecond={setSecond}
        answer={answer}
      />

      <CalcButtons updateCalculation={updateCalculation} />
      <ButtonKeyPad updateCalculation={updateCalculation} />
    </div>
  );
}
export default App;

//https://morioh.com/p/2a4e533711d0  https://bobbyhadz.com/blog/react-enter-key-submit-form
import "./App.css";
import { useEffect, useState } from "react";
import CalcButtons from "./Components/calcbuttons";
import Inputs from "./Components/inputs";
import ButtonKeyPad from "./Components/buttonkeypad";

function App() {
  const [answer, setAnswer] = useState("");
  const [first, setFirst] = useState(10);
  const [second, setSecond] = useState(22);

  useEffect(() => {
    console.log("useEffect",first);
  }, [first]);

  const updateCalculation = (value) => {
    setFirst(first + String(value));
    //}; //need to make the number a string
    //lets get an output we can check
    console.log("updateCalculation", value + " " + first);
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

      <CalcButtons Calculate={Calculate} />
      <ButtonKeyPad updateCalculation={updateCalculation} />
    </div>
  );
}
export default App;

import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

//https://morioh.com/p/2a4e533711d0  https://bobbyhadz.com/blog/react-enter-key-submit-form
function App() {
  const [answer, setAnswer] = useState("");
  const [first, setFirst] = useState("10");
  const [second, setSecond] = useState("22");

  const Calculate = (value) => {
    console.log("value", value);
    if (value !== "") {
      switch (value) {
        case "-":
          setAnswer(parseFloat(first) - parseFloat(second));
          break;
        case "+":
          setAnswer(parseFloat(first) + parseFloat(second));
          break;
        case "X":
          setAnswer(parseFloat(first) * parseFloat(second));
          break;
        case "/":
          setAnswer(parseFloat(first) / parseFloat(second));
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
      <input
        type='number'
        value={Number(first)}
        onChange={(event) => setFirst(event.target.value)}
      />
      <input
        type='number'
        value={Number(second)}
        onChange={(event) => setSecond(event.target.value)}
      />
      =
      <input
        type='number'
        id='answer'
        name='answer'
        defaultValue={answer}
        //onChange={(event) => setSecond(event.target.value)}
      />
      <div>
        <button className='AppButton' onClick={() => Calculate("+")}>
          +
        </button>
        <button className='AppButton' onClick={() => Calculate("-")}>
          -
        </button>
        <button className='AppButton' onClick={() => Calculate("X")}>
          X
        </button>
        <button className='AppButton' onClick={() => Calculate("/")}>
          /
        </button>
      </div>
    </div>
  );
}
export default App;

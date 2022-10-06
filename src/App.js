import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

//https://morioh.com/p/2a4e533711d0  https://bobbyhadz.com/blog/react-enter-key-submit-form
function App() {
  const [answer, setAnswer] = useState("");
  const [first, setFirst] = useState("1");
  const [second, setSecond] = useState("2");

  const Calculate = (value) => {
    console.log("value", value);
    if (value !== "") {
      switch (value) {
        case "+":
          setAnswer(first + second);
          break;
        case "-":
          setAnswer(first - second);
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
      <input
        type='text'
        id='first'
        name='first'
        value={first}
        onChange={(event) => setFirst(event.target.value)}
        autoComplete='off'
      />
      <input
        type='text'
        id='last'
        name='last'
        value={second}
        onChange={(event) => setSecond(event.target.value)}
        autoComplete='off'
      />
      =
      <input
        type='text'
        id='answer'
        name='answer'
        defaultValue={answer}
        //onChange={(event) => setSecond(event.target.value)}
        autoComplete='off'
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

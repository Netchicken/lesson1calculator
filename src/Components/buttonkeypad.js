function ButtonKeyPad(props) {
  //lets make an array to hold all the buttons
  let buttons = [];
  //lets make a for loop that counts 10 times
  for (let i = 0; i < 10; i++) {
    buttons.push(
      //add new buttons to the array
      <button
       onClick={() => props.updateCalculation(i)}
        key={i}
      >
        {i}
      </button>
    );
  }

  return (
    <div>
      {buttons}
      <button onClick={() => props.updateCalculation(".")}>.</button>
      <button onClick={() => props.updateCalculation("del")}>del</button>
    </div>
  );
}
export default ButtonKeyPad;

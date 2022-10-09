function CalcButtons(props) {
  return (
    <div>
      <button onClick={() => props.updateCalculation("+")}>+</button>
      <button onClick={() => props.updateCalculation("-")}>-</button>
      <button onClick={() => props.updateCalculation("X")}>X</button>
      <button onClick={() => props.updateCalculation("/")}>/</button>
      <button onClick={() => props.updateCalculation("=")}>=</button>
      <button onClick={() => props.updateCalculation("clear")}>clear</button>
    </div>
  );
}
export default CalcButtons;

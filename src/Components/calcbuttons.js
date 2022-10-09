function CalcButtons(props) {
  return (
    <div>
      <button
        className='AppButton'
        onClick={() => props.updateCalculation("+")}
      >
        +
      </button>
      <button
        className='AppButton'
        onClick={() => props.updateCalculation("-")}
      >
        -
      </button>
      <button
        className='AppButton'
        onClick={() => props.updateCalculation("X")}
      >
        X
      </button>
      <button
        className='AppButton'
        onClick={() => props.updateCalculation("/")}
      >
        /
      </button>
      <button
        className='AppButton'
        onClick={() => props.updateCalculation("=")}
      >
        =
      </button>
    </div>
  );
}
export default CalcButtons;

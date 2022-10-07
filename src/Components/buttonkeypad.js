function ButtonKeyPad(props) {
  //lets make an array to hold all the buttons
  let buttons = [];
  //lets make a for loop that counts 10 times
  for (let i = 0; i < 10; i++) {
    buttons.push(
      //add new buttons to the array
      <button className='AppButton' onClick={() => props.setFirst(i)} key={i}>
        {i}
      </button>
    );
  }

  return <div>{buttons}</div>;
}
export default ButtonKeyPad;

import React, { useState } from 'react';
import './App.css';

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

  function changeBackground() {
    setButtonColor(newButtonColor);
  }

  function toggleButtonDisable() {
    setButtonDisabled(!buttonDisabled);
  }

  return (
    <div>
      <button disabled={buttonDisabled} onClick={changeBackground} style={{ backgroundColor: buttonColor, color: 'white' }}>Change to {newButtonColor}</button>
      <input onChange={toggleButtonDisable} type="checkbox" name="checkbox" />
    </div>
  );
}

export default App;

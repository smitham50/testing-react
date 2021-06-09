import React, { useState } from 'react';
import './App.css';

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

  function changeBackground() {
    setButtonColor(newButtonColor);
  }

  return (
    <div>
      <button 
        disabled={buttonDisabled}
        onClick={changeBackground} 
        style={{ backgroundColor: buttonColor, color: 'white' }}
      >
        Change to {newButtonColor}
      </button>
      <input 
        onChange={(e) => setButtonDisabled(e.target.checked)}
        defaultChecked={buttonDisabled}
        aria-checked={buttonDisabled}
        type="checkbox" 
        id="disable-button-checkbox" 
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;

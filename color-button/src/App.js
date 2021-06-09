import React, { useState } from 'react';
import './App.css';

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

  function changeBackground(newColor) {
    setButtonColor(newColor);
  }

  return (
    <div>
      <button 
        disabled={buttonDisabled}
        onClick={() => changeBackground(newButtonColor)} 
        style={{ 
          backgroundColor: buttonDisabled ? 'gray': buttonColor, 
          color: 'white' 
        }}
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

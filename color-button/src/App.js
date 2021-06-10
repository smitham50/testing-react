import React, { useState } from "react";
import "./App.css";

export function replaceCamelCaseWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
}

function App() {
  const [buttonColor, setButtonColor] = useState("MediumVioletRed");
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const newButtonColor =
    buttonColor === "MediumVioletRed" ? "MidnightBlue" : "MediumVioletRed";

  function changeBackground(newColor) {
    setButtonColor(newColor);
  }

  return (
    <div>
      <button
        disabled={buttonDisabled}
        onClick={() => changeBackground(newButtonColor)}
        style={{
          backgroundColor: buttonDisabled ? "gray" : buttonColor,
          color: "white",
        }}
      >
        Change to {replaceCamelCaseWithSpaces(newButtonColor)}
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

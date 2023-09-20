
// Component2: Simple Input
// You need:
// • inputValue State
// • display Text State
// • <input /> you can type in THAT IS TIED TO STATE (CONTROLLED BY STATE)
// • <button> that says "Show this text on screen". You click this button to show the text on the screen
// • <div> to show the display Text state.
// • !!! display Text should ONLY change when you click the button

import React, { useState } from 'react'
import './index.css'

const Input = () => {
    const [inputValue, setInputvalue] = useState("")
    const [displayText, setDisplayText] = useState(false)

    const handleOnChange = (e) => {
        setInputvalue(e.target.value);
    }

    const handleClick= () => {
        setDisplayText(!displayText)
    }

  return (
    <div id='input-component-container'>
        <p>{displayText ? `${inputValue}` : ``}</p>
        <input type="text" value={inputValue} onChange={handleOnChange} />
        <button onClick={handleClick}>Show this text on screen</button>
    </div>
  )
}

export default Input
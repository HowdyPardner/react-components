
// Component5: Toggle Theme
// You need:
// • theme state (string, either "light" or "dark")
// • handle Toggle function that will toggle the theme between "light" and "dark" 
// • <button> to toggle the theme
// • A <div> that has a class based on the theme state. (e.g., if theme is "light", div should have a class "light-theme", if "dark", "dark-theme").




import React, { useState } from 'react'
import './index.css'
const ToggleTheme = () => {
    const [theme, setTheme] = useState('light');
    const [isLightTheme, setLightTheme] = useState(true)

    let handleClick =() =>{
      setLightTheme(!isLightTheme);
    }
  return (
    <div className={`toggle-theme-div-component-container ${isLightTheme ? 'light' : 'dark'} `}>
        <button onClick={handleClick}>Light/Dark Mode!</button>   
    </div>
  )
}

export default ToggleTheme

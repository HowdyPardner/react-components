// Component3: Random Name
// You need:
// • names state (array of string names) x
// • randomIndex state x
// • handleChange function that will set a new randomIndex
// • <button> to change the name you are showing on screen
// • <div> that shows one of the names in the names state USING the randomIndex

import React, { useState } from 'react'

const RandomName = ({studentsArray}) => {
    const [randomIndex, setRandomIndex] = useState(Math.floor(Math.random() * studentsArray.length))
   

    const handleClick = () => {
        setRandomIndex(Math.floor(Math.random() * studentsArray.length))
    }
    
    console.log(studentsArray);
    console.log(randomIndex)
    console.log(studentsArray[randomIndex])
  return (
    <div>
        <div>{studentsArray[randomIndex]}</div>
        <button onClick={handleClick}>Randomize the name!</button>
    </div>
  )
}

export default RandomName
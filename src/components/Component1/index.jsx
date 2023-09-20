// Component1: Make a counter
// You need:
  // • count state x
  // • button to make count state go up x
  // • button to make count state go down
  // • div to show the count state
import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

    let handleAddClick = () => {
        setCount(count + 1)
    }

    let handleSubtractClick = () => {
        setCount(count - 1)
    }

  return (
    <div>
        <div id='show-counter'> <br></br><h3>{count}</h3></div>
        <button onClick={handleAddClick}>Add</button>
        <button onClick={handleSubtractClick}>Subtract</button>
    </div>
  )
}

export default Counter
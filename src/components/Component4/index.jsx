// Component4: Add Names
// You need:
// • names state (empty array, will be array of strings) x
// • inputValue state x
// • handleSubmit function x
//   • will add the string inside the inputValue to the names state x
//   • will set inputValue to equal an empty string 
// • <form> input with an onSubmit x
// • <input> inside the <form> that is CONTROLLED BY STATE x
// • <button> inside the <form> that says "submit" x
// • <ul> that will show an <li> for each name in the names state (you need .map) x


import React, { useState } from 'react'

const AddNames = () => {
    const [namesArray, setNamesArray] = useState([]);
    const [inputValue, setInputvalue] = useState('');

    let handleSubmit = (e) => {
        e.preventDefault();
       // will add the string inside the inputValue to the names state
        setNamesArray([...namesArray, inputValue]);
        // will set inputValue to equal an empty string
        setInputvalue('');
    }

    let handleChange = (e) =>{
        setInputvalue(e.target.value)
    }

    namesArray.map((currentname)=> {
        console.log(currentname)
    })
    console.log("namesArray", namesArray)
  return (
    <div>
        <form action="submit" onSubmit={handleSubmit}>
            <input type="text" value={inputValue} onChange={handleChange} />
            <button type='submit'>Submit</button>
        </form>

        <ul>
            {namesArray.map((currentname) => (
                <li>{currentname}</li>
                )
            )}
        </ul>
    
    </div>
  )
}

export default AddNames

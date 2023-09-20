import { useState } from 'react'
import './App.css'
import Counter from './components/Component1';
import Input from './components/Component2';


function App() {

  return (
    <div className="App">
      <div className="component-container red">
        <h1>component 1</h1>
        <Counter />
      </div>
      <div className="component-container blue">
        <h1>component 2</h1>
        <Input/>
      </div>
      <div className="component-container green">
        <h1>component 3</h1>
        {/* put component3 RIGHT here */}
      </div>
      <div className="component-container grey">
        <h1>component 4</h1>
        {/* put component4 RIGHT here */}
      </div>
      <div className="component-container purple">
        <h1>component 5</h1>
        {/* put component5 RIGHT here */}
      </div>
    </div>
  );
}

export default App

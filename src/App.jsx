import { useState } from 'react'
import './App.css'
import Counter from './components/Component1';
import Input from './components/Component2';
import RandomName from './components/Component3';
import AddNames from './components/Component4';
import ToggleTheme from './components/Component5';
import ProductsDetailsToggle from './components/Component6';


function App() {
const studentsArray = ["Jimmy", "David", "Jenna", "Jeff", "Harley", "Chris"]
const [productDetails, setProductDetails] = useState({title:"A Sweater", description:"This is an awesome sweater"})

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
        <RandomName  studentsArray={studentsArray}/>
      </div>
      <div className="component-container grey">
        <h1>component 4</h1>
        <AddNames />
      </div>
      <div className="component-container purple">
        <h1>component 5</h1>
        <ToggleTheme />
      </div>
      <div className="component-container yellow">
        <h1>component 6</h1>
        <ProductsDetailsToggle productDetails={productDetails}/>
      </div>
    </div>
  );
}

export default App

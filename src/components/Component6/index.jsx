
// Component6: Product Details Toggle
// You need:
// • INSIDE APP.JS PASS A PROP called 'product' that has a value of an object that has a title and description.
// • Inside this component, ACCEPT THAT PROP (get that prop)
// • an isVisible state
// • a handleVisible Toggle function
//   • should switch isVisible from true to false OR from false to true 
// • <div> that shows the title of the product
// • <button> that says "toggle description" that will call handle Visible Toggle when it is clicked
// • <div> that shows the description AND IS CONDITIONALLY RENDERED BASED ON THE isVisible state.

import React, { useState } from 'react'
import './index.css'
const ProductsDetailsToggle = ({productDetails}) => {
const [isVisible, setIsVisible] = useState(true)

let handleClick = () =>{
    setIsVisible(!isVisible)
}

  return (
    <>
        <div>{productDetails.title}</div>
        <div className={`${isVisible ? 'hide' : '' }`}>{productDetails.description}</div>
        <button onClick={handleClick}>Toggle Description</button>
    </>
    
  )
}

export default ProductsDetailsToggle
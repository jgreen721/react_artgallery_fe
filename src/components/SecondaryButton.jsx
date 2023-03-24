import React from 'react'
import { arrowLeft } from '../const'
import "./Components.css"

const SecondaryButton = ({handleClick}) => {
  return (
    <button onClick={handleClick}>
         <div className="arrow-div tan-hover">
           <img src={arrowLeft} alt="arrow-icon" />
       </div>
       <div className="btn-text black-hover">Back to Home</div>
      
    </button>
  )
}

export default SecondaryButton
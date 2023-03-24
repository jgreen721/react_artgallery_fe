import React from 'react'
import { arrowRight } from '../const'
import "./Components.css";


const PrimaryButton = ({handleClick}) => {
  return (
    <button className="btn" onClick={handleClick}>
        
       <div className="btn-text black-hover">Location</div>
       <div className="arrow-div tan-hover">
           <img src={arrowRight} alt="arrow-icon" />
       </div>
    </button>
  )
}

export default PrimaryButton
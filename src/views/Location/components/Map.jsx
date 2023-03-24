import React from 'react'
import { SecondaryButton } from '../../../components'
import "../Location.css"

const Map = ({setLocation}) => {
  return (
    <div className="map-container">   
        <picture>
            <source media="(min-width:650px)" srcSet="assets/desktop/image-map.png"/>
            <source media="(min-width:465px)" srcSet="assets/tablet/image-map.png"/>
            <img className="map-img" src="assets/mobile/image-map.png" alt="img"/>
        </picture>
        <div className="button-div">
            <SecondaryButton handleClick={()=>setLocation(false)}/>
        </div>
        
    </div>
  )
}

export default Map
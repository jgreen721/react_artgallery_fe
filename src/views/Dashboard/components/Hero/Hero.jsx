import React, {useRef} from 'react'
import "./Hero.css"
import { darkLogoIcon, lightLogoIcon } from '../../../../const'
import { PrimaryButton } from '../../../../components'
import { useObserver } from '../../../../../hooks/useObserver'

const Hero = ({location,setLocation}) => {
  const heroRef = useRef();
  const {inView} = useObserver(heroRef)
  return (
    <header ref={heroRef} className="hero">
        <div style={{"--i":".25s"}} className="black-col">
            <div className={inView ? "hero-light-logo position-light-logo" : "hero-light-logo"}>
                <img className="hero-light-icon" src={lightLogoIcon} alt="logo" />
            </div>
       </div>
   

     
    <div className="hero-img-col">
    <div className={inView ? "hero-dark-logo position-dark-logo" : "hero-dark-logo"}>
                <img className="hero-dark-icon" src={darkLogoIcon} alt="logo" />
       </div>
         <picture>
      <source media="(min-width:1050px)" srcSet="./assets/desktop/image-hero.jpg" />
      <source media="(min-width:650px)" srcSet="./assets/tablet/image-hero.jpg" />
      <img className="hero-img" src="./assets/mobile/image-hero.jpg" alt="img" />
    </picture>
   </div>
   <div className="hero-col">
       <div className="hero-content-card">
       <div className="tablet-hero-dark-logo">
                <img className="tablet-hero-dark-icon" src={darkLogoIcon} alt="logo" />
       </div>
           <p className="lightgray">
           The arts in the collection of the Modern Art Gallery all
    started from a spark of inspiration. Will these pieces inspire you? Visit us
    and find out.
           </p>
           <PrimaryButton handleClick={()=>setLocation(true)}/>
       </div>
   </div>
    </header>
  )
}

export default Hero
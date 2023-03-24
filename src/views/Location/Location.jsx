import React from 'react'
import { Footer } from '../../components'
import {Section,Map} from "./components"

const Location = ({setLocation}) => {
  return (
    <div>
      <Map setLocation={setLocation}/>
      <Section/>
      <Footer theme="location"/>
    </div>
  )
}

export default Location
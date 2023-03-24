import React from 'react'
import {Footer,} from "../../components"
import {Hero,Gallery} from "./components"


const Dashboard = ({setLocation}) => {
  return (
    <div>
       <Hero setLocation={setLocation}/>
       <Gallery/>

      <Footer theme="dashboard"/> 
    </div>
  )
}

export default Dashboard
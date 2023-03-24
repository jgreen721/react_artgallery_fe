import {useState} from "react"
import {Dashboard, Location} from "./views"
import {PrimaryButton, SecondaryButton} from "./components"
import './App.css'

function App() {
  const [location,setLocation] = useState(false)

  return (
    <div className="app">
      {location ? <Location setLocation={setLocation}/> : <Dashboard setLocation={setLocation} /> }
 
    </div>
  )
}

export default App

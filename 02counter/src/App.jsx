import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  //const [variable, setVariable] = useState(initialValue);
  // variable: Stores the current value.
  // setVariable: Updates the value.it is a function
  // initialValue: The starting value.

  let [counter, setCounter] = useState(15)
  
  //let counter = 5 // yeh variable update hoga but kabhi bhi ui me reflect nhi karega

  const addValue = () => {
    //console.log("value added", Math.random()) just for checking ...is it working fine or not
    //console.log("value added", counter)yeh thoda picche rahega ek number se reason not needed....
    counter = counter + 1
    setCounter(counter)
  }

  const removeValue = () => {
    setCounter(counter-1);
  }

  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick = {addValue}>Add Value{counter}</button>
      <br />
      <button onClick = {removeValue}>Remove value{counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App

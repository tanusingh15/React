import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "Tanu",
    age: 21
  }
  let newArr = [1, 2, 3]
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      {/* <Card channel="chaiaurcode" someObj={myObj}/>  */}
      <Card username="chaiaurcode" btnText = "click me"/>
      <Card username="tanu"/>
      {/* here if we dont give btntext then it will take bydefalt walue which we had passed in the component props value. */}
    </>
  )
}

export default App

import React, { useState, useCallback } from 'react'
import './App.css'
import ChildComponent from './ChildComponent'

function App() {
  const [count, setCount] = useState(0)
  const [counter2, setCounter2] = useState([])

  const increment = () => {
    setCount(prev => prev + 1)
    console.log("Parent fun call")
  }

  const callBack = useCallback(() => {
    console.log("Child Fun Call..")
  }, counter2)

  return (
    <>
      <div className="mainContainer">
        <h1>useCallback Hooks</h1>
        <div style={{ display: 'flex' }}>
          <button onClick={increment}>INC</button>
          <h1>{count}</h1>
        </div>
        <ChildComponent counter2={counter2} fun={callBack}/>
      </div>
    </>
  )
}

export default App

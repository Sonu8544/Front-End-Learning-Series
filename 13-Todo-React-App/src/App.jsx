import { useState } from 'react'
import ListItem from './components/ListItem';
import './App.css'

function App() {
  const [inputVal, setInputVal] = useState('');

  const handleInput = (e) => {
    setInputVal(e.target.value)
  }

  const addTodo = () => {
    console.log(inputVal)
    setInputVal('')
  }


  return (
    <>
      <div className='max-w-[500px] mx-auto shadow-lg'>
        <div className=" bg-gray-200">
          <h1 className='text-[30px] font-medium text-center' >Todo List!</h1>
          <div className='flex justify-center my-5' >
            <input onChange={handleInput} className='text-black outline-none pl-2 py-3 border-1 border-solid border-black ' type="text" placeholder='List Todo Here' />
            <button onClick={addTodo} className='shadow-lg px-5'>Add</button>
          </div>
        </div>
        <div className='bg-gray-100 flex justify-center flex-col gap-2 ml-10'>
          <ListItem />
          <ListItem />
          <ListItem />
        </div>
      </div>
    </>
  )
}

export default App

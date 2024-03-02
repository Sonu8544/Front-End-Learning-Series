import { useMemo, useState } from 'react'
import './App.css'

function App() {
  const [inc, setInc] = useState(0)
  const [dec, setDec] = useState(0)

  const reactMemo = useMemo(function mul() {
    console.log("mul function re-rander...")
    return inc * 5;
  }, [inc])

  return (
    <>
      <div className='flex justify-center items-center flex-col shadow-lg max-w-[500px] mx-auto' >
        <h1 className='text-[3rem] text-black text-center' >useMemo</h1>
        <div className='flex '>
          <button onClick={() => setInc(prev => prev + 1)} type="button" className="text-white bg-black rounded-lg px-5 py-2.5 me-2 mb-2">INC</button>
          <h1 className='text-[1.4rem] text-black' > {inc} </h1>
        </div>
        <div className='flex '>
          <button onClick={() => setDec(prev => prev - 1)} type="button" className="text-white bg-black rounded-lg px-5 py-2.5 me-2 mb-2">DEC</button>
          <h1 className='text-[1.4rem] text-black' > {dec} </h1>
        </div>
        <div className='flex '>
          <button type="button" className="text-white bg-black rounded-lg px-5 py-2.5 me-2 mb-2">Multiplied  Value</button>
          <h1 className='text-[1.4rem] text-black' > {reactMemo} </h1>
        </div>
      </div>

    </>
  )
}

export default App

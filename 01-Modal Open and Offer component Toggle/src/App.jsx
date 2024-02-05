import '../src/component/app.css'
import { useState } from 'react'
import OfferPage from './component/OfferPage'

const App = () => {
  const [isShow, setIsShow] = useState(false)
  const [isOfferAccepted, setIsOfferAccepter] = useState(false)

  const handleShow = () => {
    setIsShow(true)
    console.log(isShow);
  }

  const handleClose = () => {
    setIsShow(false)
  }

  const handleOfferAccepted = () => {
    setIsOfferAccepter(true)
    setIsShow(false)

  }

  return (
    <>
      <div className="w-[100vw] h-[100vh] bg-slate-200 font-sans text-[30px] flex items-center justify-center ">
        {!isOfferAccepted &&
          <div className="mainBox border border-solid border-y-2 w-[300px] h-[300px] bg-slate-600 flex justify-center items-center p-10 flex-col gap-7 ring-4">
            <h1 className='text-white' >Click Button!<Button:b></Button:b></h1>
            <button onClick={handleShow} className='border-2 ring-2 text-white hover:text-black border-solid px-6 py-1 border-blue-500' >Button</button>
          </div>
        }
        {isOfferAccepted &&
          <div> <h1>Offer Accepted! </h1> </div>
        }
        {isShow && <OfferPage handleClose={handleClose} handleOfferAccepted={handleOfferAccepted} />}

      </div>
    </>
  )
}

export default App

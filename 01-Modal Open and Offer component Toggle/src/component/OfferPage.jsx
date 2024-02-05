import React from 'react'
import '../component/app.css'

const OfferPage = ({ handleClose, handleOfferAccepted }) => {

    const handleOutSideClick = (e) => {
        if (e.target.id === 'modal') {
            handleClose()
        }
        console.log(e.target.id)
    }

    return (
        <div onClick={handleOutSideClick} id='modal' className='modal fixed bg-gray-300 flex flex-col p-5 justify-around '>
            <div className="modalContainer">
                <button onClick={handleClose} className='cancleButton text-blue-800' >x</button>
                <p className='text-[20px] mb-10' >Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                <button onClick={handleOfferAccepted} className='border-2 ring-2 text-black hover:text-blue-800 border-solid px-6 py-1 border-blue-500' >offer Button</button>
            </div>
        </div>
    )
}

export default OfferPage

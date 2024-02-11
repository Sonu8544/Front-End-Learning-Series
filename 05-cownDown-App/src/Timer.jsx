import React, { useEffect, useState } from 'react'
import './App'

const Timer = ({ duration }) => {
    const [time, setTime] = useState(duration)

    useEffect(() => {
        setTimeout(() => {
            setTime(time - 1000);
        }, 1000)
    }, [time])

    const handleTime = (miliSecond) => {
        const totalSecond = parseInt(Math.floor(miliSecond / 1000));
        const totalMinute = parseInt(Math.floor(totalSecond / 60));
        const totalHour = parseInt(Math.floor(totalMinute / 60));
        const days = parseInt(Math.floor(totalHour / 24));

        const seconds = parseInt(totalSecond % 60);
        const minutes = parseInt(totalMinute % 60);
        const hours = parseInt(totalHour % 24);

        return `${days}: ${hours} : ${minutes} : ${seconds}`
    }




    return (
        <>
            <div className="mainContainer">
                <h1 className='border-2 p-6' >{handleTime(time)} </h1>
            </div>
        </>
    )
}

export default Timer

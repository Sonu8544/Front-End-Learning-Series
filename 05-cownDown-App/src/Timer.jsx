import React, { useEffect, useState } from 'react'
import './App.css'

const Timer = ({ duration }) => {
    const [time, setTime] = useState(duration)

    useEffect(() => {
        const timer = setTimeout(() => {
            setTime(time - 1000);
        }, 1000)

        return () => clearTimeout(timer);
    }, [time])

    const handleTime = (miliSecond) => {
        const totalSecond = parseInt(Math.floor(miliSecond / 1000));
        const totalMinute = parseInt(Math.floor(totalSecond / 60));
        const totalHour = parseInt(Math.floor(totalMinute / 60));
        const days = parseInt(Math.floor(totalHour / 24));

        const seconds = parseInt(totalSecond % 60);
        const minutes = parseInt(totalMinute % 60);
        const hours = parseInt(totalHour % 24);

        // return `${days}: ${hours} : ${minutes} : ${seconds}`
        return {
            days,
            hours,
            minutes,
            seconds
        }
    }

    const { days, hours, minutes, seconds } = handleTime(time)

    return (
        <>
            <h2 className='text-[30px] text-center mt-6' >Countdown Timer</h2>
            <div className="mainContainer">
                <div className="timerBox">
                    <div className="timeBox">
                        <p>D</p>
                        <h1> {days} </h1>
                    </div>
                    <div className="timeBox">
                        <p>H</p>
                        <h1> {hours} </h1>
                    </div>
                    <div className="timeBox">
                        <p>M</p>
                        <h1> {minutes} </h1>
                    </div>
                    <div className="timeBox">
                        <p>S</p>
                        <h1> {seconds} </h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Timer

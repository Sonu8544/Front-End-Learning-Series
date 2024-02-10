import React, { useState, useRef } from 'react';

const Form = () => {
    const [principal, setPrincipal] = useState('');
    const [intrestRate, setInterestRate] = useState('');
    const [time, setTime] = useState('');
    const [resultt, setResult] = useState("")

    const principalRef = useRef();
    const interestRef = useRef();
    const timeRef = useRef();

    const handleSubmitData = () => {
        setPrincipal(principalRef.current.value);
        setInterestRate(interestRef.current.value);
        setTime(timeRef.current.value);
    };

    const handleSubmit = () => {
        const P = parseFloat(principal);
        const r = parseFloat(intrestRate) / 100; // Convert interest rate to decimal
        const n = parseFloat(time);

        const result = P * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
        setResult(result)

    };

    return (
        <>
            <form className="max-w-sm mx-auto mt-10" onChange={handleSubmitData}>
                <h1 className='m-10 text-center text-[20px] text-blue-800' > {resultt &&
                    <p> {resultt} </p>
                } </h1>
                <div className="mb-5">
                    <label htmlFor="principal" className="block mb-2 text-lg font-medium text-black">Principal loan amount</label>
                    <input ref={principalRef} value={principal} type="number" id="principal" className="border-2 border-black text-black text-sm  block w-full p-2.5 placeholder-black" placeholder="5000" required />
                </div>
                <div className="mb-5">
                    <label htmlFor="intrest" className="block mb-2 text-lg font-medium text-black">Interest rate</label>
                    <input ref={interestRef} value={intrestRate} type="number" id="intrest" className="border-2 border-black text-black text-sm  block w-full p-2.5 placeholder-black" placeholder="9%" required />
                </div>
                <div className="mb-5">
                    <label htmlFor="length" className="block mb-2 text-lg font-medium text-black">Length of loan</label>
                    <input ref={timeRef} value={time} type="number" id="length" className="border-2 border-black text-black text-sm  block w-full p-2.5 placeholder-black" placeholder="12" required />
                </div>
                <button onClick={handleSubmit} type="button" className="text-black font-medium border-2 border-solid border-black px-5 py-2">calculate</button>
            </form>
        </>
    );
};

export default Form;

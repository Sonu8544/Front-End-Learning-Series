import React, { useState } from 'react';

const Faq = () => {
    const [activeQuestion, setActiveQuestion] = useState(1);

    const questions = [
        {
            id: 1,
          question: "How many bones does a cat have?",
          ans: "A cat has 230 bones - 6 more than a human",
        },
        {
            id: 2,
          question: "How much do cats sleep?",
          ans: "The average cat sleeps 12-16 hours per day",
        },
        {
            id: 3,
          question: "How long do cats live",
          ans: "Outdoor cats live 5 years on average. Indoor\ncats live 15 years on average.",
        },
      ]

    const handleToggle = (questionId) => {
        setActiveQuestion(activeQuestion === questionId ? null : questionId);
    };

    return (
        <>
            {
                questions.map((item) => {
                    return (
                        <div key={item.id} className='flex flex-col max-w-[500px] mx-auto' >
                            <div onClick={() => handleToggle(item.id)} className="question flex cursor-pointer items-center border-[1px] border-solid border-black shadow-lg bg-gray-100 mb-2">
                                <button type="button" className="text-black rounded-sm text-sm px-4 py-2 mr-4 shadow-lg bg-gray-300 ">
                                    {activeQuestion === item.id ? '-' : '+'}
                                </button>
                                <h2 className='text-[20px]' > {item.question} </h2>
                            </div>
                            {activeQuestion === item.id &&
                                <div className="ans pl-8">
                                    <p> {item.ans} </p>
                                </div>
                            }
                        </div>
                    )
                })
            }
        </>
    );
};

export default Faq;

import React from 'react';

export default function Buttons({ categories, filterFunction, activeCategory }) {
  return (
    <div className='flex justify-center gap-2 my-10'>
      {categories.map((category, index) => (
        <button
          key={index}
          className={`inline-block border-2 border-black px-12 py-3 text-sm font-medium text-black hover:bg-black hover:text-white focus:outline-none focus:ring uppercase text-[16px] ${activeCategory === category ? 'bg-black text-white' : ''}`}
          onClick={() => filterFunction(category)}
        >
          <p>{category}</p>
        </button>
      ))}
    </div>
  );
}

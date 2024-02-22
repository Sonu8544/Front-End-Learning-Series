import React, { useEffect, useState } from 'react'

export default function App() {
  const [page, setPage] = useState(1)
  const [data, setData] = useState([])

  const handlePage = (e) => {
    setPage(e.target.value);
  }

  const handleSubmit = () => {
    console.log("Submit Data...")
  }

  const fetchData = async () => {
    try {
      const res = await fetch(`https://fakestoreapi.com/products/${page}`);
      const result = await res.json();
      setData(result);
      console.log(result)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className='flex justify-center mt-10'>
      <div>
        <input type="text"
          placeholder='Enter Id'
          value={value}
          onChange={handlePage}
          className='border-2 border-solid border-black'
        />
        <button type='submit' onClick={handleSubmit}>submit</button>
      </div>
    </div>
  )
}

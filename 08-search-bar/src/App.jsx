import { useRef, useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [printData, setPrintData] = useState([]);
  const inputValue = useRef();

  const API = "https://fakestoreapi.com/products";

  const fetchData = async () => {
    try {
      const response = await fetch(API);
      const jsondata = await response.json();
      setData(jsondata);
    } catch (error) {
      console.error("Error Fetching Data", error);
    }
  }
  
  useEffect(() => {
    fetchData();
  }, []); 

  useEffect(() => {
    if(input.length > 2) {
      const filteredData = data.filter(item => item.category.toLowerCase().includes(input.toLowerCase()));
      setPrintData(filteredData);
    } else {
      setPrintData([]); 
    }
  }, [input, data]); 

  // Input value
  const handleInputValue = () => {
    setInput(inputValue.current.value);
  }

  return (
    <>
      <div className="pageWidth bg-gray-700 w-full h-[100vh] flex justify-center pt-[100px]">
        <div className="mainContainer w-[400px]">
          <div className="inputBox flex justify-center bg-gray-800 rounded-md">
            <input onChange={handleInputValue} ref={inputValue} className='w-[90%] py-3 px-2 border-4 rounded-lg text-black font-sans font-medium border-solid border-gray-700 my-6' type="text" placeholder='search here' />
          </div>
          <div className="mx-auto suggetions px-[5%] mt-2 bg-white py-4 max-h-[300px] overflow-y-scroll">
            {printData.map((item, index) => (
              <p key={index} className='text-black shadow-lg text-[18px] font-medium py-2'>{item.category}</p>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default App;

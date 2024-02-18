import { useRef, useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const inputValueRef = useRef();

  const API_ENDPOINT = "https://fakestoreapi.com/products";

  const fetchData = async () => {
    try {
      const response = await fetch(API_ENDPOINT);
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error Fetching Data", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (input.length > 2) {
      const filtered = data.filter(item => item.category.toLowerCase().includes(input.toLowerCase()));
      setFilteredData(filtered);
    } else {
      setFilteredData([]);
    }
  }, [input, data]);

  const handleInputChange = () => {
    setInput(inputValueRef.current.value);
  }

  return (
    <>
      <div className="pageWidth bg-gray-700 w-full h-[100vh] flex justify-center pt-[100px]">
        <div className="title">
        <h1 className='text-white text-[30px] font-bold mb-6 text-center' > <span>"</span> Autocomplete Search Bar <span>"</span></h1>
          <div className="mainContainer w-[400px]">
            <div className="inputBox flex justify-center bg-gray-800 rounded-md">
              <input onChange={handleInputChange} ref={inputValueRef} className='w-[90%] py-3 px-2 border-4 rounded-lg text-black font-sans font-medium border-solid border-gray-700 my-6' type="text" placeholder='search here' />
            </div>
            <div className="mx-auto suggestions px-[5%] mt-2 bg-white py-4 max-h-[300px] overflow-y-scroll">
              {filteredData.map((item, index) => (
                <p key={index} className='text-black text-[18px] font-medium py-2 hover:bg-[#d9d9d9] cursor-pointer'>{item.category}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;

import { useEffect } from 'react';
import './App.css'
import { useState } from 'react';


function App() {
  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(0)

  const fetchImage = async () => {
    const url = "https://www.reddit.com/r/aww/top/.json?t=all";
    const response = await fetch(url)
    const result = await response.json();
    const image = result.data.children;

    const listImages = image.filter((item) => item.data.url_overridden_by_dest.includes(".jpg"))
      .map((item) => item.data.url_overridden_by_dest);
    setImages(listImages)
  }

  useEffect(() => {
    fetchImage();
  }, [])

  // Image Slide Logic
  const handleClick = (dirretion) => {
    console.log("Current Index", index)
    const lastIndex = images.length - 1;

    if (dirretion === 'left') {
      if (index === 0) {
        setIndex(lastIndex)
      } else {
        setIndex((prev) => prev - 1)
      }
    } else if (dirretion === 'right') {
      if (index === lastIndex) {
        setIndex(0)
      } else {
        setIndex((prev) => prev + 1)
      }
    }

  }

  return (
    <>
      <div className="mainContainer  ">
        <button onClick={() => handleClick('left')} className='p-2 bg-white text-black font-bold'> {"<"} </button>
        <img src={images[index]} alt="image" />
        <button onClick={() => handleClick('right')} className='p-2 right-0 bg-white text-black font-bold'> {">"} </button>
      </div>
    </>
  )
}

export default App

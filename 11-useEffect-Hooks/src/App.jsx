import React, { useEffect, useState } from 'react';
import ProductCard from './component/ProductCard';
import Buttons from './component/Buttons'; 

export default function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]); 
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState('ALL');

  const API = "https://fakestoreapi.com/products";

  async function fetchData() {
    const response = await fetch(API);
    const result = await response.json();
    setData(result);
    setFilteredData(result); 
  }

  const filterProducts = (productCat) => {
    if (productCat === 'ALL') {
      setFilteredData(data); 
    } else {
      const filteredProducts = data.filter((product) => product.category === productCat);
      setFilteredData(filteredProducts); 
    }
    setActiveCategory(productCat); 
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const categories = [...new Set(data.map(item => item.category))];
    setCategories(categories);
  }, [data]);

  return (
    <>
      <div className='flex items-center justify-center'>
        <h1 className='text-center text-[30px] font-medium border-4 border-solid border-blue-600 text-blue-600 my-2 py-3 px-20 uppercase'>products filter in react js...</h1>
      </div>
      <Buttons filterFunction={filterProducts} categories={['ALL', ...categories]} activeCategory={activeCategory} />
      <ProductCard data={filteredData} />
    </>
  );
}

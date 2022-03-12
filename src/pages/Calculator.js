import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router';

const Calculator = () => {

  const apiKey = " 544OZZSH6925";

  const [calculator, setCalculator] = useState({
    from: "",
    to: "",
    weight: ""
  })

    const { from, to, weight } = calculator;

  const onChange = (e) => {
    setCalculator({ ...calculator, [e.target.id]: e.target.value})
  }

  const onSubmit = (e) =>{
    e.preventDefault();
    console.log("SUCCESS!")
  }

  const getCalculator = async() => {
    const res = await fetch(
      `http://secure.shippingapis.com/?apikey=${apiKey}`
      );
    const data =await res.json();
    setCalculator(data);
    
  };

  useEffect(() => {
    getCalculator("");
  }, []);
  


  return (
    <div className="flex flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
        <div className="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl dark:text-white">
            Calculator
        </div>
      <div>
        <form onSubmit={onSubmit}>
          <input 
            type="text"
            id="text"
            placeholder="From: Select a country"
            value="country"
            onChange={onChange}
          >
          </input>
          <input
            type="text"
            id="text"
            placeholder="To: Select a country"
            value="country"
            onChange={onChange}>
          </input>
          <input
            type="text"
            id="text"
            placeholder="Weight "
            value="weight"
            onChange={onChange}>
              lb
          </input>
          <button
            type="submit" 
            className="btn btn-primary"
            value="submit"
            // onClick=""
          >
          Get Quote
          </button>
        </form>
      </div>
    </div>
  )
}

export default Calculator
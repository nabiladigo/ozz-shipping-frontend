// import { useEffect, useState } from "react";
// import { Link } from 'react-router-dom';

import { Link } from "react-router-dom"

const Home = (props) => {

  // const [home, setHome] = useState();

  // const getHomeData = async() =>{
  //     const res = await
  // }
  return (
    <div>
      <h1> this is nonesense</h1>
      <div>
        </div>
          <h1>How to calculate shipping costs</h1>
          <p>Shipping charges are calculated based on the distance your package needs to travel and the volumetric weight. The volumetric weight tells the courier how much space your parcel will occupy on a van or aircraft.
            The good news is, you don’t need to know the volumetric weight of your parcel to get a shipping quote. Simply enter the length, width and height of your package into our shipping calculator and in seconds we’ll show you shipping quotes from multiple couriers. It's that easy!
          </p>
          <Link to="/calculator" >
            <button>Calculate your shipping</button>
          </Link>
          <Link to="/signup" >
            <button> Sign up now</button>
          </Link>
          <div>
        <p>
          <h1>Got a question?</h1>
          To ask a question about an order click the ‘Discuss this order’ link from your orders page. You’ll also find answers to many common questions on our FAQs page.
        </p>
        <Link to="/faq">
            <button>Got a question</button>
        </Link>
      </div>
        </div>
  )
}

export default Home
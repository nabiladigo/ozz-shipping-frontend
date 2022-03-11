import { Link } from 'react-router-dom';
// import { useState } from 'react';
// import Calculator from './Calculator';
function Package(props) {
    // const [newForm, setNewForm] = useState({
    //     title:"",
    //     image:"",
    //     price:"",
    //     weight:"",
    //     trackingNumber: "",
    //     user:"",
    // })
  
    //   const handleChange = event => {
    //   setNewForm({ ...newForm, [event.target.name]: event.target.value })
    // }
    // const handleSubmit = event => {
    //   event.preventDefault()
    //   props.createPackage(newForm)
    //   setNewForm({
    //       title:"",
    //       image:"",
    //       price:"",
    //       weight:"",
    //       trackingNumber: "",
    //       user:"",
    //   })
    // }
  return(
    <div>
      <div>
        <h1>Shipping Calculator</h1>
        <p>Get a shipping quote in seconds with Parcel Monkey’s shipping calculator.
          Choose ‘Quick quote’ for the quickest shipping estimate or ‘Full quote’ for the most accurate price.
        </p>
        <Link to="/calculator"></Link>
      </div>
          <h1>How to calculate shipping costs</h1>
          <p>Shipping charges are calculated based on the distance your package needs to travel and the volumetric weight. The volumetric weight tells the courier how much space your parcel will occupy on a van or aircraft.
            The good news is, you don’t need to know the volumetric weight of your parcel to get a shipping quote. Simply enter the length, width and height of your package into our shipping calculator and in seconds we’ll show you shipping quotes from multiple couriers. It's that easy!
          </p>
          <button>Calculate your shipping</button>
    </div>
  )
  // const loaded = () => {
  //     return props.package.map(package => (
  //         <div key={package._id} className="package">
  //             <Link to={`/packages/${package._id}`}>
  //                 <h1>{package.title}</h1>
  //             </Link>
  //             <img src={package.image} alt={package.title} />
  //             <h3>{package.title}</h3>

  //         </div>
  //     ))
  // }
  
  // const loading = () => {
  //   return <h1>Loading...</h1>
  // }
  // return (
  //   <section>
  //     <form onSubmit={handleSubmit}>
  //       <input
  //         type="text"
  //         value={newForm.name}
  //         name="name"
  //         placeholder="name"
  //         onChange={handleChange}
  //       />
  //       <input
  //         type="text"
  //         value={newForm.image}
  //         name="image"
  //         placeholder="image URL"
  //         onChange={handleChange}
  //       />
  //       <input
  //         type="text"
  //         value={newForm.title}
  //         name="title"
  //         placeholder="title"
  //         onChange={handleChange}
  //       />
  //       <input type="submit" value="Create Person" />
  //     </form>
  //     {props.people ? loaded() : loading()}
  //   </section>
  // )
}

export default  Package;
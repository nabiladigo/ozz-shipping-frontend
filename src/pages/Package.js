import { Link } from 'react-router-dom';
import { useState } from 'react';

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
    <div>Package page</div>
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
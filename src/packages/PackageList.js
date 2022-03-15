
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function PackageList() {

    const [ packages, setPackages] = useState([]);
    const id = useParams();

    const getPackages = async() => {
//         fetch('http://bar.com/data.json', { 
//     mode: 'no-cors' // 'cors' by default
// }).then(function(response) {
//     // Do something with response
// });
        const response = await fetch(`http://localhost:4000/packages/${id}`);
        if(!response.ok){
            const message = `An error occurded: ${response.statusText}`;
            window.alert(message);
            return;
        }

        const orders = await response.json();
        console.log(orders)
        setPackages(orders);
    }
    useEffect(()=>{

        getPackages();

        return;
    }, []);

    async function deletePackage(id) {
        await fetch(`http://localhost:4000/packages/${id}`, {
            method: "DELETE"
        });

        // adding new package

        const newPackages = packages.filter((ele)=> ele._id !== id);
        console.log(newPackages)
            setPackages(newPackages)
            return;
    }
    // use the loding function
    const  loaded = () => {
      return (
      
      // packages.map((ele) =>  
                  <div 
                //   key={packages.id}
                  >
                    <h1>orderlist</h1>
                      <img style={{ width:"160px", height:"160px", borderRadius:"80px"}} src={packages.image} alt={packages.title}/>
                      <h2>{packages.title}</h2>
                      <Link className="btn btn-link" to={`/packages/edit/${packages._id}`}><h1>{packages.title}</h1>Edit</Link>
                      <button className="btn btn-link"
                          onClick={()=> {
                              // packages.deletePackage(packages._id);
                          }}>
                          Cancel
                      </button>
                  </div>
              )

    }
    const loading = () => {
    return <h1>Loading...</h1>
  }
  return packages ? loaded() : loading()
        // })
}
export default PackageList;


// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// function PackageList(props) {
//     const id = props.match.params.id
//   const packages = props.packages
//   const order = packages.findOne(p => p._id === id)
//   const [editForm, setEditForm] = useState(order)

//   const handleChange = event => {
//     setEditForm({ ...editForm, [event.target.name]: event.target.value })
//   }

//   const handleSubmit = event => {
//     event.preventDefault()
//     props.updatePeople(editForm)
//     props.history.push("/")
//   }

//   const removeOrder = () => {
//     props.deletePeople(order._id)
//     props.history.push("/")
//   }

//     // const [ packages, setPackages] = useState([]);

//     // useEffect(()=>{
//     //     const getPackages = async() => {
//     //         const response = await fetch(`http://localhost:4000/packages/${id}`);
//     //         if(!response.ok){
//     //             const message = `An error occurded: ${response.statusText}`;
//     //             window.alert(message);
//     //             return;
//     //         }

//     //         const packages = await response.json();
//     //         setPackages(packages);
//     //     }

//     //     getPackages();

//     //     return;
//     // }, []);

//     // async function deletePackage(id) {
//     //     await fetch(`http://localhost:4000/packages/${id}`, {
//     //         method: "DELETE"
//     //     });

//     //     // adding new package

//     //     const newPackages = packages.filter((ele)=> ele._id !== id);
//     //         setPackages(newPackages)
//     //         return;
//     // }
//       //  return packages.map((ele) => {
//             return (
//                     <div>
//                         <img style={{ width:"160px", height:"160px", borderRadius:"80px"}} src={order.image} alt={order.title}/>
//                         <h2>{order.title}</h2>
//                         <Link className="btn btn-link" to={`/packages/edit/${order._id}`}>Edit</Link>
//                         <button className="btn btn-link" id="delete"
//                             onClick={removeOrder}
//                              // ()=> order.deletePackage(order._id);
//                             // }}
//                             >
//                             Cancel
//                         </button>
//                     </div>
//                 );
//         // })
// }
// export default PackageList;
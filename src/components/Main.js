// import { useEffect, useState } from 'react';
// import { Routes, Route } from './react-router-dom';
// import Package from '../pages/Package';
// import Show from '../pages/Show';
// import Calculator from '../pages/Calculator';



// function Main (props) {
//     const [package, setPackage] = useState(null)

//     const URL = "http://localhost:4000/packages";

//     const getPackage = async () =>{
//         const responce = await fetch(URL)
//         console.log(responce)
//         const data = await responce.json()    
//         console.log(data);
//             setPackage(data)
//     }

//     const createPackage = async package =>{
//         await fetch(URL, {
//             method: "post",
//             header: {
//                 "Content-Type" :"application/json",
//             },
//             body: JSON.stringify(package),
//         })
//         getPackage()
//     }

//     const updatePackage = async (package, id) => {
//           await fetch(URL + id, {
//             method: "put",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(package),
//         })
//         getPeople()
//     }

//      const deletePackage = async id => {
//         await fetch(URL + id, {
//             method: "delete",
//             })
//         getPeople()
//     }
//     useEffect(() => getPackage(), [])

//   return (
//     <main>
//         <Routes>
//             <Route  path= '/'>
//                 <Package package={package} createPackage={createPackage} />
//             </Route>
//             <Route path= '/packages/:id' 
//                 render={rp =>(
//                     <Show 
//                         package={package}
//                         updatePackage={updatePackage}
//                         deletePackage={deletePackage}
//                         {...rp}
//                     />
//                 )}
//             />
//         </Routes>
//     </main>
//   )
// }

// export default Main;